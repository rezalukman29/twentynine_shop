import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text, TouchableSection} from '../../atom';
import Colors from '../../../theme/Color';
import {ArrowLeft2} from 'iconsax-react-native';
import {WIDTH} from '../../../utils/config';

type Props = {
  title: string;
  onPressBack: () => void;
};

const Header = ({title, onPressBack}: Props) => {
  return (
    <View>
      <TouchableSection style={styles.backIcon} onPress={onPressBack}>
        <ArrowLeft2 color={Colors['black-70']} size={20} />
      </TouchableSection>
      <Text
        variant="large"
        label={title}
        color={Colors['black-60']}
        textAlign="center"
        style={styles.title}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  backIcon: {
    position: 'absolute',
    zIndex: 10,
    left: 8,
    top: 4,
  },
  title: {width: WIDTH * 0.6, alignSelf: 'center'},
});
