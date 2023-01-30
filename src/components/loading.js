import React, { useState, useEffect } from "react";

const LoadingPage = () => {
        const [progress, setProgress] = useState(0);

        useEffect(() => {
                const interval = setInterval(() => {
                        setProgress((prevProgress) => {
                                if (prevProgress >= 100) {
                                        clearInterval(interval);
                                        return 100;
                                }
                                return prevProgress + 1;
                        });
                }, 50);
                return () => clearInterval(interval);
        }, []);

        return (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                        <div style={{ width: "50%", height: 20, backgroundColor: "lightgray", borderRadius: 10 }}>
                                <div style={{ width: `${progress}%`, height: 20, backgroundColor: "darkgray", borderRadius: 10 }} />
                        </div>
                </div>
        );
};

export default LoadingPage;
