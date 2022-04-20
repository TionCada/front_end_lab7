import s from './Chat.module.css'
import {Box} from "@mui/material";
import {useSelector} from "react-redux";
import Message from "./Message/Message";
import {useEffect} from "react";

function Chat({initializeMessages}) {

    const messagesList = useSelector(state => state.messagesInfo.messagesList);

    useEffect(() => {
        window.addEventListener('storage', () => {
            initializeMessages()
        });
        return () => {
            window.removeEventListener('storage', () => {
                initializeMessages()
            })
        }
    }, [])

    return (
        <Box className={s.container}>
            {messagesList.map((item) => {
                return <Message username={item.user} message={item.message}/>
            })}
        </Box>

    );
}

export default Chat;