import logo from './logo.svg';
import './App.css';
import ReusableStyles from './components/reusables/ReusableStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Signup from './components/Layout/auth/Signup';

function App() {
    return (
        <Provider store={store}>
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/register" component={Signup}/>
                </Switch>

                <ReusableStyles/>
            </div>
        </Router>
        </Provider>
    );
}

export default App;
