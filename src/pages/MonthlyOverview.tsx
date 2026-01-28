import { useState } from "react";
import { useNavigate } from "react-router";
import { MonthlyCalendar } from "../components/MonthlyCalendar";

export function MonthlyOverview() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();

  const handleDayClick = (month: number, day: number) => {
    navigate(`/dish/${month}/${day}`);
  };

  return (
    <div className="py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <p className="text-center text-gray-600">
          Click on any day to explore that dish in detail
        </p>
      </div>
      <MonthlyCalendar
        currentDate={currentDate}
        onDateChange={setCurrentDate}
        onDayClick={handleDayClick}
      />
    </div>
  );
}
