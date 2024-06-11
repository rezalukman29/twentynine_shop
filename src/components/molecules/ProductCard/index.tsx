import {Image, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import {ProductInterface} from '../../../interfaces/ProductInterface';
import Colors from '../../../theme/Color';
import {EntryAnimation, Gap, Section, Text} from '../../atom';
import {SHADOWS, WIDTH} from '../../../utils/config';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {Notepad, Star1} from 'iconsax-react-native';

type Props = {
  item: ProductInterface;
  index: number;
};

const ProductCard = memo(({item, index}: Props) => {
  console.log('render_item_product', item.id);
  return (
    <EntryAnimation index={index}>
      <Section isAlignStart style={styles.container} rounded={8}>
        <SwiperFlatList
          autoplay
          autoplayDelay={5}
          style={styles.sliderWrapper}
          autoplayLoop
          data={item.images ?? []}
          // eslint-disable-next-line @typescript-eslint/no-shadow
          renderItem={({item}) => (
            <Image
              resizeMode="cover"
              source={{
                uri: item,
              }}
              style={styles.imageSlider}
            />
          )}
        />
        <Section style={styles.contentWrapper}>
          <Section isRow isBetween isAlignStart>
            <Section isRow isAlignStart>
              <Notepad size={18} color={Colors['black-70']} />
              <Gap width={6} />
              <Text
                label={item.title}
                color={Colors['black-70']}
                fontWeight="semi-bold"
                style={{width: WIDTH * 0.6}}
              />
            </Section>
            <Section isRow>
              <Star1 size={18} color={Colors['black-70']} variant="Bold" />
              <Gap width={6} />
              <Text
                label={item.rating}
                color={Colors['black-70']}
                fontWeight="semi-bold"
              />
            </Section>
          </Section>
          <Gap height={6} />
          <Text
            label={item.description}
            variant="small"
            fontWeight="regular"
            color={Colors['black-40']}
            textAlign="justify"
          />
        </Section>
      </Section>
    </EntryAnimation>
  );
});

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    backgroundColor: Colors.white,
    marginHorizontal: 12,
    ...SHADOWS.medium,
  },
  sliderWrapper: {
    width: '100%',
    height: WIDTH * 0.5,
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
