/**
 * Created by hyj on 2016/9/12
 */


import React, {
    Component,
    PropTypes
    } from 'react';

import classNames from 'classnames';
import '../../../../css/font-awesome.min.css';
//import '../../../../css/bootstrap.css';
//import '../../../../css/custom.css';
import './LoginBar.css';
export default class LoginBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            iflogin:false,
            username:"",
            userurl:"#",
            userpic:"#"
        };
    }
    updateprop(prop){
        this.setState(prop)
    }
    render() {
        if(this.state.iflogin){
            return (
                <div className="menulabel" style={{minWidth:"100px"}}>
                    <div style={{marginTop:10}} className="pull-right">
                        <a href={this.state.userurl} ><img src={this.state.userpic} style={{height:32,width:32,verticalAlign:"middle"}} /></a>
                        <a style={{marginLeft:20}}>{this.state.username}</a>
                    </div>
                </div>
            );
        }else{
            return (
                <div  className="menulabel"  style={{minWidth:"100px"}}>
                    <button type="button" className="btn btn-warning btn-sm pull-right" style={{position:"relative",marginRight:"7px",marginTop:"8px",opacity:"1"}}>Login</button>
                    <button type="button" className="btn btn-default btn-sm pull-right" style={{position:"relative",marginRight:"7px",marginTop:"8px",opacity:"1"}} >Regist</button>
                </div>
            );
        }
    }
}