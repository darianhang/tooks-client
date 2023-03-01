import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/Card/Card";
import "./Products.scss"
import List from "../../components/List/List";
import { useParams } from "react-router-dom";

const Products = ({linkedCat}) => {

    const id = useParams().id

    const [selectedCat, setSelectedCat] = useState(id)
    const [selectedColor, setSelectedColor] = useState("")

    const handleClick = (e) => {
        setSelectedCat(e.target.value)
        console.log(selectedCat)
    }

    const handleColor = (id) => {
        setSelectedColor(id)
        console.log(selectedColor)
    }

    const [ productData, productLoading, productError ] = useFetch(`/products?populate=*`)

    const [ categoryData, categoryLoading, categoryError ] = useFetch(`/categories?populate=*`)

    const [ colorData, colorLoading, colorError ] = useFetch(`/colors?populate=*`)
    
    console.log( categoryLoading ? "ISLOADING!" : categoryData[0].id)

    return (   
        <div className="products-page-wrapper">
            <h1 className="products-title">PRODUCTS</h1>
            <div className="filters-wrapper">
                <div className="color-filter">Color: 
                <div className="color" style={{backgroundImage: "linear-gradient(35deg, #f89dff 0, #ff96ff 3.33%, #ff90f3 6.67%, #ff8be3 10%, #ff88d2 13.33%, #ff86c1 16.67%, #ff86b0 20%, #ff87a0 23.33%, #ff8b8f 26.67%, #ff8f80 30%, #ff9571 33.33%, #ff9b64 36.67%, #ffa157 40%, #ffa84c 43.33%, #ffaf43 46.67%, #f2b53c 50%, #e4bb38 53.33%, #d4c038 56.67%, #c4c53b 60%, #b3ca42 63.33%, #a1ce4c 66.67%, #8ed257 70%, #78d564 73.33%, #5ed773 76.67%, #3ad983 80%, #00db93 83.33%, #00dca4 86.67%, #00ddb5 90%, #00dec7 93.33%, #00ded8 96.67%, #00dee9 100%)"}} onClick={() => handleColor("")}></div>
                {
                    colorData.map((data) => {
                        return (
                            <div className="color" style={{backgroundColor: data.attributes.hex}} onClick={() => handleColor(data.id)}></div>
                        )
                    })
                }
                </div>
                <select className="product-filter" onChange={handleClick}>
                    <option value={""}>{"All"}</option>
                    {categoryData.map((data) => {
                        return (
                            <option value={data.id} selected={data.id == selectedCat ? true : false}>{data.attributes.title}</option>
                        )
                    })}
                </select>
            </div>
            <div className="products-wrapper">
                <List items={productData} selectedCat={selectedCat} selectedColor={selectedColor}/>
            </div>
        </div>
    )
}

export default Products