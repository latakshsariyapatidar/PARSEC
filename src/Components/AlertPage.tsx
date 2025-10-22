import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AlertPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-indigo-500">
      <div className="bg-gray-800/40 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Form Already Submitted</h1>
        <p className="text-gray-200 mb-6">
          You have already filled out the form. You cannot submit multiple entries.
        </p>
        <button
          onClick={() => navigate('/events')}
          className="text-white bg-gradient-to-br from-blue-500 to-cyan-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 rounded-lg px-6 py-3 font-semibold"
        >
          Go to Events
        </button>
      </div>
    </div>
  );
}