import {useQuery, UseQueryOptions} from 'react-query';
import ax from '../../service/axios';
import {ProductInterface} from '../../interfaces/ProductInterface';

export const getProductDetail = async ({
  id,
}: {
  id: number;
}): Promise<ProductInterface> => {
  const response = await ax.get(`/products/${id}`);
  return response.data;
};

const useGetProductDetail = ({
  id,
  options,
}: {
  id: number;
  options?: UseQueryOptions<ProductInterface>;
}) => {
  return useQuery<ProductInterface>(
    ['useGetProductDetail'],
    () => getProductDetail({id}),
    options,
  );
};

export default useGetProductDetail;
