import React, {Component} from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'
import ErrorBoundry from '../components/ErrorBoundry';

//const App = ()=>{
    
class App extends Component {
    constructor(){
        super()
        // estado do componente:
        this.state = {
            robots: [], //robots,
            searchField : ''
        }
        console.log('constructor: Componente construido')
    }

    componentDidMount(){
        //console.log('componentDidMount: Componente criado (ou montado)');
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resposta => resposta.json())
        .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
        //console.log(filteredRobots)
    }

    render(){
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        console.log('render: Componente renderizado)')
        if (this.state.robots.length === 0) {
            return <h1>Carregando...</h1>
        }
        else {
            // A classe ErrorBoundry captura erros em CardList - componente filho
            return (
                <div className='tc'>
                    <SearchBox searchChange={this.onSearchChange} />
                    <h1 className='f2'>RobotFriends</h1>
                    <Scroll>
                        <ErrorBoundry>
                          <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;