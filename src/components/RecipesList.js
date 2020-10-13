import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Axios from 'axios'
import Recipe from './Recipe'

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid'



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
    },[])


    if (recipies.length === 0) {
        return <div className={classes.loaderRoot}>
            <CircularProgress color="secondary" />
        </div>
    }



    return (
        <Grid container alignItems="stretch" spacing={2} className={classes.root}>
            {recipies.map(recipie => <Recipe key={recipie.id} recipie={recipie}/>)}
        </Grid>
    )
}
