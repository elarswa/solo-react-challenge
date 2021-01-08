import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    Select,
    FormControl,
    MenuItem,
    Grid,
    FormLabel,
    InputLabel,
    Paper,
    Box
} from '@material-ui/core';

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

    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        display: 'flex',
        alignItems: 'center',
    },
    select: {
        minWidth: 120,
    }
}));
//FIXME: set up actual name and abbr
const states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

export default function StateSelect({ state, callback }) {
    const classes = useStyles();

    const handleSelect = (event) => {
        callback(event.target.value);
    }

    return (
        <React.Fragment>
            <Grid item xs={6}>
                <Paper className={classes.paper} elevation={3}>
                    <FormLabel className={classes.label}>Select Your State</FormLabel>
                    <Box m={1}
                    display="flex"
                        alignItems="center"
                        justifyContent="center">
                        <FormControl className={classes.formControl}>
                            <InputLabel id="stateSelect"/>
                            <Select
                                className={classes.select}
                                onChange={handleSelect}
                                value={state}
                                labelId="stateSelect"
                            >
                                {states.map((stateItem, index) => {
                                    return <MenuItem key={index} value={stateItem}>{stateItem}</MenuItem>;
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                </Paper>
            </Grid>
        </React.Fragment >
    );
}
