import React from "react";

import styles from "./no-results-error.module.scss";

export interface NoResultsErrorProps {
  term?: string;
  className?: string;
}

export const NoResultsError: React.FC<NoResultsErrorProps> = (props) => (
  <h2 className={props.className}>
    No results{" "}
    {props.term ? (
      <span className={styles['term']}>{`for ${props.term}`}</span>
    ) : (
      ""
    )}
  </h2>
);
