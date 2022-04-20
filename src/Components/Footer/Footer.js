import s from './Footer.module.css'
import {Box, IconButton, TextField} from "@mui/material";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import {useDispatch, useSelector} from "react-redux";
import {addMessageThunkCreator} from "../../redux/messages-reducer";
import {useState} from "react";

function Footer() {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.usersInfo.currentUser);

    const [message, setMessage] = useState('');

    return (
        <Box className={s.container}>
            <TextField onChange={(e) => setMessage(e.target.value)} fullWidth placeholder={'Type a message...'} variant="outlined"/>
            <IconButton color={'primary'} onClick={() => dispatch(addMessageThunkCreator(currentUser, message))}>
                <SendRoundedIcon className={s.sendIcon} style={{fontSize: '30px'}}/>
            </IconButton>
        </Box>

    );
}

export default Footer;