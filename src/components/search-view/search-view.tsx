import React, { useState } from 'react';
import { Track, fetchTracks } from '../../services/ItunesApi';
import { ResultList } from '../result-list/result-list';

import styles from './search-view.module.scss';

export interface SearchViewProps {
}

export const SearchView: React.FC<SearchViewProps> = (props) => {
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
        <div className={styles['searchView']}>
            <form className={styles['searchBar']} onSubmit={handleSubmit}>
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
            <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ResultList results={results}/>
            )}
            </div>
        </div>
    );
};
