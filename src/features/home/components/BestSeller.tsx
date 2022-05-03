import { ListShoes } from '../../../components';

function BestSeller(props: any) {
  return (
    <div>
      <p className="w-100 text-center text-2xl font-bold my-5 text-stone-700">
        RECOMMENDED FOR YOU
      </p>

      <div className="container mx-auto flex flex-row flex-wrap gap-x-8 gap-y-4">
        {props.listShoes.map((shoes: any) => {
          return <ListShoes key={shoes.name} listShoes={shoes} />;
        })}
      </div>
    </div>
  );
}

export default BestSeller;
