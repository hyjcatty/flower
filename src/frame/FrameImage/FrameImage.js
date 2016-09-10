/**
 * Created by hyj on 2016/9/5.
 */
import React, {
    Component,
    PropTypes
    } from 'react';

import classNames from 'classnames';
import './FrameImage.css';
export default class FrameImage extends Component {

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
    updatewinsize(winwidth){
        this.setState({winwidth:winwidth});
        let winheight = this.state.height/this.state.width*this.state.winwidth;
        this.setState({winheight:winheight});
    }

    render() {
        return (
            <div>
                <img src={this.state.url} style={{height:this.state.winheight,width:this.state.winwidth}} className="frameimage"/>
            </div>
        );
    }
}