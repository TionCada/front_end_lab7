import s from './Background.module.css'
import {Box} from "@mui/material";

function Background( {children} ) {

    return (
        <Box className={s.container}>
            {children}
        </Box>
    );
}

export default Background;