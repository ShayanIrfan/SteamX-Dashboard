import React, { useState } from "react";
import Header from "../layout/header";
import Sidebar from "../layout/sidebar";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import BuyModal from "../element/buy-modal";
// import Web3 from "web3";
import { IUniswapV2FactoryABI } from "./UniswapABIs";
const Trade = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [connected, setConnected] = useState(false);
  const handleShow = () => setShow(true);
  const [isConnected, setIsConnected] = useState(false);
  const [currentChainId, setCurrentChainId] = useState(null);

  const handleConnect = async () => {
    if (window.ethereum) {
      try {
        // Request access to MetaMask accounts
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Get the current chain ID
        const chainId = await window.ethereum.request({
          method: "eth_chainId",
        });
        setCurrentChainId(chainId);

        if (chainId === "24116") {
          setIsConnected(true);
        } else {
          console.log("Please switch to Rails Network network in MetaMask.");
        }
      } catch (error) {
        console.error("Error connecting:", error);
      }
    } else {
      console.error("MetaMask not detected. Please install MetaMask.");
    }
  };

  const switchToBSC = async () => {
    try {
      // Switch to Rails Network
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "24116", // BSC chain ID
            chainName: "Rails Network",
            nativeCurrency: {
              name: "STMX",
              symbol: "stmx",
              decimals: 18,
            },
            rpcUrls: ["https://testnet.steamexchange.io"],
          },
        ],
      });

      console.log("Switched to Rails Network");
      setIsConnected(true);
      setCurrentChainId("24116");
    } catch (error) {
      console.error("Error switching chain:", error);
    }
  };

  //   const createPair = async (tokenA, tokenB) => {
  //     try {
  //       // Call the createPair function
  //       const accounts = await Web3.eth.getAccounts();
  //       await contract.methods.createPair(tokenA, tokenB).send({
  //         from: accounts[0]
  //       });
  //       console.log('Pair created successfully.');
  //     } catch (error) {
  //       console.error('Error creating pair:', error);
  //     }
  //   };
  return (
    <>
      <Header />
      <Sidebar />
      <div className="content-body">
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Set Fees </h4>
                </div>
                <div className="card-body">
                  <form
                    method="post"
                    name="myform"
                    className="currency_validate trade-form row g-3"
                  >
                    <div className="col-12">
                      <label className="form-label">Fee</label>
                      <div className="input-group">
                        <select className="form-control" name="method">
                          <option value="master">Percentage</option>
                        </select>
                        <input
                          type="text"
                          name="currency_amount"
                          className="form-control"
                          placeholder="0.01%"
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary btn-block"
                      onClick={handleShow}
                    >
                      Set Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Set Fee Receiver Address </h4>
                </div>
                <div className="card-body">
                  <form
                    method="post"
                    name="myform"
                    className="currency_validate trade-form row g-3"
                  >
                    <div className="col-12">
                      <label className="form-label">Wallet Address</label>
                      <div className="input-group">
                        <select className="form-control" name="method">
                          <option value="bank">Address</option>
                        </select>
                        <input
                          type="text"
                          name="currency_amount"
                          className="form-control"
                          placeholder="0x......."
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary btn-block"
                      onClick={handleShow}
                    >
                      Set Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Transactions</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped responsive-table">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Coin Name</th>
                          <th>Wallet</th>
                          
                          <th>Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="icofont-arrow-down"></i>
                              Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc BTC"></i> Bitcoin
                          </td>
                          <td>Using - Wallet *******5264</td>
                          
                          <td>10.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="success-arrow">
                              <i className="icofont-arrow-up"></i>
                              Buy
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc LTC"></i> Litecoin
                          </td>
                          <td>Using - Wallet*******8475</td>
                          
                          <td>10.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="icofont-arrow-down"></i>
                              Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc XRP"></i> Ripple
                          </td>
                          <td>Using - Wallet*******8475</td>
                          
                          <td>10.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="success-arrow">
                              <i className="icofont-arrow-up"></i>
                              Buy
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc DASH"></i> Dash
                          </td>
                          <td>Using - Wallet*******2321</td>
                          
                          <td>10.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="icofont-arrow-down"></i>
                              Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc BTC"></i> Bitcoin
                          </td>
                          <td>Using - Wallet*******2321</td>
                          
                          <td>10.125 USD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
           
      
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BuyModal />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Trade;
