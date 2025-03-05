const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

// Cors aktivieren
app.use(cors());

// Eine Route für historische Preisdaten einer Kryptowährung
app.get("/api/crypto-history/:currency", async (req, res) => {
    const { currency } = req.params; // Die Kryptowährung (z. B. 'bitcoin' oder 'ethereum')

    try {
        // Wir holen uns die historischen Preisdaten von der CoinGecko API
        const response = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${currency}/market_chart`,
            {
                params: {
                    vs_currency: "usd", // Der Preis in USD
                    days: "30", // Preis der letzten 30 Tage
                },
            }
        );

        const prices = response.data.prices;
        // Die Preisdaten für das Diagramm formatieren (Timestamp und Preis)
        const formattedData = prices.map((entry) => [entry[0], entry[1]]);

        // Sende die formatierten Preisdaten als Antwort
        res.json({ prices: formattedData });
    } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
        res.status(500).json({ error: "Fehler beim Abrufen der historischen Daten" });
    }
});

// Eine Route für Liquidationsdaten nur für BTC/USD
app.get("/api/liquidations", async (req, res) => {
    try {
        // Beispielhafte Liquidationsdaten für BTC/USD
        const liquidations = [
            { symbol: "BTC/USD", timestamp: Date.now() - 10000000, liquidation_volume: 500000 },
            { symbol: "BTC/USD", timestamp: Date.now() - 20000000, liquidation_volume: 150000 },
            { symbol: "BTC/USD", timestamp: Date.now() - 30000000, liquidation_volume: 300000 },
            { symbol: "BTC/USD", timestamp: Date.now() - 40000000, liquidation_volume: 100000 },
            // Füge hier mehr Daten hinzu
        ];

        // Antwort mit den Liquidationsdaten senden
        res.json(liquidations);
    } catch (error) {
        console.error("Fehler beim Abrufen der Liquidationsdaten:", error);
        res.status(500).json({ error: "Fehler beim Abrufen der Liquidationsdaten" });
    }
});


// Server auf Port 5000 starten
const port = 5000;
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
