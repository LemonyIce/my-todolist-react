import React, { Component } from 'react';
import './css/App.css';
import AppHeader from './js/APPHeader'
import AppForm from './js/AppFrom'
import AppFooter from './js/AppFooter'
import AppList from'./js/AppList'

class App extends Component {
    state ={
        data:this.props.data
    }
  render() {
    const{data} = this.state;
    return (   
      <div className="App">
        <AppHeader />
        <AppForm />
        <AppList data={data}/>
        <AppFooter />
      </div>
    );
  }
}

export default App;
