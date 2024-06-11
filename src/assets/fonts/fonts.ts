import {
  FontFamilyType,
  FontFamilyTypeKey,
} from '../../components/atom/Text/Text.type';

type FontsType = {
  [key in FontFamilyTypeKey]: FontFamilyType;
};
export const fonts: FontsType = {
  Poppins_ExtraBold: 'Poppins-ExtraBold',
  Poppins_Bold: 'Poppins-Bold',
  Poppins_SemiBold: 'Poppins-SemiBold',
  Poppins_Regular: 'Poppins-Regular',
  Poppins_Light: 'Poppins-Light',
  Poppins_Thin: 'Poppins-Thin',
  Inter_ExtraBold: 'Inter-ExtraBold',
  Inter_Bold: 'Inter-Bold',
  Inter_SemiBold: 'Inter-SemiBold',
  Inter_Regular: 'Inter-Regular',
  Inter_Medium: 'Inter-Medium',
  Inter_Light: 'Inter-Light',
  Inter_Thin: 'Inter-Thin',
  Raleway_Bold: 'Raleway-Bold',
  Raleway_Medium: 'Raleway-Medium',
  Raleway_Regular: 'Raleway-Regular',
};
