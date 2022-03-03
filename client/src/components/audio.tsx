import React, { useEffect, memo, useState } from "react";
import 'antd/dist/antd.css';

interface IProps {
    music: string
}

const baseURL: any = process.env.REACT_APP_BASE_URL //URL servidor
const audio = new Audio()

const AudioTag: React.FC<IProps> = (props: any) => {
    //const [music, setMusic] = useState(props.music)
    let music = props.music
    //console.log(music)

    audio.src = `${baseURL}/audio/${music}`


    return (
        <audio controls src={`${baseURL}/audio/${music}`} >
        </audio>
    )
}

export default AudioTag