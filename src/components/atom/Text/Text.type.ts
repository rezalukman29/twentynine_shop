import {ReactElement} from 'react';
import {TextProps as RNTextProps} from 'react-native';

export type FontFamilyType =
  | 'Poppins-ExtraBold'
  | 'Poppins-Bold'
  | 'Poppins-SemiBold'
  | 'Poppins-Regular'
  | 'Poppins-Light'
  | 'Poppins-Thin'
  | 'Inter-ExtraBold'
  | 'Inter-Bold'
  | 'Inter-SemiBold'
  | 'Inter-Regular'
  | 'Inter-Medium'
  | 'Inter-Light'
  | 'Inter-Thin'
  | 'Raleway-Bold'
  | 'Raleway-Medium'
  | 'Raleway-Regular';

export type FontFamilyTypeKey =
  | 'Poppins_ExtraBold'
  | 'Poppins_Bold'
  | 'Poppins_SemiBold'
  | 'Poppins_Regular'
  | 'Poppins_Light'
  | 'Poppins_Thin'
  | 'Inter_ExtraBold'
  | 'Inter_Bold'
  | 'Inter_SemiBold'
  | 'Inter_Regular'
  | 'Inter_Medium'
  | 'Inter_Light'
  | 'Inter_Thin'
  | 'Raleway_Bold'
  | 'Raleway_Medium'
  | 'Raleway_Regular';

export type FontWeightType =
  | 'extra-bold'
  | 'bold'
  | 'semi-bold'
  | 'medium'
  | 'regular'
  | 'light'
  | 'thin'
  | 'raleway-bold'
  | 'raleway-medium'
  | 'raleway-regular'
  | 'poppins-regular'
  | 'poppins-semi-bold';
export type TextAlignType = 'left' | 'center' | 'right' | 'justify';
export type TextDecorationType = 'underline' | 'none' | 'line-through';
export type TextTransformType =
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase';
export type TextVariantType =
  | 'extra-large'
  | 'ultra-large'
  | 'x-large'
  | 'large'
  | 'base'
  | 'medium'
  | 'small'
  | 'extra-small';

export type FontStyleType = 'normal' | 'italic';

export interface TextStyleProps {
  fontWeight?: FontWeightType;
  color?: string;
  variant?: TextVariantType;
  textAlign?: TextAlignType;
  textTransform?: TextTransformType;
  textDecoration?: TextDecorationType;
  fontStyle?: FontStyleType;
}

export interface TextProps extends TextStyleProps, RNTextProps {
  label: string | number | ReactElement | null | undefined;
}
