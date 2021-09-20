import React, { Component } from "react";

interface Props {
  folderId: string;
}

interface State {
  loading: boolean;
  data: String | null;
}

export default class Folder extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true,
      data: null,
    };
  }

  componentDidMount() {}

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return <div>Folder</div>;
  }
}
