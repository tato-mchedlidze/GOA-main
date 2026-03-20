import { useState } from "react";

function App() {
  const [sedanImg, setSedanImg] = useState(null);
  const [suvImg, setSuvImg] = useState(null);
  const [luxuryImg, setLuxuryImg] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex rounded-2xl overflow-hidden shadow-lg">

        {/* SEDANS */}
        <div className="bg-orange-500 text-white p-6 w-64">
          {sedanImg ? (
            <img src={sedanImg} className="w-12 mb-4" />
          ) : (
            <div className="w-12 h-12 bg-white/30 mb-4"></div>
          )}

          <h2 className="text-xl font-bold mb-2">SEDANS</h2>
          <p className="text-sm mb-4">
            Choose a sedan for its affordability and excellent fuel economy.
          </p>

          <input
            type="file"
            onChange={(e) =>
              setSedanImg(URL.createObjectURL(e.target.files[0]))
            }
            className="text-sm mb-4"
          />

          <button className="bg-white text-orange-500 px-4 py-2 rounded-full">
            Learn More
          </button>
        </div>

        {/* SUVS */}
        <div className="bg-teal-600 text-white p-6 w-64">
          {suvImg ? (
            <img src={suvImg} className="w-12 mb-4" />
          ) : (
            <div className="w-12 h-12 bg-white/30 mb-4"></div>
          )}

          <h2 className="text-xl font-bold mb-2">SUVS</h2>
          <p className="text-sm mb-4">
            Take an SUV for its spacious interior and versatility.
          </p>

          <input
            type="file"
            onChange={(e) =>
              setSuvImg(URL.createObjectURL(e.target.files[0]))
            }
            className="text-sm mb-4"
          />

          <button className="bg-white text-teal-600 px-4 py-2 rounded-full">
            Learn More
          </button>
        </div>

        {/* LUXURY */}
        <div className="bg-green-900 text-white p-6 w-64">
          {luxuryImg ? (
            <img src={luxuryImg} className="w-12 mb-4" />
          ) : (
            <div className="w-12 h-12 bg-white/30 mb-4"></div>
          )}

          <h2 className="text-xl font-bold mb-2">LUXURY</h2>
          <p className="text-sm mb-4">
            Cruise in the best car brands without the bloated prices.
          </p>

          <input
            type="file"
            onChange={(e) =>
              setLuxuryImg(URL.createObjectURL(e.target.files[0]))
            }
            className="text-sm mb-4"
          />

          <button className="bg-white text-green-900 px-4 py-2 rounded-full">
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
