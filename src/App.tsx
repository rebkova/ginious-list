import { hot } from "react-hot-loader/root";
import * as React from "react";

import PublicCocktailList from "./components/PublicCocktailList";

interface Props {
  name:
  string
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <PublicCocktailList />
      </>
    );
  }
}

export default hot(App);