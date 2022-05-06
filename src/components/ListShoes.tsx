import React from "react";
import { Skeleton } from "../materials";

function ListShoes({ listShoes, selectShoes }: any) {
  const selectShoesDetail = () => {
    selectShoes(listShoes);
  };
  const loading = listShoes.name ? true : false;
  return (
    <React.Fragment>
      {loading ? (
        <div
          className="w-80 rounded overflow-hidden hover:shadow-md cursor-pointer"
          key={listShoes.id}
          style={{ borderRadius: "5%" }}
          onClick={selectShoesDetail}
        >
          <img
            className="w-80 p-5"
            src={listShoes.img}
            alt="Sunset in the mountains"
            style={{ borderRadius: "15%" }}
          />
          <div className="px-6 py-2">
            <div className="font-bold text-xl mb-2">{listShoes.name}</div>
          </div>
          <div className="px-6">
            <div className="text-xl mb-2">${listShoes.price}</div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{listShoes.model}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{listShoes.brand}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Popular
            </span>
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

export default ListShoes;
