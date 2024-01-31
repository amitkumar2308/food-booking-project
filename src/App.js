// // import { AE_AMOUNT_FORMATS } from '@aeternity/aepp-sdk';
// import React from 'react';

// import './App.css';

// import Connect from './components/Connect';


// const App = () => {
	


// 	return (
// 		<>
// 		<Connect></Connect>
// 		</>
		
// 	);
// };

// export default App;


import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import Connect from './components/Connect';

const App = () => (
  // <div>
	// 	<Connect />
  //   <Navbar />
  //   <Header />
  //   <AboutUs />
  //   <SpecialMenu />
  //   <Chef />
  //   <Intro />
  //   <Laurels />
  //   <Gallery />
  //   <FindUs />
  //   <Footer />
  // </div>

	<div>
	
	<Navbar />
	<Header />
	<main>
		
		<AboutUs />
		<SpecialMenu />
		<Chef />
		<Intro />
		<Laurels />
		<Gallery />
		<FindUs />
	</main>
	<Footer />
</div>
);

export default App;
