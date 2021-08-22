import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useStyles } from "../States/styles";
import { useDispatch } from "react-redux";
import { getStateItem } from "../../store/states";

export default function State({ state }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Estados</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={2}
          // onClick={() => dispatch(getStateItem(state))}
        ></Select>
      </FormControl>
    </div>
  );
}
