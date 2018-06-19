// import color from 'color';
import { Platform, Dimensions, PixelRatio } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = undefined;

export default {
  platformStyle,
  platform,

  // Full height, width
  fullWidth: deviceWidth,
  fullHeight: deviceHeight,

    // Button
  btnTextColor: '#9A6800',
  btnFontSize: 18,
  btnDisabledBg: '#b5b5b5',
  btnDisabledClr: '#f1f1f1',
  btnColor: '#fbdc04',

    // CheckBox
  CheckboxRadius: (platform === 'ios') ? 13 : 0,
  CheckboxBorderWidth: (platform === 'ios') ? 1 : 2,
  CheckboxPaddingLeft: (platform === 'ios') ? 4 : 2,
  CheckboxPaddingBottom: (platform === 'ios') ? 0 : 5,
  CheckboxIconSize: (platform === 'ios') ? 21 : 14,
  CheckboxIconMarginTop: (platform === 'ios') ? undefined : 1,
  CheckboxFontSize: (platform === 'ios') ? (23 / 0.9) : 18,
  DefaultFontSize: 17,
  checkboxBgColor: '#039BE5',
  checkboxSize: 20,
  checkboxTickColor: '#fff',

    // Card
  cardDefaultBg: '#fff',


      // Color
  brandPrimary: '#fbdc04',
  brandOverlay: '#6CC5F9',
  brandInfo: '#62B1F6',
  brandSuccess: '#5cb85c',
  brandDanger: '#d9534f',
  brandWarning: '#f0ad4e',
  brandSidebar: '#252932',


    // Font
  fontSizeBase: 15,

  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },



    // InputGroup
  inputFontSize: 17,
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',

    // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',


    // Radio Button
  radioBtnSize: (platform === 'ios') ? 25 : 23,
  radioSelectedColorAndroid: '#3F51B5',

    // New Variable
  radioBtnLineHeight: (platform === 'ios') ? 29 : 24,

  radioColor: '#7e7e7e',


    // Spinner
  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',


    // Tabs
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,
  tabTextColor: '#222222',


    // Text
  textColor: '#000',
  inverseTextColor: '#a08a3d',
  textGray: '#5F5F5F',
  textHideGray: '#A7A7A7',
  noteFontSize: 14,


    // Title
  titleFontSize: 18,
  titleFontColor: '#0C3183',
  subTitleFontSize: (platform === 'ios') ? 12 : 14,


};
