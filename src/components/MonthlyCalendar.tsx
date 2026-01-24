import { ChevronLeft, ChevronRight } from "lucide-react";
import { italianDishes, ItalianDish } from "../lib/dishes";

interface MonthlyCalendarProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
  onDayClick: (day: number) => void;
}

export function MonthlyCalendar({ currentDate, onDateChange, onDayClick }: MonthlyCalendarProps) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const previousMonth = () => {
    onDateChange(new Date(year, month - 1, 1));
  };
  
  const nextMonth = () => {
    onDateChange(new Date(year, month + 1, 1));
  };
  
  const getDishForDay = (day: number): ItalianDish | undefined => {
    return italianDishes[day];
  };
  
  const renderCalendarDays = () => {
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(
        <div key={`empty-${i}`} className="aspect-square" />
      );
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dish = getDishForDay(day);
      const isToday = 
        day === new Date().getDate() && 
        month === new Date().getMonth() && 
        year === new Date().getFullYear();
      
      days.push(
        <div
          key={day}
          onClick={() => onDayClick(day)}
          className={`aspect-square border border-gray-200 rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:scale-105 ${
            isToday ? 'ring-2 ring-green-600' : ''
          }`}
        >
          {dish ? (
            <div className="relative h-full">
              <img 
                src={dish.image} 
                alt={dish.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute top-1 left-1 bg-white/90 backdrop-blur-sm text-gray-900 px-1.5 py-0.5 rounded text-xs sm:text-sm font-medium">
                {day}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2">
                <p className="text-white text-xs sm:text-sm font-semibold line-clamp-2">
                  {dish.name}
                </p>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center bg-gray-50">
              <span className="text-gray-400 text-sm">{day}</span>
            </div>
          )}
        </div>
      );
    }
    
    return days;
  };
  
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={previousMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">
          {monthNames[month]} {year}
        </h2>
        
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Next month"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      {/* Day names */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
        {dayNames.map(day => (
          <div key={day} className="text-center text-xs sm:text-sm font-medium text-gray-600 py-2">
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {renderCalendarDays()}
      </div>
    </div>
  );
}
