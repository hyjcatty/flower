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
            if(this.state.logomenues[i].badge!==""){
                items.push(<label><a href={this.state.logomenues[i].link}>{this.state.logomenues[i].name}<span className="label label-success">{this.state.logomenues[i].badge}</span></a></label>);
            }else{
                items.push(<label><a href={this.state.logomenues[i].link}>{this.state.logomenues[i].name}</a></label>);
            }

        }
        return (
            <div >
                <img src={this.state.logourl} href={this.state.logolink}/>
                {items}
            </div>
        );
    }
}