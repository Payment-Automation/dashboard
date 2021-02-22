import logo from './logo.svg';
import './App.css';
import ReusableStyles from './components/reusables/ReusableStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/reusables/ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/register" component={Signup}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/app" component={Dashboard}/>
                    </Switch>
                    <ReusableStyles/>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
