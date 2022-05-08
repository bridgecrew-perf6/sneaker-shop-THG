import React from 'react';
import { MenShoesFilter } from './components';
import './MenShoes.scss';

export default class MenShoes extends React.PureComponent {
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
            </p>
          </div>
          {/* begin::sneaker list */}
        </div>
      </div>
    );
  }
}
