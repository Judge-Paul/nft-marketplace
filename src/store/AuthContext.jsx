import { createContext, useState } from 'react';

    const AuthContext = createContext({
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