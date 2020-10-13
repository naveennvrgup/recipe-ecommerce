import React, { Fragment } from 'react'
import Container from '@material-ui/core/Container';

import Navbar from './Navbar'
import RecipesList from './RecipesList'

export default function RecipesScreen() {
    return (
        <Fragment>
            <Navbar />
            <Container maxWidth="md">
                <RecipesList />
            </Container>
        </Fragment>
    )
}
