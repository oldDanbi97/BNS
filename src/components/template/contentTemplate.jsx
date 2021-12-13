import React from 'react';

const ContentTemplate = (props) => {
    return <div className="content-area">
        {
            props.children
        }
    </div>
};

export default ContentTemplate;