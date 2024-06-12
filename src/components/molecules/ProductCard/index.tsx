import {StyleSheet} from 'react-native';
import React, {memo} from 'react';
import {ProductInterface} from '../../../interfaces/ProductInterface';
import Colors from '../../../theme/Color';
import {Gap, Section, Text, TouchableSection} from '../../atom';
import {SHADOWS, WIDTH} from '../../../utils/config';
import {Lovely, Notepad, Star1} from 'iconsax-react-native';
import FastImage from 'react-native-fast-image';

type Props = {
  item: ProductInterface;
  index: number;
  isFavorite: boolean;
  onSelect: (id: number) => void;
  onAddFavorite: (id: number) => void;
};

const ProductCard = memo(
  ({item, index, isFavorite, onSelect, onAddFavorite}: Props) => {
    return (
      <TouchableSection
        key={`product_${index}`}
        isAlignStart
        style={styles.container}
        rounded={8}
        onPress={() => onSelect(item.id)}>
        <TouchableSection
          style={styles.favorite}
          onPress={() => onAddFavorite(item.id)}>
          <Lovely
            size={24}
            color={Colors['black-70']}
            variant={isFavorite ? 'Bold' : 'Linear'}
          />
        </TouchableSection>
        <FastImage
          style={styles.imageSlider}
          source={{
            uri: item.images[0],
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
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
      </TouchableSection>
    );
  },
);

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
  favorite: {position: 'absolute', zIndex: 10, top: 16, right: 16},
});
