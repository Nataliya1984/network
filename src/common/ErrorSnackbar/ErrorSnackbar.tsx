import React, {useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import {useDispatch} from "react-redux";
import {setErrorAC} from "../../components/redux/auth-reducer";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

type ErrorSnackbarType={
    error:null|string
}

export function ErrorSnackbar(props:ErrorSnackbarType) {
    //const [open, setOpen] = useState(true)
    // 1 идем в reducer и создаем значание error:null|string.(null - когда ошибки нет, и string - если будет приходить ошибка)

    const dispatch= useDispatch()
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
       // setOpen(false)
        //диспатчим AC, что бы всплывашка закрывалась
        dispatch(setErrorAC(null))
    }
    return (
        <Snackbar open={props.error !== null} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity='error' sx={{width: '100%'}}>
                {props.error}
            </Alert>
        </Snackbar>
    )
}
