'use client';
import DontMissOut from '@/Components/Home/DontMissOut';
import ExplorebyCategory from '@/Components/Home/ExplorebyCategory';
import Hero from '@/Components/Home/Hero';
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
        </div>
    );
}

export default Page;
