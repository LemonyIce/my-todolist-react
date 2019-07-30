import React from 'react';
import '../css/AppHeader.css'

class AppHeader  extends React.Component{
    render(){
        return(
            <div className="AppHeader">
                <h1 className="title">My Todlist with React</h1>
            </div>
        );
    }
}
export default AppHeader