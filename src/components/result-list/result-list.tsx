import React from "react";

import { Track } from "../../services/ItunesApi";
import { Result } from "../result/result";

import styles from "./result-list.module.scss";

export interface ResultListProps {
  results: Track[];
}

export const ResultList: React.FC<ResultListProps> = ({ results }) => {
  return (
    <div className={styles["resultList"]}>
      {results.map((result) => (
        <Result key={result.trackId} result={result} />
      ))}
    </div>
  );
};
