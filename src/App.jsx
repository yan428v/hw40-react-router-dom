import React, {useEffect} from 'react';
import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    // const navigate = useNavigate();
    //
    // useEffect(() => {
    //     navigate("/home");
    // }, []);
    // NO NO NO !

    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
};

export default App;