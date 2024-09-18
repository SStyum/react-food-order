import { useCallback, useEffect, useState } from "react";

const sendHttpRequest = async (url, config) => {
    const response = await fetch(url, config);

    const resData = await response.json();

    if (!response.ok) {
        throw new Error(resData.message || "Something went wrong!");
    }

    return resData;
}

export const useHttp = (url, config, initialValue) => {
    const [data, setData] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);

    const clearData = () => {
        setData(initialValue);
    };
    
    const sendRequest = useCallback(async (data) => {
        setIsLoading(true);
        try {
            const resData = await sendHttpRequest(url, { ...config, body: data });
            setData(resData);
        } catch (error) {
            setError(error.message || "Something went wrong!");
        }
        setIsLoading(false);
    }, [url, config]);

    useEffect(() => {
        if ((config && (config.method === "GET" || !config.method)) || !config) {
            sendRequest();
        }
    }, [sendRequest, config]);

    return {
        data,
        isLoading,
        error,
        sendRequest,
        clearData,
    }
};