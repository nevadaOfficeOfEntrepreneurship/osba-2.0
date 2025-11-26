import React from "react";// src/components/AnswerPanel.jsx
// function AnswerPanel() {
//   return (
//     <div className="card mb-3">
//       <div className="card-body">
//         <p className="mb-0 text-muted">Answers coming soon…</p>
//       </div>
//     </div>
//   );
// }
// export default AnswerPanel;

// src/components/AnswerPanel.jsx
function AnswerPanel({ faq, searchResults }) {
  const activeFAQ = faq || (searchResults.length > 0 ? searchResults[0] : null);

  if (!activeFAQ) {
    return (
      <div className="card">
        <div className="card-body text-muted">
          Select a question on the left or type a question to see guidance based on
          official Nevada sources.
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <strong>{activeFAQ.question}</strong>
      </div>
      <div className="card-body">
        <p className="fw-semibold">{activeFAQ.shortAnswer}</p>
        <p>{activeFAQ.detailedAnswer}</p>

        <div className="mb-3">
          <small className="text-muted">
            Jurisdiction: {activeFAQ.jurisdiction} · Topics:{' '}
            {activeFAQ.topicTags.join(', ')}
          </small>
        </div>

        <div className="mb-3">
          <h6 className="fw-semibold mb-1">Sources</h6>
          <ul className="mb-0">
            {activeFAQ.sources.map((s, i) => (
              <li key={i}>
                <a href={s.url} target="_blank" rel="noreferrer">
                  {s.label}
                </a>{' '}
                <small className="text-muted">({s.type})</small>
              </li>
            ))}
          </ul>
        </div>

        {/* inside AnswerPanel.jsx, near bottom of card-body, before disclaimer */}
        <div className="mb-3 d-flex align-items-center">
          <span className="me-2">Was this helpful?</span>
          <button
            type="button"
            className="btn btn-outline-success btn-sm me-2"
            onClick={() => console.log('feedback', activeFAQ.id, 'up')}
          >
            👍 Yes
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => console.log('feedback', activeFAQ.id, 'down')}
          >
            👎 No
          </button>
        </div>


        <div className="border-top pt-2 d-flex align-items-center justify-content-between">
          <small className="text-muted">
            {activeFAQ.disclaimer}
          </small>
        </div>
      </div>
    </div>
  );
}

export default AnswerPanel;
