import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../../actions/restaurantAction';
import Loader from './Loader';
import Message from './Message';

export default function CountRestaurant() {
  const { loading: countRestaurantsLoading,
    error: countRestaurantsError,
    count: countRestaurants,
    showVegOnly,
    pureVegRestaurantsCount } = useSelector(state => state.restaurants);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  return (countRestaurantsLoading ? (
    <Loader />
  ) : countRestaurantsError ? (
    <Message variant="danger">{countRestaurantsError}</Message>
  ) : (
    <div>
      <p className='NumOfRestro'>
        {showVegOnly ? pureVegRestaurantsCount : countRestaurants}{" "}
        <span className='Restro'>
          {showVegOnly
            ? pureVegRestaurantsCount === 1
              ? "Restaurant"
              : "Restaurants"
            : countRestaurants === 1
              ? "Restaurant"
              : "Restaurants"
          }{" "}
        </span>
      </p>
      <hr />
    </div>
  )
  )
}
