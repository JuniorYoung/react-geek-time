import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom'

const ReactTraining_URLParameter = () => (
    <Router>
        <div>
            <h2>Accounts</h2>
            <ul>
                <li>
                    <Link to="/netflix">Netflix</Link>
                </li>
                <li>
                    <Link to="/zillow-group">Zillow Group</Link>
                </li>
                <li>
                    <Link to="/yahoo">Yahoo</Link>
                </li>
                <li>
                    <Link to="/modus-create">Modus Create</Link>
                </li>

                <li>
                    <Link to="/order/desc">Regular expressions</Link>
                </li>
            </ul>
            
            <Route path="/:id" component={Child} />

            {
                // 匹配简单的正则表达式
            }
            <Route path="/order/:direction(asc|desc)" component={ComponentWithRegex} />
        </div>
    </Router>
)

const Child = ({ match }) => (
    <div>
        <h3>ID: {match.params.id}</h3>
    </div>
)

const ComponentWithRegex = ({ match }) => (
    <div>
        <h3>Only asc/desc are allowed: {match.params.direction}</h3>
    </div>
)

export default ReactTraining_URLParameter