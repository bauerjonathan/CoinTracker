"use client";

import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale, ChartOptions } from "chart.js";

// Importiere den Date-Adapter für die Zeitachse
import 'chartjs-adapter-date-fns';

// Alle benötigten Komponenten von Chart.js registrieren
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale
);

export default function BtcChart() {
    const [cryptoData, setCryptoData] = useState<any[]>([]);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        // API-Aufruf zum Abrufen der Preisdaten für BTC
        fetch("http://localhost:5000/api/crypto-history/bitcoin")  // Achte darauf, dass du den richtigen Port verwendest
            .then((response) => response.json())
            .then((data) => {
                // Formatieren der Preisdaten für das Diagramm
                const formattedData = data.prices.map((entry: [number, number]) => ({
                    x: entry[0], // timestamp
                    y: entry[1], // Preis
                }));
                setCryptoData(formattedData);
            })
            .catch((error) => {
                console.error("Fehler beim Laden der Daten:", error);
                setError("Fehler beim Abrufen der historischen Daten");
            });
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    const data = {
        datasets: [
            {
                label: "Bitcoin Preis (USD)",
                data: cryptoData,
                fill: false,
                borderColor: "rgba(75,192,192,1)",
                tension: 0.1,
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        responsive: true,
        scales: {
            x: {
                type: "time",
                time: {
                    unit: "minute",
                },
                title: {
                    display: true,
                    text: "Zeit",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Preis (USD)",
                },
            },
        },
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-4">Bitcoin Chart</h1>
            <div style={{ width: '80%', height: '400px' }}>
                <Line data={data} options={options} />
            </div>
        </div>
    );
}
