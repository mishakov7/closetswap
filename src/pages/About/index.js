import React from 'react';

import FeatureImage from './FeatureImages/featureimage';
import MainFeatureImage from './MainFeatureImage/mainFeatureImage';
import SmallFeatureImage from './SmallFeature/smallfeature';

import iconimage1 from '../../assets/icons/people-icon1.svg';
import iconimage2 from '../../assets/icons/people-icon3.svg';
import iconimage3 from '../../assets/icons/people-icon2.svg';
import iconimage4 from '../../assets/icons/vip-icon.svg';

import'./FeatureImages/featureimage.css';
import'./MainFeatureImage/mainFeatureImage.css';
import'./SmallFeature/smallfeature.css';
import './about.css';

const About = () => ( 
    <div class="aboutPage">
        <MainFeatureImage
            mainBgImage = "mainfeature-bg"
            mainVerbage = "About Us"
        />
        <div class="aboutverbagesection">
            <div class="aboutContainer">
                <p>Extreme Rage Paintball Park is rated #1 in the entire South Florida Area.  We have been serving, Fort Lauderdale, Hollywood, Miami Dade, and Broward County for many years.  Extreme Rage Park is centrally located and easily accessible from all the major highways.  Both Fort Lauderdale and MIA airports are close by as well.  It is a family owned and operated business.  We have over 20 years of experience in the paintball industry.  We have three playing areas which include two wooded and one air ball fields.</p>
                <p>Both the wooded area and the air ball fields are lit up at night with lights.  The wooded areas consist of hills, tunnels, sniper towers, machine gun bunkers, and even little huts to simulate a village.</p>
                <p>We also have a five bedroom house to simulate close combat quarters.  We also offer scenario games both at night and during the day with smoke machines, grenades, etc. in the wooded area.</p>
                <p>Extreme Rage Paintball Park specializes in birthday parties, corporate team building events, bachelor parties, youth groups, summer camp activities, church outings, family &amp; friends get together, fraternity and sorority challenges, weekend warriors, and even the adrenaline junkies.</p>
            </div>
        </div>
        <FeatureImage
            bgImage = "abtfeature1-bg"
            iconSource = {iconimage1}
            verbage = "our fields are perfect for both recreational and competitive players"
        />
        <div class="aboutverbagesection1">
            <div class="aboutContainer">
                <p>For recreational players you get to experience the adrenaline flowing as you play in a fast pace game just like the pros. ​The competitive players get to have an edge on the competition as the field lay outs are set up before the competitions to practice on them.  ER Park sets up the field to cover all the leagues (PSP Events, NPPL, Sunshine Series, and USPL).</p>
            </div>
        </div>
                {/* first little image and content */}
        <SmallFeatureImage
            bgImage = "smallfeature3-bg"
            iconSource = {iconimage3}
            verbage = "we can accommodate everyone"
        />

        <div class="aboutverbagesection2">
            <div class="aboutContainer">
                <p>Our facilities have a full line of rental equipment to accommodate around 150 participants at one time with equipment.  ER Park’s equipment consists of Electronic Vibes for markers, chest and neck protectors, camouflage jumpsuits, harnesses, full head shields, and also electronic hoppers.  At Extreme Rage Paintball Park electronic markers are not an upgrade it's standard equipment.  ​We also offer low caliber markers, that are great for newbies and kids!</p>
            </div>
        </div>
        <FeatureImage
            bgImage = "abtfeature2-bg"
            iconSource = {iconimage2}
            verbage = "ER Park invites you to come out and experience the adrenaline rush of the fastest growing extreme sport"
        />
        {/* small text under full width image */}
        <div id = "fineprint">Your entry to the park and the rental equipment is not on a time frame, it is unlimited use and play.
 ER Park also has a pro shop with new equipment if you desire to purchase. </div>

        {/* second little image and content */}
        <SmallFeatureImage
            bgImage = "smallfeature4-bg"
            iconSource = {iconimage4}
            verbage = "our staff is ready to assist and provide you with a safe and enjoyable time at the park."
        />

    </div>
);

export default About;