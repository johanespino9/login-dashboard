import React from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';

import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import { useHistory } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';

import Visibility from '@material-ui/icons/Visibility';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Input, Grid, Button } from '@material-ui/core';

const users = [
  {
    username: 'johanespino',
    password: '123456789',
  },
  {
    username: 'juanespino',
    password: '123456789',
  },
  {
    username: 'joaoespino',
    password: '123456789',
  },
  {
    username: 'johnespino',
    password: '123456789',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(8),
  },
  loginCard: {
    margin: 'auto',
    padding: theme.spacing(2),
    width: '50%',
    textAlign: 'center',
  },
  input: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
    margin: theme.spacing(1),
  },
  button: {
    background: '#1890FF',
    borderRadius: '4px',
    width: '35%',
    color: 'white',
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const [values, setValues] = React.useState({
    amount: '',
    username: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    validUser: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleClickLogin = () => {
    const { username, password } = values;
    const validUser = users.find(
      ({ username: user, password: pass }) =>
        user === username && pass === password
    );

    if (validUser) {
      console.log('Usuario valido');
      setValues({ ...values, validUser: true });
      localStorage.setItem('logged', true);
      localStorage.setItem('username', username);
      history.push('/');
    }
  };

  return (
    <div>
      <Card className={classes.loginCard} elevation={3}>
        <h1>Inicio de Sesión</h1>
        <Grid className={classes.margin}>
          <FormControl>
            <InputLabel htmlFor="username">Usuario</InputLabel>
            <Input
              id="username"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <PersonIcon />
                  </IconButton>
                </InputAdornment>
              }
              onChange={handleChange('username')}
              value={values.username}
            />
          </FormControl>
        </Grid>
        <Grid className={classes.margin}>
          <FormControl>
            <InputLabel htmlFor="password">Contraseña</InputLabel>
            <Input
              id="password"
              type={values.showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    aria-label="toggle password visibility"
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={handleChange('password')}
              value={values.password}
            />
          </FormControl>
        </Grid>
        <Grid>
          <Button className={classes.button} onClick={handleClickLogin}>
            Entrar
          </Button>
        </Grid>
      </Card>
    </div>
  );
};

export default Login;
