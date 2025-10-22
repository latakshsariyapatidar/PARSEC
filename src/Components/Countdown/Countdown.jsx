import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Countdown({ eventDate }) {
const [timeLeft, setTimeLeft] = useState({});

useEffect(() => {
    const calculateTimeLeft = () => {
    const difference = new Date(eventDate) - new Date();
    if (difference > 0) {
        setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        });
    } else {
        setTimeLeft({});
    }
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
}, [eventDate]);

const renderTime = (value, label) => (
    <div className="flex flex-col items-center bg-gradient-indigo-blue text-white rounded-lg shadow-black-strong transition-transform duration-200 hover:scale-105 p-2 sm:p-3 md:p-4 min-w-[50px] sm:min-w-[60px] md:min-w-[80px]">
        <div className="font-bold text-xl sm:text-2xl md:text-3xl">{value}</div>
        <div className="opacity-90 text-xs sm:text-sm md:text-base">{label}</div>
    </div>
);

return (
    <div className="flex flex-col items-center justify-center bg-[rgba(15,23,42,0.8)] text-white p-8 rounded-2xl shadow-black-medium text-center border border-blue-900/50">
        <div>
        <h1 className="text-2xl text-white relative">
            Countdown to <span className="gradient-text-blue-sky font-bold">PARSEC 6.0</span>
        </h1>
        </div>
        {Object.keys(timeLeft).length > 0 ? (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mt-6">
            {renderTime(timeLeft.days, "Days")}
            {renderTime(timeLeft.hours, "Hours")}
            {renderTime(timeLeft.minutes, "Minutes")}
            {renderTime(timeLeft.seconds, "Seconds")}
        </div>
        ) : (
        <div className="mt-6">
            <h2 className="text-blue-400 text-2xl [text-shadow:0_0_10px_rgba(59,130,246,0.5)]">The wait is over! PARSEC 6.0 is here!</h2>
        </div>
        )}
    </div>
);
}

Countdown.propTypes = {
  eventDate: PropTypes.string.isRequired
};

export default Countdown;
