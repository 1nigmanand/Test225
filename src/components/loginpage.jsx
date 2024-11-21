// import React, { useState } from 'react';
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Otp from './otp';
// import img1 from '../resource/1.png';
// import logo from '../resource/logo.png';

// export default function LoginPage() {
//     const [inputValue, setInputValue] = useState('');
//     const [otpValid, setOtpValid] = useState(false);
//     const [otp, setOtp] = useState(null);
//     const [language, setLanguage] = useState("English");
//     const [isSendingOtp, setIsSendingOtp] = useState(false);

//     const languages = ["English", "Hindi", "Spanish", "French", "German", "Chinese"];

//     const handleInputChange = (event) => setInputValue(event.target.value);
//     const handleLanguageChange = (event) => setLanguage(event.target.value);

//     const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
//     const isPhoneNumber = (value) => /^\d{10}$/.test(value);

//     const nextButton = async () => {
//         if (!inputValue.trim()) {
//             alert("Please enter your email or phone.");
//             return;
//         }

//         if (isEmail(inputValue) || isPhoneNumber(inputValue)) {
//             setIsSendingOtp(true);

//             try {
//                 const response = await fetch('https://schollers-backend.onrender.com/send-otp', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({ email: inputValue }),
//                 });

//                 const data = await response.json();

//                 if (response.ok && data.success) {
//                     setOtp(data.otp);
//                     setOtpValid(true);
//                     alert(`OTP sent to ${inputValue}`);
//                 } else {
//                     alert(data.message || 'Failed to send OTP');
//                 }
//             } catch (error) {
//                 alert('Error sending OTP');
//                 console.error(error);
//             } finally {
//                 setIsSendingOtp(false);
//             }
//         } else {
//             alert("Please enter a valid email or 10-digit phone number.");
//         }
//     };

//     return (
//         <>
//             <div className="d-flex flex-row justify-content-between align-items-center p-2">
//                 <div className="d-flex flex-row align-items-center upperStrip1">
//                     <img className="imgLogo me-2" src={img1} alt="Schollers" />
//                     <h3 className="heading">Schollers</h3>
//                 </div>

//                 <div className="d-flex align-items-center px-5 justify-content-between">
//                     <label htmlFor="language" className="me-2 visually-hidden">Selected Language: {language}</label>
//                     <select
//                         id="language"
//                         value={language}
//                         onChange={handleLanguageChange}
//                         className="form-select me-2"
//                     >
//                         {languages.map((lang) => (
//                             <option key={lang} value={lang}>
//                                 {lang}
//                             </option>
//                         ))}
//                     </select>
//                     <div className="d-flex align-items-center">
//                         <span className="ms-1">Help</span>
//                     </div>
//                 </div>
//             </div>
//             <hr className='m-0' />
//             <div className='Lower d-flex flex-row justify-content-evenly align-items-center'>
//                 <div className="logoClass d-flex justify-content-center align-items-center">
//                     <img className="imgLogo1 me-2" src={logo} alt="Schollers" />
//                 </div>
//                 <div className='cardClass'>
//                     <div className='cardDiv'>
//                         <div className='card1 p-2'>
//                             {otpValid ? (
//                                 <Otp otp={otp} />
//                             ) : (
//                                 <>
//                                     <h1 className='headingLogin'>Login</h1>
//                                     <div>
//                                         <p className='para mb-1'>Email or Phone</p>
//                                         <input
//                                             type="text"
//                                             className="form-control formControl"
//                                             placeholder="Email or Phone"
//                                             value={inputValue}
//                                             onChange={handleInputChange}
//                                             required
//                                         />
//                                     </div>
//                                     <br />
//                                     <div className='d-flex justify-content-center flex-column'>
//                                         <button
//                                             className='btn btn-primary py-2'
//                                             onClick={nextButton}
//                                             disabled={isSendingOtp}
//                                         >
//                                             {isSendingOtp ? 'Sending...' : 'Next'}
//                                         </button>
//                                         <p className="para pt-1">
//                                             By continuing, you agree to our Terms and Services and Privacy Policies.
//                                         </p>
//                                     </div>
//                                     <br />
//                                     <hr />
//                                     <h5 className='text-center'>OR</h5>
//                                     <div className="text-center">
//                                         <button className="btn btn-light py-3 btnB" style={{ width: '100%' }} >
//                                             Login with Google
//                                         </button>
//                                     </div>
//                                 </>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
