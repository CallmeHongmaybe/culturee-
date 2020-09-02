// you may need csrf token and session id for visitors
// create a pipeline between the poll and the trending list

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import fetch from "isomorphic-fetch";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Router from "next/router";
import cookie from 'cookie';
import { decode } from 'jsonwebtoken';
import Item from '../../../models/item'
import Polls from '../../../models/poll'
import dbConnect from '../../../utils/dbConnect'

// check if the field is empty <-- ez 
// check if game already exists in the db <-- medium
// check if the name exists IRL <-- Supadifficult

const dev = process.env.NODE_ENV !== "production";
const origin = dev ? "http://localhost:3000" : "https://culturee.now.sh";

function FormDialog({ country, category, authorized, sameCountry }) {
  const [open, setOpen] = useState(false);
  const [entry_name, setEntryName] = useState("");
  const [disabled, setDisabled] = useState() 

  console.log(`sameCountry = ${sameCountry}`)

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const saveResults = async () => {
    setOpen(false);
    try {
      const insertItem = await fetch(`${origin}/api/poll/${category}/${country}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          _id: entry_name
        }),
      });

      const resp = insertItem.json()
      console.log(resp.message)
    }
    catch (error) {
      console.log(error)
    }
  }

  const handleInput = (e) => {
    setEntryName(e.target.value)
    validate()
  }

  const validate = () => {
    (!entry_name) ? setDisabled(true) : setDisabled(false)
  }

  return (
    <div className="flex justify-center">
      <button
        className="
              bg-transparent 
              hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-6 
              py-4 mt-10 -mb-5 border border-blue-500 hover:border-transparent rounded"
        onClick={openDialog}
      >
        Nominate your favorite {category.replace("s", "")}
      </button>

      {
        authorized
          ?
          (
            sameCountry
              ? <Dialog
                open={open}
                onClose={closeDialog}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Add a new item</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Please enter name of your favorite {category}
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    onChange={handleInput}
                    fullWidth
                  />
                </DialogContent>

      <DialogActions>
                  <Button onClick={closeDialog} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={saveResults} color="primary" disabled={disabled}>
                    Submit
                  </Button>
                </DialogActions>
              </Dialog>
              : <Dialog
                open={open}
                onClose={closeDialog}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">You need to be from {country} to nominate new entries</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    If you are really from {country}, please head to the User Preferences to change your country accordingly
                  </DialogContentText>
                </DialogContent>
                <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button onClick={closeDialog} color="primary">
                    Dismiss
                  </Button>
                  <Button onClick={() => Router.push("/edituser")} color="primary">
                    Go to user preferences
                  </Button>
                </DialogActions>
              </Dialog>
          )
          : <Dialog
            open={open}
            onClose={closeDialog}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Join the Culturee community</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Sign up to nominate a new item and get an extra vote
          </DialogContentText>
            </DialogContent>

            <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
              <Button onClick={closeDialog} color="primary">
                Dismiss
          </Button>
              <Button onClick={() => { Router.push('/signup') }} color="primary">
                Sign up
          </Button>
            </DialogActions>
            <DialogContentText>
              <div className="text-center">Already have an account?
          <Link href="/login">
                  <a className="hover:text-blue-400">{"  "}Sign in</a>
                </Link>
              </div>
            </DialogContentText>
          </Dialog>
      }
    </div>
  );
}

function PollItem({ name, entry_name, votes, genre, totalVotes, reveal, mod }) {
  const [currentVotes, setVotes] = useState(votes);
  const recordVotes = useRef(votes);
  const [trashCan, showTrashCan] = useState(false)
  const [deleted, setDelete] = useState(false)

  const deleteEntry = async (e) => {
    try {
      e.stopPropagation()
      setDelete(true)
      const deleteItem = await fetch(`${origin}/api/poll/${genre}/${name}`, {
        method: 'DELETE',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          _id: entry_name
        }),
      });

      const resp = deleteItem.json()
      console.log(JSON.stringify(resp))
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    let dataSave = setTimeout(
      async () => {
        recordVotes.current = currentVotes;
        if (currentVotes > votes) {
          const update = await fetch(`${origin}/api/poll/${genre}/${name}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            // genre, id, itemName, votes
            body: JSON.stringify({
              itemName: entry_name,
              votes: recordVotes.current,
            }),
          });
          console.log(await (await update.json()).message);
        }
      }, 2000)
    return () => {
      return clearTimeout(dataSave);
    }
  }, [currentVotes]);

  var VOTE_PERCENTAGE = Math.ceil((currentVotes / totalVotes) * 100);
  return (
    <div
      key={votes}
      className="relative rounded m-5 
         flex justify-between items-center h-16 
         border-t border-b border-1 border-gray-500"
      onClick={() => setVotes(currentVotes + 1)}
      onMouseEnter={() => showTrashCan(true)}
      onMouseLeave={() => showTrashCan(false)}
      style={{
        display: deleted ? 'none' : 'flex'
      }}
    >
      <div
        className="p-5"
        style={{
          width: `${VOTE_PERCENTAGE}%`,
          backgroundColor: reveal ? "skyblue" : "transparent",
        }}
      >
        <div style={{ minWidth: "15vw" }} className="flex flex-row text-md">
          <p>{entry_name}</p>
          <div
            onClick={deleteEntry}
            style={{ cursor: 'pointer', display: mod ? 'block' : 'none' }}
          >
            {trashCan ? "🗑" : null}
          </div>
        </div>
      </div>
      <div style={{ visibility: reveal ? "visible" : "hidden" }}>
        {VOTE_PERCENTAGE}% / {currentVotes}
      </div>
    </div>
  );
}

