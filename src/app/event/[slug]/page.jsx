import React from 'react';

const Page = ({ params }) => {
    // Use the slug from params to fetch data or perform any other logic
    const { slug } = params;

    return (
        <div>
            <h1> Page {slug}</h1>
            {/* Add your page content here */}
        </div>
    );
};

export default Page;
