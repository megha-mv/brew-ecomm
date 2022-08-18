import cartAddDelete from './addDelete'
import {productData} from './productSagaReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    cartAddDelete,
    productData
});

export default allReducers;