export default function Poll({ data, name, category, authorized, sameCountry, mod }) {
  var { poll, expr } = JSON.parse(data);
  var totalVotes = poll.reduce((total, item) => {
    return total + item.votes
  }, 0);

  var [total, setTotalVotes] = useState(totalVotes);
  const [disabled, setDisabled] = useState((authorized && sameCountry) ? false : true);

  // {$each: [monday, tuesday, wednesday]}

  const migratePollsToList = async () => {
    try {
      const pipeline = await fetch(`${origin}/api/promote`, {
        method: 'PUT',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        redirect: 'follow',
        body: JSON.stringify({
          nameOfItem: (poll.sort((a, b) => {
            return b.votes - a.votes
          }).shift())._id,
          category,
          name,
        }),
      })

      const resp = await pipeline.json()
      console.log(resp.message)
    }
    catch (error) {
      console.log(error)
    }

    Router.push("/moderator/" + category )
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="text-blue-600 text-3xl text-center p-2">
          {" "}
        Here we'll vote these things below to appear in the trending list of{" "}
          {name} next month{" "}
        </div>
        <div className="text-gray-700 text-xl text-center pt-2">
          The poll updates in {new Date(expr.toString()).toString()}
        </div>
        <div className="text-gray-500 text-md text-center pt-2">
          Total votes: {total}
        </div>
        <ul>
          {poll.map(el => {
            return (
              <li
                key={el._id}
                className="h-12"
                style={{
                  opacity: disabled ? 0.7 : 1,
                  pointerEvents: mod ? "auto" : (disabled ? "none" : "auto"),
                }}
                onClick={() => {
                  setTotalVotes(total + 1);
                  setDisabled(true);
                }}
              >
                <PollItem
                  name={name}
                  style={{ height: "inherit" }}
                  entry_name={el._id}
                  votes={el.votes}
                  totalVotes={total}
                  reveal={disabled}
                  genre={category}
                  mod={mod}
                />
              </li>
            );
          })}
        </ul>
        <FormDialog country={name} category={category} authorized={authorized} sameCountry={sameCountry} />
        {
          mod
            ?
            <button
              className="
                bg-transparent self-center w-15
                hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-6 
                py-4 mt-10 border border-blue-500 hover:border-transparent rounded"
              onClick={migratePollsToList}
            >
              Update the poll
          </button>
            :
            null
        }
        <Link href="/country/[category]/[country]" as={`/country/${category}/${name}`}>
          <a className="text-center m-5 text-blue-500">Back to trending list</a>
        </Link>
        <Link href="/">
          <a className="text-center m-5 text-blue-500">Back to home</a>
        </Link>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  var { category, country } = ctx.query;
  var authCookie = ctx.req.headers.cookie;
  dbConnect()
  const results = await Polls[category].findById({ _id: country }).lean();
  var nameOfUser = authCookie ? decode(cookie.parse(authCookie).auth).name : undefined
  const theUser = await Item.users.findOne({ name: nameOfUser }).lean();

  // getting the Polls collection 
  // The top 3 in the poll shall be promoted to the trending list. The rest stays intact until next week. 

  return {
    props: {
      data: JSON.stringify(results),
      name: country,
      category: category,
      authorized: authCookie ? true : false,
      sameCountry: theUser ? (theUser.nationality === country) : false,
      mod: (theUser && theUser.mod) ? true : false
    }
  };
};

