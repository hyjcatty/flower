/**
 * Created by hyj on 2016/9/5.
 */
import React, {
    Component,
    PropTypes
    } from 'react';

import classNames from 'classnames';
import '../../../css/font-awesome.min.css';
import './FrameTag.css';
export default class FrameTag extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tags:[]
        };
    }
    updatetags(tags){
        this.setState({tags:tags})
    }

    render() {
        //var Icon = require('react-font-awesome').Icon;
        let items = [];
        for(let i=0;i<this.state.tags.length;i++){
            items.push(<button key={i} type="button" className="btn btn-success btn-xs" style={{marginLeft:"5px"}}>{this.state.tags[i]}</button>);

        }
        return (
            <div>

                <a className="framelabel">tags:</a>{items}
            </div>
        );
    }
}