import React ,{useEffect}from 'react'
import {useDispatch, useSelector } from "react-redux";
import addToCart from '../Actions/add'
// import { ADD } from "../Actions/add";
import {deleteFromCart} from '../Actions/delete'

import {productList} from '../Actions/productSagaAction'

import '../App.css'
import { Link } from 'react-router-dom';



const Products = () => {
    // const [products,setProducts] = useState([]);
    const products = useSelector((state) => state.productData)
    console.warn("data in Products component", products);
    // const addItem = useSelector((state) =>state.cartAddDelete)
    const dispatch = useDispatch();

    

    // useEffect(()=>{
    //     const fetchProducts = async () =>{
    //             const res=await fetch('https://fakestoreapi.com/products');
    //             const data = await res.json();
    //             console.log(data);
    //             setProducts(data)
    //     }
    //     fetchProducts();

    // },[])
    useEffect(()=>{
        dispatch(productList())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <div>
        <h1>Products.....</h1>
            <div className='product-container'>
                {products.map((product)=>(
                   <div key={product.id} className='product-item'>
                        <img src={product.image} alt=""/>
                        <div className='item-name'>{product.title}</div>
                        <div>Price : {product.price}</div>
                        <div>Category : {product.category}</div>
                        <div>
                            <button onClick={()=>dispatch(addToCart(product))}>
                            Add to cart
                            </button >
                        </div>
                        <div>
                            <button onClick={()=>dispatch(deleteFromCart(product.id))}>
                            Delete From cart
                            </button>
                        </div>  
                    <div>
                    <Link to="/product" state={{ id: product.id ,title:product.title,image:product.image,price:product.price,category:product.category,description:product.description}}>
                    View Details
                    </Link>
                    </div>
                    
                   </div> 
                ))}
            </div>
    </div>
    
  )
}

export default Products