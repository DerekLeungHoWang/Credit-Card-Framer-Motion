import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, FormHelperText, InputLabel, TextField, Input, OutlinedInput, InputBase, Grid } from '@material-ui/core';
import { FormContainer } from './Styles';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { DatePicker } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        border: '1px solid black',
        width: "50%",
        maxWidth: "680px",
        borderRadius: "20px",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        bottom:'130px',
        boxShadow: '0 15px 15px rgba(0, 0, 0, 0.5)'

    },
    textField: {
        // margin: theme.spacing(3),

        width: '100%',
    },
    textField2: {
        //margin: theme.spacing(3),
        width: '100%',
        // marginLeft:theme.spacing(5),
        //  marginRight:theme.spacing(5),
    },
    multiInput: {
        width: '100%',
        // paddingTop:theme.spacing(2),

    }
}));


function PaymentForm(props) {
    const classes = useStyles();
  
    const {handleNumberChange,number} = props
    const [selectedDate, handleDateChange] = useState();

    return (
        <div className={classes.root}>
            <Grid container
                xs={12}
        
                direction="row"
                justify='center'
                alignItems="center"
            >
                <Grid container item xs={10}
                    direction="row"
                    justify='center'
                    alignItems="center">
                    <TextField
                        id="outlined-full-width"
                        label="Card Number"
                        className={classes.textField}
                        margin="normal"
                        value={number}
                        variant="outlined"
                        onChange={handleNumberChange}
                    />
                </Grid>
                <Grid container item xs={10} direction="row" justify='center' alignItems="center">
                    <TextField
                        id="outlined-full-width"
                        label="Card Holder"
                        className={classes.textField}
                        margin="normal"

                        variant="outlined"
                    />
                </Grid>
                <Grid
                    container
                    item
                    xs={10}
                    direction="row" justify='space-between' alignItems="center"
                   
                >

                <Grid
                    container item
                    direction="row"
                    justify='space-around'
                    alignItems="center"
                    
                    xs={5} md={5}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            className={classes.textField}
                            views={["year", "month"]}
                            label="Year and Month"
                            format="MM/yy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            inputVariant="outlined"
                            margin="normal"
                        />


                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid
                    container item
                    direction="row"
                    justify='center'
                    alignItems="center"
                    xs={5} md={5}>
                    <TextField

                        className={classes.textField}
                        id="outlined-full-width"
                        label="CVC"
 margin="normal"
                        variant="outlined"
                    />
                </Grid>

                </Grid>
            </Grid>
        </div >

    )
}



export default PaymentForm

