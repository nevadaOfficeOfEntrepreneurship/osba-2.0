// App.jsx
import React, { useState } from "react";
import SearchBar from './components/SearchBar.jsx';
import AnswerPanel from './components/AnswerPanel.jsx';
import faqs from './data/faqs.json';
import './App.css';

function App() {
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  return (
    <div className="min-vh-100 bg-light">
      <header className="bg-white border-bottom py-3 mb-4">
        <div className="container d-flex flex-column flex-md-row align-items-md-center justify-content-between">
          <div>
            <h1 className="h4 mb-0">OSBA 2.0 – Nevada Business Regulatory Assistant</h1>
            <small className="text-muted">
              Pilot by GOED Office of Entrepreneurship (internal demo)
            </small>
          </div>
        </div>
      </header>

      <main className="container mb-5">
        <div className="row">
          <div className="col-lg-5 mb-4">
            <SearchBar
              faqs={faqs}
              onSelectFAQ={(faq) => setSelectedFAQ(faq)}
            />
          </div>

          <div className="col-lg-7">
            <AnswerPanel
              faq={selectedFAQ}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;


// // App.jsx
// import React from "react";
// import { useState } from 'react'
// import SearchBar from './components/SearchBar.jsx';
// import AnswerPanel from './components/AnswerPanel.jsx';
// import FAQList from './components/FAQList.jsx';
// import faqs from './data/faqs.json';
// import './App.css'

// function App() {
//   const [selectedFAQ, setSelectedFAQ] = useState(null);
//   const [searchResults, setSearchResults] = useState([]);

//   return (
    
//     <div className="min-vh-100 bg-light">
//       <header className="bg-white border-bottom py-3 mb-4">
//         <div className="container d-flex flex-column flex-md-row align-items-md-center justify-content-between">
//           <div>
//             <h1 className="h4 mb-0">OSBA 2.0 – Nevada Business Regulatory Assistant</h1>
//             <small className="text-muted">
//               Pilot by GOED Office of Entrepreneurship (internal demo)
//             </small>
//           </div>
//         </div>
//       </header>

//       <main className="container mb-5">
//         <div className="row">
//           <div className="col-lg-5 mb-4">
//             <SearchBar
//               faqs={faqs}
//               onResults={(results) => setSearchResults(results)}
//               onSelectFAQ={(faq) => setSelectedFAQ(faq)}
//             />
//             <FAQList
//               faqs={faqs}
//               onSelectFAQ={(faq) => setSelectedFAQ(faq)}
//             />
//           </div>

//           <div className="col-lg-7">
//             <AnswerPanel
//               faq={selectedFAQ}
//               searchResults={searchResults}
//             />
//           </div>
//         </div>
//       </main>

//       <section className="mt-4">
//         <div className="card border-0 bg-transparent">
//           <div className="card-body p-0 text-muted" style={{ fontSize: '0.9rem' }}>
//             <p className="mb-1">
//               <strong>About OSBA 2.0 (Pilot)</strong>
//             </p>
//             <p className="mb-1">
//               This internal pilot is maintained by the Nevada Governor's Office of Economic Development
//               (GOED) Office of Entrepreneurship. It aggregates curated, public information from
//               state and local agencies to help entrepreneurs quickly find licensing and registration
//               guidance.

//             </p>
//             <p className="mb-0">
//               Note: The tool is informational only and does not provide legal advice. 
//             </p>
//           </div>
//         </div>
//       </section>


//     </div>
//     )
// }

// export default App


// function App() {
//   return (
//     <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
//       <div className="card shadow-sm">
//         <div className="card-body">
//           <h1 className="h4 mb-2">OSBA 2.0 is running 🎉</h1>
//           <p className="mb-0 text-muted">
//             If you can see this, your React/Vite environment is working.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
