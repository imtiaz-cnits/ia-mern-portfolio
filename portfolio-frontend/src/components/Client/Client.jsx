import React from 'react';
import ClientLogo1 from "../../assets/images/client_logo_1.svg";
import ClientLogo2 from "../../assets/images/client_logo_2.svg";
import ClientLogo3 from "../../assets/images/client_logo_3.svg";
import ClientLogo4 from "../../assets/images/client_logo_4.svg";
import ClientLogo5 from "../../assets/images/client_logo_5.svg";

const Client = () => {
    return (
        <>
            <section id="client">
                <div className="container">
                    <div className="client_wrapper">
                        <div className="client_logo">
                            <img src={ClientLogo1} alt=""/>
                        </div>
                        <div className="client_logo">
                            <img src={ClientLogo2} alt=""/>
                        </div>
                        <div className="client_logo">
                            <img src={ClientLogo3} alt=""/>
                        </div>
                        <div className="client_logo">
                            <img src={ClientLogo4} alt=""/>
                        </div>
                        <div className="client_logo">
                            <img src={ClientLogo5} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Client;