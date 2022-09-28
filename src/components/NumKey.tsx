import React from "react";
import PropTypes from "prop-types";

function NumKey(props: any) {
    return (
        <div className={"font-bold text-xl w-1/3 h-full rounded-xs flex justify-center items-center " + props.extraStyle}>
            {props.name}
        </div>
    )
}

NumKey.propTypes = {
    name: PropTypes.string.isRequired,
    extraStyle: PropTypes.string
}

export default NumKey;