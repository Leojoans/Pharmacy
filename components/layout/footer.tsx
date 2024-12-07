export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Eden Pharmacy</h3>
            <p className="text-gray-400">
              Your trusted healthcare partner, providing quality pharmaceutical services since 2000.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Prescription Services</li>
              <li className="text-gray-400">Health Monitoring</li>
              <li className="text-gray-400">24/7 Availability</li>
              <li className="text-gray-400">Personal Care</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Monday - Friday: 8am - 9pm</li>
              <li className="text-gray-400">Saturday: 9am - 7pm</li>
              <li className="text-gray-400">Sunday: 10am - 6pm</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Eden Pharmacy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}