import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png'


const HeaderIntro = () => {
    return (
        <>
            <div class="header landing">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <nav class="navbar">
                                <div class="brand-logo">
                                    <Link to={"/"}>
                                        <img src="https://i.ibb.co/0sMXWD1/android-chrome-192x192.png" alt="" />
                                        <span>SteamX</span>
                                    </Link>
                                </div>
                                <Link to={"/signin"} class="btn btn-success">Sign in</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderIntro;