import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import stylesCommon from '../utils/stylesCommon.js';
import strings from '../utils/strings';
import colors from '../utils/colors';
import NavigationService from '../navigation/NavigationService';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = props => (
  <View
    style={[stylesCommon.headerContainer, {backgroundColor: colors.lightGray}]}>
    <View
      style={{
        flex: 0.2,
        flexDirection: 'row',
      }}>
      <TouchableOpacity onPress={() => NavigationService.goBack(null)}>
        <Icon name="chevron-left" color={colors.shamrock} size={30} />
      </TouchableOpacity>
    </View>
    <View style={{flex: 0.7}}>
      <Text style={[stylesCommon.headerTextStyle, {color: colors.shamrock}]}>
        Dashboard
      </Text>
    </View>
  </View>
);

export default Header;
