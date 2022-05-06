import { Button } from '@mui/material';

function ListSize({ listSizes, sizePicked, changeSize }: any) {
  const handleChangeSize = (size: string) => {
    changeSize(size);
  };
  return (
    <div className="listSize flex flex-wrap w-auto gap-x-2 gap-y-2 mt-5">
      {listSizes?.map((size: any) => {
        return (
          <Button
            variant={sizePicked === size.size ? 'contained' : 'outlined'}
            size="small"
            key={size.size}
            disabled={!size.outOfStock}
            onClick={() => handleChangeSize(size.size)}
          >
            {size.size}
          </Button>
        );
      })}
    </div>
  );
}

export default ListSize;
