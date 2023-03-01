import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./Product.scss"

const Product = () => {
    const id = useParams().id

    const [ data, loading, error ] = useFetch(`/products/${id}?populate=*`)

    const [quantity, setQuantity] = useState(0)

    const productDecrement = () => {
        setQuantity((prev) => {
            if (prev === 0) {
                return 0
            }
            else {
                return prev - 1
            }
        })
    }

    const productIncrement = () => {
        setQuantity((prev) => {
            return prev + 1
        })
    }

    return (
        <div className="product-page-wrapper">
            <img className="product-img" src={ loading ? "Loading" : process.env.REACT_APP_UPLOAD_URL + data.attributes.img.data.attributes.url}></img>
            <div className="info-wrapper">
                <h1 className="product-title">{loading ? "loading" : data.attributes.title}</h1>
                <h1 className="product-price">${loading ? "Loading" : data.attributes.price}</h1>
                <div className="handle-cart">
                    <div className="cart-increment">
                        <div className="product-increment" onClick={productDecrement}>-</div>
                        <div>{quantity}</div>
                        <div className="product-increment" onClick={productIncrement}>+</div>
                    </div>
                    <button className="product-cart-button">Add to cart</button>
                </div>
                <p className="product-desc">{loading ? "Loading" : data.attributes.desc}</p>
            </div>
        </div>
    )
}

export default Product