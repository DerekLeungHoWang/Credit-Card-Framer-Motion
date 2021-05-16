import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, FormHelperText, InputLabel, TextField, Input, OutlinedInput, InputBase, Grid, InputAdornment, Button } from '@material-ui/core';
import { FormContainer } from './Styles';
import DateFnsUtils from '@date-io/date-fns';
import { motion, useAnimation, transform, } from "framer-motion";
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        bottom: '60px',
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
    const controls = useAnimation();
    const { handleNumberChange, number, handleNameChange, handleFocusCVC,handleBlurCVC } = props
    const [selectedDate, handleDateChange] = useState();


    const maxLength = 19;
    const charactersRemaining = maxLength - number.replace(/ /g, "").replace(/#/g, "").length - 3;
    const mapRemainingToColor = transform([2, 6], ["#ff008c", "#ccc"]);
    const mapRemainingToSpringVelocity = transform([0, 5], [130, 0]);

    useEffect(() => {
        if (charactersRemaining > 6) return;

        controls.start({
            scale: 1,
            transition: {
                type: "spring",
                velocity: mapRemainingToSpringVelocity(charactersRemaining),
                stiffness: 700,
                damping: 80
            }
        });
    }, [number.length]);


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
                        value={number.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()}
                        variant="outlined"
                        onChange={handleNumberChange}
                        inputProps={{
                            maxlength: maxLength

                        }}
                        InputProps={{

                            endAdornment: (
                                <InputAdornment position="end"


                                >
                                    <motion.div animate={controls}
                                        style={{
                                            color: mapRemainingToColor(charactersRemaining),
                                            fontSize: '25px',
                                            fontWeight: 600
                                        }}>
                                        {charactersRemaining}
                                    </motion.div>

                                </InputAdornment>
                            )
                        }}

                    />
                </Grid>
                <Grid container item xs={10} direction="row" justify='center' alignItems="center">
                    <TextField
                        id="outlined-full-width"
                        label="Card Holder"
                        className={classes.textField}
                        margin="normal"
                        onChange={handleNameChange}
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
                            onFocus={() => props.handleFocusCVC()}
                            onBlur={() => props.handleBlurCVC()} />
                        
                    </Grid>

                </Grid>
                <Grid container item xs={12} direction="row" justify='center' alignItems="center">
                    <Button variant="contained" size="large" color="primary">Pay</Button>
                </Grid>

            </Grid>

        </div >

    )
}



export default PaymentForm

