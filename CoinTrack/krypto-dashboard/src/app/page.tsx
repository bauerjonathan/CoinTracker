"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-white">CoinTrack</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-white hover:underline">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/currencies/btc" className="text-white hover:underline">
                  BTC Chart
                </Link>
              </li>
              <li>
                <Link href="/currencies/eth" className="text-white hover:underline">
                  ETH Chart
                </Link>
              </li>
              <li>
                <Link href="/example" className="text-white hover:underline">
                  Beispiel-Seite
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-gray-900 p-8">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Willkommen bei CoinTrack</h1>
          <p className="text-lg text-gray-600">
            Die Plattform für **Live-Krypto-Preise**, interaktive Charts und Analysen. Bleibe immer up to date!
          </p>
        </div>

        {/* Karten für BTC & ETH */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <Link
            href="/currencies/btc"
            className="w-64 p-6 bg-blue-600 text-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            <h2 className="text-2xl font-semibold">Bitcoin (BTC)</h2>
            <p className="text-sm">Live-Preise & historische Daten</p>
          </Link>

          <Link
            href="/currencies/eth"
            className="w-64 p-6 bg-yellow-500 text-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            <h2 className="text-2xl font-semibold">Ethereum (ETH)</h2>
            <p className="text-sm">Live-Preise & historische Daten</p>
          </Link>
        </div>

        {/* Neue Tabelle für die beliebtesten Coins */}
        <div className="mt-12 w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          <h2 className="text-2xl font-bold text-center py-4 bg-gray-800 text-white">
            Beliebte Coins
          </h2>
          <table className="w-full text-left">
            <thead className="bg-gray-200 text-gray-600">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Symbol</th>
                <th className="py-3 px-4">Preis</th>
                <th className="py-3 px-4">24h Änderung</th>
                <th className="py-3 px-4">Marktkapitalisierung</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">1</td>
                <td className="py-3 px-4 flex items-center">
                  <img src="/btc-logo.png" alt="BTC" className="w-5 h-5 mr-2" />
                  BTC
                </td>
                <td className="py-3 px-4">$87,112.5</td>
                <td className="py-3 px-4 text-green-500">+0.75%</td>
                <td className="py-3 px-4">$1.74T</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">2</td>
                <td className="py-3 px-4 flex items-center">
                  <img src="/eth-logo.png" alt="ETH" className="w-5 h-5 mr-2" />
                  ETH
                </td>
                <td className="py-3 px-4">$2,160.54</td>
                <td className="py-3 px-4 text-green-500">+0.09%</td>
                <td className="py-3 px-4">$262.68B</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Info-Text */}
        <p className="mt-8 text-gray-600">
          CoinTrack bietet dir Echtzeit-Krypto-Daten, aktuelle Marktentwicklungen und visuelle Analysen.
          Nutze unser Dashboard für bessere Einblicke in den Markt!
        </p>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} CoinTrack. Alle Rechte vorbehalten.</p>
          <div className="mt-2">
            <Link href="/impressum" className="text-gray-400 hover:text-gray-200 mx-2">
              Impressum
            </Link>
            |
            <Link href="/datenschutz" className="text-gray-400 hover:text-gray-200 mx-2">
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
