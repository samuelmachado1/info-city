import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { fetchStateById } from "../../store/states";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function States({ states, stateId }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState("");

  const handleChange = (event) => {
    setState(event.target.value);
    dispatch(fetchStateById(event.target.value));
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="states">
      <div>
        <InputLabel className={classes.button} onClick={true}>
          Selecione o Estado da cidade buscada
        </InputLabel>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">
            Estados
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={state}
            onChange={handleChange}
          >
            {states.map((state) => (
              <MenuItem value={state.id}>
                {state.nome} - {state.sigla}
              </MenuItem>
            ))}
          </Select>
          {state && state !== "" ? (
            <div>
              <br />
              <div>Municípios</div>

              <Select
                labelId="input-municipio-select-label"
                id="input-municipio-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={MenuItem.value}
                onChange={true}
              >
                {stateId.map(
                  (county) => (
                    console.log("by", county),
                    (<MenuItem value={county.id}>{county.nome}</MenuItem>)
                  )
                )}
              </Select>
            </div>
          ) : (
            console.log("NAOAOA bom")
          )}
        </FormControl>
      </div>
    </div>
  );
}
