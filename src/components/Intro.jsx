import React from 'react';
import { introText } from '../constants';
import about from '../assets/img/about.jpg';

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro_inner">
                <h1 className="intro_title">{introText.title}</h1>
                {/*line separation*/}
                <div className="intro_lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="intro_text">
                    <div className="text">
                        <div>Owen Lee</div>
                        <div>Portfolio</div>
                        <div>Website</div>
                    </div>
                    <div className="img">
                        <img src={about} alt="about" />
                    </div>
                </div>
            </div>
            <div className="intro_lines bottom" aria-hidden="true">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </section>
    );
};

export default Intro;