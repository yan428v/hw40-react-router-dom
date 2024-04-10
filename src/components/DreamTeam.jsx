import React from 'react';
import {friends} from "../utils/constants.jsx";
import Friend from "./Friend.jsx";

const DreamTeam = ({ friends, onFriendClick }) => {
    return (
        <section className="float-end w-50 row border mx-1 mt-1">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends.map((f,i)=><Friend key={i} pos={i+1} friend={f} onClick={() => onFriendClick(i)}/>)}
        </section>
    );
};

export default DreamTeam;