import bg from "../assets/bg.jpg"

export default function Hero() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* bar */}
      <nav className="flex justify-between items-center px-10 py-6 text-white">
        <h1 className="text-xl font-bold">Logo</h1>
        <ul className="flex gap-6 text-sm">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* text */}
      <div className="flex flex-col items-center justify-center text-center text-white mt-32 px-4">
        <h2 className="text-4xl font-bold mb-4">
          Welcome to our website
        </h2>
        <p className="text-gray-200 mb-6">
          Discover amazing experience and create lasting memories
        </p>
        <button className="bg-red-500 px-6 py-3 rounded font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
}