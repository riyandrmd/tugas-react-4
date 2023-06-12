import React from 'react'

const Tombol = (props) => {
    const buttonStyle = {
        borderRadius: 5,
        fontSize : 16,
        fontWeight: "bold",
        backgroundColor : "yellow",
        margin : 2,
        padding : 5
    }

    return (
        <button style={buttonStyle} onClick={props.handle}>{props.text}</button>
    )
}

export default Tombol