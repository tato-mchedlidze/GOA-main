import { useState } from "react";

function App() {
  const [image, setImage] = useState(null);

  function handleImageChange(e) {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  }

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white w-96 rounded-2xl shadow-lg overflow-hidden">

        {/* Image */}
        {image ? (
          <img src={image} className="w-full" />
        ) : (
          <div className="h-48 flex items-center justify-center bg-gray-200">
            No Image
          </div>
        )}

        <div className="p-6 text-center">
          <h1 className="text-xl font-bold mb-3">Order Summary</h1>

          {/* Upload */}
          <input
            type="file"
            onChange={handleImageChange}
            className="mb-4"
          />

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg">
            Proceed to Payment
          </button>

          <p className="mt-4 text-gray-500">Cancel Order</p>
        </div>
      </div>
    </div>
  );
}

export default App;
