import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paperLeft: {
    padding: theme.spacing(3),
    textAlign: "justify",
    color: theme.palette.text.secondary,
  },
  title: {
    fontSize: 20,
  },
}));
