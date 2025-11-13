import React, { useEffect, useState } from 'react';
import { WordCard } from './WordCard';

interface Word {
  id: number;
  word: string;
  meaning: string;
  example?: string;
}

export const WordsSection: React.FC = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWords();
  }, []);

  const fetchWords = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/words');
      if (!response.ok) {
        throw new Error('Failed to fetch words');
      }
      const data = await response.json();
      setWords(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-400">Loading words...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-red-400">Error: {error}</p>
          <p className="text-center text-gray-400 mt-2">Make sure the backend server is running on port 3001</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Word Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {words.map((word) => (
            <WordCard
              key={word.id}
              word={word.word}
              meaning={word.meaning}
              example={word.example}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
