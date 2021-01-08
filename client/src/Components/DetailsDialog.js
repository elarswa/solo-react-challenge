import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetailsDialog({ open, data, callback }) {

    const toggle = () => {
        callback(!open);
    };

    const Link = () => {
        if (data.link) {
            return (
                <div>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell align="left">
                                    <a href={data.link}>Go To Website</a>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            );
        }
        return null;
    }

    const District = () => {
        if (data.district) {
            return (
                <div>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell align="left">District:</TableCell>
                                <TableCell align="right">{data.district}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            );
        }
        return null;
    }

    const details = () => (
        <div>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell align="left">Office:</TableCell>
                        <TableCell align="right">{data.office}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell align="left">Phone:</TableCell>
                        <TableCell align="right">{data.phone}</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    );



    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{data.name}</DialogTitle>
                <DialogContent>
                    <District />
                    {details()}
                    <Link />
                </DialogContent>
                <DialogActions>
                    <Button onClick={toggle} color="secondary" variant="contained">
                        Done
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}