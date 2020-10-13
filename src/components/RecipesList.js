import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import Recipe from './Recipe'
import {fetchRecipes} from '../RootReducer'

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid'



const useStyles = makeStyles((theme) => ({
    loaderRoot: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: "100px",
    },
    root: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(5),
    },
}));


export function RecipesList({fetchRecipes, recipies, orders}) {
    const classes = useStyles();

    useEffect(() => {
        fetchRecipes()
    },[])


    if (recipies.length === 0) {
        return <div className={classes.loaderRoot}>
            <CircularProgress color="secondary" />
        </div>
    }



    return (
        <Grid container alignItems="stretch" spacing={2} className={classes.root}>
            {recipies.map((recipie,i) => <Recipe key={i} recipieIndex={i}/>)}
        </Grid>
    )
}

const mapStateToProps = (state) => state

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchRecipes
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList)