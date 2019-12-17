import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom'

const ReactTraining_CustomLink = () => (
    <Router>
        <div>
            <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
            <OldSchoolMenuLink to="/about" label="About" />
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </div>
    </Router>
)

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (
            <div className={match ? 'active': ''}>
                {match ? '>' : ''}
                <Link to={to}>{label}</Link>
            </div>
        )}
    />
)

const Home = () => <h3>Home</h3>
const About = () => <h3>About</h3>

export default ReactTraining_CustomLink