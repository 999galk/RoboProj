import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';

/*const state = {
	robots : robots,
	searchfield : ''
}*/
//state is what describes your app, says that robots and searchfield can change and affect our app.
//It usually lives in the parent component (in our case 'App') 

class App extends Component{
	constructor(){
		super()
		this.state = {
			robots : robots,
			searchfield : ''
		}
	}

	OnSearchChange = (event) => {
		this.setState({ searchfield : event.target.value })
	}
	render(){
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
		<div className='tc'>
			<h1 className='f2'>Robofriends</h1>
			<SearchBox searchChange={this.OnSearchChange}/>
			<CardList robots={filteredRobots}/>
		</div>
		);
	}
}

export default App;