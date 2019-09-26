import React from 'react';

const GameCard = (props) => {
	return (
		<div className="flex">
			<div 
			className= 'tc white bg-navy dib br3 pa2 ma1 dim bw2 shadow-5'
			style= {{width: '400px'}}
			>
				<h6>Fixture: {props.matchday} {props.group}</h6>
				<p>{props.homeTeam} - {props.awayTeam}</p>
			</div>
		</div>
		);
}

export default GameCard;