'use client';
import DontMissOut from '@/Components/Home/DontMissOut';
import EventsNearYou from '@/Components/Home/EventsNearYou';
import ExplorebyCategory from '@/Components/Home/ExplorebyCategory';
import Hero from '@/Components/Home/Hero';
import Subscribtion from '@/Components/Home/UserSubscribtion';
import TrendingNow from '@/Components/Home/TrendingNow'; 
import React from 'react';
import ForEventCreators from '@/Components/Home/ForEventCreators';
import ForDrivers from '@/Components/Home/ForDrivers';
import ShowMobileApp from '@/Components/Home/ShowMobileApp';
import ReadytoExperience from '@/Components/Home/ReadytoExperience';

const Page = () => {
 

    return (
        <div className=''>
            <Hero />
            <DontMissOut />
            <ExplorebyCategory />
            <EventsNearYou />
            <TrendingNow />
            <Subscribtion />
            <ForEventCreators />
            <ForDrivers />
            <ShowMobileApp />
            <ReadytoExperience />
        </div>
    );
}

export default Page;
