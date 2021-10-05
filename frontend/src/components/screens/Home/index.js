/* eslint-disable react/no-unknown-property */
import React from 'react';
import './style.scss';
import Product from '../../Product';


// Hook d'état 
import { useEffect } from 'react'; //effet de bord ou Hook d'effet permet de charger les donnés 
import { useSelector, useDispatch } from 'react-redux';


// Actions
import { getProducts as listProducts } from "../../../redux/actions/productActions";
const HomeScreen = () => {

  const dispatch = useDispatch();
  const getProducts = useSelector(state => state.getProducts);
  const { products, loading, error } = getProducts;
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  return (
    <div className="homescreen">
      <div className="homescreen__user">
       
      </div>
      <h2 className="homescreen__title"> Produits récents</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>  <i class="fas fa-spinner fa-spin"></i> Loading...</h2>
        ) : error ? (
            <h2>{error}</h2>
          ) : (
            products.map(product => (
            <Product
              key={product._id}
              name={product.name}
              image={product.image}
              price={product.price}
              material={product.material}
              productId={product._id}
            />
          )))
        }
      </div>
    </div>
  )
}

export default HomeScreen;
