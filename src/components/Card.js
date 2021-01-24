import React from 'react';
import CardItem from './Carditem.js';
import './Card.css';


function Card() {
    return (
        <div className='cards'>
            <h1> My contents</h1>
            <div className ='cards__container'>
                <div className='cards__wrappper'>
                    <ul className='cards__items'>
                        <CardItem 
                        
                        Image src ='images/img-15.JPG'
                        text="Hello, my name is Yui Otaka From Japan. I am going talk about carrer"
                        label ='Read more'
                        path='/aboutme'
                        />
                          <CardItem 
                        src ='images/img-22.jpg'
                        text="My portfolio"
                        label ='Read more'
                        path='/socialMedia'
                        />


                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Card
