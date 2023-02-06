import React from 'react';

import { Track } from '../../services/ItunesApi';
import { Result } from "../result/result";

export interface ResultListProps {
    results: Track[];
}

export const ResultList: React.FC<ResultListProps> = ({ results }) => (
    <div style={{ height: "300px", overflow: "scroll" }}>
      {results.map((result) => (
        <Result key={result.trackId} result={result} />
      ))}
    </div>
);