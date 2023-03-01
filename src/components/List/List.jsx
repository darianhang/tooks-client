import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/Card/Card";

const List = ({ items, selectedCat, selectedColor }) => {

    const [ data, loading, error ] = useFetch(`/products?populate=*${selectedCat ? `&[filters][categories][id]=${selectedCat}` : items.map((data) => {
        return `&[filters][categories][id]=${data.id}`
}).join("")}${selectedColor ? `&[filters][colors][id]=${selectedColor}` : ""}`)

    return (
            <div className="products-wrapper">
                {data.map((item) => {
                    return (
                    <Card img={loading ? "loading" : process.env.REACT_APP_UPLOAD_URL + item.attributes.img.data.attributes.url} title={loading ? "" : item.attributes.title} price={loading ? "" : item.attributes.price} to={`/product/${item.id}`}/>
                )})}
            </div>
    )
}

export default List