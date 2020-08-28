import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Paper, Grid, Toolbar, AppBar } from '@material-ui/core/';
import { Button, TextField } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { Search, Refresh, MoreVert } from '@material-ui/icons/';
import { Tab, Tabs, Menu, MenuItem } from '@material-ui/core/';
import FormBase from '../src/FormBase';

const lightColor = 'rgba(255, 255, 255, 0.7)';
const options = [
  'Opção 1',
  'Opção 2',
  'Opção 3',
];

const ITEM_HEIGHT = 48;

InfoWindow.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  classes: PropTypes.object.isRequired,
};

const styles = (theme) => ({
  paper: {
    margin: '40px auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '10px 16px',
  },
  secondaryBar: {
    zIndex: 0,
  },
  button: {
    borderColor: lightColor,
  },
});

function InfoWindow(props) {
  const { classes } = props;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="white"
        textColor="#009be5"
        position="static"
        elevation={0}

      >
        <Toolbar>
          <Grid container alignItems="center" spacing={10} >
            <Grid item xs margin="10px">
              <Typography color="inherit" variant="body2" component="h2">
                STATUS
                </Typography>
              <Typography color="inherit" variant="h5" component="h2">
                NENHUMA CAMPANHA <br />A DECORRER
                </Typography>

            </Grid>
            <Grid item >
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVert />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="white"
        position="static"
        textColor="#009be5"
        elevation={0}
      >
        <Grid container alignItems="center" >
          <Grid item>
            <Tabs value={0} textColor="primary" indicatorColor="primary">
              <Tab label="NEWSLETTER" />
              <Tab label="SMS" />
              <Tab label="A DECORRER" />
              <Tab label="CONCLUÍDAS" />
            </Tabs>
          </Grid>

          <Grid item >
            <Search className={classes.block} color="inherit" />
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              placeholder="PESQUISA LIVRE"
              InputProps={{
                disableUnderline: true,
                className: classes.searchInput,
              }}
            />
          </Grid>
        </Grid>
      </AppBar>
      <Paper className={classes.paper} elevation={0}>
        <div className={classes.contentWrapper}>
              <FormBase />
        </div>
      </Paper>
    </React.Fragment>
  );
}

export default withStyles(styles)(InfoWindow);