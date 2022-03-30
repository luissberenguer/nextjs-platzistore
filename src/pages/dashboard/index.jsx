import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import PaginationDasboard from '@components/PaginationDashboard';
import { useState } from 'react';
import { Chart } from '@common/char';
import Products from './products';

const countOcurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

export default function Dashboard() {
  let PRODUCT_LIMIT = 10;
  const [offsetProducts, setOffsetProducts] = useState(0);

  const products = useFetch(endPoints.products.getProducts(PRODUCT_LIMIT, offsetProducts), offsetProducts);
  const totalProducts = useFetch(endPoints.products.getProducts(0, 0)).length;

  const categoryNames = products?.map((product) => product.category);
  const categoryCount = categoryNames?.map((product) => product.name);
  console.log('countOcurrences', countOcurrences(categoryCount));

  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOcurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: ['rgb(252 165 165)', 'rgb(253 186 116)', 'rgb(252 211 77)', 'rgb(110 231 183)', 'rgb(103 232 249)', 'rgb(165 180 252)', 'rgb(196 181 253)'],
        // borderColor: ['rgb(220 38 38)', 'rgb(234 88 12)', 'rgb(202 138 4)', 'rgb(5 150 105)', 'rgb(8 145 178)', 'rgb(147 51 234)'],
      },
    ],
  };

  return (
    <>
      <Chart className="mb-8 mt-2" chartData={data} />
      {totalProducts > 0 && <PaginationDasboard totalItems={totalProducts} itemsPerPage={PRODUCT_LIMIT} setOffset={setOffsetProducts} neighbours={3}></PaginationDasboard>}
      <Products />
    </>
  );
}
