/**
 * Created by hyj on 2016/9/7.
 */


/**
 * Created by hyj on 2016/9/5.
 */
import React, {
    Component,
    PropTypes
    } from 'react';
import ReactDOM from "react-dom";
import classNames from 'classnames';
import Frame from "../../frame/Frame";
import "./LineContainer.css"
export default class LineContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width:800,
            key:"",
            Framelist:[],
            margintop:20
        };
    }
    setkey(key){
        this.setState({key:key})
    }
    setwidth(width){
        this.setState({width:width})
    }
    setmargin(margintop){
        this.setState({margintop:margintop})
    }
    append_list(newFrame){
        this.setState({Framelist:this.state.Framelist.concat(newFrame)});
        this.refs[this.state.key + (this.state.Framelist.length-1)].updateprop(this.state.Framelist[(this.state.Framelist.length-1)]);
    }
    clear_list(){
        this.setstate({Framelist:[]})
    }
    getheight(){
        /*
        console.log(ReactDOM.findDOMNode(this.refs.myself));
        console.log(this.refs.myself);
        console.log(document.getElementById("myself"));
        console.log(ReactDOM.findDOMNode(this.refs.myself).offsetHeight);
        console.log(this.refs.myself.offsetHeight);
        console.log(document.getElementById("myself").offsetHeight);*/
        return ReactDOM.findDOMNode(this.refs.myself).offsetHeight;
        //return this.refs.myself.getDOMNode().offsetHeight;
    }
    updateprop(){
        for(let i=0;i<this.state.Framelist.length;i++) {
            this.refs[this.state.key + i].updateprop(this.state.Framelist[i]);
            //console.log(this.state.Framelist[i]);
        }
    }
    render() {
        let items = [];
        for(let i=0;i<this.state.Framelist.length;i++){
            let tempkey = this.state.key+i;
            //console.log(tempkey);
            if(i==0)
            items.push(<div key={this.state.key+i} style={{marginTop:0}}><Frame  ref={tempkey}/></div>);
            else
                items.push(<div key={this.state.key+i} style={{marginTop:this.state.margintop}}><Frame  ref={tempkey}/></div>);

        }
        return (
            <div ref="myself"  id="myself" style={{position:"relative",flex:1,width:this.state.width}}>
                {items}
            </div>
        );
    }
}