import React from 'react';
import {Link} from "react-router-dom";

const NavItem = ({item}) => {
    return (
        // <li onClick={() => {window.location.hash = `#/${item.route}`}}
        //     className="nav-item btn btn-danger mx-1">{item.title}</li>
        <li>
            <Link className="nav-item btn btn-danger mx-1"
                to={item.route}>{item.title}</Link>
        </li>
    );
};

export default NavItem;