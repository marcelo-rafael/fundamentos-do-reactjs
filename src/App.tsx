import { BrowserRouter, Switch, Route } from "react-router-dom";


import { Dashboard } from "pages/Dashboard";
import { Repository } from "pages/Repository";

import GlobalStyles from "styles/global";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/repositories/:repository+" component={Repository} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}
