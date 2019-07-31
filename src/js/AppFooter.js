import React from 'react'
import '../css/AppFooter.css'




class AppFooter extends React.Component{
    handleActive(){
        let active = this.refs.active.value;
        this.props.ChooseValue(active);
    }
    handleAll(){
        let active = this.refs.all.value;
        this.props.ChooseValue(active);
    }
    handleComplete(){
        let active = this.refs.complete.value;
        this.props.ChooseValue(active);
    }


    render(){
        return(
            <div className="AppFooter">
               

                <button 
                    className="ui-button"
                    value="1"
                    ref="active"
                    onClick={this.handleActive.bind(this)}
                    >
                未完成任务
                </button>

                <button 
                    className="ui-button"
                    value="2"
                    ref="complete"
                    onClick={this.handleComplete.bind(this)}
                >
                已完成任务
                </button>

                <button 
                    className="ui-button"
                    value="3"
                    ref="all"
                    onClick={this.handleAll.bind(this)}
                >
                全部任务
                </button>
            </div>
        );
    }
}
export default AppFooter