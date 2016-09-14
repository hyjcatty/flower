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
import BillboardMenu from "../menu/BillboardMenu/BillboardMenu"
import CommonFooter from "../footer/CommonFooter/CommonFooter"
import Footer from "../footer/Footer/Footer"
import './App.css';

var winWidth;
var winHeight;
class App extends Component{


    constructor(props) {
        super(props);
        this.state = {
            width:800, //
            height:800,
            convaswidth:600,
            labelcolumn:7,
            billboardcolumn:4,
            containercolumn:3,
            labelgap:7,
            billboardgap:4,
            containergap:3,
            linelength:500
        };
    }
    initializeSize(width){
        this.setState({width:width,convaswidth:parseInt(width*0.9),labelcolumn:parseInt(width*0.9/150),billboardcolumn:parseInt(width*0.9/400),containercolumn:parseInt(width*0.9/320)})
        this.setState({labelgap:parseInt((this.state.convaswidth-this.state.labelcolumn*150)/(this.state.labelcolumn-1))});
        this.setState({billboardgap:parseInt((this.state.convaswidth-this.state.billboardcolumn*400)/(this.state.billboardcolumn-1))});
        this.setState({containergap:parseInt((this.state.convaswidth-this.state.containercolumn*320)/(this.state.containercolumn-1))});
        this.setState({linelength:parseInt((this.state.convaswidth-100)/2)});
        console.log(this.state);
    }
    initializeContainer(key,width,margin){
        for(let i=0;i<this.state.containercolumn;i++){
            let ref = "singleContainer"+i;
            this.refs[ref].setkey(key);
            this.refs[ref].setwidth(width);
            this.refs[ref].setmargin(margin);
        }
        //this.refs.singleContainer.setkey(key);
        //this.refs.singleContainer.setwidth(width);
        //this.refs.singleContainer.setmargin(margin);
    }
    getshortContainer(){
        let ret = "singleContainer"+0;
        //console.log("short_container:"+this.state.containercolumn);
        for(let i=0;i<this.state.containercolumn;i++){
            let ref = "singleContainer"+i;
            //console.log("short_container size:"+ref+"size"+this.refs[ref].getheight());
            if(this.refs[ref].getheight()<this.refs[ret].getheight()){
                ret = ref;
            }
        }
        return ret;
    }
    /*
    initializeLogobar(logourl,logolink,logomenues){
        this.refs.logobar.updatelogo(logourl,logolink)
        this.refs.logobar.updatelogomenues(logomenues)
    }
    initializeLoginbar1(prop){
        this.refs.loginbar1.updateprop(prop)
    }
    initializeLoginbar2(prop){
        this.refs.loginbar2.updateprop(prop)
    }*/

