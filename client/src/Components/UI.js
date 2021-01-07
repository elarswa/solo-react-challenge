import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
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
        margin: 'auto',
        padding: theme.spacing(4),
    },
}));


const UI = () => {
    const classes = useStyles();
    const [state, setState] = useState("");
    const [rep, setRep] = useState("senators");
    const [results, setResults] = useState([]);

    const url = "https://localhost:3001";
    const backendTarget = `${url}/${rep}/${state}`;
    const getData = async () => {
        try {
            const res = await axios.get(backendTarget);
            if (res.data.success) {
                setResults(res.data.results);
            }
            else {
                setResults(null);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleRadio = (event) => {
        console.log(`RepType was ${rep}`);
        setRep(event.target.value);
        console.log(`RepType changed to ${rep}`);
    }

    return (
        <div className={classes.root}>
            <header>
                <h1>Who's My Representative?</h1>
            </header>
            <Grid container className={classes.grid} spacing={2}>
                <Grid container item xs={12} spacing={3} direction="row" justify="space-evenly">
                    <PaperRadio />
                </Grid>
            </Grid>
        </div>

    );


    function PaperRadio() {
        return (
            <React.Fragment>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <FormLabel>Select Representative Type</FormLabel>
                        <RadioGroup
                            aria-label="legType"
                            name="repType"
                            onChange={handleRadio}
                            value={rep}
                            
                        >
                            <FormControlLabel value="senators" control={<Radio />} label="Senate" />
                            <FormControlLabel value="representatives" control={<Radio />} label="House" />
                        </RadioGroup>
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }

};



export default UI;