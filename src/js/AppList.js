import React from 'react'
import AppTodo from './AppTodo'
class AppList extends React.Component{
    //f from APP then =>AppTOdo
    OnDeleteItem(id){
        this.props.OnDeleteItem(id)
    }
    render(){
        
        const data = this.props.data;
        const list = data ? data.map(
            ({text,complete,id},index)=>{
                return(
                    <AppTodo 
                        key={index}
                        text={text}
                        complete={complete}
                        id={id}
                        OnDeleteItem={this.OnDeleteItem.bind(this)}
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