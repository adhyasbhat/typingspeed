// import './test.css';
// function test(){
//     return(
//         <div className='h-100'>
//             <div className='timer d-flex justify-content-center align-bottom'>00:00</div>
//             <div className='d-grid justify-content-center align-items-end h-100'>
//             <div className="randomText d-grid align-items-center justify-content-around p-3">
//         It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
//         The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
//         'Content here, content here', making it look like readable English.          
//         </div>
//         <div className="usertext">
//         <textarea className='p-3'></textarea>
//         </div>
//         <div className='d-flex justify-content-center '>
//         <button className='submitBtn mb-3'>SUBMIT</button>
//         </div>
//             </div>
        
        
//         </div>
//     )
// }
// export default test;

import React, { useState, useEffect, useRef } from 'react';
import './test.css';

function Test() {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const intervalRef = useRef(null);

    const handleTextareaChange = () => {
        if (!isActive) {
            setIsActive(true);
        }
    };

    const handleSubmit = () => {
        setIsActive(false);
    };

    useEffect(() => {
        if (isActive) {
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isActive, time]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className='h-100'>
            <div className='timer d-flex justify-content-center align-bottom'>{formatTime(time)}</div>
            <div className='d-grid justify-content-center align-items-end h-100'>
                <div className="randomText d-grid align-items-center justify-content-around p-3">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
                    'Content here, content here', making it look like readable English.          
                </div>
                <div className="usertext">
                    <textarea className='p-3' onChange={handleTextareaChange}></textarea>
                </div>
                <div className='d-flex justify-content-center '>
                    <button className='submitBtn mb-3' onClick={handleSubmit}>SUBMIT</button>
                </div>
            </div>
        </div>
    );
}

export default Test;
