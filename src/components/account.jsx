import React from 'react'
import img1 from '../resource/1.png';
import '../App.css';

export default function Account() {
    return (
        <>
            <div className='text-center'>
                <img className=" logoImage mb-3" src={img1} alt="Schollers" />
            </div>
            <div className="d-flex justify-content-evenly align-items-center flex-wrap mt-5">
                <div className="accountCard text-center">
                    <img src="profile1.jpg" alt="Profile" className="profile-picture" />
                    <h5 className="mt-3">John Doe</h5>
                    <p>(2023 - 2024)</p>
                </div>
                <div className="accountCard text-center">
                    <img src="profile2.jpg" alt="Profile" className="profile-picture" />
                    <h5 className="mt-3">Jane Smith</h5>
                    <p>(2023 - 2024)</p>
                </div>
                <div className="accountCard text-center">
                    <img src="profile3.jpg" alt="Profile" className="profile-picture" />
                    <h5 className="mt-3">Alex Johnson</h5>
                    <p>(2023 - 2024)</p>
                </div>
                <div className="accountCard text-center">
                    <img src="profile4.jpg" alt="Profile" className="profile-picture" />
                    <h5 className="mt-3">Emily Brown</h5>
                    <p>(2023 - 2024)</p>
                </div>
            </div>

        </>
    )
}
