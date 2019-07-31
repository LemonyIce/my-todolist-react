import React, { Component } from 'react';
import './css/App.css';
import AppHeader from './js/APPHeader'
import AppForm from './js/AppFrom'
import AppFooter from './js/AppFooter'
import AppList from'./js/AppList'

class App extends Component {
    constructor(props){
      super(props)
      this.state =  {
        choosevalue:"1",
        data:this.props.data
      }
    }
    //choose
    ChooseValue(id){
      this.setState({choosevalue:id});
    }

    //localStorage
    local(newlocal){
      var localdata= window.localStorage;
      var d=JSON.stringify(newlocal);
      localdata.setItem("data",d);
    }

    //delete list
    OnDeleteItem(id){
    let newdata = this.state.data.filter((item)=>{
        return item.id !== id;
    });
     this.setState({data:newdata});
     console.log(newdata);
     this.local(newdata);
  }

  //ChangeComplete
  OnChangeComplete(id){
      let newdata = this.state.data.map(
        (item) =>{
          if(item.id === id){
            item.complete = !item.complete;
          }
          return item;
        }
      )
      this.setState({data:newdata});
        this.local(newdata);
  }
    //add  new  list 
    OnAddTodoItem(newItem){
      var  newdata = this.state.data.concat(newItem);
      this.setState({data:newdata});
      this.local(newdata);
      console.log(newdata);
    }
  render() {
    const{data} = this.state;
    return (   
      <div 
        className="App">
        <AppHeader />
        <AppForm 
          onAddTodoItem={this.OnAddTodoItem.bind(this)}
         
        />
        <AppList 
          data={data}
          choosevalue={this.state.choosevalue}
          OnDeleteItem={this.OnDeleteItem.bind(this)}
          OnChangeComplete={this.OnChangeComplete.bind(this)}
        />
        <AppFooter 
          ChooseValue={this.ChooseValue.bind(this)}
        />
      </div>
    );
  }
}

export default App;
