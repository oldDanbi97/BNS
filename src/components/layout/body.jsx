import React from 'react';

const Body = (props) => {
    return <div className="content">
        {
            props.children.map(child => child)
        }
    </div>
};

export default Body;