import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import ChatApp from "./c01/ChatApp";
import SetState from './c01/SetState';
import CommentBox from "./c02/CommentBox";
import { TabSelectorSample } from "./c02/TabSelector";
import { StatefulTabSelectSample } from "./c02/StatefulTabSelector";
import Clock from "./c03/Clock";
import SnapshotSample from "./c04/SnapshotSample";
import DomDiff from "./c05-DOMDiff/DomDiff";
import { AdvancedTabSelectorSample } from "./c06/AdvancedTabSelector";
import ContextAPI1 from "./c07-ContextAPI/LocaleSample";
import ContextAPI2 from './c07-ContextAPI/app';
import PureRedux from "./c11-PureRedux/PureRedux";
import Counter from "./c12-ReactRedux/Counter";
import AsyncAction from "./c13/index";
import ReduxMiddleware from "./c13/ReduxMiddleware";
import OrgActions from "./c14/OrgActions";
import RouterSample from "./c16/RouterSample";
import RouterParams from "./c17/RouterParams";
import NestedRoute from "./c17/NestedRoute";
import ReactTraining_Basic from './c17/react-training/Basic'
import ReactTraining_URLParameter from './c17/react-training/URLParameter'
import ReactTraining_Redirect from './c17/react-training/Redirect'
import ReactTraining_CustomLink from './c17/react-training/CustomLink'
import FormSubmit from "./c29/FormSubmit";
import FormSubmitAntd from "./c29/FormSubmitAntd";
import DynamicForm from "./c30/DynamicForm"
import ListSample from "./c31/App"
import WizardSample from "./c35/App"
import Layout1 from "./c36/Layout1"
import Layout2 from "./c36/Layout2"
import LayoutResize from "./c36/LayoutResize"
import PortalSample from "./c37/PortalSample"
import AntdDialog from "./c37/AntdDialog"
import D3Sample from "./c38/D3Sample"
import DndSample from "./c40/DndSample"
import ReselectSample from "./c43/ReselectSample"
import Suspense from "./c44/Suspense"
import TodoExample from './c45-todo-example/index'
import StateHook from './c46-hook/stateHook'
import ReactSaga from './c47-redux-saga/index'
// import ReactSaga_Async from './c47-redux-saga/async_data'
import "antd/dist/antd.css";

import "./index.css";

const styles = {
  fontFamily: "sans-serif",
  paddingLeft: "280px",
};

const routeMap = {
  chat: ChatApp,
  "comment-box": CommentBox,
  'setState': SetState,
  "tab-selector": TabSelectorSample,
  "stateful-tab-selector": StatefulTabSelectSample,
  "snapshot-sample": SnapshotSample,
  "dom-diff": DomDiff,
  "adv-tab-selector": AdvancedTabSelectorSample,
  "contextAPI-01": ContextAPI1,
  "contextAPI-02": ContextAPI2,
  clock: Clock,
  "pure-redux": PureRedux,
  counter: Counter,
  "async-action": AsyncAction,
  "redux-middleware": ReduxMiddleware,
  "org-actions": OrgActions,
  "router-sample": RouterSample,
  "router-params": RouterParams,
  "ReactTraining_Basic": ReactTraining_Basic,
  "ReactTraining_URLParameter": ReactTraining_URLParameter,
  "ReactTraining_Redirect": ReactTraining_Redirect,
  "ReactTraining_CustomLink": ReactTraining_CustomLink,
  "nested-route": NestedRoute,
  "form-submit": FormSubmit,
  "form-submit-antd": FormSubmitAntd,
  "dynamic-form": DynamicForm,
  "list-page": ListSample,
  "wizard-sample": WizardSample,
  layout1: Layout1,
  layout2: Layout2,
  "layout-resize": LayoutResize,
  "portal-sample": PortalSample,
  "antd-dialog": AntdDialog,
  "d3-sample": D3Sample,
  "dnd-sample": DndSample,
  "reselect-sample": ReselectSample,
  suspense: Suspense,
  'todo-example': TodoExample,
  'state-hook': StateHook,
  'redux-saga': ReactSaga,
  // 'redux-saga-asyncdata': ReactSaga_Async
};

class App extends React.PureComponent {
  handleLinkClick = key => {
    // window.location.hash = `#${key}`;
    window.history.pushState(null, "", `/#/${key}`);
    this.forceUpdate();
  };
  render() {
    const currentPage = document.location.hash.replace(/#\/?/, "");

    let CurrentPage = routeMap[currentPage] || Hello;
    if (currentPage.match(/\/user\/\w+|\/list-page/)) {
      CurrentPage = ListSample;
    }
    if (currentPage.match(/\/wizard\/step\/\w+/)) {
      CurrentPage = WizardSample;
    }
    return (
      <div style={styles}>
        <ul className="menu-list">
          {Object.keys(routeMap).map(key => (
            <li
              key={key}
              className={key === currentPage ? "is-active" : ""}
              style={{ listStyle: "none" }}
            >
              <span className="link" onClick={() => this.handleLinkClick(key)}>
                {key}
              </span>
            </li>
          ))}
        </ul>
        <div style={{ padding: "30px 0" }}>
          <CurrentPage />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
