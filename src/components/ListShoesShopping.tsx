import React from 'react';
import { Skeleton } from '../materials';

function ListShoesShopping({ listShoes, selectShoes }: any) {
  const selectShoesDetail = () => {
    selectShoes(listShoes);
  };
  const loading = listShoes.name ? true : false;
  return (
    <React.Fragment>
      {loading ? (
        <div
          className="w-64 rounded overflow-hidden hover:shadow-md cursor-pointer"
          key={listShoes.id}
          style={{ borderRadius: '5%' }}
          onClick={selectShoesDetail}
        >
          <img
            className="w-64 p-5"
            src={listShoes.img}
            alt="Sunset in the mountains"
            style={{ borderRadius: '15%' }}
          />
          <div className="px-6">
            <div className="font-bold text-lg mb-2">{listShoes.name}</div>
          </div>
          <div className="px-6 pb-2">
            <div className="text-lg mb-2">${listShoes.price}</div>
          </div>
        </div>
      ) : (
        <div className="w-80 rounded overflow-hidden" key={listShoes.id}>
          <Skeleton />
        </div>
      )}
    </React.Fragment>
  );
}

export default ListShoesShopping;
