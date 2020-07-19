import React, { useState, useRef, useEffect } from "react";
import { Container, Checkbox, FormLabel, TextField, Button, makeStyles, FormGroup, FormControlLabel } from "@material-ui/core";

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
  const [repeat, setRepeat] = useState(false);
  const [time, setTime] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    let timer;
    if (isStart) {
      timer = setTimeout(() => {
        if (minute == 0 && second == 0) {
          if (repeat) {
            setMinute(time);
            setSecond(0);
          } else {
            clearTimeout(timer);
            alert("Finish!!");
          }
        } else if (second == 0) {
          setSecond(59);
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
    setMinute(time);
    console.log("clicked", time);
    setIsStart(true);
  };
  return (
    <>
    <Container className={classes.root}>
      <form onSubmit={(e) => onStart(e)}>
        <TextField id="timer" label="Set minute" variant="outlined" onChange={({target}) => setTime(target.value)} value={time}/>
        <br />
        <FormControlLabel
        control={<Checkbox checked={repeat} onChange={({target}) => setRepeat(target.checked)} name="Repeat" />}
        label="Repeat"
      /> <br />
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