import React, { Component } from 'react'

export default class Button extends Component {
  constructor() {
    super();
    this.state={
       title: "Click here"
    
    }
 }

 changeTitle = () => {
    this.setState({ title: "Thanks for visiting our site" });
 };

 render() {
     return <h1 onClick={this.changeTitle}>{this.state.title}</h1>;
 }
}