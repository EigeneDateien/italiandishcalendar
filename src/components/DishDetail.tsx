import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ItalianDish } from "../lib/dishes";

interface DishDetailProps {
  dish: ItalianDish;
  day: number;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
}

export function DishDetail({ dish, day, onClose, onPrevious, onNext }: DishDetailProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white w-full h-[90vh] sm:h-auto sm:max-h-[90vh] sm:max-w-2xl sm:rounded-2xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom sm:slide-in-from-bottom-0">
        {/* Header */}
        <div className="relative">
          <img 
            src={dish.image} 
            alt={dish.name}
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                Day {day}
              </span>
              <span className="bg-green-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                {dish.servingTime}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1">
              {dish.name}
            </h2>
            <p className="text-white/90 text-sm">
              From {dish.region}
            </p>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-12rem)] sm:max-h-[calc(90vh-16rem)]">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">About this dish</h3>
            <p className="text-gray-700 leading-relaxed">
              {dish.description}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Ingredients</h3>
            <div className="flex flex-wrap gap-2">
              {dish.ingredients.map((ingredient, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg text-sm"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Navigation Footer */}
        <div className="border-t border-gray-200 p-4 flex justify-between items-center bg-gray-50">
          <button
            onClick={onPrevious}
            disabled={!onPrevious}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Previous</span>
          </button>
          
          <span className="text-sm text-gray-600">
            Day {day} of 31
          </span>
          
          <button
            onClick={onNext}
            disabled={!onNext}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <span className="text-sm font-medium">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
