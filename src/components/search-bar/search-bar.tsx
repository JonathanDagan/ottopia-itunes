import React, { useState } from 'react';
import { Track, fetchTracks } from '../../services/ItunesApi';
import Result from '../result/result';

export interface SearchBarProps {
    className?: string;
}

const SearchBar: React.FC<SearchBarProps> = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    const data = await fetchTracks(searchTerm);
    setResults(data);
    setIsLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search term"
        />
        <button type="submit" disabled={!searchTerm}>
          Go
        </button>
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {results.map((result) => (
            <Result key={result.trackId} result={result} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
