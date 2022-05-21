import { Pagination } from '@mui/material';
import { ListShoesShopping } from '../../../components';

function ListAllMenShoes(props: any) {
  return (
    <div>
      <div className="container flex flex-wrap gap-x-8 gap-y-4">
        {props.listShoes.map((shoes: any) => {
          return <ListShoesShopping key={shoes.name} listShoes={shoes} />;
        })}
      </div>
      <div className="pagination flex flex-row-reverse py-5">
        <Pagination count={10} color="primary" />
      </div>
    </div>
  );
}

export default ListAllMenShoes;
