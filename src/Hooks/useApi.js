import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function useApi(URL, defaultVal = []){

    const [data,setData] = useState(defaultVal);
    const [isLoading,setIsLoading] = useState(false);
    const [loadError,setLoadError] = useState(null);

    const fetchData = useCallback(async ()=>{
        setIsLoading(true);
        try{
            const res = await axios.get(URL);
            setIsLoading(false);
            setData(res.data);
        }catch(e){
            setIsLoading(false)
            setLoadError(e);
        }
    }
,[URL]);

    useEffect(()=>{
        fetchData();
    },[fetchData]);

    return{
        data,
        isLoading,
        loadError
    };
}