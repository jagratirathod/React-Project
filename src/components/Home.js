import React from "react";
import "../index.css";


function Home() {
    return (
        <div>
            <div className="add-to-cart">
                <img src=""/>   
            </div>

            <h1>Home Component</h1>

            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://picsum.photos/200" />
                </div>

                
                <div className="text-wrapper item">
                    <span>
                        i-Phone 
                    </span>
                    <span>
                        Price : $10000
                    </span>

                    <button className="btn-wrapper item">Add to Cart</button>
                </div>

            </div>
        </div>
    )
}

export default Home;