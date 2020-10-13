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

export const selectRecipe = (id) => dispatch => {
    console.log(id)
    dispatch({
        type: SELECT_RECIPE,
        payload: id
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
        case SELECT_RECIPE:
            var currOrders=state.orders
            var id=action.payload
            if(!currOrders.find(ele=>ele===id)){
                currOrders.push(id)
            }
            return {...state,orders:currOrders}
        default:
            return initialState
    }
}

