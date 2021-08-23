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
  const [openCounty, setOpenCounty] = React.useState(false);
  const [state, setState] = React.useState("");
  const [countyId, setCountyId] = React.useState("");

  const handleChange = (event) => {
    setState(event.target.value);
    dispatch(fetchStateById(event.target.value));
    setCountyId("");
  };

  const handleChangeCounty = (event) => {
    setCountyId(event.target.value);
    dispatch(fetchCounty(event.target.value));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseCounty = () => {
    setOpenCounty(false);
  };

  const handleOpenCounty = () => {
    setOpenCounty(true);
  };
  return (
    <div className="states">
      <div id="container-main">
        <InputLabel className={classes.button} onClick={console.log("click")}>
          <strong>Selecione o estado do município</strong>
        </InputLabel>
        <FormControl className={classes.formControl}>
          <div className="div-select">
            <br />
            <div className="container-body">
              <p>Estado</p>
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
                <div className="div-select">
                  <br />
                  <div>Município</div>
                  <Select
                    labelId="input-municipio-select-label"
                    id="input-municipio-select"
                    open={openCounty}
                    onClose={handleCloseCounty}
                    onOpen={handleOpenCounty}
                    value={countyId}
                    onChange={handleChangeCounty}
                  >
                    {stateId.map((county) => (
                      <MenuItem value={county.id}>{county.nome}</MenuItem>
                    ))}
                  </Select>
                </div>
              ) : null}
            </div>
          </div>
          {countyItem && countyItem.length !== 0 && countyId ? (
            <form className={classes.root} noValidate autoComplete="off">
              <div className="container-info">
                <TextField
                  id="filled-multiline-flexible"
                  label="Microregião"
                  value={countyItem[0].municipio.microrregiao.nome}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                />

                <TextField
                  id="filled-multiline-flexible"
                  label="Mesorregião"
                  multiline
                  value={countyItem[0].municipio.microrregiao.mesorregiao.nome}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                />
                <TextField
                  id="filled-multiline-flexible"
                  label="UF"
                  value={
                    countyItem[0].municipio.microrregiao.mesorregiao.UF.sigla
                  }
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                />
                <TextField
                  id="filled-multiline-flexible"
                  label="Região do Município"
                  value={
                    countyItem[0].municipio.microrregiao.mesorregiao.UF.regiao
                      .nome
                  }
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                />
              </div>
            </form>
          ) : null}
        </FormControl>
      </div>
    </div>
  );
}
