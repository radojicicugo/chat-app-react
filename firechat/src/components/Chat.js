import React, {useState, useEffect, useRef} from 'react';
import SignOut from './SignOut';
import {auth, db } from '../fire';
import SendMessage from './SendMessage';
import {Input, Button } from '@material-ui/core';
import { axios } from 'axios';



function Chat(props) {

    const scroll = useRef()
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        db.collection('messages').orderBy('text').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])


    return (
        <div>
            <SignOut/>
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
            
        </div>
    );
}

export default Chat;