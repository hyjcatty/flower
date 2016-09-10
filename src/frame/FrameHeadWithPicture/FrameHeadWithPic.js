/**
 * Created by hyj on 2016/9/6.
 */


import React, {
    Component,
    PropTypes
    } from 'react';

import classNames from 'classnames';
import '../../../css/font-awesome.min.css';
import './FrameHeadWithPic.css';
export default class FrameHead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:"guest", // username
            pictureid:0, // count
            faveriate:false, // current average
            buttonlabel:"buy",
            visiable:"none",
            url:"",
            width:800,
            height:600,
            winwidth:800,
            winheight:600
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

    updateurl(url){
        this.setState({url:url});
    }
    updatewidth(width){
        this.setState({width:width});
    }
    updateheight(height){
        this.setState({height:height});
    }
    updatewinsize(winwidth){
        this.setState({winwidth:winwidth});
        let winheight = this.state.height/this.state.width*this.state.winwidth;
        this.setState({winheight:winheight});
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
            <div style={{height:this.state.winheight,maxHeight:this.state.winheight,width:this.state.winwidth,background:"url("+this.state.url+")",backgroundSize:"cover"}} className="frameimage">
                <div style={{display:this.state.visiable}}>
                <button type="button" className="btn btn-primary btn-sm" id="purchasebtn" style={{position:"relative",marginLeft:"5px",marginTop:"5px",opacity:"1"}}>{this.state.buttonlabel}</button>
                <button type="button" className="btn btn-default btn-sm pull-right" style={{position:"relative",marginTop:"5px",marginRight:"5px",opacity:"1",display:this.state.visiable}} ><i className="fa fa-heart"> </i></button>
                </div>

            </div>
        );
    }
}