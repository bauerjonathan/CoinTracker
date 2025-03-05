# Crypto Market Insights Dashboard

This project provides a dashboard for viewing market data related to cryptocurrencies, including liquidation heatmaps, price trends, and other relevant statistics, similar to platforms like Coinglass. The dashboard visualizes real-time market activity, liquidation data, and historical price data for various cryptocurrencies.

## Features:
- **Liquidation Heatmap**: Visualize liquidation volumes for specific trading pairs (e.g., BTC/USD) using a heatmap.
- **Historical Price Data**: View historical price trends for cryptocurrencies using data from popular crypto APIs.
- **Market Overview**: Track key market statistics like liquidation volumes, trading pairs, and more.
- **Interactive Visualizations**: Use heatmaps and other charts to explore market data in real time.
- **Real-Time Data**: Fetches live data through a custom backend API that integrates with cryptocurrency data providers.

## Technologies Used:
- **Frontend**:
  - React
  - Next.js
  - Ant Design
  - Tailwind CSS
- **Backend**:
  - Node.js
  - Express
  - Axios
- **Visualization**:
  - Ant Design Heatmap and other chart libraries
- **APIs**:
  - CoinGecko API
  - Custom backend APIs for liquidation and market data

## Installation:

### Backend (Node.js):
1. Clone the repository.
    ```bash
    git clone https://github.com/your-username/crypto-market-insights.git
    ```
2. Install dependencies:
    ```bash
    cd crypto-market-insights/backend
    npm install
    ```
3. Start the backend server:
    ```bash
    npm start
    ```
    The server will run on `http://localhost:5000`.

### Frontend (Next.js):
1. Clone the repository.
    ```bash
    git clone https://github.com/your-username/crypto-market-insights.git
    ```
2. Install dependencies:
    ```bash
    cd crypto-market-insights/frontend
    npm install
    ```
3. Start the frontend application:
    ```bash
    npm run dev
    ```
    The application will run on `http://localhost:3000`.

## Dependencies:
- **Axios**: For making HTTP requests to the backend and external APIs.
- **@ant-design/plots**: For rendering the heatmap and other visualizations.
- **Tailwind CSS**: For responsive styling and layout.
- **CoinGecko API**: For fetching historical price data.

## API Endpoints:
- **GET /api/liquidations**: Fetches liquidation data for various trading pairs (e.g., BTC/USD).
- **GET /api/crypto-history/:currency**: Fetches historical price data for a given cryptocurrency.
- **GET /api/market-stats**: Retrieves general market statistics for selected cryptocurrencies.

## Screenshots:

Add some screenshots here to showcase the visualizations and data display.

![Heatmap Example](path-to-your-screenshot.png)

## License:
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
