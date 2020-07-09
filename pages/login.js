import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Lovatnet } from "../public/logo";
import Router from 'next/router'
import { useState, useEffect } from 'react'
import { FormGroup } from "@material-ui/core";

// input validation coming soon 

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Culturee
      </Link>
      {" " + new Date().getFullYear() + "."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({

  root: {
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {

  const [form, setForm] = useState({ name: "", password: "" })
  const [disabled, setDisabled] = useState(false);
  const [errMessage, setMessage] = useState("")
  const classes = useStyles();

  useEffect(() => {
    if (!form.name || !form.password) {
      setDisabled(true)
    }
    else {
      setDisabled(false)
      setMessage("")
    }
  }, [form.name , form.password])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const login = await fetch('/api/signin', {
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
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={5}>
        <Lovatnet />
      </Grid>
      <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in to Culturee
          </Typography>
          <div className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Username"
              name="name"
              autoComplete="name"
              onChange={handleChange}
              value={form.name}
              error={!(form.name)}
              helperText={!(form.name) ? "Username is empty" : ""}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              value={form.password}
              error={!(form.password)}
              helperText={!(form.password) ? "Password is empty" : ""}
            />
            <Button
              disabled={disabled}
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Let Me In
            </Button>
            <div className="text-red-500 text-md p-2 text-center">{errMessage.length ? errMessage : ""}</div>
            <Grid container>
              <Grid item xs>
                <Link href="#" as="#">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link variant="body2" onClick={() => Router.push('/signup')}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
