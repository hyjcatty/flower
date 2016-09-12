/**
 * Created by hyj on 2016/9/5.
 */
import React,  {
    Component,
    PropTypes
    }from "react";
import ReactDOM from "react-dom";
import classNames from 'classnames';
import LineContainer from "./../container/LineContainer/LineContainer";
import SearchBar from "../menu/bar/SearchBar/SearchBar"
import LogoBar from "../menu/bar/LogoBar/LogoBar"
import LoginBar from "../menu/bar/LoginBar/LoginBar"
import ThinMenu from "../menu/ThinMenu/ThinMenu"


class App extends Component{

    initializeContainer(key,width,margin){
        this.refs.singleContainer.setkey(key);
        this.refs.singleContainer.setwidth(width);
        this.refs.singleContainer.setmargin(margin);
    }
    initializeLogobar(logourl,logolink,logomenues){
        this.refs.logobar.updatelogo(logourl,logolink)
        this.refs.logobar.updatelogomenues(logomenues)
    }
    initializeLoginbar1(prop){
        this.refs.loginbar1.updateprop(prop)
    }
    initializeLoginbar2(prop){
        this.refs.loginbar2.updateprop(prop)
    }

    updateprop(prop){
        this.refs.singleContainer.append_list(prop);
        //this.refs.singleContainer.updateprop();
    }
    getheight(){
        return this.refs.singleContainer.getheight();
    }
    initializeThinMenu(prop1,prop2,prop3){
        this.refs.thinmenu.updateLogoBarprop(prop1);
        this.refs.thinmenu.updateSearchBarprop(prop2);
        this.refs.thinmenu.updateLoginBarprop(prop3);
    }
    render() {
        return(
            <div >
                <div className="thinmenu">
                    <ThinMenu ref="thinmenu" />
                </div>
                <div className="convas">

                    <LineContainer ref="singleContainer"/>
                </div>
                <div>
                    <LoginBar key ="test_loginbar1"  ref="loginbar1"/>
                    <LoginBar key ="test_loginbar2" ref="loginbar2"/>
                    <LogoBar key ="test_logobar" ref="logobar"/>
                    <SearchBar key ="test_searchbar" ref="searchbar"/>
                    </div>
            </div>
        );
    }

}

var react_element = <App/>;
var app_handle = ReactDOM.render(react_element,document.getElementById('app'));

app_handle.initializeContainer("tempkey",320,20);
for(let i=0;i<5;i++){
    let radomnumber = GetRandomNum(1,3);
    let prop = {
        pic_url:"./img/"+radomnumber+".png",
        pic_width:320,
        pic_height:240,
        winwidth:320,
        winheight:240,
        tags:["test1","test2"],
        label:"sfadfasfasffsffsfasfasfasdf",
        username:"guest",
        pictureid:12345,
        faverate:true,
        ownerurl:"#",
        ownerpic:"./owner/owner.jpg",
        ownerlabel:"total 25 pics"
    };
    app_handle.updateprop(prop);

}
var logomenu = [];
for(let i=0;i<3;i++){
    let badge = "";
    if(i==2) badge="new"
    let tempmenuitem={
        link:"#",
        name:"menu1",
        badge:badge
    }
    logomenu.push(tempmenuitem);
}
app_handle.initializeLogobar("./svg/huabanlogo.svg","#",logomenu);
var prop1={
    iflogin:true,
    username:"hyj",
    userurl:"#",
    userpic:"./owner/owner.jpg"
}
var prop2={
    iflogin:false,
    username:"hyj",
    userurl:"#",
    userpic:"./owner/owner.jpg"
}
app_handle.initializeLoginbar1(prop1);
app_handle.initializeLoginbar2(prop2);
var logoprop={
    logourl:"./svg/huabanlogo.svg",
    logolink:"#",
    logomenues:logomenu
}
var searchprop={
    searchword:"123123",
    width:600
}
app_handle.initializeThinMenu(logoprop,searchprop,prop2);
function printheight(){
    console.log("Now height = "+app_handle.getheight());
}
function GetRandomNum(Min,Max)
{
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
}
window.setTimeout(printheight, 500);