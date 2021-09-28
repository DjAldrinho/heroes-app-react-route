import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export const ButtonLinkComponent = ({location, name, customClass}: any) => {

    const defaultClass = [
        "block mt-4",
        "lg:inline-block",
        "lg:mt-0",
        "text-white",
        "hover:text-orange-200"
    ];

    const otherClass = [
        ...defaultClass,
        ...customClass,
    ];

    return (
        <>
            <Link to={location}
                  className={otherClass.join(" ")}>
                {name}
            </Link>
        </>
    )
}

ButtonLinkComponent.propTypes = {
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    customClass: PropTypes.array
}


ButtonLinkComponent.defaultProps = {
    customClass: []
}
