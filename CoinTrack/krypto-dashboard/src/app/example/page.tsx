"use client";

import { useEffect, useState } from "react";
import { Heatmap } from "@ant-design/plots"; // Ant Design für Heatmap
import axios from "axios";

// Definiere das Typ-Interface für Liquidationen
interface LiquidationData {
    symbol: string;
    timestamp: number;
    liquidation_volume: number;
}

// Definiere das Typ-Interface für die formatierten Daten
interface FormattedData {
    symbol: string;
    time: string;
    liquidation: number;
}

export default function LiquidationHeatmap() {
    const [data, setData] = useState<FormattedData[]>([]); // State für die formatierten Daten

    useEffect(() => {
        async function fetchLiquidationData() {
            try {
                // Hole Liquidationsdaten von der Backend-API
                const response = await axios.get("http://localhost:5000/api/liquidations");
                const rawData: LiquidationData[] = response.data; // Definiere den Typ für die Rohdaten

                console.log("Raw Data:", rawData);  // Debugging: Zeige die Rohdaten an

                // Überprüfe, ob die Daten überhaupt für BTC/USD sind
                const btcData = rawData.filter((item: LiquidationData) => item.symbol === "BTC/USD");

                console.log("Filtered Data (BTC/USD):", btcData);  // Debugging: Zeige die gefilterten Daten an

                if (btcData.length === 0) {
                    console.log("Keine BTC/USD Liquidationen gefunden");
                }

                // Daten umformatieren für die Heatmap
                const formattedData = btcData.map((item: LiquidationData) => ({
                    symbol: item.symbol,
                    time: new Date(item.timestamp).toLocaleTimeString(),
                    liquidation: item.liquidation_volume,
                }));

                console.log("Formatted Data:", formattedData);  // Debugging: Zeige die formatierten Daten an

                setData(formattedData);
            } catch (error) {
                console.error("Fehler beim Abrufen der Liquidation-Daten:", error);
            }
        }

        fetchLiquidationData();
    }, []);

    const config = {
        data,
        xField: "time",
        yField: "symbol",
        colorField: "liquidation",
        color: ["#f00", "#ff0", "#0f0"], // Rot → Gelb → Grün
        tooltip: {
            showMarkers: false,
            formatter: (datum: FormattedData) => ({  // Typisiere den 'datum'-Parameter
                name: "Liquidation Vol.",
                value: `$${datum.liquidation.toLocaleString()}`,
            }),
        },
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                BTC/USD Liquidation Heatmap
            </h1>
            <p className="text-gray-600 mb-6">
                Zeigt Liquidationen für BTC/USD an.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
                {data.length === 0 ? (
                    <p>Keine Liquidationen zum Anzeigen.</p>
                ) : (
                    <Heatmap {...config} />
                )}
            </div>
        </div>
    );
}
