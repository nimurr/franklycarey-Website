import AllActivitiesHero from '@/Components/AllEvents/AllActivitiesHero';
import EventsCategories from '@/Components/AllEvents/EventsCategories';
import React from 'react';

const Page = () => {
    return (
        <div className='md:p-0 p-5'>
            <AllActivitiesHero />
            <EventsCategories />
        </div>
    );
}

export default Page;
