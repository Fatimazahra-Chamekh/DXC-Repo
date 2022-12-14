import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    backgroundColor:"#FFFFFF",
    minWidth: 300,
    minHeight: 200,
    maxHeight: 300,
    border: "3px solid #FFFFFF",
    marginBottom: "10px",
   

  },
  GridForm: {
    marginLeft: "70px",
    margin: "20px 0px 20px 0px",
    backgroundColor: "transparent",
    maxWidth: 1000,
    
  },
  Form: {
    marginLeft: "60px",
    
    backgroundColor: "transparent",
    maxWidth: 1100,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  Bajoute: {
    textAlign: "end",
  },
  Button: {
    background: "#741F82",
    color: "#FFFFFF",
  },
  labelDonnes: {
    color: "#000000",
    Stroke: "Solid",
    marginTop: "inherit",
  },
  
  labelinformation: {
    color: "#7978BB",
    Stroke: "Solid",
    textAlign:"center",
    marginTop: "inherit",
  },
  
  forminformation: {
    backgroundColor: "transparent",
    maxWidth: 700,
    border: "3px solid #FFFFFF",
  },
  label: {
    color: "#741F82",
    Stroke: "Solid",
    textAlign:"center",
    marginTop: "inherit",
  },
  text: {
    color: "#5C59E9",
    marginLeft: "8px",
  },
  TableRow: {
    texColor: "#FFFFFF",
    textAlign: "center",
    Stroke: "Solid",
  },
  ButtonAction: {
    background: "#741F82",
    Width: 10,
    Height: 5,
  },
  InputSearch: {
    background: "#FFFFFF",
    minWidth: 260,
    Height: 26,
    display: "flex",
    marginRight: 1,
    border: "2px solid #741F82",
    borderRadius: "10px",
  },
  ButtonSearch: {
    margin: "5px",
    float: "right",
    background: "#741F82",
    color: "#FFFFFF",
    
  },
  search: {
    textAlign: "initial",
    display: "flex",
    marginLefts: "40px",
    position: "absolute",
  },
  Visibility: {
    textAlign: "end",
    color: "#FFFFFF",
    fontSize: "medium",
  },
  Visib: {
    background: "#741F82",
    minWidth: 30,
    height: 30,
  },
  title: {
    fontSize: "9",
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
}));
