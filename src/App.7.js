import React from "react"
import productsData from "./components/vschoolProducts"
import Product from "./components/Product"

function App() {

    const productsComponents = productsData.map( item => <Product key={item.id} product={item} /> )

    return (
        <div>
            {productsComponents}
        </div>    
    )
}

export default App