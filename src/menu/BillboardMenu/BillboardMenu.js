/**
 * Created by hyj on 2016/9/9.
 */
import React, {
    Component,
    PropTypes
    } from 'react';
/*
 import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 PixelRatio
 } from 'react-native';*/
import classNames from 'classnames';
import '../../../css/font-awesome.min.css';
//import '../../../css/flex.css';
//import '../../../css/bootstrap.css';
//import '../../../../css/custom.css';
import './BillboardMenu.css';
import SearchBar from "../bar/SearchBar/SearchBar"
import LogoBar from "../bar/LogoBar/LogoBar"
import LoginBar from "../bar/LoginBar/LoginBar"

export default class BillboardMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width:1280, //
            height:800,
            halfheight:400,
            marginleft:400,
            background:""
        };
    }
    updatesize(width,height){
        this.setState({width:width,height:height})
        this.setState({halfheight:height/2-22})
    }
    updatebackground(background){
        this.setState({background:background})
    }
    updateLogoBarprop(prop){
        this.refs.logobar.updatelogo(prop.logourl,prop.logolink);
        this.refs.logobar.updatelogomenues(prop.logomenues);
    }
    updateSearchBarprop(prop){
        this.refs.searchbar.updatesearchword(prop.searchword);
        this.refs.searchbar.updatewidth(prop.width);
        this.setState({marginleft:(this.state.width-prop.width-21)/2})
    }
    updateLoginBarprop(prop){
        this.refs.loginbar.updateprop(prop);
    }
    render() {
        return (
            <div style={{position:"ralative",background:this.state.background,backgroundRepeat:"no-repeat",height:this.state.height}}>
                <div>
                    <div   style={{position:"relative",marginTop:"5px",float:"Left"}}>
                        <LogoBar key ="billmenu_logobar" ref="logobar"/>
                    </div>
                    <div  className="pull-right" style={{position:"relative",float:"Left",marginRight:"50px"}} >
                        <LoginBar key ="billmenu_loginbar" ref="loginbar"/>
                    </div>
                    <div style={{clear:"both"}}></div>
                </div>
                <div style={{position:"absolute",top:this.state.halfheight,left:this.state.marginleft,marginLeft: "auto", marginRight: "auto"}}>
                    <SearchBar key ="billmenu_searchbar" ref="searchbar"/>
                </div>
            </div>
        );
    }
}