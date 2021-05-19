import React, { useState } from "react";
import { simpleStorage } from "./abi/abi";
import Web3 from "web3";
import "./App.css";
import Nav from "./components/Nav.js";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const web3 = new Web3(Web3.givenProvider);

const contractAddress = "0x825E502428661521fC44BB0cd1b7DdFef4F00421";
const storageContract = new web3.eth.Contract(simpleStorage, contractAddress);


function App() {
  const [number, setUint] = useState(0);
  const [getNumber, setGet] = useState("0");

  const numberSet = async (t) => {
    t.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await storageContract.methods.set(number).estimateGas();
    // eslint-disable-next-line
    const post = await storageContract.methods.set(number).send({
      from: account,
      gas,
    });
  };

  const numberGet = async (t) => {
    t.preventDefault();
    const post = await storageContract.methods.get().call();
    setGet(post);
  };

  return (
    <div>
      <Nav class="mt-50"></Nav>
      <div className="main">
        <div className="card">
          <TextField
            id="outlined-basic"
            label="your number goes here:"
            onChange={(t) => setUint(t.target.value)}
            variant="outlined"
          />
          <form onSubmit={numberSet}>
            <Button class="p-3 h-100 w-72 m-y flex items-center justify-center rounded-md border border-gray-300"
              type="submit"
              value="Confirm"
            >
              Confirm
              </Button>
            <br />
            <Button class="hover:bg-blue-200 hover:border-transparent hover:shadow-xs p-3 h-100 w-72 flex items-center justify-center rounded-md bg-black text-white"
              onClick={numberGet}
              type="button"
            >
              Get your number
              </Button>
            {getNumber}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

