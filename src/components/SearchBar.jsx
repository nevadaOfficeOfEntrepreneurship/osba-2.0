// src/components/SearchBar.jsx
import React from "react";
// function SearchBar() {
//   return (
//     <div className="card mb-3">
//       <div className="card-body">
//         <p className="mb-0 text-muted">Search coming soon…</p>
//       </div>
//     </div>
//   );
// }
// export default SearchBar;

// src/components/SearchBar.jsx
import { useState } from 'react';

function SearchBar({ faqs, onResults }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    const q = query.trim().toLowerCase();
    if (!q) {
      onResults([]);
      return;
    }

    const matches = faqs.filter((faq) =>
      (faq.question + ' ' + faq.shortAnswer + ' ' + faq.detailedAnswer)
        .toLowerCase()
        .includes(q)
    );

    onResults(matches);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <form onSubmit={handleSearch}>
          <label className="form-label fw-semibold">
            Ask a Nevada business registration question
          </label>
          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="e.g., Do I need a state license for a coffee cart in Las Vegas?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
          <small className="text-muted">
            Answers are based on curated official Nevada resources. Complex situations may require
            contacting OSBA or your local licensing office.
          </small>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;

