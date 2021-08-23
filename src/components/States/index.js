import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

import { fetchCounty, fetchStateById } from "../../store/states";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function States({ states, stateId, countyItem }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState("");
  const [countyId, setcCountyId] = React.useState("");

  const handleChange = (event) => {
    setState(event.target.value);
    dispatch(fetchStateById(event.target.value));
  };

  const handleChangeCounty = (event) => {
    setcCountyId(event.target.value);
    dispatch(fetchCounty(event.target.value));
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
        <InputLabel className={classes.button} onClick={console.log("click")}>
          Selecione o Estado da cidade buscada
        </InputLabel>
        <FormControl className={classes.formControl}>
          <br />
          <div>Estados</div>
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
                value={countyId}
                onChange={handleChangeCounty}
              >
                {stateId.map((county) => (
                  <MenuItem value={county.id}>{county.nome}</MenuItem>
                ))}
              </Select>
            </div>
          ) : null}
          {countyItem && countyItem.length !== 0
            ? (console.log("counrt", countyItem[0]),
              (
                <form className={classes.root} noValidate autoComplete="off">
                  <br />
                  <div>Informações da micro região</div>
                  <div>
                    <TextField
                      id="filled-multiline-flexible"
                      label="Microregião"
                      multiline
                      maxRows={4}
                      value={countyItem[0].municipio.microrregiao.nome}
                      onChange={handleChange}
                      variant="filled"
                    />
                    <br />
                    <div>Informações de meso região</div>
                    <TextField
                      id="filled-multiline-flexible"
                      label="Mesoregião"
                      multiline
                      maxRows={4}
                      value={
                        countyItem[0].municipio.microrregiao.mesorregiao.nome
                      }
                      onChange={handleChange}
                      variant="filled"
                    />
                    <TextField
                      id="filled-multiline-flexible"
                      label="UF"
                      maxRows={2}
                      value={
                        countyItem[0].municipio.microrregiao.mesorregiao.UF
                          .sigla
                      }
                      onChange={handleChange}
                      variant="filled"
                    />
                    <TextField
                      id="filled-multiline-flexible"
                      label="Região do Município"
                      maxRows={2}
                      value={
                        countyItem[0].municipio.microrregiao.mesorregiao.UF
                          .regiao.nome
                      }
                      onChange={handleChange}
                      variant="filled"
                    />
                  </div>
                </form>
              ))
            : null}
        </FormControl>
      </div>
    </div>
  );
}
