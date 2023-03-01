import React from "react";
import "./HomePage.css";
import apple from "../../assets/apple.svg";
import android from "../../assets/android.svg";
import Group from "../../assets/Group.png";
import qr1 from "../../assets/qr.png";
import qr2 from "../../assets/qr.png";


const HomePage = () => {
    return (
        <div className="hero-content">
            <div className="hero-heading">
            <h1 className="hero-title">
                the playground for the next 
            </h1>
            <h1 className="hero-title">
                <span className = "text-red">100m</span> competitive gamers
            </h1>
            </div>
            <p className="sub-text">
                we are india's first <span className = "text-red">esports-as-a-service</span> platform for the student gamer
            </p>
            <div className="container2">
            <div className="nation-image">
                <img src={Group} alt="Nation" />
            </div>
            <div class="btns-container">
                <button class="btn btn-black">DOWNLOAD APP</button>
                <div className="download-btns">
                    
                    <a href="https://play.google.com/store/apps/details?id=com.tournafest.tournafest" target="_blank" rel="noreferrer">
                    <button className="btn">   
                        <div className="icon2"><img src={android} alt=""/></div>
                        <div className="btn-content">
                            <span>Get it on</span>
                            <p>Google Play</p>
                        </div>
                        <img src={qr1} class="hover-image" alt="QR" />
                    </button>
                    </a>
                    
                    <a href="https://apps.apple.com/in/app/tournafest/id1588639775" target="_blank" rel="noreferrer">
                    <button className="btn">
                        <div className="icon"><img src={apple} alt=""/></div>
                        <div className="btn-content">
                            <span>Download on</span>
                            <p>Apple store</p>
                        </div>
                        <img src={qr2} class="hover-image" alt="QR" />
                    </button>
                    </a>
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default HomePage;