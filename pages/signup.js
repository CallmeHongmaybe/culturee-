import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import Link from '@material-ui/core/Link';
import Router from 'next/router';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState, useEffect } from 'react'
import countryList from '../lib/country_names.json';

// input validation coming soon 

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Culturee
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    width: 200,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [form, setForm] = useState({ name: "", email: "", password: "", nationality: "" })
  const [errMessage, setMessage] = useState("")
  const [disabled, setDisabled] = useState(false)

  function validateEmail(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
  }

  useEffect(() => {
    if (!form.name && !form.password && !form.email && !form.nationality) setDisabled(true);
    else setDisabled(false);
  }, [form.name, form.email, form.nationality, form.password])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const login = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })

    const resp = await login.json()

    console.log(login.status)

    if (login.status !== 200) {
      setMessage(resp.message)
      setDisabled(true)
    }
    else {
      Router.push("/")
    }

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up to Culturee
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="name"
                autoFocus
                onChange={handleChange}
                error={!(form.name)}
                helperText={!(form.name) ? "Username is empty" : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                error={!(form.email) || !validateEmail(form.email)}
                helperText={!(form.email) ? "Username is empty" : !validateEmail(form.email) ? "Email syntax is not valid" : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                error={!(form.password)}
                helperText={!(form.password) ? "Username is empty" : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl} error={!(form.nationality)}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                  Nationality
              </InputLabel>
                <Select
                  labelId="demo-simple-select-placeholder-label-label"
                  id="demo-simple-select-placeholder-label"
                  name="nationality"
                  value={form.nationality}
                  onChange={handleChange}
                  displayEmpty
                  className={classes.selectEmpty}
                >
                  <MenuItem value="" key="">
                    <em>None</em>
                  </MenuItem>
                  {
                    countryList.map((country) =>
                      <MenuItem value={country.name} key={country.name}>
                        <em>{country.name}</em>
                      </MenuItem>
                    )
                  }
                </Select>
                <FormHelperText>{!(form.nationality) ? "Nationality is missing" : ""}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            disabled={disabled}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <div className="text-red-500 text-md p-2 text-center">{errMessage ? (errMessage.length ? errMessage : "") : ""}</div>
          <Grid container justify="flex-end">
            <Grid item>
              <Link variant="body2" onClick={() => Router.push('/login')}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

// Quan Hong - yomama