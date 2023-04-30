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
        fetch('https://us-central1-nft-market-cdc31.cloudfunctions.net/api/tokens')
            .then(response => response.json())
            .then(data => setNFTsData(data.tokens))
            .catch(error => console.error(error))
        fetch('https://us-central1-nft-market-cdc31.cloudfunctions.net/api/collections')
            .then(response => response.json())
            .then(data => setCollectionsData(data.collections))
            .catch(error => console.error(error));
        fetch('https://us-central1-nft-market-cdc31.cloudfunctions.net/api/collections-one-day')
            .then(response => response.json())
            .then(data => setRankingsOneDay(data.collections))
            .catch(error => console.error(error));
        fetch('https://us-central1-nft-market-cdc31.cloudfunctions.net/api/collections-seven-days')
            .then(response => response.json())
            .then(data => setRankingsSevenDays(data.collections))
            .catch(error => console.error(error));
        fetch('https://us-central1-nft-market-cdc31.cloudfunctions.net/api/collections-thirty-days')
            .then(response => response.json())
            .then(data => setRankingsThirtyDays(data.collections))
            .catch(error => console.error(error));
    },[])

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