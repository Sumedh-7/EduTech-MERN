function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="text-2xl font-bold">EduTech</h1>
        <ul className="flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-20">
        <h2 className="text-5xl font-bold text-gray-800">
          Modern React UI
        </h2>

        <p className="mt-4 text-gray-600">
          MERN Stack Internship Task 2
        </p>

        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 p-10">
        
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold">Reusable Components</h3>
          <p className="mt-2 text-gray-600">
            Create modular React components.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold">Tailwind CSS</h3>
          <p className="mt-2 text-gray-600">
            Build modern responsive layouts.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold">Responsive Design</h3>
          <p className="mt-2 text-gray-600">
            Works across all screen sizes.
          </p>
        </div>

      </div>

    </div>
  )
}

export default App