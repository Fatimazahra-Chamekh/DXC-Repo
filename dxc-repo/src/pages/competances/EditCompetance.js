import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editCompetanceAction,
  getCompetanceAction,
} from "../../services/Actions/competanceActions";
import {
  validacionError,
  validationSuccess,
  validarFormularioAction,
} from "../../services/Actions/validacionActions";
import useStyles from "./styles";
import clienteAxios from "../../config/axios";
import axios from "axios";

function EditCompetance(props) {
  const classes = useStyles();
  const history = useHistory();
  const initialCompetanceState = {
    id: null,
    nomCompetance: "",
    matriculeRessource: "",
    nomRessource: "",
    typeComp: "",
    evaluationManager: "",
    niveau: "",
  };
  const editCompetance = (Competance) =>
    dispatch(editCompetanceAction(Competance));
  const [currentCompetance, setCurrentCompetance] = useState(
    initialCompetanceState,
  );
  // créer un nouveau Competance
  const dispatch = useDispatch();
  const getCompetance = () => {
    axios
    .get(`http://localhost:9005/DXC/competances/Competance/`+props.match.params.id)
    .then((resp) => {
      console.log("hhhhkldmdmmdm",resp.data);
      setCurrentCompetance(resp.data);
      console.log("CurrentCompetance",currentCompetance); })
    .catch((error) => {
      console.log(error);
     
    });
  };

  const validarForm = () => dispatch(validarFormularioAction());
  const SuccessValidacion = () => dispatch(validationSuccess());
  const errorValidacion = () => dispatch(validacionError());
  useEffect(() => {
    getCompetance(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentCompetance({ ...currentCompetance, [name]: value });
  };

  const updateContent = () => {
    validarForm();

    if (
      currentCompetance.nomCompetance.trim() === "" ||
      currentCompetance.matriculeRessource.trim() === "" ||
      currentCompetance.nomRessource.trim() === "" ||
      currentCompetance.typeComp.trim() === "" ||
      currentCompetance.evaluationManager.trim() === "" ||
      currentCompetance.niveau.trim() === ""
    ) {
      errorValidacion();
      return;
    }
    //si pasa la validacion//si todo sale bien
    SuccessValidacion();

    editCompetance(currentCompetance);
    history.push("/app/competances/allCompetances");
  };
  function AnnulerCompetance() {
    history.push("/app/competances/allCompetances");
  }
  const niveaux = [
    {
      label: "NE - Non Exigé.",
      value: "Non Exigé",
    },
    {
      label: "0 - Pas de connaissances",
      value: "Pas de connaissances",
    },
    {
      label: "1 - Connaissances théoriques",
      value: "Connaissances théoriques",
    },
    {
      label: "2 - Basique",
      value: "Basique",
    },
    {
      label: "3 - Maitrisé ",
      value: "Maitrisé",
    },
    {
      label: "4 - Expert",
      value: "Expert",
    },
  ];
  const typesCompetances = [
    {
      label: "Compétences techniques",
      value: "Compétences techniques",
    },
    {
      label: "Compétences transversales",
      value: "Compétences transversales",
    },
    {
      label: "Compétences linguistiques",
      value: "Compétences linguistiques",
    },
  ];

  return (
    <div>
      <div>
        <PageTitle
          title="Modifier une Competance"
          path="/app/competances/allCompetances"
        />
      </div>

      <form onSubmit={updateContent} className={classes.Form}>
        <Grid container spacing={3} className={classes.GridForm}>
          <Grid item xs={6}>
            <TextField
              id="outlined-nomRessource"
              label="Nom et prénom de ressource"
              size="small"
              variant="outlined"
              fullWidth
              name="nomRessource"
              value={currentCompetance.nomRessource}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-matriculeRessource"
              size="small"
              label="Matricule de ressource"
              variant="outlined"
              fullWidth
              name="matriculeRessource"
              value={currentCompetance.matriculeRessource}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-typeComp"
              select
              label="Type de compétence"
              variant="outlined"
              size="small"
              fullWidth
              name="typeComp"
              value={currentCompetance.typeComp}
              onChange={handleInputChange}
            >
              {typesCompetances.map((typeCompetance) => (
                <MenuItem value={typeCompetance.value}>
                  {typeCompetance.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-nomCompetance"
              size="small"
              label="Intitulé de compétence"
              variant="outlined"
              fullWidth
              name="nomCompetance"
              value={currentCompetance.nomCompetance}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-niveau"
              select
              label="Niveau  de maitrise attendu"
              variant="outlined"
              size="small"
              fullWidth
              name="niveau"
              value={currentCompetance.niveau}
              onChange={handleInputChange}
            >
              {niveaux.map((niveau) => (
                <MenuItem value={niveau.value}>{niveau.label}</MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-evaluationManager"
              select
              label="Evaluation de manager"
              variant="outlined"
              size="small"
              fullWidth
              name="evaluationManager"
              value={currentCompetance.evaluationManager}
              onChange={handleInputChange}
            >
              {niveaux.map((niveau) => (
                <MenuItem value={niveau.value}>{niveau.label}</MenuItem>
              ))}
            </TextField>
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
          onClick={AnnulerCompetance}
        >
          Annuler
        </Button>
      </Grid>
    </div>
  );
}

export default EditCompetance;
