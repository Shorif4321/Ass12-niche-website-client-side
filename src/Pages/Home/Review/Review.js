import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, img, review,Retting } = props.review;
    return (
        <div className="col-md-3 col-12 col-sm-6 py-2 text-center">
            <div className="">
                <img className="img-fluid reviewImg" src={img}></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{review?.slice(0, 50)}</p>
                    <p>{Retting}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;