import React, { Component } from "react";
import FileSelector from "./components/FileSelector";
import AppDBHelper from "./helpers/database/AppDBHelper";

interface Props {
  a?: number;
}
interface State {
  selectedFile?: File;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedFile: undefined,
    };
  }

  componentDidMount() {
    // AppDBHelper.TestFunctions();
  }
  // On file select (from the pop up)
  onFileChange = (data: any) => {
    // Update the state
    this.setState({ selectedFile: data });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {};

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>

          <p>Last Modified: </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h1>ImageKit IO</h1>
        <h3>File Upload using React!</h3>
        <div>
          <FileSelector
            onFileSelected={(data) => {
              console.log(data);
              this.onFileChange(data);
            }}
          />
          <button onClick={this.onFileUpload}>Upload!</button>
        </div>
        {this.fileData()}
      </div>
    );
  }
}

export default App;
