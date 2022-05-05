import React from "react";
import "./Home.scss";
import textApi from "../../api/testApi";
import { LandingPage, BestSeller } from "./components";

export default class Home extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      listAllShoes: [],
    };
  }

  async componentDidMount() {
    const getAllListShoes = await textApi.getAll();
    this.setState({
      listAllShoes: [...getAllListShoes.data],
    });
  }

  render() {
    return (
      <div>
        <LandingPage />
        <BestSeller listShoes={this.state.listAllShoes} />
      </div>
    );
  }
}
