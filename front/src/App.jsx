import React, { Component } from "react";
import ShoppingCard from "./ShoppingCard";
import NavBar from "./NavBar";

export default class App extends Component {
  render() {
    return (
        <>
            <NavBar/>
            <ShoppingCard/>
        </>
    );
  }
}
