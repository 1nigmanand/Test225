import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Account from './account'

export default function Otp({ otp }) {
    const [enteredOtp, setEnteredOtp] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleOtpChange = (event) => {
        setEnteredOtp(event.target.value);
    };

    const handleConfirm = () => {
        if (enteredOtp.length === 6 && enteredOtp === String(otp)) {
            setIsConfirmed(true);
            alert("OTP confirmed!");
        } else {
            alert("Please enter the correct 6-digit OTP.");
        }
    };

    return (
        <>
            {isConfirmed ? (
                <Account />
            ) : (
                <div className="d-flex flex-column align-items-center mt-5">
                    <h2>Enter OTP</h2>
                    <input
                        type="text"
                        className="form-control w-50 text-center mt-3"
                        placeholder="Enter 6-digit OTP"
                        value={enteredOtp}
                        onChange={handleOtpChange}
                        maxLength="6"
                    />
                    <button
                        className="btn btn-primary mt-3"
                        onClick={handleConfirm}
                    >
                        Confirm
                    </button>
                </div>
            )}
        </>
    );
}
