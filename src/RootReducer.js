import Axios from 'axios'

export const FETCH_RECIPES = 'FETCH_RECIPES'
export const SELECT_RECIPE = 'SELECT_RECIPE'


export const fetchRecipes = () => dispatch => {
    Axios.get("http://starlord.hackerearth.com/recipe")
        .then(response => {
            const { data } = response
            console.log(data)
            dispatch({
                type: FETCH_RECIPES,
                payload: data
            })
        })
}

const initialState = {
    recipies: [],
    orders: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RECIPES:
            return { ...state, recipies: action.payload }
        default:
            return initialState
    }
}