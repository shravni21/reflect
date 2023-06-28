import React from 'react';
import MyImage from '../assets/h1.png';
import { useNavigate } from 'react-router-dom';
import './Temp.scss'
const Temp = () => {
    const navigate = useNavigate();

    return (
        <div className="homeOuter">
            <div className="innerdiv">
                <div className='img1 center'>
                    <img src={MyImage} alt="My Image" />
                </div>
                <h1 className="homeh1">Reflect</h1>
                <button className="homebuttion" onClick={() => navigate('/home')}>
                    Log In
                </button>
                <p>
                    if you are not registered{' '}
                    <button
                        className="homelink"
                        onClick={() => navigate('/home')}
                    >
                        sign up
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Temp
