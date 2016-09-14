/**
 * Created by hyj on 2016/9/12.
 */
/**
 * Created by hyj on 2016/9/12
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
import './ThinMenu.css';
import SearchBar from "../bar/SearchBar/SearchBar"
import LogoBar from "../bar/LogoBar/LogoBar"
import LoginBar from "../bar/LoginBar/LoginBar"

export default class ThinMenu extends Component {

    constructor(props) {
        super(props);
        this.state={
            hide:"block"
        }
    }
    hide(){
        this.setState({hide:"none"});
    }
    show(){
        this.setState({hide:"block"});
    }
    updateLogoBarprop(prop){
        this.refs.logobar.updatelogo(prop.logourl,prop.logolink);
        this.refs.logobar.updatelogomenues(prop.logomenues);
    }
    updateSearchBarprop(prop){
        this.refs.searchbar.updatesearchword(prop.searchword);
        this.refs.searchbar.updatewidth(prop.width);
    }
    updateLoginBarprop(prop){
        this.refs.loginbar.updateprop(prop);
    }
    render() {
            return (
                <div  style={{position:"fixed",backgroundColor:"#FFF", minHeight:"44px", width:"100%",zIndex:"99",display:this.state.hide}}>

                    <div  style={{position:"relative",marginTop:"5px",zIndex:"99",float:"left",marginLeft:"50px"}}>
                        <LogoBar key ="thinmenu_logobar" ref="logobar"/>
                    </div>
                    <div style={{position:"relative",zIndex:"99",float:"left",marginLeft:"50px"}}>
                        <SearchBar key ="thinmenu_searchbar" ref="searchbar"/>
                    </div>
                    <div className="pull-right" style={{position:"relative",zIndex:"99",float:"left",marginLeft:"50px",marginRight:"50px"}} >
                        <LoginBar key ="thinmenu_loginbar" ref="loginbar"/>
                    </div>
                    <div style={{clear:"both"}}></div>
                </div>
            );
    }
}