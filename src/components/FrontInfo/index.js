import React from 'react';

import './style.css';
import Hours from '../../assets/icons/hours-icon.svg';
import Contact from '../../assets/icons/contact-icon.svg';

const FrontInfo = () => (
    <section id="frontinfo-section">
        <section class="infosection" id="info-hours">
            <img src={Hours} width="100"/>
            <span class="info-title">Hours</span>
            <hr></hr>

            <div class="hour">
                <span class="green-verbage">Sun</span>
                <p>9 AM to 5 PM</p>
            </div>

            <div class="hour">
                <span class="green-verbage">Mon-Thu</span>
                <p>*</p>
            </div>

            <div class="hour">
                <span class="green-verbage">Fri</span>
                <p>11 AM to 10 PM</p>
            </div>

            <div class="hour">
                <span class="green-verbage">Sat</span>
                <p>9 AM to 8 PM</p>
            </div>
            <span class="extranote">*By Appointment</span>

        </section>

        <section class="infosection" id="info-contact">
            <img src={Contact} width="100"/>
            <span class="info-title">Contact</span>
            <hr></hr>

            <div class="contact">
                <p>(954)986-9089</p>
                <p>6401 Sheridan St</p>
                <p>Hollywood, FL 33024</p>
            </div>
        </section>
    </section>    
);

export default FrontInfo;