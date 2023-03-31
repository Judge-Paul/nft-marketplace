// import React from "react";
// import { motion } from "framer-motion";
// import { SlRocket } from "react-icons/sl";
// import Animakid from "../assets/artists-avatars/Animakid.png"
// import CreatorCard from "./cards/CreatorCard";

// export default function Creators() {
//     return (
//         <div className="mt-20 mb-20 lg:mb-36 font-workSans text-white">
//             <div className="flex justify-between px-8 sm:px-32">
//                 <div>
//                     <h4 className="text-3xl lg:text-[2.5rem] font-bold">
//                         Top Creators
//                     </h4>
//                     <p className="text-lg lg:text-[1.35rem] mt-5 font-medium">
//                         Checkout Top Rated Creators On the NFT Marketplace
//                     </p>
//                 </div>
//                 <motion.button
//                     className="hidden md:flex bg-transparent border-2 border-[#A259FF] text-xs xl:text-lg ml-auto h-full px-14 py-4 rounded-2xl font-semibold"
//                     whileHover={{ scale: 0.92 }}
//                 >
//                     <SlRocket className="mr-2 lg:text-lg text-[#A259FF]" size="20px" />
//                     View Rankings
//                 </motion.button>
//             </div>
//             <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7 mt-20 justify-items-center lg:px-32">
//                 <CreatorCard position={1} avatar={Animakid} name={"Animakid"} sales={34.53} />
//                 <CreatorCard position={2} avatar={Animakid} name={"Animakid"} sales={34.53} />
//                 <CreatorCard position={3} avatar={Animakid} name={"Animakid"} sales={34.53} />
//                 <CreatorCard position={4} avatar={Animakid} name={"Animakid"} sales={34.53} />
//                 <CreatorCard position={5} avatar={Animakid} name={"Animakid"} sales={34.53} />
//                 <CreatorCard position={6} avatar={Animakid} name={"Animakid"} sales={34.53} />
//                 <CreatorCard position={7} avatar={Animakid} name={"Animakid"} sales={34.53} />
//                 <CreatorCard position={8} avatar={Animakid} name={"Animakid"} sales={34.53} />
//                 <CreatorCard position={9} avatar={Animakid} name={"Animakid"} sales={34.53} />
//                 <CreatorCard position={10} avatar={Animakid} name={"Animakid"} sales={34.53} />
//                 <CreatorCard position={11} avatar={Animakid} name={"Animakid"} sales={34.53} />
//                 <CreatorCard position={12} avatar={Animakid} name={"Animakid"} sales={34.53} />
//                 <motion.button
//                     className="flex md:hidden bg-transparent border-2 border-[#A259FF] justify-center py-4 w-80 rounded-2xl font-semibold"
//                     whileHover={{ scale: 0.92 }}
//                 >
//                     <SlRocket className="mr-2 text-lg text-[#A259FF]" />
//                     View Rankings
//                 </motion.button>
//             </div>
//         </div>
//     )
// }

import React, { useState, useEffect } from "react";

export default function Creators() {
  const timePeriods = [
    { label: 'Past day', days: 1 },
    { label: 'Past week', days: 7 },
    { label: 'Past month', days: 30 },
  ];
  const now = new Date();
  const dateRanges = timePeriods.map((period) => ({
    label: period.label,
    occurred_after: new Date(now - period.days * 24 * 60 * 60 * 1000).toISOString(),
    occurred_before: now.toISOString(),
  }));

  async function getSalesDataForPeriod(collectionSlug, creatorAddress, occurredAfter, occurredBefore) {
    const endpoint = 'https://api.opensea.io/api/v1/events';
    const params = {
      event_type: 'successful',
      only_opensea: 'false',
      offset: 0,
      limit: 300,
      occurred_after: occurredAfter,
      occurred_before: occurredBefore,
      collection_slug: collectionSlug,
      account_address: creatorAddress,
    };
    const headers = {
      Accept: 'application/json',
      'X-API-KEY': 'YOUR_API_KEY',
    };
    const response = await fetch(`${endpoint}?${new URLSearchParams(params)}`, {
      method: 'GET',
      headers: headers,
    });
    const data = await response.json();
    return data;
  }
  
  async function getSalesDataForCreator(creatorAddress, collectionSlug) {
    const salesData = {};
    for (const period of dateRanges) {
      const data = await getSalesDataForPeriod(collectionSlug, creatorAddress, period.occurred_after, period.occurred_before);
      const totalSales = data.asset_events.reduce((total, event) => total + parseFloat(event.payment_token_amount), 0);
      salesData[period.label] = totalSales;
    }
    return salesData;
  }
  
  const creators = [
    { name: 'Creator 1', address: '0x123', collection: 'collection1' },
    { name: 'Creator 2', address: '0x456', collection: 'collection2' },
    { name: 'Creator 3', address: '0x789', collection: 'collection3' },
  ];
  
  const [ranking, setRanking] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const rankingData = await Promise.all(
        creators.map(async (creator) => {
          const salesData = await getSalesDataForCreator(creator.address, creator.collection);
          const totalSales = Object.values(salesData).reduce((total, sales) => total + sales, 0);
          return { ...creator, totalSales, salesData };
        })
      );
      const sortedRanking = rankingData.sort((a, b) => b.totalSales - a.totalSales);
      setRanking(sortedRanking);
    }
    fetchData();
  }, []);
  
  return (
    <div>
      <h2>Creator Ranking</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Avatar</th>
            {timePeriods.map((period) => (
              <th key={period.label}>{period.label}</th>
            ))}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((creator, index) => (
<tr key={creator.address}>
<td>{index + 1}</td>
<td>{creator.name}</td>
<td>
<img src={creator.avatar} alt={creator.name} />
</td>
{timePeriods.map((period) => (
<td key={period.label}>{creator.salesData[period.label]}</td>
))}
<td>{creator.totalSales}</td>
</tr>
))}
</tbody>
</table>
</div>
);
}
