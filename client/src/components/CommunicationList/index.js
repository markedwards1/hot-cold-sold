import React from 'react';

const CommunicationList = ({ communication = [] }) => {
  if (!communication.length) {
    return <h3>Get in touch with your clients already</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Communications
      </h3>
      <div className="flex-row my-4">
        {communication &&
          communication.map((coms) => (
            <div key={coms._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {coms.type} commented{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {coms.createdAt}
                  </span>
                </h5>
                <p className="card-body">{coms.text}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommunicationList;
