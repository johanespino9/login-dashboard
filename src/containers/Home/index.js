import React from 'react';
import { makeStyles, Container, Grid, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
  },
  welcome: {
    textAlign: 'center',
  },
  button: {
    background: '#1890FF',
    borderRadius: '4px',
    width: '35%',
    color: 'white',
  },
}));

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  const username = localStorage.getItem('username');

  const handleClickShowCharacters = () => {
    history.push('/characters');
  };

  return (
    <Container className={classes.root}>
      <Grid>
        <div className={classes.welcome}>
          <h1>Bienvenido {username}</h1>
          <Button
            className={classes.button}
            onClick={handleClickShowCharacters}
          >
            Ver Personaje de Rick y Morty
          </Button>
        </div>
      </Grid>
    </Container>
  );
};

export default Home;
