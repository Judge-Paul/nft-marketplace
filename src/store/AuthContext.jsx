import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({
    NFTsData: [],
    setNFTsData: () => {},
    collectionsData: [],
    setCollectionsData: () => {},
    rankingsOneDay: [],
    setRankingsOneDay: () => {},
    rankingsSevenDays: [],
    setRankingsSevenDays: () => {},
    rankingsThirtyDays: [],
    setRankingsThirtyDays: () => {}
});

export default function AuthProvider(props) {
    const [NFTsData, setNFTsData] = useState([])
    const [collectionsData, setCollectionsData] = useState([])
    const [rankingsOneDay, setRankingsOneDay] = useState([])
    const [rankingsSevenDays, setRankingsSevenDays] = useState([])
    const [rankingsThirtyDays, setRankingsThirtyDays] = useState([])

    useEffect(() => {
        if (NFTsData.length === 0 && !localStorage.getItem('NFTsData')) {
          fetch('https://us-central1-nft-market-cdc31.cloudfunctions.net/api/tokens')
            .then(response => response.json())
            .then(data => {
              setNFTsData(data.tokens);
              localStorage.setItem('NFTsData', JSON.stringify(data.tokens));
            })
            .catch(error => console.error(error));
      
          fetch('https://us-central1-nft-market-cdc31.cloudfunctions.net/api/collections')
            .then(response => response.json())
            .then(data => {
              setCollectionsData(data.collections);
              localStorage.setItem('collectionsData', JSON.stringify(data.collections));
            })
            .catch(error => console.error(error));
      
          fetch('https://us-central1-nft-market-cdc31.cloudfunctions.net/api/collections-one-day')
            .then(response => response.json())
            .then(data => {
              setRankingsOneDay(data.collections);
              localStorage.setItem('rankingsOneDay', JSON.stringify(data.collections));
            })
            .catch(error => console.error(error));
      
          fetch('https://us-central1-nft-market-cdc31.cloudfunctions.net/api/collections-seven-days')
            .then(response => response.json())
            .then(data => {
              setRankingsSevenDays(data.collections);
              localStorage.setItem('rankingsSevenDays', JSON.stringify(data.collections));
            })
            .catch(error => console.error(error));
      
          fetch('https://us-central1-nft-market-cdc31.cloudfunctions.net/api/collections-thirty-days')
            .then(response => response.json())
            .then(data => {
              setRankingsThirtyDays(data.collections);
              localStorage.setItem('rankingsThirtyDays', JSON.stringify(data.collections));
            })
            .catch(error => console.error(error));
        } else {
          setNFTsData(JSON.parse(localStorage.getItem('NFTsData')));
          setCollectionsData(JSON.parse(localStorage.getItem('collectionsData')));
          setRankingsOneDay(JSON.parse(localStorage.getItem('rankingsOneDay')));
          setRankingsSevenDays(JSON.parse(localStorage.getItem('rankingsSevenDays')));
          setRankingsThirtyDays(JSON.parse(localStorage.getItem('rankingsThirtyDays')));
        }
      }, []);

    return (
        <AuthContext.Provider
            value={{
                NFTsData,
                setNFTsData,
                collectionsData,
                setCollectionsData,
                rankingsOneDay,
                setRankingsOneDay,
                rankingsSevenDays,
                setRankingsSevenDays,
                rankingsThirtyDays,
                setRankingsThirtyDays
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}