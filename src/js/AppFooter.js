import React from 'react'
import '../css/AppFooter.css'

class AppFooter extends React.Component{
    render(){
        return(
            <div className="AppFooter">
               

                <button className="ui-button">
                未完成任务
                </button>

                <button className="ui-button">
                已完成任务
                </button>

                <button className="ui-button">
                全部任务
                </button>
            </div>
        );
    }
}
export default AppFooter