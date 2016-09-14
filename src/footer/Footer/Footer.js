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
            text.push(<a key={"footerline"+i} style={{position:"relative",textAlign:"center",fontSize:12,color:"#FFF",marginTop:"5px"}}>{this.state.labels[i]}</a>);
        }
        return (
            <div style={{position:"relative",height:"100%",textAlign:"center",marginTop:"45px",background:"#286090"}}>
                {text}
                <div style={{clear:"both"}}></div>
            </div>
        );
    }
}