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

    updateprop(prop){
        this.refs.singleContainer.append_list(prop);
        //this.refs.singleContainer.updateprop();
    }
    getheight(){
        return this.refs.singleContainer.getheight();
    }
    render() {
        return(
            <div>
            <div>
                <LogoBar ref="logobar"/>
                <SearchBar ref="searchbar"/>
                <LineContainer ref="singleContainer"/>
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
for(let i=0;i<4;i++){
    let badge = "";
    if(i==3) badge="new"
    let tempmenuitem={
        link:"#",
        name:"menu1",
        badge:badge
    }
    logomenu.push(tempmenuitem);
}
app_handle.initializeLogobar("./svg/huabanlogo.svg","#",logomenu);
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