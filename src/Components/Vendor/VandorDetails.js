import React from 'react';
import SimpleProcess from './SimpleProcess';
import VandorAdminPanel from './VandorAdminPanel';
import Readytohost from './Readytohost';

const VandorDetails = () => {
    return (
        <div>
            <SimpleProcess />
            <VandorAdminPanel />
            <Readytohost />
        </div>
    );
}

export default VandorDetails;
