import React from 'react';
import GameCard from '../GameCard/GameCard';

const CardList = ({ matches }) => {

	return (	
		<div>
			{	
			matches.map((match, i) => {
				if (i > 90 && matches[i].matchday === 1) {
					return (
					 	<GameCard 
						key={i}
						group={matches[i].group}
						matchday={matches[i].matchday}
						homeTeam={matches[i].homeTeam.name} 
						awayTeam={matches[i].awayTeam.name} />
						)
					}
				})		
			}
		</div>
		)
	}

export default CardList;

