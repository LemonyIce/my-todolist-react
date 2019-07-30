import React from 'react'
import '../css/AppForm.css'
import '../css/AppButton.css'
import '../css/AppButton.css'

class AppFrom extends React.Component{
    handleSubmit(event){
        event.preventDefault();
        let text = this.refs.text.value;
        if(!text.trim()){
            alert("Input can`t be null")
            return
        }else{
            console.log(text);
            this.props.onAddTodoItem({"text":text,"complete":false});
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