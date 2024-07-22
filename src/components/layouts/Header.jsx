import React from 'react'
import Search from './Search'

export default function Header() {
  return (
    <nav className="navbar row sticky-top">
      <div className="col-12 col-md-3">
        <img src="/images/logo.webp" alt="Logo" className="logo" />
      </div>
      <div className="col-12 col-md-6 mt-2 mt-md-6">
        <Search />
      </div>
      <div className="col-12 col-md-3 mt-4 mt-md-0">
        <span className="ml-3" id="cart">
          Cart
        </span>
        <span className="ml-1" id="cart_count">
          0
        </span>
      </div>
    </nav>
  )
}
