import React from 'react';

const Confirmation = (props) => {
    return (
        <div>
            <p className="uk-display-block">
            {props.message}
            </p>
        </div>
    );
};

export default Confirmation;
