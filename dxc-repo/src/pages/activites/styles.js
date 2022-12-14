import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  hrGlobale: {
    margin: "5px",
    backgroundColor: "#603494",
  },
  Alert: {
    paddingBottom: "inherit",
  },
  dashedBorder: {
    border: "1px dashed",
    borderColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
  },
  text: {
    marginBottom: theme.spacing(2),
  },
  btnAjouter: {
    margin: "5px",
    float: "right",
    background: "#741F82",
    color: "#FFFFFF",
  },
  btnAnnuler: {
    margin: "5px",
    float: "right",
    background: "black",
    color: "white",
  },
  table: {
    minWidth: 650,
  },
  icons: {
    margin: "00px",
  },
  addBtn: {
    display: "flex",
    justifyContent: "space-between",
    float: "right",
    background: "#741F82",
    color: "#FFFFFF",
    // height: "30px",
    marginBottom: "10px",
  },
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  grid: {
    height: "50px",
  },
  searchTextField: {
    display: "flex",
    justifyContent: "space-between",
    float: "left",
    marginTop: "13px",
  },
  bText: {
    padding: "10px",
  },
  inputSelect: {
    height: "40px",
  },
}));
