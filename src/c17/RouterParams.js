import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

const Topic = (props) => {
  console.log(props);
  return (<h1>Topic {props.match.params.id}</h1>);
};

export default class RouterParams extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <ul id="menu">
            <li>
              <Link to="/topic/1">Topic 1</Link>
            </li>
            <li>
              <Link to="/topic/2">Topic 2</Link>
            </li>
            <li>
              <Link to="/topic/3">Topic 3</Link>
            </li>
          </ul>

          <div id="page-container">
            <Route path="/topic/:id" component={Topic} />
          </div>
        </div>
      </Router>
    );
  }
}
