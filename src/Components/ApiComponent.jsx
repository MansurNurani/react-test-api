import axios from "axios";
import React, { Component } from "react";

const api = axios.create({
  baseURL: "https://randomuser.me/api/",
});
export default class ApiComponent extends Component {

  state = { displayStr: "",buttonIsEnabled:true };
  sleep=ms=> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  handleClick = async () => {
    this.setState({ displayStr: "Loading...",buttonIsEnabled:false,imageUrl:"" });
    let res = await (await api.get("/")).data.results[0];
    await this.sleep(900);
    var str = res.name.first + "-" + res.name.last;
    console.log(res);
    this.setState({ displayStr: str,buttonIsEnabled:true,imageUrl:res.picture.large });
  };
  render() {
    return (
      <div>
          <br />
          <br />
        <button style={{width:"100px",height:"50px"}} disabled={!this.state.buttonIsEnabled} onClick={this.handleClick}>Get Data</button>
        <br />
        <br />
        <label>{this.state.displayStr}</label>
        <br /><br />
        <img src={this.state.imageUrl} alt=""></img>
      </div>
    );
  }
}
