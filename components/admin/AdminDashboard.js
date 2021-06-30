import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SwitchVideoIcon from '@material-ui/icons/SwitchVideo';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import PeopleIcon from '@material-ui/icons/People';
import AttachmentIcon from '@material-ui/icons/Attachment';

import Typography from '@material-ui/core/Typography';
import Title from './Title';

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
}));

const Dashboard = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <ListSubheader inset>Actions</ListSubheader>
          <Link to={'/admin'} style={{ textDecoration: "none", color: "#00000f" }}>
            <ListItem button>
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
          <Link to={'/admin/sessions'} style={{ textDecoration: "none", color: "#00000f" }}>
            <ListItem button>
              <ListItemIcon>
                <SwitchVideoIcon />
              </ListItemIcon>
              <ListItemText primary="Sessions" />
            </ListItem>
          </Link>
          <Link to={'/admin/research'} style={{ textDecoration: "none", color: "#00000f" }}>
            <ListItem button>
              <ListItemIcon>
                <InsertDriveFileIcon />
              </ListItemIcon>
              <ListItemText primary="Research Papers" />
            </ListItem>
          </Link>
          <Link to={'/admin/users'} style={{ textDecoration: "none", color: "#00000f" }}>
            <ListItem button>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
          </Link>
        </div>
        <Divider />
        <div>
          <ListSubheader inset>Sub Actions</ListSubheader>
          <Link to={'/admin/templtes'} style={{ textDecoration: "none", color: "#00000f" }}>
            <ListItem button>
              <ListItemIcon>
                <AttachmentIcon />
              </ListItemIcon>
              <ListItemText primary="Template Files" />
            </ListItem>
          </Link>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Title>Total Users</Title>
                <Typography component="p" variant="h4">
                  154
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                  on 15 March, 2019
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Title>Total Sessions</Title>
                <Typography component="p" variant="h4">
                  54
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                  on 15 March, 2019
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Title>Total Session Hours</Title>
                <Typography component="p" variant="h4">
                  1540
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                  on 15 March, 2019
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Title>Total Count Of Paticipant</Title>
                <Typography component="p" variant="h4">
                  2400
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                  on 15 March, 2019
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Title>Number Of Publication</Title>
                <Typography component="p" variant="h4">
                  625
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                  on 15 March, 2019
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Title>Number Of Editors</Title>
                <Typography component="p" variant="h4">
                  6
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                  on 15 March, 2019
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Title>Number Of Reviews</Title>
                <Typography component="p" variant="h4">
                  15
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                  on 15 March, 2019
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Title>Number Of Admins</Title>
                <Typography component="p" variant="h4">
                  3
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                  on 15 March, 2019
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Dashboard;