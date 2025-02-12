import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
//import { createRoot } from 'react-dom/client';

function MyApp() {
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}


const ReactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'

    },
    Children: 'click me to visit google'
};

const anotherElement = (
    <a href="https://google.com" target='_blank'  >
    
    visit google </a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a', 
    { href: 'https://www.google.com', target: '_blank' },
     'click me to visit google',
     // we can not write any evaluation here(like if else)
     
     anotherUser
    )

createRoot(document.getElementById('root')).render(
  
   reactElement
 
)
