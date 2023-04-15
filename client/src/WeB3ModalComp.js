import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import Web3 from "web3";
import { ethers } from "ethers";

const WeB3ModalComp = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(null);

  useEffect(() => {
    const init = async () => {
      const web3Modal = new Web3Modal({
        cacheProvider: false,
      });
      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);
      setWeb3(web3);
      const accounts = await web3.eth.getAccounts();
      setAccounts(accounts);
    };
    init();
  }, []);

  const handleConnect = async () => {
    const web3Modal = new Web3Modal({
      cacheProvider: false,
    });
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    setWeb3(web3);
    const accounts = await web3.eth.getAccounts();
    setAccounts(accounts);
  };

  const handleDisconnect = async () => {
    const web3Modal = new Web3Modal({
      cacheProvider: true,
    });
    await web3Modal.clearCachedProvider();
    setWeb3(null);
    setAccounts(null);
  };


  console.log(web3,"accounts")

  return (
    <div>
      {web3 && accounts ? (
        <div>
          <p>Connected with {accounts[0]}</p>
          <button onClick={handleDisconnect}>Disconnect</button>
        </div>
      ) : (
        <div>
          <button onClick={handleConnect}>Connect</button>
        </div>
      )}
    </div>
  );
};

export default WeB3ModalComp;
