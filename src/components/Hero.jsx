import React from 'react';

const Hero = ({image}) => {
    return (
        <section className="float-start w-25">
            <img className="w-100" src={image} alt="hero"/>
        </section>
    );
};

export default Hero;