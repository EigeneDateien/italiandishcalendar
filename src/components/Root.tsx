import { Outlet, Link, useLocation } from "react-router";
import { CalendarDays, Home, Calendar } from "lucide-react";

export function Root() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CalendarDays className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 via-gray-900 to-red-600 bg-clip-text text-transparent">
              Italian Dish Calendar
            </h1>
          </div>
          
          {/* Navigation */}
          <nav className="flex justify-center gap-2 sm:gap-4">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                location.pathname === "/" 
                  ? "bg-green-600 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="text-sm sm:text-base font-medium">Today</span>
            </Link>
            
            <Link
              to="/month"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                location.pathname === "/month" 
                  ? "bg-green-600 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span className="text-sm sm:text-base font-medium">Monthly</span>
            </Link>
          </nav>
        </div>
      </header>
      
      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
