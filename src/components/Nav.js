import React from "react";
import Web3 from "web3";
import "./Nav.css"

class Nav extends React.Component {
    state = { account: "" };

    async loadAccount() {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8080");
        // eslint-disable-next-line
        const network = await web3.eth.net.getNetworkType();
        const accounts = await web3.eth.getAccounts();
        this.setState({ account: accounts[0] });
      }

      componentDidMount() {
        this.loadAccount();
      }

      render() {
        return (
          <div>
            Your connected address: {this.state.account}
           </div>
        );
      }
     }
     export default Nav;