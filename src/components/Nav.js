import React from "react";
import Web3 from "web3";

class Nav extends React.Component {
  state = {
    account: "",
    net: ""
  };

  async loadAccount() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8080");
    const network = await web3.eth.net.getNetworkType();
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0], net: network });
  }

  componentDidMount() {
    this.loadAccount();
  }

  render() {
    return (

      <div class="text-gray-600 text-center pt-20">
        <div class="text-4xl mb-12">
          This is your address! 💻
        </div>
        <div class="text-2xl">{this.state.account}</div>
        <div class="text-2xl mb-2 mt-12">
          This is your network! 🐒
        </div>
        <div class="text-2xl">{this.state.net}</div>
      </div>
    );
  }
}
export default Nav;