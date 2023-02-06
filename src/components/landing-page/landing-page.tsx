import React from "react";

export interface LandingPageProps {
  className?: string;
}

export const LandingPage: React.FC<LandingPageProps> = ({ className = "" }) => (
  <div className={className}>
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <a href="https://www.apple.com/il/itunes/" target="_blank">
          <img src="/itunes_logo.png" className="logo" alt="iTunes logo" />
        </a>
        <h1>iTunes clone</h1>
        <a href="https://theuselessweb.com/" target="_blank">
          <img src="/itunes_logo.png" className="logo" alt="iTunes logo" />
        </a>
      </div>
        <a href="/search">
          <button className="">👩🏼‍💻let's find some music👨‍💻</button>
        </a>
    </div>
  </div>
);
