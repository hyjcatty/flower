/**
 * Created by hyj on 2016/9/5.
 */
import React, {
    Component,
    PropTypes
    } from 'react';

import classNames from 'classnames';
import FrameHeadWithPic from "./FrameHeadWithPicture/FrameHeadWithPic";
import FrameHead from "./FrameHead/FrameHead";
import FrameImage from "./FrameImage/FrameImage";
import FrameLabel from "./FrameLabel/FrameLabel";
import FrameTag from "./FrameTag/FrameTag";
import FrameOwner from "./FrameOwner/FrameOwner";
import "./Frame.css"
export default class Frame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pic_url:"",
            pic_width:800,
            pic_height:600,
            winwidth:800,
            winheight:600,
            tags:[],
            label:"",
            username:"guest",
            pictureid:0,
            faverate:true,
            ownerurl:"#",
            ownerpic:"#",
            ownerlabel:"12345"
        };
    }
    updateprop(prop){
        this.setState(prop);

        this.refs.frame_head.updateusername(prop.username);
        this.refs.frame_head.updatepictureid(prop.pictureid);
        this.refs.frame_head.updatefaveriate(prop.faverate);
        this.refs.frame_img.updateurl(prop.pic_url);
        this.refs.frame_img.updatewidth(prop.pic_width);
        this.refs.frame_img.updateheight(prop.pic_height);
        this.refs.frame_img.updatewinsize(prop.pic_width);
        /*
        this.refs.frame_head_with_pic.updateusername(prop.username);
        this.refs.frame_head_with_pic.updatepictureid(prop.pictureid);
        this.refs.frame_head_with_pic.updatefaveriate(prop.faverate);
        this.refs.frame_head_with_pic.updateurl(prop.pic_url);
        this.refs.frame_head_with_pic.updatewidth(prop.pic_width);
        this.refs.frame_head_with_pic.updateheight(prop.pic_height);
        this.refs.frame_head_with_pic.updatewinsize(prop.pic_width);*/
        this.refs.frame_label.updatelabel(prop.label);
        this.refs.frame_tag.updatetags(prop.tags);
        this.refs.frame_owner.updateownerlabel(prop.ownerlabel);
        this.refs.frame_owner.updateownerpic(prop.ownerpic);
        this.refs.frame_owner.updateownerurl(prop.ownerurl);
    }
    show_head(){
        //this.refs.frame_head_with_pic.show();
        this.refs.frame_head.show();

    }
    hide_head(){
        //this.refs.frame_head_with_pic.hide();
        this.refs.frame_head.hide();
    }

    render() {
        return (
            <div  style={{position:"relative",flex:1,width:this.state.winwidth,border: "1px solid #EAEAEA",boxShadow:"2px 2px 1px #EAEAEA",background:"#FFFFFF"}} onMouseEnter={this.show_head.bind(this)} onMouseLeave={this.hide_head.bind(this)}>
                <div  className="frame_head" style={{minWidth:this.state.winwidth}}>
                    <FrameHead ref="frame_head"  />
                </div>
                <div className="frame_image">
                    <FrameImage ref="frame_img" />
                </div>
                <div   style={{margin:10}}>
                    <FrameLabel ref="frame_label"/>
                </div>
                <div style={{margin:10}}>
                    <FrameTag ref="frame_tag"/>
                </div>
                <div style={{margin:10}}>
                    <FrameOwner ref="frame_owner"/>
                </div>
            </div>
        );
    }/*
    render() {
        return (
            <div style={{flex:1,width:this.state.winwidth,border: "1px solid #EAEAEA",boxShadow:"2px 2px 1px #EAEAEA"}} onMouseEnter={this.show_head.bind(this)} onMouseLeave={this.hide_head.bind(this)}>
                <div>
                    <FrameHeadWithPic ref="frame_head_with_pic"  />
                </div>
                <div style={{margin:10}}>
                    <FrameLabel ref="frame_label"/>
                </div>
                <div style={{margin:10}}>
                    <FrameTag ref="frame_tag"/>
                </div>
            </div>
        );
    }*/
}