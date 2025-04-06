import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Usefetchapi(url) {
    const [response, setresponse] = useState(null);

    useEffect(() => {
        async function fetchapi() {
            try {
                const response = await axios.get(url);
                setresponse(response.data); // 👈 ye important hai!
            } catch (err) {
                console.error("Error in fetch API:", err);
            }
        }

        fetchapi();
    }, [url]);

    return { response };
}
