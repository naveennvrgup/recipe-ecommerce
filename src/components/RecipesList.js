import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Axios from 'axios'


const useStyles = makeStyles((theme) => ({
    loaderRoot: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: "100px",
    },
    recipieCardRoot: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    root: {
        paddingTop: theme.spacing(5),
    }
}));


export default function RecipesList() {
    const classes = useStyles();
    const [recipies, setRecipies] = useState([])

    // useEffect(() => {
    //     Axios.get("http://starlord.hackerearth.com/recipe")
    //     .then(response=>{
    //         const {data}=response
    //         setRecipies(recipies)
    //     })
    // })

    return <Grid className={classes.root}>
        <Card className={classes.recipieCardRoot}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions>
        </Card>
    </Grid>


    if (recipies.length == 0) {
        return <div className={classes.loaderRoot}>
            <CircularProgress color="secondary" />
        </div>
    }

    const recipeMapper = (recipie) => <Grid>
        recipeMapper
    </Grid>

    return (
        <Grid>
            {recipies.map(recipie => recipeMapper(recipie))}
        </Grid>
    )
}
