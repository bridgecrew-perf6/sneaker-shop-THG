import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const ListSize = [
  '3.5',
  '4.0',
  '4.5',
  '5.0',
  '5.5',
  '6.0',
  '6.5',
  '7.0',
  '7.5',
  '8.0',
  '8.5',
  '9.0',
  '9.5',
  '10.0',
  '10.5',
  '11.0',
  '11.5',
  '12.0',
  '12.5',
];

const Brand = [
  'nike',
  'adidas',
  'newBalance',
  'jordan',
  'puma',
  'reebok',
  'underArmour',
];

function MenShoesFilter() {
  const [sizeSelected, setSizeSelected] = useState<any>({});
  const [brandSelected, setBrandSelected] = useState<any>({});

  const filterSize = (sizeSelect: string) => {
    setSizeSelected(() => {
      const newSize: any = { ...sizeSelected };

      if (newSize[sizeSelect]) {
        delete newSize[sizeSelect];
      } else {
        newSize[sizeSelect] = sizeSelect;
      }

      return { ...newSize };
    });
  };

  const filterBrand = (brandSelect: string) => {
    setBrandSelected(() => {
      const newBrand: any = { ...brandSelected };

      if (newBrand[brandSelect]) {
        delete newBrand[brandSelect];
      } else {
        newBrand[brandSelect] = brandSelect;
      }

      return { ...newBrand };
    });
  };

  return (
    <div className="w-44">
      {/* begin:: brand */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {Brand.map((brandName: string) => {
            return (
              <Button
                key={brandName}
                variant={brandSelected[brandName] ? 'contained' : 'outlined'}
                size="small"
                style={{ margin: '0 2px 2px 0', width: '0.5rem' }}
                onClick={() => filterBrand(brandName)}
              >
                <img
                  src={require(`./logo/${brandName}.ico`)}
                  alt=""
                  style={{ width: '70%' }}
                />
              </Button>
            );
          })}
        </AccordionDetails>
      </Accordion>
      {/* end:: brand */}

      {/* begin:: size */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Size</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {ListSize.map((size: string) => {
            return (
              <Button
                key={size}
                variant={sizeSelected[size] ? 'contained' : 'outlined'}
                size="small"
                style={{ margin: '0 2px 2px 0' }}
                onClick={() => filterSize(size)}
              >
                {size}
              </Button>
            );
          })}
        </AccordionDetails>
      </Accordion>
      {/* end:: size */}

      {/* begin:: price */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* end:: price */}

      {/* begin:: collection */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Collection</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* end:: collection */}
    </div>
  );
}

export default MenShoesFilter;
