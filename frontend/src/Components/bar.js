import React from 'react';
import LoginIcon from './login';
import logo from '../res/logo3.png';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    App_bar: {
        backgroundColor: 'transparent',
        boxShadow: '0px 0px 0px',
        position: 'static',
        color: 'white',
    },

    title:{
        flexGrow: 1,
    },
    smallIcon: {
        width: '4%',
        height: '4%',
        minHeight: '30px',
        minWidth: '30px',
    },
    profileIcon: {
        height:'30px',
        width:'30px',
        borderRadius: '50%',
    },
}));

const Bar = (props) => {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <AppBar className={ classes.App_bar }>
                <ToolBar>
                    
                    <img src={logo} alt='logo' className={ classes.smallIcon }/>
                    <Typography variant="h6" className={classes.title}>
                        
                    </Typography>

                    <IconButton size='medium' href='/play'  color='inherit' >
                        <OfflineBoltIcon fontSize='large'>add_circle</OfflineBoltIcon>
                    </IconButton>
                    <IconButton size='medium' href='/about'  color='inherit' >
                        <InfoIcon fontSize='large'>add_circle</InfoIcon>
                    </IconButton>
                    <LoginIcon />
                    /
                    <IconButton href='/profile'>
                    <img 
                    src='https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1610412742557313&height=300&width=300&ext=1612484090&hash=AeRVSYFlJRxODyQiS2o' 
                    className={classes.profileIcon}
                    alt='Spotify profile logo'
                    />
                    </IconButton>
                    
                    
                    
                </ToolBar>
            </AppBar>
        </div>
    );
}

export default Bar;