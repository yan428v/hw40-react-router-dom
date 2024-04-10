import React, {useState} from 'react';
import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import FarGalaxy from "./FarGalaxy.jsx";
import mainImage from '../images/main.jpg';
import {friends} from "../utils/constants.jsx";
const Home = () => {
    const [heroImage, setHeroImage] = useState(mainImage);
    const [friendsImages, setFriendsImages] = useState(friends);

    const swapImages = (friendIndex) => {
        const newFriendsImages = [...friendsImages];
        const temp = newFriendsImages[friendIndex];
        newFriendsImages[friendIndex] = heroImage;
        setHeroImage(temp);
        setFriendsImages(newFriendsImages);
    };

    return (
        <div>
            <Hero image={heroImage}/>
            <DreamTeam friends={friendsImages} onFriendClick={swapImages}/>
            <FarGalaxy/>
        </div>
    );
};

export default Home;