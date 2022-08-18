/* eslint-disable eqeqeq */
//reducer
// import { ADD } from "../Actions/add";
const cartAddDelete = (data = [], action) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...data];
    case "DELETE":
    //   data.length = data.length ? data.length - 1 : [];
      console.warn('delete from cart action   ===>',action)
      //add logic to delete only that item whose id is matched  ---filter the product id matched data and then delete it
      const remainingItems= data.filter((item)=>item.id!==action.data)
      return [...remainingItems]
    default:
      return data;
  }
};

export default cartAddDelete;
