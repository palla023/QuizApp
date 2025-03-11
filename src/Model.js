import React, { useState } from 'react';

const Sub = ({ marks }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            {/* Button to Show Modal */}
            <button 
                type="button" 
                className="btn btn-info btn-lg" 
                onClick={() => setShowModal(true)}
            >
                End Quiz
            </button>

            {/* Modal */}
            {showModal && (
                <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" onClick={() => setShowModal(false)}>
                                    &times;
                                </button>
                                <h4 className="modal-title">Your Score:</h4>
                            </div>
                            <div className="modal-body">
                                <h1 style={{ textAlign: "center" }}>
                                    {marks.reduce((a, b) => a + b, 0)}/10
                                </h1>
                            </div>
                            <div className="modal-footer">
                                <button 
                                    type="button" 
                                    className="btn btn-default" 
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sub;
