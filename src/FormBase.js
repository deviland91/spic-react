import React, { useState } from 'react';
import { Grid, Typography, Radio, makeStyles, Divider, Switch } from '@material-ui/core';
import { PostAdd, MoreVert } from '@material-ui/icons/';

import { TextField, List, ListItem, IconButton, Menu, MenuItem } from '@material-ui/core';
import Button from "../controls/Button";

const leDate = new Date();
const convertedDate = leDate.getFullYear() + "-" + (leDate.getMonth() + 1) + "-" + leDate.getDate();

const convertedTime = leDate.getHours() + ":" + leDate.getMinutes();
const initialValues = {
    id: 0,
    type: "newsletter",
    template: 0,
    list: [],
    listCount: 2,
    dateSchedule: convertedDate,
    timeSchedule: convertedTime,
}
const List1 = [];
const List2 = [];
for (let index = 0; index < 50; index++) {
    List1.push(index);
    List2.push(index);
}

const options = [
    'Opção 1',
    'Opção 2',
    'Opção 3',
];

const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginRight: theme.spacing(1),
        width: 200,
    },
    typoSize: {
        fontSize: 15,
        fontWeight: "bold",
    },
    specialInput: {
        width: "0px",
        height: "0px",
    },
    specialImage: {
        filter: "brightness(1.8) grayscale(1) opacity(.7)"
    }
}));

export default function InfoWindow(props) {
    const [values, setValues] = useState(initialValues);
    const classes = useStyles();


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <Grid>
                <Grid container justify="flex-end" >
                    <Grid item>Mode<Switch color="primary" /></Grid>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <PostAdd fontSize="large" />
                    <Typography color="primary" variant="body2">
                        INICIAR NOVA CAMPANHA
                </Typography>
                    <Typography variant="h6">
                        NEWSLETTER
                </Typography>
                </Grid>
            </Grid>
            <form>
                <Grid container>
                    <Grid item xs={5}>
                        SELECIONE O TEMPLATE
                    </Grid>
                    <Grid item xs={4}>
                        LISTAS DE ENVIO
                    </Grid>
                    <Grid item xs={3}>
                        PROGRAMAÇÃO DO ENVIO
                    </Grid>
                </Grid>
                <Grid container justify="center" spacing={2}>
                    <Grid item xs={4} container justify="center" alignContent="center" spacing={2}>
                        <Grid item>
                            <input id="template1" className={classes.specialInput} type="radio" name="template" value="0" checked />
                            <label className={classes.specialImage} for="template1">
                                <img cursor="pointer" src="http://placehold.it/60x90/0bf/fff&text=A" />
                            </label>
                        </Grid>

                        <Grid item >
                            <input id="template2" className={classes.specialInput} type="radio" name="template" value="1" checked />
                            <label className={classes.specialImage} for="template2">
                                <img cursor="pointer" src="http://placehold.it/60x90/0bf/fff&text=B" />
                            </label>
                        </Grid>

                        <Grid item >
                            <input id="template3" className={classes.specialInput} type="radio" name="template" value="2" checked />
                            <label className={classes.specialImage} for="template3">
                                <img cursor="pointer" src="http://placehold.it/60x90/0bf/fff&text=C" />
                            </label>
                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                        <List>
                            <Divider />
                            <ListItem disableGutters>
                                <Grid item xs={6} sm={2}>
                                    <Radio name="list2" value={List2} checked value={List2} control={<Radio />} />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <Typography variant="caption" >LISTA. NEWSLETTER</Typography><br />
                                    <Typography className={classes.typoSize}>LISBOA L2</Typography>
                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    <Typography variant="caption" >LISTA</Typography><br />
                                    <Typography className={classes.typoSize} >{List2.length} CONVIDADOS</Typography>
                                </Grid>
                                <Grid item xs={6} sm={1}>
                                    <IconButton
                                        aria-label="more"
                                        aria-controls="long-menu"
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreVert />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: '20ch',
                                            },
                                        }}
                                    >
                                        {options.map((option) => (
                                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Grid>
                            </ListItem>
                            <Divider />
                            <ListItem disableGutters>
                                <Grid item xs={6} sm={2}>
                                    <Radio name="list1" value={List1} checked value={List1} control={<Radio />} />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <Typography variant="caption" >LISTA. NEWSLETTER</Typography><br />
                                    <Typography className={classes.typoSize}>LISBOA L1</Typography>
                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    <Typography variant="caption" >LISTA</Typography><br />
                                    <Typography className={classes.typoSize} >{List1.length} CONVIDADOS</Typography>
                                </Grid>
                                <Grid item xs={6} sm={1}>
                                    <IconButton
                                        aria-label="more"
                                        aria-controls="long-menu"
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreVert />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: '20ch',
                                            },
                                        }}
                                    >
                                        {options.map((option) => (
                                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Grid>

                            </ListItem>
                            <Divider />
                            <ListItem disableGutters style={{ textAlign: "right" }}>
                                <Typography variant="caption">- ADICIONAR LISTA</Typography>

                            </ListItem>

                        </List>

                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            id="dateSchedule"
                            type="date"
                            name="dateSchedule"
                            defaultValue={values.dateSchedule}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            id="timeSchedule"
                            type="time"
                            name="timeSchedule"
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
                <Grid container justify="flex-end">

                    <Button variant="contained" color="primary" size="large" text="- INICIAR ENVIO" type="submit" />
                </Grid>
            </form>
        </React.Fragment>
    );
}