import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Container from '@material-ui/core/Container';
import { Link } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 0.05,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

export default function Bannerbar() {

  const classes = useStyles();

  const menuId = 'primary-search-account-menu';

  return (
    <Container maxWidth="sm">
      <IconButton aria-label="settings" color="primary">
        <Badge color="primary">
          <DashboardIcon />
          <Link>Dashboard</Link>
        </Badge>
      </IconButton>
      <IconButton aria-label="settings" color="primary">
        <Badge color="primary">
          <DashboardIcon />
          <Link>Dashboard</Link>
        </Badge>
      </IconButton>
      <IconButton aria-label="settings" color="primary">
        <Badge color="primary">
          <DashboardIcon />
          <Link>Dashboard</Link>
        </Badge>
      </IconButton>
    </Container>

  );
}
