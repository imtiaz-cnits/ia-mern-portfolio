import React from 'react';

const ContactMethod = () => {
    return (
        <>
            <div className="container">
                <div className="contact_method_wrapper">
                    <div className="contact_method_card">
                        <div className="contact_method_card_title">
                            <div className="contact_method_card_icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M2.82812 0.765296C3.35902 0.235151 4.09188 -0.0416708 4.84066 0.0050961C5.58945 0.051863 6.28217 0.417722 6.743 1.00981L9.43541 4.46897C9.92889 5.10349 10.1029 5.93003 9.9079 6.71007L9.08742 9.99522C9.00114 10.3413 9.10245 10.7073 9.35441 10.9598L13.0398 14.6454C13.2925 14.8979 13.6592 14.9993 14.0058 14.9124L17.2892 14.0919C18.0691 13.8969 18.8953 14.0711 19.5301 14.5644L22.989 17.2555C24.2324 18.2231 24.3464 20.0607 23.2335 21.1722L21.6825 22.7233C20.5726 23.8333 18.9136 24.3209 17.3672 23.7763C13.4091 22.3836 9.81531 20.1174 6.85249 17.146C3.88152 14.1834 1.61557 10.5899 0.222699 6.63206C-0.320284 5.08699 0.167201 3.42642 1.27717 2.31637L2.82812 0.765296Z"
                                          fill="white"/>
                                </svg>
                            </div>
                            <h4>Phone</h4>
                        </div>
                        <p><a href="">+1 (234) 567-89-00</a></p>
                    </div>
                    <div className="contact_method_card">
                        <div className="contact_method_card_title">
                            <div className="contact_method_card_icon">
                                <svg width="24" height="18" viewBox="0 0 24 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3 0C1.60024 -9.42171e-05 0.386447 0.967828 0.075 2.3325L12 9.621L23.925 2.3325C23.6136 0.967828 22.3998 -9.42171e-05 21 0H3ZM0 14.7015V4.0455L8.7045 9.3645L0 14.7015ZM10.1415 10.245L0.2865 16.2855C0.78351 17.3335 1.84012 18.0011 3 18H21C22.1597 18.0003 23.2157 17.3321 23.712 16.284L13.857 10.2435L12 11.379L10.1415 10.2435V10.245ZM24 14.7015L15.2955 9.366V9.3645L24 4.0455V14.7015Z"
                                          fill="white"/>
                                </svg>
                            </div>
                            <h4>Email</h4>
                        </div>
                        <p><a href="">info@agency.com</a></p>
                    </div>
                    <div className="contact_method_card">
                        <div className="contact_method_card_title">
                            <div className="contact_method_card_icon">
                                <svg width="23" height="24" viewBox="0 0 23 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M12.5128 23.9559C18.4476 23.4434 22.9991 18.5852 23 12.7619C22.9992 7.68681 19.5202 3.24133 14.5089 1.91219C14.6419 1.45966 14.5495 0.972375 14.2595 0.596433C13.9696 0.220491 13.5157 -0.000396111 13.034 0H9.9675C9.4858 -0.000396111 9.03192 0.220491 8.74193 0.596433C8.45195 0.972375 8.35958 1.45966 8.49253 1.91219C2.74205 3.43556 -0.865618 8.99957 0.179927 14.7325C1.22547 20.4654 6.57793 24.4683 12.5128 23.9559ZM17.4618 6.91176L17.465 6.90994L17.462 6.91144L17.4618 6.91176ZM17.4618 6.91176L9.87551 11.1479L5.53646 18.5674L13.126 14.3294L17.4618 6.91176Z"
                                          fill="white"/>
                                </svg>
                            </div>
                            <h4>Address</h4>
                        </div>
                        <p>2247 Lunetta Street, TX 76301</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactMethod;