import React from 'react';


const Navigation = () => {
	return (
		<nav className="dt w-100 border-box pa3 ph5-ns">
			<div className="dtc v-mid link dim w-25 " title="Home">
				<img src="https://img.icons8.com/officel/80/000000/red-yellow-cards.png" className="dib w2 h2 br-75" alt="Site Name"/>
				<p className="dim white f6 f5-ns dib mr3 mr4-ns">FutSTAT</p>
			</div>
			<div className="dtc v-mid w-75 tr">
				<div className="link dim white f6 f5-ns dib mr3 mr4-ns" title="About">Services</div>
				<div className="link dim white f6 f5-ns dib mr3 mr4-ns" title="Store">Blog</div>
				<div className="link dim white f6 f5-ns dib" title="Contact">Join Us</div>
			</div>
		</nav>

		)
}
 

export default Navigation;