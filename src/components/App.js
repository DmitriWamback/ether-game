import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Core from '../abis/Core.json'
import Navbar from './Navbar'
import Main from './Main'


class App extends Component {

    async componentWillMount() {
        await this.createWeb3()
        await this.loadBlockchain()
    }

    async createWeb3() {

        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
            alert("ayo")
        }
    }

    async loadBlockchain() {
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()

        console.log(accounts)

        // make sure the user connected a crypto wallet
        this.setState({ account: accounts[0] })

        const networkId = await web3.eth.net.getId()
        const networkData = Core.networks[networkId]
        if (networkData) {
            const hub = web3.eth.Contract(Core.abi, networkData.address)
            this.setState({contract: hub})
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            account: '',
            contract: null
        }
    }

    render() {
        return (
            <div>
                <Navbar account={this.state.account}/>
                <Main account={this.state.account} contract={this.state.contract}/>
            </div>
        );
    }
}

export default App;