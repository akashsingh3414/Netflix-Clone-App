import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();
    const searchContent = useRef();

    const transitionNavBar = () => {
        if (window.scrollY > 50) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    const handleSearch = () => {
        navigate(`/search-page?query=${searchContent.current.value}`);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => {
            window.removeEventListener("scroll", transitionNavBar);
        };
    }, []);

    const handleLogoClick = () => {
        if (props.onLoginPage === true) {
            props.useFunc[1](false);
            navigate("/login");
        } else {
            navigate("/");
        }
    };

    const handleSignInClick = () => {
        if (props.useFunc[0] === false) {
            props.useFunc[1](true);
        }
    };

    return (
        <>
            <div className={`nav ${show ? 'nav-further' : ''}`}>
                <div className="flex justify-between mt-2 w-full">
                    <div className="navbar-left flex text-white">
                        <img
                            className="cursor-pointer contain netflix-logo-second"
                            src="https://images.ctfassets.net/y2ske730sjqp/4aEQ1zAUZF5pLSDtfviWjb/ba04f8d5bd01428f6e3803cc6effaf30/Netflix_N.png?w=300"
                            alt=""
                            onClick={handleLogoClick}
                        />
                        <img
                            className="cursor-pointer contain netflix-logo-first"
                            src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
                            alt=""
                            onClick={handleLogoClick}
                        />

                        <div className={`dropdown ${props.onLoginPage ? "hidden" : ""}`}>
                            <button className="dropbtn">Menu</button>
                            <div className="dropdown-content">
                                <a href="/movies" onClick={(e) => {
                                    e.preventDefault();
                                    navigate("/movies");
                                }}>Movies</a>
                                <a href="/tv-shows" onClick={(e) => {
                                    e.preventDefault();
                                    navigate("/tv-shows");
                                }}>TV Shows</a>
                                <a href="/top-rated" onClick={(e) => {
                                    e.preventDefault();
                                    navigate("/top-rated");
                                }}>Top Rated</a>
                            </div>
                        </div>

                        <div className={`menu ${props.onLoginPage ? "hidden" : ""}`}>
                            <ul className="list flex">
                                <li className={props?.currentPage === "movies" ? "glow" : ""} onClick={() => navigate("/movies")}>Movies</li>
                                <li className={props?.currentPage === "tv-shows" ? "glow" : ""} onClick={() => navigate("/tv-shows")}>TV Shows</li>
                                <li className={props?.currentPage === "top-rated" ? "glow" : ""} onClick={() => navigate("/top-rated")}>Top Rated</li>
                            </ul>
                        </div>
                    </div>

                    <div className="navbar-right flex text-white">
                        <input
                            type="text"
                            ref={searchContent}
                            name="search"
                            className={`searchBox ${props.onLoginPage ? "hidden" : ""}`}
                            placeholder="Search"
                            onKeyDown={handleKeyDown}
                        />
                        <button onClick={handleSearch} className="searchButton">
                            <span id="search" className={`material-icons cursor-pointer start center ${props.onLoginPage ? "hidden" : ""}`}>search</span>
                        </button>
                        <span className={`material-icons cursor-pointer ${props.onLoginPage ? "hidden" : ""}`}>notifications</span>
                        <img
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                            alt="Profile"
                            className={`profile-page-image cursor-pointer h-10 w-10 ${(props.onProfilePage || props.onLoginPage) ? "hidden" : ''}`}
                            onClick={() => navigate("/profile")}
                        />
                        <button className={`signIn_button ${(props.onLoginPage && !props.useFunc[0]) ? "" : "hidden"}`} onClick={handleSignInClick}>Sign In</button>
                    </div>
                </div>
            </div>
        </>
    );
}
