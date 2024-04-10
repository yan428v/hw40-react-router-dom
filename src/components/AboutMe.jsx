import React, {useEffect, useState} from 'react';
import {base_url, period} from "../utils/constants.jsx";
import "../css/aboutMe.css";
import {useNavigate, useParams} from "react-router-dom";

const AboutMe = () => {
    const [hero, setHero] = useState();
    const navigate = useNavigate();
    const {heroId} = useParams();
    // console.log(heroId);
    console.log(window.location)
    console.log(useParams());

    useEffect(() => {
        const hero = JSON.parse(localStorage.getItem('hero'));
        if (hero && ((Date.now() - hero.time) < period)) {
            setHero(hero.payload);
        } else {
            fetch(`${base_url}/v1/peoples/${heroId}`)
                .then(response => response.json())
                .then(data => {
                    const hero = {
                        "name": data.name,
                        "height": data.height,
                        "mass": data.mass,
                        "hair_color": data.hair_color,
                        "skin_color": data.skin_color,
                        "eye_color": data.eye_color,
                        "birth_year": data.birth_year,
                        "gender": data.gender
                    };
                    setHero(hero)
                    const info = {
                        payload: hero,
                        time: Date.now()
                    }
                    localStorage.setItem('hero', JSON.stringify(info));
                });
        }
        return () => console.log('AboutMe unmounted');
    }, [])


    return (
        <div>
            {(hero) &&
                <div className={"farGalaxy hero_box"}>
                    <p><span className={"hero_text"}>Name:</span>{hero.name}</p>
                    <p><span className={"hero_text"}>Id:</span>{hero.id}</p>
                    <p><span className={"hero_text"}>Height:</span> {hero.height}</p>
                    <p><span className={"hero_text"}>Birth Year:</span> {hero.birth_year}</p>
                    <p><span className={"hero_text"}>Eye color:</span> {hero.eye_color}</p>
                    <p><span className={"hero_text"}>Gender:</span> {hero.gender}</p>
                    <p><span className={"hero_text"}>Mass:</span> {hero.mass}</p>
                </div>
            }
        </div>
    );
}

export default AboutMe;