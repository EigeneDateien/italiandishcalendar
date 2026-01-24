import { Link } from "react-router";
import { italianDishes } from "../lib/dishes";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Clock } from "lucide-react";

export function TodaysDish() {
  const today = new Date().getDate();
  const dish = italianDishes[today];
  
  // Calculate previous and next days (cycle through 1-31)
  const previousDay = today === 1 ? 31 : today - 1;
  const nextDay = today === 31 ? 1 : today + 1;
  
  if (!dish) {
    return (
      <div className="py-12 px-4 text-center">
        <p className="text-gray-600">No dish available for today.</p>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-12">
      {/* Date Badge */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
          <p className="text-sm text-gray-600">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
      
      {/* Main Dish Card */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-6">
        {/* Hero Image */}
        <div className="relative h-64 sm:h-96">
          <img 
            src={dish.image} 
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full text-sm font-medium">
                Day {today}
              </span>
              <span className="bg-green-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
                {dish.servingTime}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-2">
              {dish.name}
            </h2>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Info Pills */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-5 h-5 text-green-600" />
              <span className="font-medium">{dish.region}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Clock className="w-5 h-5 text-green-600" />
              <span className="font-medium">{dish.servingTime}</span>
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">About this dish</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {dish.description}
            </p>
          </div>
          
          {/* Ingredients */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Key Ingredients</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {dish.ingredients.map((ingredient, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-white border border-green-200 text-gray-800 px-4 py-3 rounded-xl text-center font-medium"
                >
                  {ingredient}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <Link
          to={`/dish/${previousDay}`}
          className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-green-600 transition-all shadow-md flex-1 sm:flex-initial"
        >
          <ChevronLeft className="w-5 h-5" />
          <div className="text-left">
            <p className="text-xs text-gray-600">Previous</p>
            <p className="font-semibold text-sm">Day {previousDay}</p>
          </div>
        </Link>
        
        <Link
          to="/month"
          className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors shadow-md"
        >
          <Calendar className="w-5 h-5" />
          <span className="font-semibold hidden sm:inline">View Calendar</span>
          <span className="font-semibold sm:hidden">Calendar</span>
        </Link>
        
        <Link
          to={`/dish/${nextDay}`}
          className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-green-600 transition-all shadow-md flex-1 sm:flex-initial"
        >
          <div className="text-right">
            <p className="text-xs text-gray-600">Next</p>
            <p className="font-semibold text-sm">Day {nextDay}</p>
          </div>
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
