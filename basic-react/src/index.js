//Importing the basic react modules
import React from 'react'
import ReactDOM from 'react-dom'
import Comment from './Comment'
import faker from 'faker';

// const greet ="Welcome to Our Basic App";
// const btnStyle = {color: 'red',border: '1px solid red',padding:'30px'};
// Creating the App Component
const App = () =>{
    return(
        <div className="ui container comments">
            <Comment author="Jadeja" src={faker.image.avatar()} msg="Ground me aajao sab" time="Today at 9:00 am"/>
            <Comment author="Kohli" src={faker.image.avatar()} msg="I am already there!! 😎" time="Today at 9:01 am"/>
            <Comment author="Rohit" src={faker.image.avatar()} msg="Aata hun kha ke" time="Today at 9:12 am"/>
        </div>
    );
}

//Rendering the App Component
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);