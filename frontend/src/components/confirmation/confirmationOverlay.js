import React from 'react';
import { Button, Card, Form, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import '../confirmation/confirmationOverlay.css';

const ConfirmationOverlay = ({ isOpen, closeOverlay, selectedDoctorName, selectedDate, selectedTime }) => {
    const navigate = useNavigate();

    function GetDate(dateString) {
        const dateObject = new Date(dateString);
        return dateObject.toLocaleDateString();
    }

    return (
        <div className={`overlay ${isOpen ? 'active' : ''}`}>
            <Card className='confirmation-card'>
                <button className="close-btn" onClick={closeOverlay}>&times;</button>
                <p className='confirmation-text'> Your booking is confirmed with </p>
                {selectedDoctorName && (
                    <p className='confirmation-text'> {selectedDoctorName}
                    </p>)}
                {selectedDate && selectedTime && (
                    <p className='confirmation-text'> on{' '}
                        {GetDate(selectedDate)} at {selectedTime}.
                    </p>
                )}
                <Button variant="primary" className="btn-card viewButton" onClick={() => navigate('/patients/appointments')}>
                    View My Appointments
                </Button>
            </Card>
        </div>
    );
};

export default ConfirmationOverlay;