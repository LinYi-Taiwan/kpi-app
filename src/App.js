import { Route } from 'react-router-dom';
import PageOptimization from './components/PageOptimization/PageOptimization';
import Nav from './components/Nav/Nav';

function App() {
    return (
        <div className="App">
            <Nav />
            <Route path="/" exact={true}></Route>
            <Route path="/optimization" exact={true} component={PageOptimization}></Route>
            {/* <header className="App-header"><Counter /></header> */}
            {/* <Route component={Error} /> */}
        </div>
    );
}

export default App;
