import React from 'react'
import '../css/AppForm.css'
import '../css/AppButton.css'
import '../css/AppButton.css'

class AppFrom extends React.Component{
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
                        >添加</button>
                    </div>
                    
                </form>
            </div>
        );
    }
}
export default AppFrom