import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Dashboard from '@material-ui/icons/Dashboard';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 700,
    alignItems: "center"
  },
  tabs: {
    overflow: "visible",
  },
  newIndicator: {
    left: 0
  },
  newTabWrapper: {
    flexDirection: "row"
  }
}));

export default function Sidebar() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} >
      <Tabs
        classes={{indicator: classes.newIndicator}}
        centered="true"
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        textColor="primary"
        mr={8}
      >
        <Tab classes={{wrapper: classes.newTabWrapper}} icon={<Dashboard />} label="Item One" {...a11yProps(0)} />
        <Tab classes={{wrapper: classes.newTabWrapper}} icon={<Dashboard />} label="Item Two" {...a11yProps(1)} />
        <Tab classes={{wrapper: classes.newTabWrapper}} icon={<Dashboard />} label="Item Three" {...a11yProps(2)} />
        <Box borderTop={1} pt={7} mt={5} mb={2}>
          <Typography variant="subtitle1"> A Decorrer</Typography>
        </Box>
        
        <Tab classes={{wrapper: classes.newTabWrapper}} icon={<Dashboard />} label="Item Four" {...a11yProps(3)} />
        <Tab classes={{wrapper: classes.newTabWrapper}} icon={<Dashboard />} label="Item Five" {...a11yProps(4)} />
    </Tabs>
    <TabPanel value={value} index={0}>
      Item One
    </TabPanel>
    <TabPanel value={value} index={1}>
      Item Two
    </TabPanel>
    <TabPanel value={value} index={2}>
      Item Three
    </TabPanel>
    
    <TabPanel value={value} index={3}>
      Item Four
    </TabPanel>

    <TabPanel value={value} index={4}>
      Item Five
    </TabPanel>
  </div>

  );
}
