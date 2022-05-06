import { ListShoes } from '../../../components';
import { useHistory } from 'react-router-dom';

function BestSeller(props: any) {
  let router = useHistory();

  const selectShoes = (e: any) => {
    localStorage.setItem('id_sneaker', e.id);
    router.push('/sneaker-detail');
  };

  return (
    <div>
      <p className="w-100 text-center text-2xl font-bold my-5 text-stone-700">
        RECOMMENDED FOR YOU
      </p>

      <div className="container mx-auto px-28 flex justify-center flex-wrap gap-x-8 gap-y-4">
        {props.listShoes.map((shoes: any) => {
          return (
            <ListShoes
              key={shoes.name}
              listShoes={shoes}
              selectShoes={selectShoes}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BestSeller;
