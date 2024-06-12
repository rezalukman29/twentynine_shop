import {useQuery, UseQueryOptions} from 'react-query';
import ax from '../../service/axios';
import {APIResponse} from '../../interfaces/BaseApiResponse';
import {
  ParamsGetProductsInterface,
  ProductInterface,
} from '../../interfaces/ProductInterface';

export const getProducts = async ({
  params,
}: {
  params: ParamsGetProductsInterface;
}): Promise<APIResponse<ProductInterface[]>> => {
  const response = await ax.get('/products', {
    params: {
      skip: params.skip,
      limit: params.limit,
    },
  });
  return response.data;
};

const useGetProducts = ({
  params,
  options,
}: {
  params: ParamsGetProductsInterface;
  options?: UseQueryOptions<APIResponse<ProductInterface[]>>;
}) => {
  return useQuery<APIResponse<ProductInterface[]>>(
    ['useGetProducts'],
    () => getProducts({params}),
    options,
  );
};

export default useGetProducts;
