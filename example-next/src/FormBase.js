import React, { useState } from 'react';
import { Grid, Typography, Container, RadioGroup, Radio, FormControlLabel, makeStyles } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { TextField } from '@material-ui/core';

const leDate = new Date();
const convertedDate = leDate.getDate() + "/" + (leDate.getMonth() + 1) + "/" + leDate.getFullYear();

const convertedTime = leDate.getHours() + ":" + leDate.getMinutes();
const initialValues = {
    id: 0,
    type: "newsletter",
    template: '0',
    list: '',
    dateSchedule: convertedDate,
    timeSchedule: convertedTime,
}

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function InfoWindow(props) {
    const [values, setValues] = useState(initialValues);
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid xs={2} >
                <PostAddIcon fontSize="large" />
                <Typography color="primary" variant="body2">
                    INICIAR NOVA CAMPANHA
                </Typography>
                <Typography variant="h6">
                    NEWSLETTER
                </Typography>
            </Grid>
            <form>
                <Grid container>
                    <Grid item xs={4}>
                        SELECIONE O TEMPLATE
                    </Grid>
                    <Grid item xs={4}>
                        LISTAS DE ENVIO
                    </Grid>
                    <Grid item xs={4}>
                        PROGRAMAÇÃO DO ENVIO
                    </Grid>
                </Grid>
                <Grid container style={{ textAlign: "center" }} >
                    <Grid item xs={4}>
                        <RadioGroup aria-label="template" name="template" value={values.template}>
                            <FormControlLabel value="0" control={<Radio />} />
                            <FormControlLabel value="1" control={<Radio />} />
                            <FormControlLabel value="2" control={<Radio />} />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={4}>


                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="dateSchedule"
                            type="date"
                            defaultValue={values.dateSchedule}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            id="timeSchedule"
                            type="time"
                            defaultValue={values.timeSchedule}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                        />
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    );
}