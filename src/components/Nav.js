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
        
          <div class="text-gray-600 text-center pt-24">
              <div 
                class="text-4xl mb-12"
                >This is your address! 💻
               </div>
            {this.state.account}
           </div>
        );
      }
     }
     export default Nav;