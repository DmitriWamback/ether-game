import React, { Component } from 'react';

class Feed extends Component {

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

    render() {
        return (
            <div style={{display: "inline-block"}}>
                <div style={{display: "inline-block"}}>
                    <div style={{width: 350, height: 200, margin: '10px'}}>
                        <div style={{marginBottom: '20px', marginTop: '30px'}} className='agnbold'>WELCOME BACK TO ETHER-GAME</div>
                    </div>
                    <div style={{width: 350, height: 200, margin: '10px'}}>
                        <div style={{marginBottom: '20px', marginTop: '30px'}} className='agnbold'>MY FEED</div>
                        <div style={{width: '80%', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}className='agnbtn cagntxthvr' onClick={e => this.props.pfunc('a')}>
                            <div className='agntxthvr' style={{height: '25px'}}>Post</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feed;