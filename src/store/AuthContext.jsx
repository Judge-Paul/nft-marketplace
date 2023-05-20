import { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth"
import { toast } from 'react-toastify';

export const AuthContext = createContext({
    user: {},
    logout: () => {},
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
    const [user] = useAuthState(auth)
    const [NFTsData, setNFTsData] = useState([])
    const [collectionsData, setCollectionsData] = useState([])
    const [rankingsOneDay, setRankingsOneDay] = useState([])
    const [rankingsSevenDays, setRankingsSevenDays] = useState([])
    const [rankingsThirtyDays, setRankingsThirtyDays] = useState([])
    const logout = () => { 
      signOut(auth).then(() => {
        toast.success("Signed Out", {
          position: "top-right",
          autoClose: 1000,
          theme: "dark",
      })
      }).catch((error) => {
        toast.error(`${error}`, {
          position: "top-right",
          autoClose: 1000,
          theme: "dark",
      })})
    }
    useEffect(() => {
      const fetchData = async () => {
        const maxRetries = 3; // Maximum number of retries
        let retryCount = 0;
    
        while (retryCount < maxRetries) {
          try {
            const nftsResponse = await fetch('https://us-central1-nft-market-cdc31.cloudfunctions.net/api/tokens');
            const nftsData = await nftsResponse.json();
            let allTokens = [];
            nftsData.forEach(tokenData => {
              if (tokenData) {
                allTokens = allTokens.concat(tokenData.tokens).filter(nft =>
                  nft.token.image && nft.market.floorAsk && nft.market.floorAsk.price !== null && nft.market.floorAsk.price !== undefined
                ).sort(() => Math.random() - 0.5);
              }
            });
            if (allTokens.length > 0) {
              setNFTsData(allTokens);
            }
    
            const collectionsResponse = await fetch('https://us-central1-nft-market-cdc31.cloudfunctions.net/api/collections');
            const collectionsData = await collectionsResponse.json();
            setCollectionsData(collectionsData.collections);
    
            const rankingsOneDayResponse = await fetch('https://us-central1-nft-market-cdc31.cloudfunctions.net/api/collections-one-day');
            const rankingsOneDayData = await rankingsOneDayResponse.json();
            setRankingsOneDay(rankingsOneDayData.collections);
    
            const rankingsSevenDaysResponse = await fetch('https://us-central1-nft-market-cdc31.cloudfunctions.net/api/collections-seven-days');
            const rankingsSevenDaysData = await rankingsSevenDaysResponse.json();
            setRankingsSevenDays(rankingsSevenDaysData.collections);
    
            const rankingsThirtyDaysResponse = await fetch('https://us-central1-nft-market-cdc31.cloudfunctions.net/api/collections-thirty-days');
            const rankingsThirtyDaysData = await rankingsThirtyDaysResponse.json();
            setRankingsThirtyDays(rankingsThirtyDaysData.collections);
    
            // If all requests succeed, break out of the loop
            break;
          } catch (error) {
            console.error(error);
            retryCount++;
            // Wait for a certain duration before retrying (e.g., 1 second)
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        }
      };
    
      fetchData();
    }, []);
    

    return (
        <AuthContext.Provider
            value={{
                user,
                logout,
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