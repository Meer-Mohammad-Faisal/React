import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const url = `https://api.exchangerate-api.com/v4/latest/${currency.toUpperCase()}`; // ✅ Using a working API

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((res) => {
                setData(res.rates); // ✅ This API returns rates in "rates" key
                console.log("Fetched Data:", res.rates);
            })
            .catch((error) => console.error("Fetch error:", error.message));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
