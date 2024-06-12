import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {ProductInterface} from '../../interfaces/ProductInterface';
import useGetProducts from '../../hooks/api/useGetProducts';
import {EntryAnimation, Gap, Loading, Text} from '../../components/atom';
import Colors from '../../theme/Color';
import ProductCard from '../../components/molecules/ProductCard';
import {AppStackParams} from '../../interfaces/AppStackParams';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RouteName} from '../../interfaces/RouteName';
import {ModalToastContext} from '../../context/AppModalToastContext';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<AppStackParams>>();
  const [items, setItems] = useState<ProductInterface[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(10);
  const [favorites, setFavorites] = useState<number[]>([]);
  const {openToast} = useContext(ModalToastContext);

  const onAddFavorite = useCallback(
    (id: number) => {
      let findItem: any = Boolean(favorites.find((el: number) => el === id));
      if (!findItem) {
        setFavorites([...favorites, id]);
        openToast('success', 'Add to favorites');
      } else {
        setFavorites(favorites.filter((el: number) => el !== id));
        openToast('success', 'Remove to favorites');
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [favorites],
  );

  const {isFetching: isFetchingProducts, refetch: refetchProducts} =
    useGetProducts({
      params: {
        limit: limit,
        skip: limit * page,
      },
      options: {
        enabled: true,
        onSuccess: ({products, total}) => {
          if (products?.length && total > items.length) {
            setItems(page === 1 ? products : [...items, ...products]);
          }
        },
      },
    });

  const onSelect = (id: number) =>
    navigation.navigate(RouteName.ProductDetail, {
      id,
    });

  const RenderProduct = useCallback(
    ({item, index}: {item: ProductInterface; index: number}) => {
      const isFavorite = Boolean(favorites?.find(el => el === item.id));
      return (
        <ProductCard
          key={`product_${index}`}
          item={item}
          index={index}
          onSelect={onSelect}
          isFavorite={isFavorite}
          onAddFavorite={onAddFavorite}
        />
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [favorites],
  );

  useEffect(() => {
    refetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      {isFetchingProducts && <Loading />}
      <SafeAreaView style={styles.container}>
        <EntryAnimation index={0}>
          <Text
            label={'Products List'}
            variant="base"
            textAlign="center"
            fontWeight="bold"
            color={Colors['black-50']}
          />
        </EntryAnimation>
        <Gap height={12} />
        <EntryAnimation index={2}>
          <FlatList
            data={items}
            keyExtractor={(_, key) => key.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <RenderProduct item={item} index={index} />
            )}
            onEndReached={() => setPage(page + 1)}
            onEndReachedThreshold={0.5}
          />
        </EntryAnimation>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: Colors.white,
  },
  counter: {
    backgroundColor: Colors.main,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
});
