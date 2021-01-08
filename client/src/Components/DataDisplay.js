import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ExitIcon from '@material-ui/icons/ExitToApp';
import {
    Button,
    Drawer,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    IconButton,
} from '@material-ui/core';
import DetailsDialog from './DetailsDialog';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
        backgroundColor: 'grey',
    },
});

export default function ResultsDrawer({ open, results, callback }) {
    const classes = useStyles();
    const [modalOpen, setModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const toggle = () => {
        callback(!open);
    };

    const toggleModal = (data) => {
        setModal(!modalOpen);
        setModalData(data);
    }

    const list = () => (
        <div
            className={classes.fullList}

        >
            <Table stickyHeader={true}>
                <TableHead >
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Party</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {results.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell align="center">
                                <Button onClick={toggleModal(row)} color="primary">
                                    {row.name}
                                </Button>
                            </TableCell>
                            <TableCell align="center">{row.party}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );

    return (
        <div>
            <Drawer
                anchor="bottom"
                open={open}
            // variant="persistent"
            >
                <IconButton onClick={toggle}><ExitIcon /></IconButton>
                {list()}
            </Drawer>
            <DetailsDialog open={modalOpen} data={modalData} callback={toggleModal} />
        </div>
    );
}