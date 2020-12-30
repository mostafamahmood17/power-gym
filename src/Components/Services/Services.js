import React from 'react';
import './Services.css';
import one from '../../Asset/Group 80.png'
import two from '../../Asset/Group 81.png'
import three from '../../Asset/Group 82.png'

const Services = () => {
    return (
        <div className="container">
        <div className="row container text-center mt-5 justify-content-center items-center">
            
                <div className="col-md-4 imageOne ">
                    <div className="d-flex flex-column text-white justify-content-center items-center">
                        <img src={one} alt="" width="50px" className="m-auto pt-3"/>
                        <h1>PROGRESSION</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis dicta ratione ea sequi voluptas.</p>

                    </div>
                    

                </div>
                <div className="col-md-4 imageTwo">
                    <div className="d-flex flex-column text-white">
                        <img src={two} alt="" width="px" className="m-auto pt-3"/>
                        <h1 className="text-warning">WORKOUT</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rerum, reprehenderit ut fuga id qui?</p>

                    </div>

                </div>
                <div className="col-md-4 imageThree">
                    <div className="d-flex flex-column text-white">
                        <img src={three} alt="" width="50px" className="m-auto pt-3"/>
                        <h1>NUTRITION</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nesciunt sunt laboriosam deserunt, quidem aut?</p>

                    </div>

                </div>
            
            
        </div>
        </div>
    );
};

export default Services;