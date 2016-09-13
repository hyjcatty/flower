/**
 * Created by hyj on 2016/9/13.
 */
import React, {
    Component,
    PropTypes
    } from 'react';

import classNames from 'classnames';
import './Footer.css';
export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            labels:[]
        };
    }
    updatelabels(labels){
        this.setState({labels:labels});
    }

    render() {
        let text=[];
        for(let i=0;i<this.state.labels.length;i++){
            text.push(<p style={{position:"relative",textAlign:"center",fontSize:"12",color:"#FFF"}}>{this.state.labels[i]}</p>);
        }
        return (
            <div style={{position:"relative",textAlign:"center",marginTop:"30px",background:"#286090"}}>
                {text}
            </div>
        );
    }
}