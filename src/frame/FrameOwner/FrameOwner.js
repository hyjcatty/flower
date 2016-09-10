/**
 * Created by hyj on 2016/9/7.
 */

import React, {
    Component,
    PropTypes
    } from 'react';

import classNames from 'classnames';
import '../../../css/font-awesome.min.css';
import './FrameOwner.css';
export default class FrameOwner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ownerurl:"#",
            ownerpic:"#",
            label:""
        };
    }
    updateownerlabel(label){
        this.setState({label:label})
    }
    updateownerpic(ownerpic){
        this.setState({ownerpic:ownerpic})
    }
    updateownerurl(ownerurl){
        this.setState({ownerurl:ownerurl})
    }

    render() {
        //var Icon = require('react-font-awesome').Icon;
        return (
            <div style={{borderTop: "1px solid #EAEAEA"}} className="framelabel">
                <div style={{marginTop:10}}>
                    <a href={this.state.ownerurl} ><img src={this.state.ownerpic} style={{height:48,width:48,verticalAlign:"middle"}} /></a>
                    <a style={{marginLeft:20}}>{this.state.label}</a>
                </div>
            </div>
        );
    }
}