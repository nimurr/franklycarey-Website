'use client';
import DontMissOut from '@/Components/Home/DontMissOut';
import EventsNearYou from '@/Components/Home/EventsNearYou';
import ExplorebyCategory from '@/Components/Home/ExplorebyCategory';
import Hero from '@/Components/Home/Hero';
import Subscribtion from '@/Components/Home/Subscribtion';
import TrendingNow from '@/Components/Home/TrendingNow';
import Loading from '@/Components/others/Loading';
import { useGetDemoDataQuery } from '@/redux/fetures/Demo/demoDataGet';
import React from 'react';

const Page = () => {

    const { data, isLoading } = useGetDemoDataQuery();
    console.log(data)

    return (
        <div className=''>
            <Hero />
            <DontMissOut />
            <ExplorebyCategory />
            <EventsNearYou />
            <TrendingNow />
            <Subscribtion />
        </div>
    );
}

export default Page;
