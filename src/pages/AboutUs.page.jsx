import React from 'react';
import Aboutimg from '../assets/images/about.png';
const AboutUsPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 bg-info p-2 rounded">
                    <h3>About Us</h3>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-7 ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem consequuntur explicabo quos libero? Assumenda at soluta ad dicta incidunt nihil temporibus optio alias fuga repellat, doloribus eius ut quidem dolores cum sequi voluptates fugit? Incidunt eligendi esse ullam. Ullam, quia. Quis magni ea minus maxime vitae asperiores ratione dolore obcaecati temporibus, cumque ad adipisci molestiae fugiat minima non, eligendi voluptatum ipsa delectus! Mollitia non dignissimos tempora itaque atque. Iste quia, reiciendis consectetur iusto velit, odit commodi iure molestiae neque animi atque! Non mollitia tempore praesentium odit amet nesciunt voluptates possimus adipisci, illo optio exercitationem provident molestias veniam enim reprehenderit qui magnam, neque cum molestiae inventore repellat eaque! In dignissimos corporis possimus exercitationem assumenda alias, soluta molestias, dolore provident eum officiis.
                </div>
                <div className="col-md-5 text-center">
                    <img src={Aboutimg} alt="About-image" className="img-fluid about-img" />
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;