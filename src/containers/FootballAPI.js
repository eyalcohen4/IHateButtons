import React, {Component} from 'react';
import CardList from '../components/CardList/CardList';
import Scroll from '../components/Scroll/Scroll';
import FormMenu from '../components/FormMenu/FormMenu';

//const APIKEY =  '8cd109a7cd8a4fd599ae76de90536c6a';

class FootballAPI extends Component {
 	constructor() {
 		super();
 		this.getCompititionFixtures = this.getCompititionFixtures.bind(this);
		this.BASE_URL = 'http://api.football-data.org/v2';
		this.state = {
			//group-stage: 91.
			matches: [],
			League: '',
			Fixture: ''
			}
		}
	

	async getCompititionFixtures() {
		const request = 
			await fetch('http://api.football-data.org/v2/competitions/CL/matches', {
            	method: 'get',
            	headers: {
            		'Content-Type': 'application/json',
					'X-Auth-Token':	'8cd109a7cd8a4fd599ae76de90536c6a'	
					},
           		})
		const data = await request.json();
		this.setState({
			matches: data.matches
			})
		console.log(this.state)
		}

	handleClick(event) {
		this.setState({
			League: event.target.value,
			Fixture: event.target.value
		})
	}

 	render() {
 		return (
    		<div>
    			<FormMenu handleClick={this.handleClick} />
	    		<Scroll >
    				<CardList matches={this.state.matches} />
    			</Scroll>
      		</div>
  		);
	}
}

export default FootballAPI;


// 