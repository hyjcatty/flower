/**
 * Created by hyj on 2016/9/13.
 */
import React, {
    Component,
    PropTypes
    } from 'react';

import classNames from 'classnames';
import './CommonFooter.css';
export default class CommonFooter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url:"",
            width:800,
            height:600,
            winwidth:800,
            winheight:600
        };
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
    updatewinsize(winwidth,winheight){
        this.setState({winwidth:winwidth});
        this.setState({winheight:winheight});
    }

    render() {
        return (
            <div style={{position:"relative",textAlign:"center",height:this.state.winheight+"px",marginTop:"0px",marginLeft:"0px",marginRight:"0px"}}>
                <img src={this.state.url} style={{position:"relative",height:this.state.height+"px",width:this.state.width+"px",marginTop:"15px"}}/>
            </div>
        );
    }
}