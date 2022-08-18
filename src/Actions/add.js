//Add to cart action
// export const ADD ='Add_to_Cart'
// //Action creator
export const addToCart = (item) =>{
    return {
        type:'ADD',
        payload:item
    }
}

export default addToCart;   