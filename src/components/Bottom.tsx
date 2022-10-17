import React from "react";
import PropTypes from "prop-types";

function Bottom(props: any) {
    return (
        <div className={"p-2 mb-2 rounded " + props.extraStyle} onClick={props.onClick} data-testid={"numpad"}>
            {props.name}
        </div>
    )
}

Bottom.propTypes = {
    extraStyle: PropTypes.string,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default Bottom;