    updateprop(prop){
        let ref = this.getshortContainer();
        this.refs[ref].append_list(prop);
        //console.log("push into:"+ref);
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
    showThinMenu(){
        this.refs.thinmenu.show();
    }
    hideThinMenu(){
        this.refs.thinmenu.hide();
    }
    initializeBillboardMenu(width,height,prop1,prop2,prop3,background){
        this.refs.billboardmenu.updatesize(width,height)
        this.refs.billboardmenu.updateLogoBarprop(prop1);
        this.refs.billboardmenu.updateSearchBarprop(prop2);
        this.refs.billboardmenu.updateLoginBarprop(prop3);
        this.refs.billboardmenu.updatebackground(background);
    }
    initializeCommonFooter(prop){
        this.refs.commonfooter.updateurl(prop.url)
        this.refs.commonfooter.updatewidth(prop.width)
        this.refs.commonfooter.updateheight(prop.height)
        this.refs.commonfooter.updatewinsize(prop.winwidth,prop.winheight)
    }
    initializeFooter(labels){
        this.refs.footer.updatelabels(labels);
    }
    render() {
        let temp=[];
        for(let i=0;i<this.state.containercolumn;i++){
            let key = "singleContainer"+i;
            if(i==0){
                temp.push(<div key ={key} style={{position:"relative",top:0,marginLeft:0,float: "left",width:"320px"}}><LineContainer  ref={key}/></div>);
            }else{
                temp.push(<div key ={key} style={{position:"relative",top:0,marginLeft:this.state.containergap,float: "left",width:"320px"}}><LineContainer  ref={key} /></div>);
            }
        }
        /*




         <div className="titleline" style={{width:this.state.convaswidth+"px",marginTop:"25px",marginLeft:parseInt(this.state.width*0.05)+"px"}}>
         <hr className="HR-bottom" size="3"/>
         </div>
         <div style={{position:"relative"}}>
         <CommonFooter ref="commonfooter" />
         </div>
         <div style={{position:"relative"}}>
         <Footer ref="footer" />
         </div>

         */
        return(
            <div>
                <div className="thinmenu">
                    <ThinMenu ref="thinmenu" />
                </div>
                <div>
                    <BillboardMenu ref="billboardmenu" />
                </div>
                <div className="convas" style={{width:this.state.convaswidth+"px",marginLeft:parseInt(this.state.width*0.05)+"px",top:"15px"}}>
                    <div style={{position:"relative",width:this.state.convaswidth+"px",height:50,}}>
                        <div className="titleline" style={{width:this.state.linelength+"px"}}>
                            <hr className="HR-map" size="3"/>
                        </div>
                        <div style={{position:"relative",width:100+"px",textAlign:"center",float:"left"}}>HOT SEARCH
                        </div>
                        <div className="titleline" style={{width:this.state.linelength+"px"}}>
                            <hr className="HR-map" size="3"/>
                        </div>
                        <div style={{clear:"both"}}></div>
                    </div>
                    <div style={{position:"relative",height:150+"px"}}>
                    </div>
                    <div style={{position:"relative",width:this.state.convaswidth+"px",height:50+"px"}}>
                        <div className="titleline" style={{width:this.state.linelength+"px"}}>
                            <hr className="HR-map" size="3"/>
                        </div>
                        <div style={{position:"relative",width:100+"px",textAlign:"center",float:"left"}}>SPECIAL
                        </div>
                        <div className="titleline" style={{width:this.state.linelength+"px"}}>
                            <hr className="HR-map" size="3"/>
                        </div>
                        <div style={{clear:"both"}}></div>
                    </div>
                    <div style={{position:"relative",width:this.state.convaswidth+"px"}}>
                        {temp}
                        <div style={{clear:"both"}}></div>
                    </div>
                </div>
                <div className="titleline" style={{width:this.state.convaswidth+"px",marginTop:"25px",marginLeft:parseInt(this.state.width*0.05)+"px"}}>
                    <hr className="HR-bottom" size="3"/>
                </div>
                <div style={{position:"relative"}}>
                    <CommonFooter ref="commonfooter" />
                </div>
                <div style={{position:"relative"}}>
                    <Footer ref="footer" />
                </div>

            </div>
        );
    }

}
get_size();
var react_element = <App/>;
var app_handle = ReactDOM.render(react_element,document.getElementById('app'));

app_handle.initializeSize(winWidth);

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
//app_handle.initializeLogobar("./svg/huabanlogo.svg","#",logomenu);
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
//app_handle.initializeLoginbar1(prop1);
//app_handle.initializeLoginbar2(prop2);
var logoprop={
    logourl:"./svg/huabanlogo.svg",
    logolink:"#",
    logomenues:logomenu
}
var searchprop={
    searchword:"123123",
    width:600
}
app_handle.initializeThinMenu(logoprop,searchprop,prop2);app_handle.hideThinMenu();
app_handle.initializeBillboardMenu(winWidth,winWidth/3,logoprop,searchprop,prop2,"url(./img/billboard.png)");




app_handle.initializeContainer("tempkey",320,20);
for(let i=0;i<32;i++){
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


var footerprop={
    url:"./img/end.png",
    width:238,
    height:80,
    winwidth:winWidth,
    winheight:110
}
app_handle.initializeCommonFooter(footerprop);
var footerlabel=[];
footerlabel.push("Copy right by hyj");
footerlabel.push("2016");
app_handle.initializeFooter(footerlabel);
app_handle.showThinMenu();
function printheight(){
    //console.log("Now height = "+app_handle.getheight());
}
function GetRandomNum(Min,Max)
{
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
}
window.setTimeout(printheight, 500);


function get_size(){
    if (window.innerWidth)
        winWidth = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
        winWidth = document.body.clientWidth;
    if (window.innerHeight)
        winHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
        winHeight = document.body.clientHeight;
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
    {
        winHeight = document.documentElement.clientHeight;
        winWidth = document.documentElement.clientWidth;
    }
    console.log("winWidth = "+winWidth);
    console.log("winHeight= "+winHeight);
}