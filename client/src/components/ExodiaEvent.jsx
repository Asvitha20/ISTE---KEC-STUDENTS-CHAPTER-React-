import React from 'react';

const ExodiaEvent = () => {
    return (
        <div className="exodia-page">
            <div className="exodia-page-brush exodia-page-brush-green"></div>
            <div className="exodia-page-brush exodia-page-brush-blue"></div>
            <div className="exodia-page-content">
                <span>ISTE - KEC • SPECIAL NOTICE</span>
                <h1>EXODIA</h1>
                <p>Event 04</p>
                <button
                    type="button"
                    className="btn btn-primary rounded-pill"
                    onClick={() => { window.location.href = '/'; }}
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default ExodiaEvent;
