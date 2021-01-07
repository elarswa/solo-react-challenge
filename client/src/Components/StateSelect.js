import React, { useEffect, useState } from 'react';
import { Select, InputLabel, FormControl, FormHelperText, MenuItem } from '@material-ui/core'
const states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

const StateSelect = props => {


    return (
        <FormControl>
            <InputLabel>Select Your State</InputLabel>
            <Select
                multiple={true}

            >
                {states.map((state, index)=>{
                    return <MenuItem key={index}>{state}</MenuItem>;
                })}
            </Select>
        </FormControl>
    );
}

export default StateSelect;