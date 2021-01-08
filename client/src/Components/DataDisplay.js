import React, { useState } from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
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

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 16,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
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
        return function () { // prevent the onClick getting called on render
            if (data) {
                setModalData(data);
            }
            setModal(!modalOpen);
        }
    }
    const list = () => (
        <div
            className={classes.fullList}

        >
            <Table stickyHeader={true}>
                <TableHead >
                    <StyledTableRow >
                        <StyledTableCell align="center">Name</StyledTableCell>
                        <StyledTableCell align="left">Party</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {results.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell align="center">
                                <Button onClick={toggleModal(row)} variant="contained" color="default">
                                    {row.name}
                                </Button>
                            </TableCell>
                            <TableCell align="left">{row.party}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );

    return (
        <div>
            <DetailsDialog open={modalOpen} data={modalData} callback={toggleModal(null)} />
            <Drawer
                anchor="bottom"
                open={open}
                variant="persistent"
            >
                <IconButton onClick={toggle}><ExitIcon />Close</IconButton>
                {list()}
            </Drawer>
        </div>
    );
}