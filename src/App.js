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
        data:this.props.data
      }
    }
    local(newlocal){
      var localdata= window.localStorage;
      var d=JSON.stringify(newlocal);
      localdata.setItem("data",d);
    }

    //delete list
    OnDeleteItem(id){
      console.log(id);
    let newdata = this.state.data.filter((item)=>{
        return item.id !=id;
    });
     this.setState({data:newdata});
     console.log(newdata);
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
          OnDeleteItem={this.OnDeleteItem.bind(this)}
        />
        <AppFooter />
      </div>
    );
  }
}

export default App;
