import React from 'react'

export default function Alert(props) {

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.substring(1);
    }


    return (
        <div style={{height:"60px"}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalizeFirstLetter(props.alert.type)}</strong>: {props.alert.msg}
            </div>}
        </div>
    )
}
