import { makeStyles } from "@material-ui/core/styles";

// getModalStyle is not a pure function, we roll the style only on the first render

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 300,
    height: 100,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  liText: {
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  updateB: {
    backgroundColor: "white",
  },
  delete: {
    cursor: "pointer",
    margin: "0",
    position: "absolute",
    bottom: "15%",
  },
}));

export default useStyles;
