import React, { useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import useStyles from "./styles";
import { Typography } from "../Wrappers";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
export default function PageTitle(props) {
  var classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    // Update the document title using the browser API
  });
  return (
    <div className={classes.pageTitleContainer}>
      <Button
        onClick={() => {
          history.push(props.path);
        }}
      >
        <ArrowBackIcon />
      </Button>

      <Typography className={classes.typo} variant="h3" size="sm">
        {props.title}
      </Typography>

      {props.button && props.button}
    </div>
  );
}
