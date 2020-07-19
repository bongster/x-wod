import React, { useState, useRef, useEffect } from "react";
import { Container, FormControl, FormLabel, TextField, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50%",
    textAlign: "center",
  },
  display: {
    marginTop: theme.spacing(1),
    textAlign: "center",
  }
}));
const Timer = () => {
  const classes = useStyles();
  const [time, setTime] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const minuteRef = useRef(minute);
  minuteRef.current = minute;
  const secondRef = useRef(second);
  secondRef.current = second;

  useEffect(() => {
    let timer;
    if (isStart) {
      timer = setTimeout(() => {
        if (minute == 0 && second == 0) {
          clearTimeout(timer);
        } else if (second == 0) {
          setSecond(60);
          setMinute(minute - 1);
        } else {
          setSecond(second - 1);
        }
      }, 1000);
    }
    return function cleanup() {
      clearTimeout(timer);
    }
  });
  const onStart = (e) => {
    e.preventDefault();
    console.log("clicked", minute);
    setMinute(time);
    setIsStart(true);
  };
  return (
    <>
    <Container className={classes.root}>
      <form onSubmit={(e) => onStart(e)}>
        <TextField id="timer" label="Set minute" variant="outlined" onChange={({target}) => setTime(target.value)} value={time}/>
        <br />
        <br />

        <Button type="submit" variant="contained" color="primary">Start</Button>
      </form>
    </Container>
    <Container className={classes.display}>
      {minute.toString().padStart(2, '0')}: {second.toString().padStart(2, '0')} 
    </Container>
    </>
  )
}

export default Timer;