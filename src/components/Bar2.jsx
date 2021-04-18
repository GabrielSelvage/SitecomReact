import React from 'react';
import {makeStyles, AppBar, Toolbar, IconButton, MenuIcon, Typography, Button, Container, Grid, Menu, MenuItem} from '@material-ui/core';
//import MenuIcon from '@material-ui/icons/Menu';
import logo from '../img/logo.png'
import { TableRow } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  root: {
      height: '20vh',
  },
  appBar: {
      boxShadow: 'none',
  },
  widthbar: {
    width: '86%',
    margin: '0 auto',
    right: 8,
  },
  Icon: {
    paddingTop: '16px',
    paddingLeft: '24px',
  },
  Grow: {
    flexGrow: 1,
    paddingRight: theme.spacing(0.6),
    marginRight: '24px'
  },
  button: {
    fontSize: '12px',
    color: '#1b373a',
    marginTop: '16px',
    background: '#ffffff',
    animation: 'pulse 1.5s infinite',
    fontFamily: '',
    '&:hover': {
      backgroundColor: '#1b373a',
      fontSize: '12px',
      marginTop: '16px',
      color: '#d9d0c0',

    }
  }
}));

function Bar2(){
    const classes = useStyles();

    return <div style={{ backgroundColor: "#ffffff"}} className = {classes.root}>
      <AppBar className = {classes.appBar} style={{ marginTop: 60, paddingBottom: 10, backgroundColor: "#ffffff"}}>
        <Toolbar className = {classes.widthbar}>
        <img src={logo}  className={classes.Icon}/>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        {/*<MenuIcon />*/}
        </IconButton>
        <div className={classes.Grow}></div>
        <div>
        <Button className={classes.button} >Quem Sou</Button>
        <Button className={classes.button}>Área de Atuação</Button>
        <Button className={classes.button}>Blog</Button>
        <Button className={classes.button}>Contato</Button>
        </div>
        </Toolbar>
      </AppBar>
    </div>;
}

export default Bar2
