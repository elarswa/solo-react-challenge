import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel,
    Paper
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        minHeight: 150,
        minWidth: 150,
        width: 'auto',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        textAlign: 'center',

    }
}));


export default function RepSelect({ rep, callback }) {
    const classes = useStyles();

    const handleRadio = (event) => {
        callback(event.target.value);
    }

    return (
        <React.Fragment>
            <Grid item xs={6}>
                <Paper className={classes.paper} elevation={3}>
                    <FormLabel className={classes.label}>Select Representative Type</FormLabel>
                    <Box m={1}
                    display="flex"
                        alignItems="center"
                        justifyContent="center">
                        <RadioGroup
                            aria-label="legType"
                            name="repType"
                            onChange={handleRadio}
                            value={rep}

                        >
                            <FormControlLabel value="senators" control={<Radio />} label="Senate" />
                            <FormControlLabel value="representatives" control={<Radio />} label="House" />
                        </RadioGroup>
                    </Box>

                </Paper>
            </Grid>
        </React.Fragment>
    );
}