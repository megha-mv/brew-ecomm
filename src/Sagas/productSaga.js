import {takeEvery, put} from 'redux-saga/effects'


function* getProducts(){
    let data =yield fetch('https://fakestoreapi.com/products');
    data = yield data.json();
    console.log('calling from Product sagas',data);
    console.log('calling from getproducts');
    yield put({type: 'SET_PRODUCT_LIST', data})
}

function* productSaga(){
    yield takeEvery('PRODUCT_LIST',getProducts)
}

export default productSaga;