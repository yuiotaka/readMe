import React from 'react';
import '../App.css';
import './Card.css';
import CardItem from './Carditem.js';


function Writing() {
    return (
        <div className='cards'>
            <h1> My contents</h1>
            <div className ='cards__container'>
                <div className='cards__wrappper'>
                
                       
                        <CardItem 
                        
                        Image src ='images/img-16.JPG'
                        text="Articles in Australia
                        "
                        label ='Read more'
                       
                        loc='https://tabiken.com/au/author/yuiotaka1'
                        />
                       
                          <CardItem 
                        src ='images/IMG_8320.JPG'
                        text="Articles in Philippines"
                        label ='Read more'
                        to='/'
                        />

                </div>
            </div>
            
        </div>
    );
}

export default Writing
