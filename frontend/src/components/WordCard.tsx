import React, { useState } from 'react';

interface WordCardProps {
  word: string;
  meaning: string;
  example?: string;
}

export const WordCard: React.FC<WordCardProps> = ({ word, meaning, example }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-64 cursor-pointer group perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="w-full h-full bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-xl border border-gray-700 p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-3xl font-bold text-white mb-2">{word}</h3>
            <p className="text-gray-400 text-sm">Click to see meaning</p>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden [transform:rotateY(180deg)]">
          <div className="w-full h-full bg-gradient-to-br from-[#144272] to-[#0f2942] rounded-xl border border-[#1d8496] p-6 flex flex-col justify-center shadow-lg">
            <h4 className="text-xl font-semibold text-[#4fd1c5] mb-3">Meaning:</h4>
            <p className="text-white text-base mb-4">{meaning}</p>
            {example && (
              <>
                <h4 className="text-lg font-semibold text-[#4fd1c5] mb-2">Example:</h4>
                <p className="text-gray-300 text-sm italic">"{example}"</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
