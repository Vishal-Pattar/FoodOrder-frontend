import React from 'react'
import { LiaRupeeSignSolid } from "react-icons/lia";

export default function FoodItem() {
    return (
        <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div className="card p-3 rounded">
                <img
                    src='https://b.zmtcdn.com/data/pictures/chains/6/10506/1adb116d088669540c89150836d668f9.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*'
                    alt='Pizza'
                    className="card-img-top mx-auto"
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Veg Loaded Pizza</h5>
                    <p className="fooditem_des">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem numquam libero itaque ab, repellendus tenetur velit quis amet doloribus sit.
                    </p>
                    <p className="card-text">
                        <LiaRupeeSignSolid />
                        180
                        <br />
                    </p>
                    <button type='button' id='cart_btn' className='btn btn-primary d-inline ml-4'>
                        Add to Cart
                    </button>
                    <br />
                    <p>Status: {" "}
                        <span id='stock_status' className={10 > 5 ? 'greenColor' : 'redColor'} >
                            {10 > 5 ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}
