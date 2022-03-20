import React, { Component } from 'react';
import i from './sample.jpg'

class Post extends Component {

    constructor() {
        super()

        this.state = {
            addrival: '',
            baddr: '',
            amount: 0,
            nbposts: 0,
            posts: []
        }
    }

    async Tip() {
        this.props.contract.methods.tipUser(this.props.account).send({
            from: this.props.account,
            value: window.web3.utils.toWei('0.1', 'Ether')
        })
    }

    render() {
        return (
            <div style={{display: "inline-block"}}>
                <div style={{display: "inline-block"}}>
                    <div style={{width: 350, height: 450, margin: '10px', backgroundColor: 'rgb(21, 26, 31)'}}>
                        <img src={i} style={{width: '320px', height: '320px', marginTop: '15px', objectFit: 'cover'}}></img>
                        <div style={{margin: 'auto', marginBottom: '20px', marginTop: '10px', textAlign: 'left', width: '80%'}}>{this.props.msg}</div>
                        <div style={{marginLeft: '10%', marginBottom: '20px', width: '40%', textAlign: 'left', display: 'inline-block', float: 'left'}} className='agnbold'>{this.props.account.substring(0, 10)+'...'}</div>
                        <div style={{width: '20%', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '0px', display: 'inline-block', float: 'left'}}className='agnbtn cagntxthvr' onClick={e => this.Tip()}>
                            <div className='agntxthvr' style={{height: '25px', width: '100px'}}>TIP 0.1 ETH</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;