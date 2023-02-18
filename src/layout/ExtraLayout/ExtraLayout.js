import React from 'react';
import { Outlet } from 'react-router-dom';

const ExtraLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default ExtraLayout;