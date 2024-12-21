import React, {useEffect, useState} from 'react'
import "./Navbar.css"

function Navbar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY>200){
                handleShow(true);
            }else{
                handleShow(false);
            }
        });
        return () =>{
            window.removeEventListener("scroll")
        };
    }, []);

    return (
        <div className={`navbar ${show && "nav_black"} `}>
            <img className="navbar_logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix"/>
            <img className="navbar_avatar" src="https://img.icons8.com/color/48/000000/boruto-uzumaki.png" alt="avatar"/>
        </div>
    )
}

export default Navbar
