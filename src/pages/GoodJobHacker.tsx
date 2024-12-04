import React, { useState } from 'react';
import Confetti from 'react-confetti';

function GoodJobHacker() {
  const [showConfetti, setShowConfetti] = useState(true);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-400 to-purple-600">
      {showConfetti && <Confetti />}
      <h1
        className="text-9xl font-bold text-white drop-shadow-lg cursor-pointer"
        onClick={() => setShowConfetti(!showConfetti)}
      >
        GoodJobHacker
      </h1>
    </div>
  );
}

export default GoodJobHacker;