import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
    const addToCartHandler = ({ itemNum, price, title}) => {
        console.log('Added to cart: ${title}');
    };

    const menuItems = [
        {
            itemNum: 1,
            burgerSrc: burger1,
            price: 200,
            title: "CHEESE BURGER",
        },
        {
            itemNum: 2,
            burgerSrc: burger2,
            price: 500,
            title: "VEG CHEESE BURGER",
        },
        {
            itemNum: 3,
            burgerSrc: burger3,
            price: 1800,
            title: "CHEESE BURGER WITH FRENCH FRIES",
        },
    ];

    return (
        <div className="menu-container">
            {menuItems.map((item) => (
                <MenuCard
                    key={item.itemNum}
                    itemNum={item.itemNum}
                    burgerSrc={item.burgerSrc}
                    price={item.price}
                    title={item.title}
                    handler={addToCartHandler}
                    delay={0.1}
                />
            ))}
        </div>
    );
};

export default Menu;