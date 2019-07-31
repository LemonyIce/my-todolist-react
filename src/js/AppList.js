import React from 'react'
import AppTodo from './AppTodo'
class AppList extends React.Component{
    //f from APP then =>AppTOdo
    OnDeleteItem(id){
        this.props.OnDeleteItem(id)
    }
    OnChangeComplete(id){
        this.props.OnChangeComplete(id)
    }
    render(){
        var value =this.props.choosevalue;
        const data = this.props.data
        // console.log(value);

        const list = data ? data.map(
            ({text,complete,id},index)=>{
                if(value === "3"){
                    return(
                        <AppTodo 
                            key={index}
                            text={text}
                            complete={complete}
                            id={id}
                            OnDeleteItem={this.OnDeleteItem.bind(this)}
                            OnChangeComplete={this.OnChangeComplete.bind(this)}
                        /> 
                    )
                }else if(value === "2" && complete ===true){
                  return(
                    <AppTodo 
                    key={index}
                    text={text}
                    complete={complete}
                    id={id}
                    OnDeleteItem={this.OnDeleteItem.bind(this)}
                    OnChangeComplete={this.OnChangeComplete.bind(this)}
                /> 
                  ) 

                }else if(value ==="1" && complete ===false){
                    return(
                        <AppTodo 
                        key={index}
                        text={text}
                        complete={complete}
                        id={id}
                        OnDeleteItem={this.OnDeleteItem.bind(this)}
                        OnChangeComplete={this.OnChangeComplete.bind(this)}
                    /> 
                    )
                }
                   console.log(data);
            }

        ):[];
        // const list = this.props.data.map(
        //     ({text,complete,id},index)=>{
        //         if(value === '1'){
        //             return(
        //                 <AppTodo 
        //                     key={index}
        //                     text={text}
        //                     complete={complete}
        //                     id={id}
        //                     OnDeleteItem={this.OnDeleteItem.bind(this)}
        //                     OnChangeComplete={this.OnChangeComplete.bind(this)}
        //                 /> 
        //             )
        //         }   
        //     }

        // );
        return(
            <div>{list}</div>
        )
    }
}
export default AppList