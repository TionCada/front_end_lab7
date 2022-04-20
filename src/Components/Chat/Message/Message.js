import s from './Message.module.css'
import {Box} from "@mui/material";
import {useSelector} from "react-redux";

const Message = ({username, message}) => {

    const currentUser = useSelector(state => state.usersInfo.currentUser);

    return (
        <Box className={s.container}>
            <Box className={username === currentUser ? `${s.ownMessageBody}` : `${s.anotherMessageBody}`}>
                <p className={s.messageText}>{message}</p>
            </Box>
            <p className={s.username}>{username}</p>
        </Box>

    );
}

export default Message;