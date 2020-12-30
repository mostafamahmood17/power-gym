import React from 'react';
import about from "../../Asset/wells-chan-H-vAxuWxmi8-unsplash_31.jpg"

const AboutUs = () => {
    return (
        <div className="container">
            <div className="row container ">
                <div className="col mt-3">
                    <img src={about} alt="" width="500" height="500" />
                </div>
                <div className="col mt-3">
                    <h1 className="text-secondary">ABOUT US</h1>
                    <h4 className="text-warning">WE ARE HERE TO DREAM!</h4>
                    <h4>OUR TEAM IS HERE SURVE YOU.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eaque numquam ratione accusamus omnis reiciendis sequi vel eveniet ipsa alias? Iste dolorum dignissimos omnis dolorem. Ullam molestiae quos ipsam suscipit exercitationem, magni dolor incidunt perspiciatis necessitatibus aperiam vero, commodi numquam ea. Veritatis magni exercitationem rem, perferendis nostrum est unde quaerat.\</p>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;