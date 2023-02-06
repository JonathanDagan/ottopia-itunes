import React, { useState, useEffect } from "react";
import { Track, fetchTracks } from "../../services/ItunesApi";
import { ResultList } from "../result-list/result-list";

import { debounce } from "lodash";

import styles from "./search-view.module.scss";

export interface SearchViewProps {}

export const SearchView: React.FC<SearchViewProps> = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    const data = await fetchTracks(searchTerm);
    setResults(data);
    setIsLoading(false);
  };

  useEffect(() => {
    const debouncedSearch = debounce(search, 500);

    return () => {
      debouncedSearch.cancel();
    };
  }, []);

  async function search() {
    setIsLoading(true);
    try {
      const results = await fetchTracks(searchTerm);
      setResults(results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleTermChange = (term: string) => {
    setSearchTerm(term);
    if(term.length >= 3) {
        search();
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    handleTermChange(e.target.value);
  };

  return (
    <div className={styles["searchView"]}>
      <form className={styles["searchBar"]} onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search term"
        />
        <button type="submit" disabled={!searchTerm}>
          Go
        </button>
      </form>
      <div>
        {isLoading ? <p>Loading...</p> : <ResultList results={results} />}
      </div>
    </div>
  );
};
