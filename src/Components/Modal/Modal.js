import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import {TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {addNewUser} from "../../redux/users-reducer";

const Modal = ( {open, setIsDialogOpened} ) => {

    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    return (
        <Dialog open={open}>
            <DialogTitle>Please, Enter Username</DialogTitle>
            <DialogContent dividers>
                <TextField onChange={(e) => setUsername(e.target.value)} variant="outlined"/>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {
                    setIsDialogOpened(false)
                    dispatch(addNewUser(username))
                }}>Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default Modal;