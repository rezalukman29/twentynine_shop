import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {AppStackParams} from '../../interfaces/AppStackParams';
import {RouteName} from '../../interfaces/RouteName';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {Gap, Loading, Section, Text} from '../../components/atom';
import Colors from '../../theme/Color';
import useGetProductDetail from '../../hooks/api/useGetProductDetail';
import {ModalToastContext} from '../../context/AppModalToastContext';
import Header from '../../components/molecules/Header';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {WIDTH} from '../../utils/config';
import FastImage from 'react-native-fast-image';
import {Notepad, Star1} from 'iconsax-react-native';

const ProductDetail = () => {
  const route = useRoute<RouteProp<AppStackParams, RouteName.ProductDetail>>();
  const navigation = useNavigation<NavigationProp<AppStackParams>>();
  const id = route.params.id;
  const {openToast} = useContext(ModalToastContext);
  const {isFetching: isFetchingProduct, data} = useGetProductDetail({
    id,
    options: {
      enabled: !!id,
      onSuccess: detail => {
        openToast('success', `${detail.title}`);
      },
      onError: () => {
        openToast('error', 'Failed get product detail');
      },
    },
  });
  const onPressBack = () => navigation.goBack();
  return (
    <>
      {isFetchingProduct && <Loading />}
      <SafeAreaView style={styles.container}>
        <Section style={styles.wrapper}>
          <Header title={data?.title ?? ''} onPressBack={onPressBack} />
          <Gap height={25} />
          <SwiperFlatList
            autoplay
            autoplayDelay={5}
            style={styles.sliderWrapper}
            autoplayLoop
            data={data?.images ?? []}
            renderItem={({item}) => (
              <FastImage
                style={styles.imageSlider}
                source={{
                  uri: item,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            )}
          />
          <Gap height={16} />
          <Section style={styles.contentWrapper}>
            <Section isRow isBetween isAlignStart>
              <Section isRow isAlignStart>
                <Notepad size={18} color={Colors['black-70']} />
                <Gap width={6} />
                <Text
                  label={data?.title}
                  color={Colors['black-70']}
                  fontWeight="semi-bold"
                  style={{width: WIDTH * 0.6}}
                />
              </Section>
              <Section isRow>
                <Star1 size={18} color={Colors['black-70']} variant="Bold" />
                <Gap width={6} />
                <Text
                  label={data?.rating}
                  color={Colors['black-70']}
                  fontWeight="semi-bold"
                />
              </Section>
            </Section>
            <Gap height={6} />
            <Text
              label={data?.description}
              variant="small"
              fontWeight="regular"
              color={Colors['black-40']}
              textAlign="justify"
            />
          </Section>
        </Section>
      </SafeAreaView>
    </>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapper: {
    paddingHorizontal: 12,
  },
  sliderWrapper: {
    width: '100%',
    height: WIDTH * 0.6,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  imageSlider: {
    width: WIDTH - 32,
    height: WIDTH * 0.5,
    resizeMode: 'cover',
  },
  contentWrapper: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
