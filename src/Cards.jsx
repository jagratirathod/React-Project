import React from 'react';
import "./index.css";


function Cards(props) {
    console.log(props);
    return (
        <div className='heading'>
            <div className='cards'>
                <div className='card'>
                    <img src={props.imgsrc} alt="mypic" className='img_div' />
                    <div className='card__info'>
                        <span className='card__category'>{props.sname}</span>
                        <h3 className='card__title'>{props.title}</h3>
                        <a href={props.link} target="_blank"><button>Watch now</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cards;   