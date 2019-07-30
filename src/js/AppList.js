import React from 'react'
import AppTodo from './AppTodo'
class AppList extends React.Component{
    render(){
        
        const data = this.props.data;
        const list = data ? data.map(
            ({text,complete},index)=>{
                return(
                    <AppTodo 
                        key={index}
                        text={text}
                        complete={complete}
                    /> 
                )
            }

        ):[];
        return(
            <div>{list}</div>
        )
    }
}
export default AppList