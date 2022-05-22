import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editContratAction } from "../../services/Actions/contratActions";
import { getContratAction } from "../../services/Actions/contratActions";
import {
  validacionError,
  validationSuccess,
  validarFormularioAction,
} from "../../services/Actions/validacionActions";
import useStyles from "./styles";
import clienteAxios from "../../config/axios";
import axios from "axios";
function EditContrat(props) {
  const classes = useStyles();
  const history = useHistory();
  const initialContratState = {
    id: null,
    nomClient: "",
    nomContrat: "",
    description: "",
  };
  const [currentContrat, setCurrentContrat] = useState(initialContratState);
  const [message, setMessage] = useState("");

  // créer un nouveau contrat
  const dispatch = useDispatch();
  const getContrat = () => {
    axios
      .get(
        `http://localhost:9004/DXC/contrats/Contrat/` + props.match.params.id,
      )
      .then((resp) => {
        console.log("hhhhkldmdmmdm", resp.data);
        setCurrentContrat(resp.data);
        console.log("CurrentContrat", currentContrat);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidation = () => dispatch(validationSuccess());
  const errorValidation = () => dispatch(validacionError());
  useEffect(() => {
    getContrat(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentContrat({ ...currentContrat, [name]: value });
  };

  const updateContent = () => {
    console.log("currentContrat", currentContrat);
    dispatch(editContratAction(currentContrat))
      .then((response) => {
        console.log(response);
        history.push("/app/prestations/Contrats");
        setMessage("The Contrat was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
    history.push("/app/prestations/Contrats");
  };
  function AnnulerContrat() {
    history.push("/app/prestations/Contrats");
  }

  return (
    <div>
      <div>
        <PageTitle
          title="Modifier un contrat"
          path="/app/prestations/Contrats"
        />
      </div>
      <form onSubmit={updateContent}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="outlined-nomContrat"
              label="Nom de Contrat"
              name="nomContrat"
              size="small"
              variant="outlined"
              fullWidth
              value={currentContrat.nomContrat}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-nomClient"
              label="Nom de Client"
              name="nomClient"
              size="small"
              variant="outlined"
              fullWidth
              value={currentContrat.nomClient}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-description"
              label="Description"
              name="description"
              size="small"
              variant="outlined"
              fullWidth
              value={currentContrat.description}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </form>
      <Grid item xs={12}>
        <Button
          size="small"
          variant="contained"
          type="submit"
          className={classes.btnAjouter}
          color="primary"
          onClick={updateContent}
        >
          Modifier
        </Button>
        <Button
          size="small"
          variant="contained"
          className={classes.btnAnnuler}
          color="secondary"
          onClick={AnnulerContrat}
        >
          Annuler
        </Button>
      </Grid>
    </div>
  );
}

export default EditContrat;