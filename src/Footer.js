import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';

import Grid from '@material-ui/core/Grid';

import Toolbar from '@material-ui/core/Toolbar';

import { withStyles } from '@material-ui/core/styles';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme) => ({
  
});

function Footer(props) {
  const { classes, onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            
          </Grid>
        </Toolbar>
      </AppBar>
      
    </React.Fragment>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Footer);