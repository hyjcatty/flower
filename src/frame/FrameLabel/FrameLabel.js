
/**
 * Created by hyj on 2016/9/5.
 */


import React, {
    Component,
    PropTypes
    } from 'react';

import classNames from 'classnames';
import '../../../css/font-awesome.min.css';
import './FrameLabel.css';
export default class FrameLabel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            label:""
        };
    }
    updatelabel(label){
        this.setState({label:label})
    }

    render() {
        //var Icon = require('react-font-awesome').Icon;
        return (
            <div>
                <p className="framelabel">{this.state.label}</p>
            </div>
        );
    }
}