import React from 'react'

const Products = () => {

    const userlogout=()=>{
        localStorage.removeItem("user_login")
    }
  return (
   <>
   <h5>Welcome to Products Page </h5>
   <h4> Work on Progress</h4>

   <button onClick={userlogout}>LogOut</button>
   </>
  )
}

export default Products