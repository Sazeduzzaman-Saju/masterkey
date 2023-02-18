import React from 'react';
import useWebTitle from '../../hook/useWebTitle';

const About = () => {
    useWebTitle('This is About')
    return (
        <div>
            <h1>This is About Page</h1>
        </div>
    );
};

export default About;