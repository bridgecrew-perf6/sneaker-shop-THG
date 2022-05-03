function ListShoes(props: any) {
  return (
    <div
      className="w-80 rounded overflow-hidden hover:shadow-md cursor-pointer"
      key={props.listShoes.id}
      style={{ borderRadius: '5%' }}
    >
      <img
        className="w-80 p-5"
        src={props.listShoes.img}
        alt="Sunset in the mountains"
        style={{ borderRadius: '15%' }}
      />
      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-2">{props.listShoes.name}</div>
      </div>
      <div className="px-6">
        <div className="text-xl mb-2">${props.listShoes.price}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{props.listShoes.model}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{props.listShoes.brand}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Popular
        </span>
      </div>
    </div>
  );
}

export default ListShoes;
