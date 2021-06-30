import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import VisibilityIcon from '@material-ui/icons/Visibility';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import SessionView from '../sessoinview/SessionView'

import CookieService from '../../../API/Cookie'

import { getSessions, requestAdminApprovelSessions, joinSessions } from '../../../actions/sessionActions';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    table: {
        minWidth: 650,
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    input: {
        display: 'none',
    },
}));

const AdminResearch = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch()
    const redirect = location.search ? location.search.split('=')[1] : '/'

    const { loading, sessions, error } = useSelector(state => state.sessions);
    const { user } = useSelector(state => state.user)

    useEffect(() => {

        const token = CookieService.get()
        if (!token) {
            history.push(redirect)
        }

        dispatch(getSessions());

    }, [history, redirect, open]);

    const requestAdmin = (key) => {
        console.log('requested ' + key);
        dispatch(requestAdminApprovelSessions(key))
    }

    const ignoreSession = () => {
        console.log('ignore');
    }

    const joinSession = (id) => {
        console.log('View' + id);
        dispatch(joinSessions(id))
        setOpen(false);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        console.log("clicked");
        setOpen(false);
        console.log(open);
    };

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <TableContainer component={Paper}>
                        <Typography component="h1" className={classes.title} variant="h4" align="center">
                            All Sessions
                        </Typography>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Session Name</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="right">Researcher Name</TableCell>
                                    <TableCell align="right">Session Price</TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sessions && sessions.map((row) => (
                                    <TableRow key={row._id}>
                                        <TableCell component="th" scope="row">{row.sessionName}</TableCell>
                                        <TableCell align="right">
                                            {row.approvel.isApproved == 0 ?
                                                <div className="badge bg-warning text-wrap">
                                                    Pending
                                                </div>
                                                :
                                                null}

                                            {row.approvel.isApproved == 1 ?
                                                <div className="badge bg-warning text-wrap">
                                                    Waiting Approvel
                                                </div>
                                                :
                                                null}

                                            {row.approvel.isApproved == 2 ?
                                                <div className="badge bg-primary text-wrap">
                                                    Approved
                                                </div>
                                                :
                                                null}

                                            {row.approvel.isApproved == 3 ?
                                                <div className="badge bg-danger text-wrap">
                                                    Rejected
                                                </div>
                                                :
                                                null}
                                        </TableCell>
                                        <TableCell align="right">{row.researcherName}</TableCell>
                                        <TableCell align="right">${row.sessionPrice}</TableCell>
                                        <div className={classes.input}>
                                            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                                                <AppBar className={classes.appBar}>
                                                    <Toolbar>
                                                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                                            <CloseIcon />
                                                        </IconButton>
                                                        <Typography variant="h6" className={classes.title}>
                                                            {row.sessionName}
                                                        </Typography>
                                                        <Button autoFocus color="inherit" onClick={() => joinSession(row._id)}>
                                                            Join Sessions
                                                        </Button>
                                                    </Toolbar>
                                                </AppBar>
                                                <SessionView post={row} />
                                            </Dialog>
                                        </div>
                                        <TableCell align="right">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                size="small"
                                                onClick={() => handleClickOpen(row)}
                                                className={classes.button}
                                                startIcon={<VisibilityIcon />}
                                            >
                                                View
                                            </Button>
                                            {row.approvel.isApproved == 0 ?
                                                <Button
                                                    variant="contained"
                                                    style={{ marginLeft: "5px", background: "#4caf50", color: "#fffff0" }}
                                                    size="small"
                                                    onClick={() => requestAdmin(row._id)}
                                                    className={classes.button}
                                                    startIcon={< CheckCircleIcon />}
                                                >
                                                    Request Admin
                                                </Button>
                                                :
                                                null}
                                            {row.approvel.isApproved == 1 ?
                                                <Button
                                                    disabled
                                                    variant="contained"
                                                    style={{ marginLeft: "5px" }}
                                                    size="small"
                                                    className={classes.button}
                                                    startIcon={< CheckCircleIcon />}
                                                >
                                                    Wait For Approvel
                                                </Button>
                                                :
                                                null}

                                            {row.approvel.isApproved == 2 ?
                                                <Button
                                                    variant="contained"
                                                    style={{ marginLeft: "5px", background: "#f44336", color: "#fffff0" }}
                                                    size="small"
                                                    className={classes.button}
                                                    onClick={ignoreSession}
                                                    startIcon={<RemoveCircleIcon />}
                                                >
                                                    Remove
                                                </Button>
                                                :
                                                null}

                                            {row.approvel.isApproved == 3 ?
                                                <Button
                                                    variant="contained"
                                                    style={{ marginLeft: "5px", background: "#4caf50", color: "#fffff0" }}
                                                    size="small"
                                                    onClick={requestAdmin}
                                                    className={classes.button}
                                                    startIcon={< CheckCircleIcon />}
                                                >
                                                    Request Admin
                                                </Button>
                                                :
                                                null}
                                        </TableCell>
                                    </TableRow>

                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </main>
        </div >
    );
}

export default AdminResearch;