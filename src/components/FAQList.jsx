// src/components/FAQList.jsx
import React from "react";
// function FAQList() {
//   return (
//     <div className="card mb-3">
//       <div className="card-body">
//         <p className="mb-0 text-muted">FAQ coming soon…</p>
//       </div>
//     </div>
//   );
// }
// export default FAQList;
function FAQList({ faqs, onSelectFAQ }) {
  return (
    <div className="card">
      <div className="card-header">
        <strong>Common questions</strong>
      </div>
      <div className="list-group list-group-flush">
        {faqs.slice(0, 10).map((faq) => (
          <button
            key={faq.id}
            type="button"
            className="list-group-item list-group-item-action text-start"
            onClick={() => onSelectFAQ(faq)}
          >
            {faq.question}
            <br />
            <small className="text-muted">
              {faq.jurisdiction} · {faq.topicTags.join(', ')}
            </small>
          </button>
        ))}
      </div>
    </div>
  );
}

export default FAQList;
