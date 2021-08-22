import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";

import States from "../States";
import { fetchStates } from "../../store/states";

export default function CenteredGrid() {
  const classes = useStyles();
  const states = useSelector((state) => state.states.items);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Estesdo", states);
    dispatch(fetchStates());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>INFO CITY</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            {" "}
            <States states={states} />
          </Paper>
          {/* {state} */}
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
