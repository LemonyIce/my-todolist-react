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
    
    OnAddTodoItem(newItem){
      var  newdata = this.state.data.concat(newItem);
      console.log(newdata);
      this.setState({data:newdata});
    }
  render() {
    const{data} = this.state;
    return (   
      <div className="App">
        <AppHeader />
        <AppForm 
          onAddTodoItem={this.OnAddTodoItem.bind(this)}
        />
        <AppList data={data}/>
        <AppFooter />
      </div>
    );
  }
}

export default App;
