import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Tabs from './Tabs';
import useStyles from "./styles";
import CertificationProfil from './CertificationProfil';
import InformationsProfil from './InformationsProfil';
import TechnoMethodes from './CompetencesProfil/TechnoMethodes';
import clienteAxios from '../../config/axios';
import { showIdRessources } from '../../services/Actions/ressourcesActions';
import { useDispatch } from 'react-redux';
import { getCompetanceRessourceAction } from '../../services/Actions/competanceActions';
function Profil({match}) {
    const classes = useStyles();
    const { id } = match.params;
    const dispatch=useDispatch();
    const [ressourcedata, setRessourcedate]=useState([]);
    const showRessource = (value) => dispatch(showIdRessources(value));
    useEffect(() => {
        clienteAxios
        .get(`https://dxcrepo-ressource.azurewebsites.net/DXC/ressource/${id}`)
        .then((resp) => {
          // console.log("ressource by id",resp.data);
          setRessourcedate(resp.data);
          showRessource(resp.data)
        })
        .catch((error) => {
          console.log(error);
        });
      // dispatch(getRessourceAction(matricule));
    });
    return (
        <Grid container spacing={3}>
        <Grid className={classes.Tabs}>
       
             <Tabs >
        <div title="Profil" className={classes.title}>
       <InformationsProfil props={ressourcedata}/>
        </div>
        <div title="Competences" className={classes.title}>
        <TechnoMethodes />
        </div>
        <div title="Certification" className={classes.title}>
        <CertificationProfil props={ressourcedata}/>
        </div>
      </Tabs>
        </Grid>
        </Grid>
    );
}

export default Profil;