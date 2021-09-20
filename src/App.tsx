import React, { Component } from "react";

interface Props {
  a?: number;
}
interface State {
  currentFolder: string;
  loading: boolean;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentFolder: "Folder_0",
      loading: true,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>ImageKit IO</h1>
      </div>
    );
  }
}

export default App;
