import { ArrowRight } from "lucide-react";

export default function ParentPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Kongu Engineering College</h1>
            <p className="text-xl mb-8">Empowering minds, shaping futures</p>
            <a
              href="#"
              className="bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-400 transition-colors inline-flex items-center"
            >
              Explore Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </section>

        {/* Featured Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Discover KEC</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[ 
                {
                  title: "Academic Excellence",
                  description: "Our rigorous programs prepare students for successful careers.",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Cutting-edge Research",
                  description: "Engage in groundbreaking research across various disciplines.",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Vibrant Campus Life",
                  description: "Experience a diverse and inclusive community on our beautiful campus.",
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                      Learn more →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News and Events Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">News and Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[ 
                { title: "KEC Wins National Innovation Award", date: "May 15, 2025" },
                { title: "Annual Tech Fest: TechnoVision 2025", date: "June 1-3, 2025" },
                { title: "New AI Research Center Inaugurated", date: "April 22, 2025" },
                { title: "KEC Alumnus Becomes CEO of Tech Giant", date: "March 10, 2025" },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Read more →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Kongu Engineering College</p>
              <p>Perundurai, Erode - 638060</p>
              <p>Tamil Nadu, India</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-300">Admissions</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">Academic Calendar</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">Library</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">Career Services</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300">Facebook</a>
                <a href="#" className="hover:text-blue-300">Twitter</a>
                <a href="#" className="hover:text-blue-300">LinkedIn</a>
                <a href="#" className="hover:text-blue-300">Instagram</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">Stay updated with our latest news and events</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full text-gray-800 rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2025 Kongu Engineering College. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
