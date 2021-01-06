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

const actionB = {
    height:'50px',
    width:'50px',
    borderRadius: '50%',
    opacity: '60%',
    marginTop: '10px'
};

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
    logo:{
        height:'60px',
        width:'60px',
        opacity: '80%',
        marginTop: '5px'
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
        height:'43px',
        width:'43px',
        borderRadius: '50%',
        marginTop: '7px'
    },
    actionButton:actionB,
}));

const Bar = (props) => {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <AppBar className={ classes.App_bar }>
                <ToolBar>
                    <IconButton 
                    size='medium' 
                    href='/'  
                    color='inherit' >
                        <img src={logo} className={classes.logo} alt='App logo'/>
                    </IconButton>

                    <Typography variant="h6" className={classes.title}></Typography>
                    
                    <IconButton 
                    size='medium' 
                    href='/play'  
                    color='inherit' >
                        <OfflineBoltIcon className={ classes.actionButton } >add_circle</OfflineBoltIcon>
                    </IconButton>

                    <IconButton 
                    size='medium' 
                    href='/about'  
                    color='inherit' >
                        <InfoIcon className={ classes.actionButton }>add_circle</InfoIcon>
                    </IconButton>

                    <LoginIcon style={actionB}/>
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