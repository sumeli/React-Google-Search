import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseURL = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultCont = ({children}) => {
    const[results, setResults] = useState([])
    const[isloading, setIsLoading] = useState(false)
    const[searchTerm, setSearchTerm] = useState('')

    //Here "type" shows the type of results we want to see like images or videos or news.
    const getResults = async(type) => {

        setIsLoading(true)
        const response = await fetch(`${baseURL}${type}`, {
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'US',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY,
            }
        })

        const data = await response.json()

        if(type.includes('/news')) {
            setResults(data.entries);
        } else if(type.includes('/images')){
            setResults(data.image_results);
        } else {
            setResults(data.results)
        }
        
        setIsLoading(false)
    }

    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isloading}}>
            {children}
        </ResultContext.Provider>
    )
} 

export const useResultContext = () => useContext(ResultContext)