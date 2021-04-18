import React from 'react';
import {makeStyles, AppBar, Toolbar, IconButton, MenuIcon, Typography, Button, Container, Grid, Menu, MenuItem} from '@material-ui/core';
//import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme)=>({
  root: {
      height: '15vh',
  },
  appBar: {
      boxShadow: 'none',
  },
  widthbar: {
    width: '85%',
    margin: '0 auto',
  },
  Icon: {
    color: '#1d3537',
    paddingRight: theme.spacing(0.6),
  },
  TextBar: {
    fontSize: '10px',
    color: '#1d3537',
    paddingRight: theme.spacing(0.6)

  },
  Grow: {
    flexGrow: 1,
  }
}));

function Bar(){
    const classes = useStyles();

    return <div className = {classes.root}>
      <Container maxWidth="sm">
      <AppBar  style={{backgroundColor:'#d9d0c0'}} className = {classes.appBar}>
        <Toolbar className= {classes.widthbar}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        {/*<MenuIcon>*/}
        </IconButton>
        <FacebookIcon className={classes.Icon}/>
        <InstagramIcon className={classes.Icon}/>
        <LinkedInIcon 
        className={classes.Icon}/>
        <div  className={classes.Grow}></div>
        <EmailIcon className={classes.Icon}/>
        <p className={classes.TextBar}>tassi.l.godinho-62402L@adv.oa.pt</p>
        <PhoneIcon className={classes.Icon}/>
        <p className={classes.TextBar}>+351915672695</p>
        <WhatsAppIcon className={classes.Icon}/>
        </Toolbar>
      </AppBar>
      <AppBar position="static" className = {classes.appBar}>
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        {/*<MenuIcon />*/}
        </IconButton>
        <Typography variant="h6" className={classes.title}>
         News
        </Typography>
        <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      </Container> 
    </div>;

}

export default Bar;
