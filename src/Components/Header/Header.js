import s from './Header.module.css'
import {Box} from "@mui/material";
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';

function Header() {

    return (
        <Box className={s.container}>
            <ForumRoundedIcon color="primary" fontSize={'medium'} onClick={() => {
                throw new Error('Oh no!')
            }}/>
            <h1>Web Chat</h1>
        </Box>

    );
}

export default Header;