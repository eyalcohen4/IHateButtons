import React from 'react';


const Scroll = ({getCompititionFixtures, children}) => {
	return (
			<div style={{overflowY: 'scroll', border:'1px solid dark-grey', height:'300px', width:'440px'}}>
				 {children}
			</div>
		);
};


export default Scroll;


