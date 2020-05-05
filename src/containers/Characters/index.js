import React, { useState, useEffect } from 'react';
import { Card, makeStyles, Container, Grid } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  card: {
    width: 300,
    padding: 24,
    borderRadius: 8,
    cursor: 'pointer',
  },
  title: {
    textAlign: 'center',
  },
}));

const Characters = ({ characters: chars }) => {
  const classes = useStyles();
  const [characters, setCharacters] = useState([])

  const handleClick = (e, index) => {
    const selectedCharacter = characters[index]
    setCharacters([ ...characters, selectedCharacter.showDetails = !selectedCharacter.showDetails ])
  };

  useEffect( () => {
    setCharacters(chars.map(character => ({...character, showDetails: false})));
  }, []);


  

  return (
    <Container className={classes.root}>
      <h1 className={classes.title}>Personajes de Rick y Morty</h1>
      <Grid container spacing={3}>
        {characters.map(({ id, name, image, status, species, gender, showDetails }, index) => (
          <Grid key={index} index={index} item xs={12} sm={4} onClick={(e) => handleClick(e, index)}>
            <Card
              elevation={3}
              className={classes.card}
            >
              <h3>{name}</h3>
              <img src={image} alt="Personaje" />
              {!showDetails ? null : (
                <div>
                  <h4>Estado: {status}</h4>
                  <h4>Especie: {species}</h4>
                  <h4>Género: {gender}</h4>
                </div>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const mapState = state => ({
  characters: state.characters.array,
});

export default connect(mapState)(Characters);
