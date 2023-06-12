import { useState } from 'react'
import Tombol from './Tombol'


const Smartphone = (props) => {

    const [color, setColor] = useState(true);
    const [displayy, setDisplay] = useState(true);
    const [textt, setText] = useState(true)

    const handleBtnLike = () =>{
        setColor(!color)
        setText(!textt)
    }

    const handleDesc = () =>{
        setDisplay(!displayy)
    }

    const cardStyle = {
        backgroundColor : color ? "green" : "red",
        width: 200,
        borderRadius: 15,
        padding: 10,
        color: "white"
    }




    return (
        <div style={cardStyle}>
            <img src={props.src} alt="image.jpg" />
            <div>
                <h4 style={{ fontSize: 16 }}>{props.name}</h4>
                <p>{props.color}</p>
                <p>{props.price}</p>
                <p style={{display : displayy ? "none" : "inline"}}>{props.desc}</p>
                <div style={{display : "flex"}}>
                    <Tombol text= {textt ? "Like" : "Cancel" }  handle = {handleBtnLike} />
                    <Tombol text="More.." handle = {handleDesc} />
                </div>
            </div>
        </div>
    )
}

export default Smartphone