import React from "react";
import {
    Link, Route,
    Switch,
    useParams,
    useRouteMatch
} from "react-router-dom";

export default function Home() {
  const { url, path } = useRouteMatch();
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <ul className="list-group">
            <li className="list-group-item">
              <Link to={`${url}/javascript`}>JavaScript</Link>
            </li>
            <li className="list-group-item">
              <Link to={`${url}/react`}>React</Link>
            </li>
            <li className="list-group-item">
              <Link to={`${url}/node`}>Node</Link>
            </li>
          </ul>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
          <h3>Home Component</h3>
        </Route>
        <Route path={`${path}/:courseId`}>
          <Course />
        </Route>
      </Switch>
    </div>
  );
}

function Course() {
  const { courseId } = useParams();
  console.log("Course Loaded", useParams());
  return <div>Course Component Loaded with {courseId}.....</div>;
}
