/**
 * Created by hyj on 2016/9/9.
 */


import React, {
    Component,
    PropTypes
    } from 'react';

import classNames from 'classnames';
import '../../../../css/font-awesome.min.css';
//import '../../../../css/bootstrap.css';
//import '../../../../css/custom.css';
import './SearchBar.css';
export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchword:"", // username
            placeholder:"Search for...",
            width:600
        };
    }
    updatesearchword(searchword){
        this.setState({searchword:searchword})
    }
    updatewidth(width){
        this.setState({width:width})
    }
    render() {
        //var Icon = require('react-font-awesome').Icon;
        return (
            <div className="form-group top_search">
                <div  className="input-group" style={{position:"relative"}}>
                    <input type="text" className="form-control" placeholder={this.state.placeholder} style={{float:"left",width:this.state.width,display:"inline"}} >
                    </input>
                    <span className="input-group-btn" style={{display:"inline",height: "48px"}}>
                        <button className="btn btn-clear" type="button" style={{display:"inline",height: "48px"}}><i className="fa fa-search"> </i></button>
                    </span>
                </div>
            </div>
        );
    }
}