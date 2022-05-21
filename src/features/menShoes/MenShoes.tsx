import React from 'react';
import allMenShoes from '../../api/listAllMenShoes';
import { MenShoesFilter } from './components';
import ListAllMenShoes from './components/ListAllMenShoes';
import './MenShoes.scss';

export default class MenShoes extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      listAllShoes: [],
    };
  }

  async componentDidMount() {
    const getAllListShoes = await allMenShoes.getAllMenShoes();
    this.setState({
      listAllShoes: [...getAllListShoes.data],
    });
  }

  render() {
    return (
      <div className="container mx-auto px-28 m-4">
        <div className="flex">
          {/* begin::filter */}
          <div className="menFilter">
            <MenShoesFilter />
          </div>
          {/* end::filter */}

          {/* begin::sneaker list */}
          <div className="ListShoes ml-3">
            <p className="text-2xl font-bold text-stone-700">
              MEN'S BASKETBALL SHOES (202)
              <ListAllMenShoes listShoes={this.state.listAllShoes} />
            </p>
          </div>
          {/* begin::sneaker list */}
        </div>
      </div>
    );
  }
}
