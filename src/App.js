import s from './App.module.css'
import Background from "./Components/Background/Background";
import {Box} from "@mui/material";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {useEffect, useState} from "react";
import Modal from "./Components/Modal/Modal";
import {connect} from "react-redux";
import {getCurrentUser} from "./redux/users-reducer";
import Chat from "./Components/Chat/Chat";
import {initializeMessages} from "./redux/messages-reducer";

function App({currentUser, getCurrentUser, initializeMessages}) {

    const [isDialogOpened, setIsDialogOpened] = useState(false);

    useEffect(() => {
        getCurrentUser()
        initializeMessages()
        setIsDialogOpened(!currentUser)

    }, [currentUser, getCurrentUser, initializeMessages])

    return (
        <Box className={s.container}>
            <Background>
                <Header/>
                <Modal open={isDialogOpened} setIsDialogOpened={setIsDialogOpened}/>
                <Chat initializeMessages={initializeMessages}/>
                <Footer/>
            </Background>
        </Box>
    );
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.usersInfo.currentUser
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        initializeMessages: () => {
            let action = initializeMessages();
            dispatch(action);
        },
        getCurrentUser: () => {
            let action = getCurrentUser();
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);