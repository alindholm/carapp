import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";


export default function EditCar(props) {
    //State
    const [car, setCar]=useState({brand: '', model: ''});
    const [open, setOpen]=useState(false); //is dialog open?
    //functions
    const handleClose=(event, reason)=> {
        if(reason!='backdropClick') //estää dialogin sulkeutumisen kun klikataan taustaa
        setOpen(false);
    }
    const handleInputChanged = (event)=> {
        setCar({...car, [event.target.name]: event.target.value})
    }
    const handleSave=()=> {
        props.addCar(car); //todo updateCar
        setOpen(false);
    }
    //return
        //addbutton (näkyy aina)
        //dialog (oletuksena piilossa)
    return(
        <>
        <Dialog
        open={open}
        onClose={handleClose}>
            <DialogTitle>New Car</DialogTitle>
            <DialogContent>
                <TextField
                label='Brand'
                name='brand'
                value={car.brand}
                onChange={handleInputChanged}></TextField>
                <TextField
                label='Model'
                name='model'
                value={car.model}
                onChange={handleInputChanged}></TextField>
            </DialogContent>
            <DialogActions>
                <Button
                onClick={handleClose}>Cancel</Button>
                <Button
                onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}