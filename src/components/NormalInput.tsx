import React from "react";
import PropTypes from "prop-types";

function NormalInput(props: any) {
    return (
        <div className={"w-full mt-2"}>
            <input
                className={"w-full mt-2 p-2 border text-center font-bold text-xl font-san text-slate-600 rounded-md placeholder:italic placeholder:font-light"}
                type={props.typeInput}
                placeholder={props.inputPlaceholder}
                onBlur={props.onBlur}
            />
        </div>
    )
}

NormalInput.propTypes = {
    typeInput: PropTypes.string.isRequired,
    inputPlaceholder: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
}

export default NormalInput;