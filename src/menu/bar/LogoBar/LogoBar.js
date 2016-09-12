/**
 * Created by hyj on 2016/9/9.
 */


import React, {
    Component,
    PropTypes
    } from 'react';

import classNames from 'classnames';
import '../../../../css/font-awesome.min.css';
//import '../../../../css/bootstrap.css';
//import '../../../../css/custom.css';
import './LogoBar.css';
export default class LogoBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logourl: "./svg/huabanlogo.svg",
            logolink:"#",
            logomenues:[]
        };
    }
    updatelogo(logourl,logolink){
        this.setState({logourl:logourl,logolink:logolink})
    }
    updatelogomenues(logomenues){
        this.setState({logomenues:logomenues})
    }
    render() {
        let items = [];
        for(let i=0;i<this.state.logomenues.length;i++){
            let key = "menuitem"+i;
            if(this.state.logomenues[i].badge!==""){
                items.push(<span style={{position:"relative",marginLeft:"50px"} } key={key} className="menulabel" href={this.state.logomenues[i].link} >{this.state.logomenues[i].name}<span className="label label-success">{this.state.logomenues[i].badge}</span></span>);
            }else{
                items.push(<span style={{position:"relative",marginLeft:"50px"}} key={key} className="menulabel" href={this.state.logomenues[i].link} >{this.state.logomenues[i].name}</span>);
            }

        }
        return (
            <div >
                <img src={this.state.logourl} href={this.state.logolink} style={{verticalAlign:"middle"}}/>
                {items}
            </div>
        );
    }
}