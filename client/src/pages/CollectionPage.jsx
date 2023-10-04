import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import { RxGlobe, RxDiscordLogo, RxTwitterLogo } from "react-icons/rx";
import { useParams } from "react-router-dom";
import { DataContext } from "../store/DataContext";
import Spinner from "../components/Spinner";
import { formatNum } from "../libs/Functions";
import { Link } from "react-router-dom";
import { toast } from "sonner";

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  toast.message("Address copied!");
}

export default function CollectionPage() {
  const [selected, setSelected] = useState("");
  const [collectionData, setCollectionData] = useState(null);
  const { collectionsData } = useContext(DataContext);
  const { id } = useParams();

  useEffect(() => {
    setCollectionData(collectionsData?.filter((item) => item.slug === id));
  }, [id, collectionsData]);
  return (
    <>
      {collectionData ? (
        collectionData.map((collection) => {
          return (
            <div key={collection.id} className="text-white font-workSans">
              {collection.banner && (
                <div
                  className="bg-cover h-96 bg-center"
                  style={{ backgroundImage: `url(${collection.banner})` }}
                ></div>
              )}
              <div
                className={`px-8 sm:px-32 ${collection.banner ? "" : "mt-20"}`}
              >
                <a href={collection.externalUrl}>
                  <motion.img
                    whileHover={{ scale: 0.92 }}
                    src={collection.image}
                    className="border border-black mx-auto md:mx-0 rounded-3xl relative bottom-[3.5rem] w-28 h-28 cursor-pointer"
                  />
                </a>
                <div className="block lg:flex justify-between">
                  <h4 className="mt-5 text-3xl lg:text-[3rem] font-bold block truncate">
                    {collection.name}
                  </h4>
                  <div className="sm:flex gap-5">
                    <button
                      onClick={() => copyToClipboard(collection.id)}
                      className="mt-5 flex justify-center bg-[#A259FF] px-6 py-4 font-bold rounded-2xl w-full"
                    >
                      <BiCopy size="20px" className="my-auto mr-2" />
                      {collection.id.slice(0, 6) +
                        "..." +
                        collection.id.slice(-4)}
                    </button>
                    <button className="mt-5 flex justify-center border-2 border-[#A259FF] px-7 py-4 font-bold rounded-2xl w-full">
                      <AiOutlinePlus
                        size="22px"
                        className="my-auto mr-2 text-[#A259FF]"
                      />
                      Follow
                    </button>
                  </div>
                </div>
                <div className="mt-10">
                  <div className="flex place-items-center md:place-items-left">
                    <div className="mr-20">
                      <h4 className="font-spaceMono text-[1.5rem] lg:text-[1.9rem] font-black">
                        {formatNum(collection.volume.allTime)}
                      </h4>
                      <p className="text-[0.9rem] lg:text-[1.2rem]">
                        Total Sales (ETH)
                      </p>
                    </div>
                    <div className="mr-20">
                      <h4 className="font-spaceMono text-[1.5rem] lg:text-[1.9rem] font-black">
                        {collection.tokenCount}
                      </h4>
                      <p className="text-[0.9rem] lg:text-[1.2rem]">
                        Total NFTs
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <h4 className="font-spaceMono text-[#858584] text-2xl font-semibold">
                    Bio
                  </h4>
                  <p className="text-xl md:text-2xl font-medium mt-5">
                    {collection.description
                      ? collection.description
                      : "Nothing to see here."}
                  </p>
                  {collection.externalUrl &&
                    collection.discordUrl &&
                    collection.twitterUsername && (
                      <h4 className="font-spaceMono text-[#858584] text-2xl font-semibold mt-10">
                        Links
                      </h4>
                    )}
                  <div className="flex mt-3 mb-8 text-[#858584]">
                    {collection.externalUrl && (
                      <a target="_blank" href={collection.externalUrl}>
                        <RxGlobe size="40px" className="mr-5" />
                      </a>
                    )}
                    {collection.discordUrl && (
                      <a target="_blank" href={collection.discordUrl}>
                        <RxDiscordLogo size="40px" className="mr-5" />
                      </a>
                    )}
                    {collection.twitterUsername && (
                      <a
                        target="_blank"
                        href={
                          collection.twitterUsername
                            ? `https://www.twitter.com/${collection.twitterUsername}`
                            : null
                        }
                      >
                        <RxTwitterLogo size="40px" className="mr-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <Spinner />
      )}
    </>
  );
}
