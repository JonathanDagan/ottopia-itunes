import React, { useState, useEffect } from "react";
import { Track, fetchTracks } from "../../services/ItunesApi";
import { ResultList } from "../result-list/result-list";
import { NoResultsError } from "../no-results-error/no-results-error";

import { Oval } from "react-loader-spinner";

import { debounce } from "lodash";

import styles from "./search-view.module.scss";

export interface SearchViewProps {}

const autoSearchMinLength = 3;

export const SearchView: React.FC<SearchViewProps> = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

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
    if (term.length > autoSearchMinLength) {
      search();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    handleTermChange(e.target.value);
  };

  const handleFocus = () => {
    setIsActive(true);
  };

  return (
    <div className={styles["searchView"]}>
      <form
        className={`${styles["searchBar"]} ${isActive ? "active" : ""}`}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleFocus}
          placeholder="Search term"
        />
        <button type="submit" disabled={!searchTerm}>
          Go
        </button>
      </form>
      <div className={styles["resultsList"]}>
        {isLoading ? (
          <Oval
            height={300}
            width={300}
            color="white"
            secondaryColor="pink"
            visible={true}
            ariaLabel="oval-loading"
            strokeWidth={4}
          />
        ) : results.length === 0 && searchTerm.length > autoSearchMinLength ? (
          <NoResultsError term={searchTerm} />
        ) : (
          <ResultList results={results} />
        )}
      </div>
    </div>
  );
};
