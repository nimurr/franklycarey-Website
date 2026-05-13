import EventsDetailsContent from '@/Components/AllEvents/EventsDetailsContent';
import EventsDetailsHero from '@/Components/AllEvents/EventsDetailsHero';
import React from 'react';

const Page = () => {
    return (
        <div>
            <div className=''>
                <EventsDetailsHero />
            </div>
            <div className=''>
                <EventsDetailsContent />
            </div>
        </div>
    );
}

export default Page;
