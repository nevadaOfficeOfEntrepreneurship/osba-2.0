// src/components/SearchBar.jsx
import React, { useState } from 'react';

function SearchBar({ faqs, onSelectFAQ }) {
  const [selectedId, setSelectedId] = useState('');

  const sortedFaqs = [...faqs].sort((a, b) =>
    a.question.localeCompare(b.question)
  );

  const handleSelectChange = (e) => {
    const id = e.target.value;
    setSelectedId(id);

    if (!id) return;

    const faq = faqs.find((f) => f.id === id);
    if (faq && onSelectFAQ) {
      onSelectFAQ(faq);
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">

        <label className="form-label fw-semibold">
          Select a business licensing or registration question
        </label>

        <select
          className="form-select"
          value={selectedId}
          onChange={handleSelectChange}
        >
          <option value="">Select a question…</option>
          {sortedFaqs.map((faq) => (
            <option key={faq.id} value={faq.id}>
              {faq.question}
            </option>
          ))}
        </select>

        <small className="text-muted">
          Choosing a question will display the official OSBA guidance.
        </small>
      </div>
    </div>
  );
}

export default SearchBar;


// // src/components/SearchBar.jsx version 1 
// import React from 'react';
// import { useState, useMemo } from 'react';
// import MiniSearch from 'minisearch';

// function SearchBar({ faqs, onResults }) {
//   const [query, setQuery] = useState('');

//   const miniSearch = useMemo(() => {
//     const ms = new MiniSearch({
//       fields: ['question', 'shortAnswer', 'detailedAnswer', 'topicTags', 'jurisdiction'],
//       storeFields: ['id', 'question', 'shortAnswer', 'detailedAnswer', 'jurisdiction', 'topicTags', 'sources', 'disclaimer']
//     });

//     ms.addAll(faqs);
//     return ms;
//   }, [faqs]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const q = query.trim();
//     if (!q) {
//       onResults([]);
//       return;
//     }

//     const results = miniSearch.search(q, {
//       prefix: true,
//       fuzzy: 0.1
//     });

//     // results contain stored fields already
//     onResults(results);
//   };

//   return (
//     <div className="card mb-3">
//       <div className="card-body">
//         <form onSubmit={handleSearch}>
//           <label className="form-label fw-semibold">
//             Ask a Nevada business registration or licensing question
//           </label>
//           <div className="input-group mb-2">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="e.g., Licenses for a food truck in Las Vegas"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//             <button type="submit" className="btn btn-primary">
//               Search
//             </button>
//           </div>
//           <small className="text-muted">
//             Results are pulled from curated official Nevada guidance. This pilot does not replace
//             legal or agency advice.
//           </small>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SearchBar;

// src/components/SearchBar.jsx
// import React, { useState, useMemo } from 'react';
// import MiniSearch from 'minisearch';

// function SearchBar({ faqs, onResults, onSelectFAQ }) {
//   const [query, setQuery] = useState('');
//   const [selectedId, setSelectedId] = useState('');

//   const miniSearch = useMemo(() => {
//     const ms = new MiniSearch({
//       fields: ['question', 'shortAnswer', 'detailedAnswer', 'topicTags', 'jurisdiction'],
//       storeFields: [
//         'id',
//         'question',
//         'shortAnswer',
//         'detailedAnswer',
//         'jurisdiction',
//         'topicTags',
//         'sources',
//         'disclaimer'
//       ],
//       idField: 'id'
//     });

//     ms.addAll(faqs);
//     return ms;
//   }, [faqs]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const q = query.trim();

//     if (!q) {
//       onResults([]);
//       return;
//     }

//     const results = miniSearch.search(q, {
//       prefix: true,
//       fuzzy: 0.1
//     });

//     onResults(results);

//     // optionally auto-select the top result
//     if (results.length > 0 && onSelectFAQ) {
//       onSelectFAQ(results[0]);
//       setSelectedId(results[0].id);
//     }
//   };

//   const handleSelectChange = (e) => {
//     const id = e.target.value;
//     setSelectedId(id);

//     if (!id) return;

//     const faq = faqs.find((f) => f.id === id);
//     if (faq && onSelectFAQ) {
//       onSelectFAQ(faq);
//     }
//   };

//   // Optional: sort questions alphabetically in the dropdown
//   const sortedFaqs = [...faqs].sort((a, b) =>
//     a.question.localeCompare(b.question)
//   );

//   return (
//     <div className="card mb-3">
//       <div className="card-body">
//         {/* Text search */}
//         <form onSubmit={handleSearch} className="mb-3">
//           <label className="form-label fw-semibold">
//             Ask a Nevada business registration or licensing question
//           </label>
//           <div className="input-group mb-2">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="e.g., Licenses for a food truck in Las Vegas"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//             <button type="submit" className="btn btn-primary">
//               Search
//             </button>
//           </div>
//           <small className="text-muted">
//             Results are pulled from curated official Nevada guidance. This pilot does not replace
//             legal or agency advice.
//           </small>
//         </form>

//         {/* Dropdown of all FAQs */}
//         <div>
//           <label className="form-label fw-semibold">
//             Or choose a question from the full OSBA FAQ
//           </label>
//           <select
//             className="form-select"
//             value={selectedId}
//             onChange={handleSelectChange}
//           >
//             <option value="">Select a question…</option>
//             {sortedFaqs.map((faq) => (
//               <option key={faq.id} value={faq.id}>
//                 {faq.question}
//               </option>
//             ))}
//           </select>
//           <small className="text-muted">
//             This list includes all questions in the OSBA 2.0 pilot.
//           </small>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SearchBar;
