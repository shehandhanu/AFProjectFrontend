import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SwitchVideoIcon from '@material-ui/icons/SwitchVideo';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import PeopleIcon from '@material-ui/icons/People';
import AttachmentIcon from '@material-ui/icons/Attachment';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawerPaper: {
        marginTop: 65,
        position: 'inherit',
        whiteSpace: 'nowrap',
        width: drawerWidth,
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
}));

const AdminResearch = () => {
    const classes = useStyles();

    const [status, setstatus] = useState("1")

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    return (
        <div className={classes.root}>

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="center">States</TableCell>
                                    <TableCell align="center">Calories</TableCell>
                                    <TableCell align="center">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="center">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="center">Protein&nbsp;(g)</TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">{row.name}</TableCell>
                                        <TableCell align="center">
                                            {status == "1" ?
                                                <div className="badge bg-primary text-wrap">
                                                    Approved
                                                </div>
                                                :
                                                null}

                                            {status == "2" ?
                                                <div className="badge bg-warning text-wrap">
                                                    Pending
                                                </div>
                                                :
                                                null}

                                            {status == "3" ?
                                                <div className="badge bg-danger text-wrap">
                                                    Rejected
                                                </div>
                                                :
                                                null}
                                        </TableCell>
                                        <TableCell align="center">{row.calories}</TableCell>
                                        <TableCell align="center">{row.fat}</TableCell>
                                        <TableCell align="center">{row.carbs}</TableCell>
                                        <TableCell align="center">{row.protein}</TableCell>
                                        <TableCell align="center">
                                            <IconButton aria-label="delete">
                                                <VisibilityIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </main>
        </div>
    );
}

export default AdminResearch;