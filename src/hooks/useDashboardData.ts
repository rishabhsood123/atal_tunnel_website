import { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:3000/api';

export const useDashboardData = () => {
    const [weather, setWeather] = useState<any>(null);
    const [traffic, setTraffic] = useState<any>(null);
    const [advisories, setAdvisories] = useState<any>(null);
    const [tunnelStatus, setTunnelStatus] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            const [wReq, tReq, aReq, stReq] = await Promise.all([
                fetch(`${API_BASE}/weather`).then(res => res.json()),
                fetch(`${API_BASE}/traffic`).then(res => res.json()),
                fetch(`${API_BASE}/advisories`).then(res => res.json()),
                fetch(`${API_BASE}/tunnel-status`).then(res => res.json())
            ]);
            setWeather(wReq);
            setTraffic(tReq);
            setAdvisories(aReq);
            setTunnelStatus(stReq);
            setLoading(false);
            setError(null);
        } catch (err) {
            console.error("API Fetch Error:", err);
            setError("Unable to connect to live services. Displaying cached data.");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        // Poll every 5 minutes (300,000 ms) as specified
        const interval = setInterval(fetchData, 300000);
        return () => clearInterval(interval);
    }, []);

    return { weather, traffic, advisories, tunnelStatus, loading, error };
};
