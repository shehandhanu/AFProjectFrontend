import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';
import CookieService from '../../API/Cookie'
import { useHistory } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUser } from '../../actions/userActions';
import { getNotification } from '../../actions/notificationActions';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        marginRight: theme.spacing(1),
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    hbutton: {
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1),
        color: '#fffff0',
        textTransform: 'none',
        backgroundColor: '#3c52b2',
    }
}));

const Header = () => {

    const [user, setUser] = useState(false)
    const [name, setname] = useState()
    const [type, settype] = useState()
    const history = useHistory();

    const dispatch = useDispatch();

    const data = useSelector(state => state.user)
    const auth = useSelector(state => state.auth)

    useEffect(() => {

        dispatch(getUser());

        dispatch(getNotification())

        const token = CookieService.get()
        if (!token) {
            setUser(false)
        } else {
            setUser(true)
            setData(data)
            toast.success('Welcome ' + name)
        }

    }, [dispatch, auth])

    const setData = (data) => {
        setname(data.user.fullName)
        settype(data.user.role)
    }

    console.log(type);

    const logout = () => {
        CookieService.remove();
        toast.success(`Logout Success`)
        history.push('/')
        setUser(false)
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <ToastContainer />
                <Toolbar>
                    <Typography className={classes.title} variant="h4" noWrap>
                        <Link to={'/'} style={{ textDecoration: "none", color: "#fffff0" }}>
                            Black Code
                        </Link>
                    </Typography>
                    <Link to={'/'} href="#hero" style={{ textDecoration: "none", color: "#fffff0" }}><Button color="inherit">Home</Button></Link>
                    <a href='#about'><Button className={classes.hbutton}>ABOUT US</Button></a>
                    <a href='#team'><Button className={classes.hbutton}>TEAM</Button></a>
                    <a href='#contactus'><Button className={classes.hbutton}>CONTACT US</Button></a>
                    <Link to={'/leatestsessions'} style={{ textDecoration: "none", color: "#fffff0" }}><Button color="inherit">Leatest Sessions</Button></Link>
                    <Link to={'/researchpapers'} style={{ textDecoration: "none", color: "#fffff0" }}><Button color="inherit">Research Papers</Button></Link>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    {!user ?
                        <div>
                            <Link to={'/signin'} style={{ textDecoration: "none", color: "#fffff0" }}><Button color="inherit">Sign In</Button></Link>
                            <Link to={'/signup'} style={{ textDecoration: "none", color: "#fffff0" }}><Button color="inherit">Sign Up</Button></Link>
                        </div>
                        :
                        <div>
                            <Button size="medium" onClick={handleClick} style={{ width: "200px" }} color="inherit">
                                {name}
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {user ?
                                    <MenuItem onClick={handleClose}>
                                        <div>
                                            <Link to={'/addresearch'} style={{ textDecoration: "none", color: "#00000f" }}>
                                                <Button style={{ width: "200px" }} color="inherit">Submit Research Papers</Button>
                                            </Link>
                                        </div>
                                    </MenuItem>
                                    : null}
                                {user ?
                                    <MenuItem onClick={handleClose}>
                                        <div>
                                            <Link to={'/sessionpraposal'} style={{ textDecoration: "none", color: "#00000f" }}>
                                                <Button style={{ width: "200px" }} color="inherit">Sessions Praposals</Button>
                                            </Link>
                                        </div>
                                    </MenuItem>
                                    : null}
                                {type == "Reviewer" || type == "Admin" ?
                                    <MenuItem onClick={handleClose}>
                                        <div>
                                            <Link to={'/reviewresearch'} style={{ textDecoration: "none", color: "#00000f" }}>
                                                <Button style={{ width: "200px" }} color="inherit">Review Research Document</Button>
                                            </Link>
                                        </div>
                                    </MenuItem>
                                    : null}
                                {type == "Editor" || type == "Admin" ?
                                    <MenuItem onClick={handleClose}>
                                        <div>
                                            <Link to={'/sessionrequestapprovel'} style={{ textDecoration: "none", color: "#00000f" }}>
                                                <Button style={{ width: "200px" }} color="inherit">Approve Session Request</Button>
                                            </Link>
                                        </div>
                                    </MenuItem>
                                    : null}
                                {type == "Admin" ?
                                    <MenuItem onClick={handleClose}>
                                        <Link to={'/admin'} style={{ textDecoration: "none", color: "#00000f" }}>
                                            <Button style={{ width: "200px" }} color="inherit">Admin Panel</Button>
                                        </Link>
                                    </MenuItem>
                                    : null}


                                <MenuItem onClick={handleClose}>
                                    <Link to={'/profile'} style={{ textDecoration: "none", color: "#00000f" }}>
                                        <Button style={{ width: "200px" }} color="inherit">Profile</Button>
                                    </Link>
                                </MenuItem>
                            </Menu>
                            <Tooltip title="Notifications">
                                <IconButton color="inherit" onClick={handleClick} >
                                    <Badge badgeContent={17} color="secondary">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Logout">
                                <IconButton
                                    onClick={logout}
                                    color="inherit">
                                    <ExitToAppIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;

