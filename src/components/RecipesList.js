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
import Chip from '@material-ui/core/Chip';

import Axios from 'axios'


const useStyles = makeStyles((theme) => ({
    loaderRoot: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: "100px",
    },
    recipieCardRoot: {
        maxWidth: 300,
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
    },
    recipieMedia: {
        height: 200,
    },
    recipieRoot: {
        paddingTop: theme.spacing(2),
        display: 'flex',
    },
    root: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(5),
    },
    recipieCardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    recipieTop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
    },
    recipieDescription: {
        flexGrow: 1,
    }
}));


export default function RecipesList() {
    const classes = useStyles();
    const [recipies, setRecipies] = useState([])

    useEffect(() => {
        Axios.get("http://starlord.hackerearth.com/recipe")
            .then(response => {
                const { data } = response
                setRecipies(data)
            })
    })

    const recipeMapper = (recipie) =>
        <Grid key={recipie.id} className={classes.recipieRoot} item xs={4}>
            <Card className={classes.recipieCardRoot}>
                <CardMedia
                    className={classes.recipieMedia}
                    image={recipie.image}
                    title={recipie.name}
                />
                <CardContent className={classes.recipieDescription}>
                    <div className={classes.recipieTop}>
                        <Typography color="textSecondary" gutterBottom>
                            {recipie.category}
                        </Typography>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            ${recipie.price}
                        </Typography>
                    </div>
                    <Typography gutterBottom variant="h5" component="h2">
                        {recipie.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {recipie.description}
                    </Typography>
                </CardContent>
                <CardActions className={classes.recipieTop}>
                    <div>
                        {recipie.label.length > 0 ?
                            <Chip label={recipie.label} size='small' /> :
                            null}
                    </div>
                    <Button size="small" color="primary">
                        add to cart
                    </Button>
                </CardActions>
            </Card>
        </Grid>


    if (recipies.length === 0) {
        return <div className={classes.loaderRoot}>
            <CircularProgress color="secondary" />
        </div>
    }



    return (
        <Grid container alignItems="stretch" spacing={2} className={classes.root}>
            {recipies.map(recipie => recipeMapper(recipie))}
        </Grid>
    )
}
