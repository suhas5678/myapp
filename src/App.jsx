import React from 'react'
// import Nav from './Nav'
import { Component } from 'react'
import Nav1 from './Nav1';


// const App = () => {
//   return (
//     <Nav data="suhas" />
//   )
// }

// export default App;
class App extends Component
{
    render(){
        return(
            <Nav1 user="suhas"/>
        )
    }
}
export default App;

