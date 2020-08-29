import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Sidebar from '../src/Sidebar';
import InfoWindow from '../src/InfoWindow';
import Appbar from '../src/Appbar';
import Footer from '../src/Footer';
import { Typography } from '@material-ui/core';

let theme = createMuiTheme({
    palette: {
        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#006db3',
        },
    },
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    shape: {
        borderRadius: 8,
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
    mixins: {
        toolbar: {
            minHeight: 64,
        },
    },
});

theme = {
    ...theme,
    overrides: {
        MuiDrawer: {
            paper: {
                backgroundColor: '#18202c',
            },
        },
        MuiButton: {
            label: {
                textTransform: 'none',
            },
            contained: {
                boxShadow: 'none',
                '&:active': {
                    boxShadow: 'none',
                },
            },
        },
        MuiTabs: {
            root: {
                marginLeft: theme.spacing(1),
            },
            indicator: {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                backgroundColor: theme.palette.common.white,
            },
        },
        MuiTab: {
            root: {
                textTransform: 'none',
                margin: '0 16px',
                minWidth: 0,
                padding: 0,
                [theme.breakpoints.up('md')]: {
                    padding: 0,
                    minWidth: 0,
                },
            },
        },
        MuiIconButton: {
            root: {
                padding: theme.spacing(1),
            },
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: 4,
            },
        },
        MuiListItemText: {
            primary: {
                fontWeight: theme.typography.fontWeightMedium,
            },
        },
        MuiListItemIcon: {
            root: {
                color: 'inherit',
                marginRight: 0,
            },
        },
        MuiAvatar: {
            root: {
                width: 32,
                height: 32,
            },
        },
    },
};

const drawerWidth = 256;

const styles = {
    root: {
        display: 'flex',
        minHeight: '100vh',

    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
        alignSelf: "center",
    },
    app: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        flex: 1,
        padding: theme.spacing(0, 0, 3, 5),
        background: '#eaeff1',
    },
    footer: {
        padding: theme.spacing(2),
        background: '#eaeff1',
    },
};

function Paperbase(props) {
    const { classes } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const leDate = new Date();
    const dayMonth = leDate.getDate() + "." + leDate.getMonth() + "." + leDate.getFullYear();
    const hourMinute = leDate.getHours() +":" + leDate.getMinutes() +"h";
    return (
        <ThemeProvider theme={theme}>
            <Appbar />
            <div className={classes.root}>
                <CssBaseline />

                <nav className={classes.drawer}>

                    <Hidden smUp implementation="js">
                        <Sidebar
                            PaperProps={{ style: { width: drawerWidth } }}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                        />
                    </Hidden>
                    <Hidden xsDown implementation="css" >
                        <Sidebar PaperProps={{ style: { width: drawerWidth } }} />
                    </Hidden>
                    <Typography variant="caption">Último log in: {dayMonth} . {hourMinute}</Typography>
                </nav>
                <div className={classes.app}>

                    <main className={classes.main}>
                        <InfoWindow />
                    </main>
                </div>
            </div>
        </ThemeProvider>
    );
}

Paperbase.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Paperbase);