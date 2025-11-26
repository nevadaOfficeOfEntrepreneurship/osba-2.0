// // src/components/SearchBar.jsx
// import React from "react";
// // function SearchBar() {
// //   return (
// //     <div className="card mb-3">
// //       <div className="card-body">
// //         <p className="mb-0 text-muted">Search coming soon…</p>
// //       </div>
// //     </div>
// //   );
// // }
// // export default SearchBar;

// // src/components/SearchBar.jsx
// import { useEffect, useState, useMemo } from 'react';
// import MiniSearch from 'minisearch'
// function SearchBar({ faqs, onResults }) {
//   const [query, setQuery] = useState('');

//   const handleSearch = (e) => {
//     e.preventDefault();

//     const q = query.trim().toLowerCase();
//     if (!q) {
//       onResults([]);
//       return;
//     }

//     const matches = faqs.filter((faq) =>
//       (faq.question + ' ' + faq.shortAnswer + ' ' + faq.detailedAnswer)
//         .toLowerCase()
//         .includes(q)
//     );

//     onResults(matches);
//   };

//   return (
//     <div className="card mb-3">
//       <div className="card-body">
//         <form onSubmit={handleSearch}>
//           <label className="form-label fw-semibold">
//             Ask a Nevada business registration question
//           </label>
//           <div className="input-group mb-2">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="e.g., Do I need a state license for a coffee cart in Las Vegas?"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//             <button type="submit" className="btn btn-primary">
//               Search
//             </button>
//           </div>
//           <small className="text-muted">
//             Answers are based on curated official Nevada resources. Complex situations may require
//             contacting OSBA or your local licensing office.
//           </small>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SearchBar;

// src/components/SearchBar.jsx
import React from 'react';
import { useState, useMemo } from 'react';
import MiniSearch from 'minisearch';

function SearchBar({ faqs, onResults }) {
  const [query, setQuery] = useState('');

  const miniSearch = useMemo(() => {
    const ms = new MiniSearch({
      fields: ['question', 'shortAnswer', 'detailedAnswer', 'topicTags', 'jurisdiction'],
      storeFields: ['id', 'question', 'shortAnswer', 'detailedAnswer', 'jurisdiction', 'topicTags', 'sources', 'disclaimer']
    });

    ms.addAll(faqs);
    return ms;
  }, [faqs]);

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) {
      onResults([]);
      return;
    }

    const results = miniSearch.search(q, {
      prefix: true,
      fuzzy: 0.1
    });

    // results contain stored fields already
    onResults(results);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <form onSubmit={handleSearch}>
          <label className="form-label fw-semibold">
            Ask a Nevada business registration or licensing question
          </label>
          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="e.g., Licenses for a food truck in Las Vegas"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
          <small className="text-muted">
            Results are pulled from curated official Nevada guidance. This pilot does not replace
            legal or agency advice.
          </small>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;

