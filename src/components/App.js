import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Core from '../abis/Core.json'
import Navbar from './Navbar'
import Main from './TipPanel'
import Feed from './Feed'
import Post from './Post'

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
            alert("Non-ethereum browser")
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

    post_image(a) {

        if (a.length > 0 && a.length <= 20) {
            this.state.posts[this.state.nbposts] = [a, this.state.account]
            this.setState({nbposts: this.state.nbposts + 1})
        }
    }

    updateStatus(evt) {
        const val = evt.target.value
        this.setState({_status: val})
    }

    constructor(props) {
        super(props)
        this.state = {
            account: '',
            contract: null,
            posts: [],
            nbposts: 0,
            _status: ''
        }
    }

    render() {
        return (
            <div>

                <Navbar account={this.state.account}/>
                <div style={{width: '100%', height: 470, display: 'flex', justifyContent: 'center'}}>
                    <Main account={this.state.account} contract={this.state.contract}/>
                    <div style={{display: "inline-block", width: '370px', height: '470px'}}>
                        <div style={{width: 350, height: 200, margin: '10px', display: 'inline-block'}}>
                            <div style={{marginBottom: '20px', marginTop: '30px'}} className='agnbold'>WELCOME BACK TO ETHER-GAME</div>
                            <div style={{marginLeft: '10%', width: '80%', padding: '0px', float: 'left', display: 'flex', height: '50px'}}className='agnbtn'>
                                <input style={{display: 'block', width: '100%', marginTop: '0px', height: '100%', textAlign: 'left', height: 50}} placeholder="I'm feeling..." className='agnsuf' onChange={e => this.updateStatus(e)}></input>
                            </div>
                            <div style={{width: '80%', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '90px'}}className='agnbtn cagntxthvr' onClick={e => this.post_image(this.state._status)}>
                                <div className='agntxthvr' style={{height: '25px'}}>Post</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='image-container'>
                    {
                        this.state.posts.map((val, index, o) => <Post account={this.state.posts[this.state.posts.length - 1 - index][1]} contract={this.state.contract} msg={this.state.posts[this.state.posts.length - 1 - index][0]}/>)
                    }
                </div>
            </div>
        );
    }
}

export default App;