import { combineReducers } from 'redux'

import filters from './filter'
import pizzas from './pizzas'
import cart from './cart'

const rootReduser = combineReducers({
    filters,
    pizzas,
    cart
})

export default rootReduser