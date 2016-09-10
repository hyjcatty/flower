/**
 * Created by hyj on 2016/9/5.
 */


import React, {
    Component,
    PropTypes
    } from 'react';

import classNames from 'classnames';
import '../../../css/font-awesome.min.css';
import './FrameHead.css';
export default class FrameHead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:"guest", // username
            pictureid:0, // count
            faveriate:false, // current average
            buttonlabel:"buy",
            visiable:"none"
        };
    }
    updateusername(username){
        this.setState({username:username})
    }
    updatepictureid(pictureid){
        this.setState({pictureid:pictureid})
    }
    updatefaveriate(faveriate){
        this.setState({faveriate:faveriate})
    }
    show(){
        this.setState({visiable:"block"})
    }
    hide(){
        this.setState({visiable:"none"})
    }
    render() {
        //var Icon = require('react-font-awesome').Icon;
        return (
            <div style={{display:this.state.visiable}}>
                <button type="button" className="btn btn-primary btn-sm" id="purchasebtn" style={{position:"relative",marginLeft:"7px",marginTop:"7px",opacity:"1"}}>{this.state.buttonlabel}</button>
                <button type="button" className="btn btn-default btn-sm pull-right" style={{position:"relative",marginTop:"7px",marginRight:"7px",opacity:"1"}} ><i className="fa fa-heart"> </i></button>

            </div>
        );
    }
}