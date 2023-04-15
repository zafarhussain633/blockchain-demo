import { useEffect, useState } from "react";
import { ethers } from "ethers";

const greetingContractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; // for greeter.sol file

const greeterAbi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "greet",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    name: "setGreeting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

function App() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    greetingContractAddress,
    greeterAbi,
    signer
  );
  const [inputValue, setInputValue] = useState({ balance: "", greeter: "" });
  const [balance, setBalance] = useState();
  const [greet, setGreet] = useState();

  const connectWallet = async () => {
    try {
      await provider.send("eth_requestAccounts", []);
    } catch (err) {
      console.log(err, "wallet connect error");
    }
  };

  const getBalance = async () => {
    try {
      const balance = await provider.getBalance(greetingContractAddress);
      const balamceFormatted = ethers.utils.formatEther(balance);
      console.log(balamceFormatted);
      setBalance(balamceFormatted);
    } catch (err) {
      console.log(err, "getBalance error");
    }
  };

  const depositeBalance = async () => {
    try {
      const etherVal = ethers.utils.parseEther(inputValue.balance); //converts a string value representing ether to its equivalent Wei value.
      const depositeEther = await contract.deposit({ value: etherVal });
      await depositeEther.wait();
      getBalance();
    } catch (err) {
      console.log(err, "depositeBalance error");
    }
  };

  const getGreeting = async () => {
    try {
      const greeting = await contract.greet();
      console.log(greeting, "greeting");
      setGreet(greeting);
    } catch (err) {
      console.log(err.message, "getgreet error");
    }
  };

  const setGreeting = async () => {
    try {
      const greetingUpdate = await contract.setGreeting(inputValue.greeter); // will open meta mask to confirm transaction
      await greetingUpdate.wait(); //method waits for the transaction to be confirmed
      await getGreeting();
    } catch (err) {
      console.log(err.message, "setgreeting error");
    }
  };

  useEffect(() => {
    (async () => {
      await connectWallet();
      await getBalance();
      await getGreeting();
    })();
    console.log(contract, "contract");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  console.log(contract, "contract");

  return (
    <>
      <h1>welcome to web 3 js</h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <h3>Balance: {balance}</h3>
          <input
            placeholder="add your balance"
            value={inputValue.balance}
            name="balance"
            style={{ padding: "10px" }}
            onChange={handleChange}
          />
          <button style={{ padding: "10px" }} onClick={depositeBalance}>
            Add balance
          </button>
        </div>
        <div>
          <h2>Greetings: {greet} </h2>
          <input
            placeholder="add greeting message"
            value={inputValue.greeter}
            name="greeter"
            style={{ padding: "10px" }}
            onChange={handleChange}
          />
          <button style={{ padding: "10px" }} onClick={setGreeting}>
            change Greetings
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
