import React from 'react';
import '../styles/divider.css';

export default function divider({ text }) {
    return (
        <div className="dashed-divider-container">
            <div className="dashed-line"></div>
            <span className="divider-text">{text}</span>
            <div className="dashed-line"></div>
        </div>
    );
}
