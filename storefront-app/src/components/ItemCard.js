import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Styled from 'styled-components';

const StyledCard = Styled.div`
    background-color: #fe6c61;
    width: 100%;
    max-width: 360px;
`;

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    marginRight: theme.spacing(1),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));

export default function MiddleDividers(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
            {props.item.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
            {props.item.price}
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary" variant="body2">
        {props.item.description}
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        <div>
          {props.item.owner}
          {props.item.id}
          {props.item.category}
        </div>
      </div>
    </div>
  );
}