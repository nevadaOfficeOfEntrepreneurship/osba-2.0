import { useState } from 'react'
import SearchBar from './components/SearchBar.jsx';
import AnswerPanel from './components/AnswerPanel.jsx';
import FAQList from './components/FAQList.jsx';
import faqs from './data/faqs.json';
import './App.css'

function App() {
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  return (
    
    <div className="min-vh-100 bg-light">
    //   <header className="bg-white border-bottom py-3 mb-4">
    //     <div className="container d-flex flex-column flex-md-row align-items-md-center justify-content-between">
    //       <div>
    //         <h1 className="h4 mb-0">OSBA 2.0 – Nevada Business Regulatory Assistant</h1>
    //         <small className="text-muted">
    //           Pilot by GOED Office of Entrepreneurship (internal demo)
    //         </small>
    //       </div>
    //     </div>
    //   </header>

    //   <main className="container mb-5">
    //     <div className="row">
    //       <div className="col-lg-5 mb-4">
    //         <SearchBar
              faqs={faqs}
              onResults={(results) => setSearchResults(results)}
            />
            <FAQList
              faqs={faqs}
              onSelectFAQ={(faq) => setSelectedFAQ(faq)}
            />
          </div>

          <div className="col-lg-7">
            <AnswerPanel
              faq={selectedFAQ}
              searchResults={searchResults}
            />
          </div>
        </div>
      </main>
    </div>
    )
}

export default App
