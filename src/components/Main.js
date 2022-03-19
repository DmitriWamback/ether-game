import React, { Component } from 'react';

class Main extends Component {

    constructor() {
        super()

        this.state = {
            addrival: '',
            amount: 0,
            nbposts: 0,
            posts: []
        }
    }

    updateAddrVal(evt) {
        const val = evt.target.value
        this.setState({addrival: val})
    }

    updateAmount(evt) {
        const val = evt.target.value
        this.setState({amount: val})
    }

    async apost() {

        try {
            const web3 = window.web3
            this.state.posts[this.state.nbposts] = this.state.addrival
            this.state.nbposts++
            console.log(this.state.amount)

            const a = '' + this.state.amount

            await this.props.contract.methods.tipUser(this.state.addrival).send({
                from: this.props.account, 
                value: web3.utils.toWei(a, 'Ether')
             })
        }
        catch(e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div>
                <div style={{width: 400, margin: '10px'}}>
                    <div style={{marginBottom: '20px'}} className='agnbold'>TIP AUTHORS</div>
                    <input style={{margin: 'auto', width:'80%', display: 'block'}} placeholder='Ethereum address' className='agnsuf' onChange={e => this.updateAddrVal(e)}></input>
                    <div style={{marginLeft: '40px',marginTop: '20px', width: '40%', padding: '0px', float: 'left', display: 'flex'}}className='agnbtn'>
                        <input style={{display: 'inline-block', width: '100%', marginTop: '0px'}} placeholder='Amount' className='agnsuf' type="number" onChange={e => this.updateAmount(e)}></input>
                    </div>
                    <div style={{marginTop: '20px', width: '35%', display: 'flex', marginLeft: '20px', float: 'left', justifyContent: 'center', alignItems: 'center'}}className='agnbtn cagntxthvr' onClick={e => this.apost()}>
                        <div className='agntxthvr' style={{height: '25px'}}>Send</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;