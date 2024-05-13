import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data.json';
import '../styles/dashboard.css';
import cross from '../assets/reshot-icon-close-circle-YE2TDJM6PL.svg';
import pen from '../assets/Vector.svg';
import drawer from '../assets/Vector 1.svg';

export default function Dashboard({ onLogout }) {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const handleLogout = () => {
        console.log('Logging out');
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        navigate('/'); // Redirect to login page
    };
    const toggleMenu = () => {
        setShowMenu(!showMenu);
        console.log(showMenu);
    };
    return (
        <div className="dashboard">
            <div className="dash-header">
                Tesla Corp <img src={drawer} alt="x" onClick={toggleMenu} />
            </div>
            <div className="divider"></div>
            <div className="day-date">
                <div className="date">10th May 2024</div>
                <div className="day">Friday</div>
            </div>
            <div className="divider"></div>
            <div className="job-count">Total Live Jobs: 2</div>
            <div className="list">
                <div className="item">
                    Frontend Developer
                    <img src={pen} alt="pen" />
                </div>
                <div className="divider"></div>

                <div className="item">
                    Android Developer
                    <img src={pen} alt="pen" />
                </div>
            </div>
            <div className="applicant-count">
                <div className="h2">Total Applicant</div>
                <div className="count">74</div>
                <div className="weekCount">+25 last week</div>
            </div>
            <div className="matched-applicants">
                <div className="h">Matched Applicants</div>
                {data.applicants.map((applicant, index) => (
                    <div key={index} className="applicant-card">
                        <div className="applicant-info">
                            <img src={applicant.image} alt={applicant.name} />
                            <p>{applicant.name}</p>
                        </div>
                        <a href="/">View Resume</a>
                    </div>
                ))}
                <button>See More</button>
            </div>

            <div className={`sidebar sidebar-right ${showMenu ? 'open' : ''}`}>
                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
                <img src={cross} alt="X" onClick={toggleMenu} />
            </div>
        </div>
    );
}
