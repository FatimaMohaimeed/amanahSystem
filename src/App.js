// // App.js
// import React from 'react';
// import ConnectedTriangle from '../src/components/ConnectedTriangles';
// import Login from './components/Login';

// import GenerateTriangles from '../src/components/GenerateTriangles';


// function App() {
//   return (
//     <div className="App">
//       {/* <ConnectedTriangle /> */}
//       <Login />
//       {/* <GenerateTriangles /> */}

      

//     </div>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Test from './components/Test';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/test" element={<Test />} />

            </Routes>
        </Router>
    );
}

export default App;
