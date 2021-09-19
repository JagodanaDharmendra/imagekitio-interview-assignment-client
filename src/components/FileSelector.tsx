import React, { Component } from "react";
import { IFileType } from "./IFileType";

interface Props {
  onFileSelected(_: IFileType): void;
}

interface State {
  selectedFile: any;
}

export default class FileSelector extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }

  render() {
    return (
      <div>
        <h1>Select File from Computer to Upload</h1>
        <div>
          <input
            type="file"
            onChange={(event: any) => {
              const data = event.target.files[0];
              this.setState({ selectedFile: data });
              this.props.onFileSelected({
                name: data.name,
                type: data.type,
                data: data,
              });
            }}
          />
          {this.state.selectedFile && <div>File Selected</div>}
        </div>
      </div>
    );
  }
}
