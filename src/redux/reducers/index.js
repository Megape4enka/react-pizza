import { combineReducers } from 'redux'

import filtersReducer from './filter'
import pizzasReducer from './pizzas'

const rootReduser = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer
})

export default rootReduser