import React from "react";
import ListFruit from "../displays/ListFruit";

class Home extends React.Component{
  render(){
    return(
      <React.Fragment>
        <p>This is Home</p>
      <ListFruit/>
      </React.Fragment>
    )
  }
}

export default Home