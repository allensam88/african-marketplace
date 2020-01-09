import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
    const classes = useStyles();
    
  return (
    <Card className={classes.card}>
      <CardActionArea>
      <CardMedia>
      <img className="item-img" alt="img-card" src={props.item.itemImg}/>
      </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <p>Price: {props.item.price} Location: {props.item.location} Owner: {props.item.owner}</p>
      </CardActions>
    </Card>
  );
}