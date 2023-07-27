import { decode } from "jsonwebtoken";
import cookie from 'cookie'
import Grid from '@material-ui/core/Grid'
import { GetAvatar } from '../../public/logo'
import Button from '@material-ui/core/Button'
import { TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { getCountrySuggestions } from "../../lib/countries";

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
        width: "100%",
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function EditUser({ name, email, nationality }) {

    const [form, setForm] = useState({ email, nationality })
    const [disabled, setDisabled] = useState(false);
    const [errMessage, setMessage] = useState("")
    const [nationalitySuggestions, setSuggestions] = useState([])
    const classes = useStyles()

    useEffect(() => {
        if (!form.email || !form.nationality) {
            setDisabled(true)
        }
        else {
            setDisabled(false)
            setMessage("")
        }
    }, [form.email, form.nationality])

    const Suggestions = ({ suggestions }) => {
        return suggestions.map((suggestion) => (
            <li className="text-lg w-full text-black pl-4 bg-white border-b-2" key={suggestion.unicode} onClick={() => {
                setForm({
                    ...form,
                    nationality: suggestion.name
                })
                setSuggestions([])
            }}>
                {suggestion.emoji} {suggestion.name}
            </li>
        ));
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const request = await fetch('/api/edituser', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })

        const resp = await request.json()

        console.log(request.status)

        if (request.status !== 200) {
            setMessage(resp.message)
            setDisabled(true)
        }
    }

    return (
        <Grid container component="main">
            <Grid item xs={false} sm={4} md={4}>
                <div className="border-b-2 flex flex-col justify-center items-center p-5">
                    <GetAvatar />
                    <Button>Change avatar</Button>
                    <p className="text-lg font-bold text-center">Hi {name}</p>
                </div>
            </Grid>
            <Grid item xs={false} sm={8} md={8} className="p-5 border-l-2">
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        User details
                    </Typography>
                    <div className={classes.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            onChange={handleChange}
                            value={form.email}
                            error={!(form.email)}
                            helperText={!(form.email) ? "Email is empty" : ""}
                        />
                        <div className="relative">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="nationality"
                                label="Nationality"
                                type="nationality"
                                id="nationality"
                                onChange={(e) => {
                                    handleChange(e)
                                    setSuggestions(getCountrySuggestions(e.target.value))
                                }}
                                value={form.nationality}
                                error={!(form.nationality)}
                            />
                            <ul className="absolute w-full border-solid border-black-200 bg-white z-10">
                                {!!nationalitySuggestions.length && (
                                    <Suggestions
                                        suggestions={nationalitySuggestions}
                                    />
                                )}
                            </ul>
                        </div>
                        <Button
                            disabled={disabled}
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleSubmit}
                        >
                            Apply changes
                        </Button>
                        <div className="text-red-500 text-md p-2 text-center">{errMessage.length ? errMessage : ""}</div>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export function getServerSideProps(ctx) {
    try {
        const authCookie = ctx.req.headers.cookie;

        if (typeof authCookie !== 'undefined') {
            const user = decode(cookie.parse(authCookie).auth);

            if (!user) {
                ctx.res.writeHead(302, {
                    'Location': '/'
                });
                ctx.res.end();
            }

            return {
                props: {
                    ...user
                }
            }
        }
    }
    catch (err) {
        ctx.res.status(500).json({ err })
    }
}