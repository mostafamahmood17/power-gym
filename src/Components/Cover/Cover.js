import React from 'react';

const Cover = () => {
    return (
        <div className="container">
            <div className="row mt-5 ">
                <div className="col-md-6 mt-5">
                    <h1 className="text-white">THE BEST FITNESS <br /> STUDIO IN TOWN</h1>
                    <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, incidunt eveniet voluptatibus modi, ab quidem a eligendi, est nisi maiores cupiditate natus quod tempore quos nemo facere deserunt expedita temporibus.</p>
                    <button className="btn btn-warning">JOIN US</button>
                </div>
                <div className="col-md-6  mt-5 ">
                <iframe width="480" height="250" src="https://www.youtube.com/embed/xDfdUt4JCUU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

        </div>
    );
};

export default Cover;