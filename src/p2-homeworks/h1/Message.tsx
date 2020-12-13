import React from "react";
import s from './Message.module.css'


interface MessageProps {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageProps) {
    return (
        <div className={s.message}>
            <img src={props.avatar} className={s.img} alt=""/>
            <div className={s.text}>
                <div className={s.name}>{props.name}</div>
                <div className={s.textMessage}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;
