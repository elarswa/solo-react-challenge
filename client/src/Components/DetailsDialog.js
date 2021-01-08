import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

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
            <a href={data.link}>Go To Website</a>
        );
    }
    return null;
}

const District = () => {
    if (data.district) {
        return (
            <h4>District: {data.district}</h4>
        );
    }
    return null;
}

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
          <DialogContentText id="alert-dialog-slide-description">
           <District />
           <h4>Office: {data.office}</h4>
           <h4>Phone: {data.phone}</h4>
           <Link />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggle} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}