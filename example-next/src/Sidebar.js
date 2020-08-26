import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import UpdateIcon from '@material-ui/icons/Update';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PostAddIcon from '@material-ui/icons/PostAdd';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';

function a11yProps(index) {
  return {
    id: `vertical-window-${index}`,
    'aria-controls': `vertical-infowindow-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "10px",
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: "lightgrey",
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      color: "#009be5",
    },
  },
  itemCategory: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
  subSubTitle: {
    fontWeight: "bold",
    paddingLeft: "10px",
  }
}));

export default function Sidebar() {

  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>

      <List component="nav" aria-label="main dashboard">
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          className={clsx(classes.item, classes.itemCategory)}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="DASHBOARD" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          className={clsx(classes.item, classes.itemCategory)}
        >
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText primary="LISTAS DE CONVIDADOS" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
          className={clsx(classes.item, classes.itemCategory)}
          autoFocus
        >
          <ListItemIcon>
            <PostAddIcon />
          </ListItemIcon>
          <ListItemText primary="CAMPANHAS" />
        </ListItem>
      </List>
      <Box mb={8}>
        <Divider />
      </Box>

      <Typography className={classes.subSubTitle}>
        A Decorrer
      </Typography>
      <List component="nav" aria-label="secondary mailbox folder" >
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
          className={clsx(classes.item, classes.itemCategory)}
        >
          <ListItemIcon>
            <UpdateIcon />
          </ListItemIcon>
          <ListItemText primary="NEWSLETTER LISBOA L1" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
          className={clsx(classes.item, classes.itemCategory)}
        >
          <ListItemIcon>
            <UpdateIcon />
          </ListItemIcon>
          <ListItemText primary="SMS LISBOA L2" />
        </ListItem>
      </List>
    </div>

  );
}
