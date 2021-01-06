import React, { useEffect, useState } from 'react';
import logo from '../res/logo.png';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: '1',
    },
    App_bar: {
        backgroundColor: 'transparent',
        boxShadow: '0px 0px 0px',
        position: 'sticky',
        color: 'white',
    },

    title:{
        flexGrow: '1',
    },
    smallIcon: {
        width: '5%',
        height: '5%',
    },
}));

const Bar = (props) => {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <AppBar className={ classes.App_bar }>
                <ToolBar>
                    <img src={logo} alt='logo' className={ classes.smallIcon }/>
                    <div classsName={ classes.title }>
                        Hello
                    </div>
                    <IconButton edge="end" size='Medium' href='/'>
                        <LockOpenIcon />
                    </IconButton>
                </ToolBar>
            </AppBar>
        </div>
    );
}

export default Bar;