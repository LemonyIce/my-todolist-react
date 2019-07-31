import React from 'react'

import '../css/App-list.css'
import '../css/AppButton.css'

class AppTod extends React.Component{

    handleChaneComplete(){
        let newComlete = this.props;
        // this.props.ChangeCompleteItem(this.props.id);
    }

    
    //delete  (id)=>APPList=>App
    OnDeleteItem(id){
        console.log(this.props.id);
        this.props.OnDeleteItem(this.props.id);
    }
    render(){
        return(
            <div className="list"
                onClick={this.handleChaneComplete.bind(this)}
            >
            <span
                className={this.props.complete ?'author line':'author'}
                
                id={this.props.id}
            >{this.props.text}</span>
            <button 
                onClick={this.OnDeleteItem.bind(this)}
                className="ui-button"
            >删除</button>
            </div>
        );
    }
}
export default AppTod;