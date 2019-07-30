import React from 'react'

import '../css/App-list.css'
import '../css/AppButton.css'

class AppTod extends React.Component{
    render(){
        return(
            <div className="list">
            <span
                className={this.props.complete ?'author line':'author'}
            >{this.props.text}</span>
            <button className="ui-button">删除</button>
            </div>
        );
    }
}
export default AppTod;