import EventsDetailsContent from '@/Components/AllEvents/EventsDetailsContent';
import EventsDetailsHero from '@/Components/AllEvents/EventsDetailsHero';
import React from 'react';

const Page = () => {
    return (
        <div>
            <EventsDetailsHero />
            <EventsDetailsContent />
        </div>
    );
}

export default Page;
