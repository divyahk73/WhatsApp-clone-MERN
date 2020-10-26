import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlined from "@material-ui/icons/SearchOutlined"
import AttachFile from "@material-ui/icons/AttachFile"
import MoreVert from "@material-ui/icons/MoreVert"
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"
import React, { useState } from 'react'
import axios from "./axios"
import "./Chat.css"
function Chat({messages}){

    const [input,setInput] = useState("");
    const sendMessage = async(e) =>{
        e.preventDefault();
        await axios.post('/messages/new',{
            message:input,
	        name:"DEMO APP",
	        timestamp:"in a demo timestamp",
	        received:false
        })
        setInput("");
    }
    return(
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map((message)=>(
                     <p className={`chat__message ${message.received && "chat__reciever"}`}>
                     <span className="chat__name">{message.name}</span>
                     {message.message}
                     <span className="chat__timestamp">
                         {message.timestamp}
                     </span>
                 </p>
                ))}
            
                <p className="chat__message chat__reciever">
                    <span className="chat__name">Soony</span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Soony</span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                
              
            </div>
            <div className="chat__footer">
                <InsertEmotionIcon />
                <form>
                    <input value ={input} onChange={(e)=> setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage}type="submit">send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}
export default Chat