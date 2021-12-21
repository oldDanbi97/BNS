import React from 'react';

const Body = props => {
    return <div className="content">
        {
            props.children
        }
    </div>
};

export default Body;