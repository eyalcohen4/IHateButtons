import React, {Component} from 'react';
import './App.css';
import Background from './components/Background/Background';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import FootballAPI from './containers/FootballAPI';


class App extends Component {
 	render() {

 		return (
    		<div>
    			<Navigation />
       			<Background />
       			<Logo />
       			<FootballAPI />
       			
    		</div>
  		);
	}
}

export default App;
