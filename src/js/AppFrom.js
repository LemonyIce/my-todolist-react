import React from 'react'
import '../css/AppForm.css'
import '../css/AppButton.css'
import '../css/AppButton.css'
import uuid from 'uuid'

class AppFrom extends React.Component{
    handleSubmit(event){
        event.preventDefault();
        let text = this.refs.text.value;
        let id = uuid();
        if(!text.trim()){
            alert("Input can`t be null")
            return
        }else{
            console.log(text);
            this.props.onAddTodoItem({"text":text,"complete":false,"id":id});
            this.refs.text.value="";//clean input
        }
    }
    
    render(){
        return(
            <div className="AppFrom">
                <form className="ui-form">
                    <div className="ui-input">
                        <input 
                            type="text" 
                            placeholder="I need to ..." 
                            ref="text" autoFocus={true}
                            autoComplete="off"
                        />
                        <button 
                            type="submit" 
                            className="ui-button Formbutton"
                            onClick={this.handleSubmit.bind(this)}
                        >添加</button>
                    </div>
                    
                </form>
            </div>
        );
    }
}
export default AppFrom