import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import {
    Grid,
    Snackbar,
    Button,
    Box,

} from '@material-ui/core';

import RepSelect from './RepSelect';
import StateSelect from './StateSelect';
import DataDisplay from './DataDisplay';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        justifyContent: 'center',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minHeight: 140,
        width: 'auto',
        margin: 'auto',
    },
    grid: {
        justifyContent: 'center',
        display: 'flex',
        margin: 'auto',
        padding: 10,
    },
}));


const UI = () => {
    const classes = useStyles();
    const [state, setState] = useState("");
    const [rep, setRep] = useState("");
    const [results, setResults] = useState([]);
    const [wOpen, setWOpen] = useState(false);
    const [dataOpen, setDataOpen] = useState(false);
    const [warningMsg, setWarn] = useState("");

    const url = "http://localhost:3001";
    const backendTarget = `${url}/${rep}/${state}`;
    const getData = async () => {
        try {
            const res = await axios.get(backendTarget);
            if (res.data.success) {
                setResults(res.data.results);
                setDataOpen(true);
            }
            else {
                setWarn("No Results");
                setWOpen(true);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const getRepSelect = (val) => {
        setRep(val);
    }
    const getStateSelect = (val) => {
        setState(val);
    }

    const warningClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setWOpen(false);
    }

    const handleSubmit = () => {
        if (rep === "") {
            setWarn("Please select Senate or House");
            setWOpen(true);
        } else if (state === "") {
            setWarn("Please select a State");
            setWOpen(true);
        } else {
            getData();
        }
    }

    const dataClose = () => {
        setDataOpen(false);
    }

    return (
        <div className={classes.root}>
            <header className="App-header">
                <h1>Who's My Representative?</h1>
            </header>
            <Box className={classes.grid}>
                <Grid className={classes.grid} container spacing={2}>
                    <Grid container item xs={12} spacing={3} direction="row" justify="space-evenly">
                        <RepSelect rep={rep} callback={getRepSelect} />
                        <StateSelect state={state} callback={getStateSelect} />
                    </Grid>
                    <Snackbar open={wOpen} autoHideDuration={5000} onClose={warningClose}>
                        <Alert onClose={warningClose} severity="error">{warningMsg}</Alert>
                    </Snackbar>
                    <Box className={classes.grid}>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={handleSubmit}
                        >Submit</Button>
                    </Box>
                </Grid>
            </Box>
            <DataDisplay results={results} open={dataOpen} callback={dataClose} />
        </div>

    );
};



export default UI;