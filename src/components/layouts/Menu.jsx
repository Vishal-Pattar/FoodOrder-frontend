import React, { useEffect } from 'react'
import FoodItem from './FoodItem'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMenus } from '../../actions/menuAction'
import Loader from './Loader'
import Message from './Message'

export default function Menu() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { loading, error, menus } = useSelector(state => state.menus);

    useEffect(() => {
        dispatch(getMenus(id))
    }, [dispatch, id]);

    console.log(menus);

    return (
        <div>
            {loading ? <Loader /> : error ? (<Message varaint="danger">{error}</Message>) :
                menus && menus.length > 0 ? (menus.map((menu) => (
                    <div key={menu._id}>
                        <h2>{menu.category}</h2>
                        <hr />
                        {menu.items && menu.items.length > 0 ? (
                            <div className='row'>
                                {menu.items.map((fooditem) => (
                                    <FoodItem
                                        key={fooditem._id}
                                        fooditem={fooditem}
                                        restaurant={id}
                                    />
                                ))}
                            </div>
                        ) : (
                            <Message variant="info">No FoodItem found</Message>
                        )}
                    </div>
                ))
                ) : (
                    <Message variant="info">No Menus Found</Message>
                )
            }
        </div>
    )
}