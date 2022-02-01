import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProductStack, CartStack} from './StackNavigator';
import Cart from '../screens/Cart';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CustomTabBtn,
  CustomTabBtnView,
  IconImage,
  IconText,
  TabBarIconView,
} from '../styles/Tab-style';
import Profile from '../screens/Profile';
import Notification from '../screens/Notification';
import Setting from '../screens/Setting';

const Tab = createBottomTabNavigator();

const CustomTabbarButton = ({children, onPress}) => (
  <CustomTabBtn onPress={onPress} style={{...style.shadow}}>
    <CustomTabBtnView>{children}</CustomTabBtnView>
  </CustomTabBtn>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom:
            Platform.OS === 'ios'
              ? (Dimensions.get('window').width / 380) * 25
              : (Dimensions.get('window').width / 380) * 15,
          left:
            Platform.OS === 'ios'
              ? (Dimensions.get('window').width / 380) * 20
              : (Dimensions.get('window').width / 380) * 15,
          right:
            Platform.OS === 'ios'
              ? (Dimensions.get('window').width / 380) * 20
              : (Dimensions.get('window').width / 380) * 15,
          backgroundColor: '#ffffff',
          borderRadius: (Dimensions.get('window').width / 380) * 15,
          height:
            Platform.OS === 'ios'
              ? (Dimensions.get('window').width / 380) * 83
              : (Dimensions.get('window').width / 380) * 80,
          ...style.shadow,
        },
      }}>
      <Tab.Screen
        name="ProductStack"
        component={ProductStack}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIconView>
              <IconImage
                source={require('../assets/home.png')}
                style={{
                  tintColor: focused ? '#288fef' : '#081122',
                }}
              />
              <IconText
                color={focused ? '#288fef' : '#081122'}
                weight="bold"
                size={12}>
                HOME
              </IconText>
            </TabBarIconView>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIconView>
              <IconImage
                source={require('../assets/profile.png')}
                style={{
                  tintColor: focused ? '#288fef' : '#081122',
                }}
              />
              <IconText
                color={focused ? '#288fef' : '#081122'}
                weight="bold"
                size={12}>
                PROFILE
              </IconText>
            </TabBarIconView>
          ),
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarIcon: ({focused}) => (
            <IconImage
              source={require('../assets/cart.png')}
              style={{
                width: (Dimensions.get('window').width / 380) * 30,
                height: (Dimensions.get('window').width / 380) * 30,
                tintColor: '#ffffff',
              }}
            />
          ),
          tabBarButton: props => <CustomTabbarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIconView>
              <IconImage
                source={require('../assets/bell.png')}
                style={{
                  tintColor: focused ? '#288fef' : '#081122',
                }}
              />
              <IconText
                color={focused ? '#288fef' : '#081122'}
                weight="bold"
                size={12}>
                MESSAGE
              </IconText>
            </TabBarIconView>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIconView>
              <IconImage
                source={require('../assets/settings.png')}
                style={{
                  tintColor: focused ? '#288fef' : '#081122',
                }}
              />
              <IconText
                color={focused ? '#288fef' : '#081122'}
                weight="bold"
                size={12}>
                SETTINGS
              </IconText>
            </TabBarIconView>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#1f1f1f',
    shadowOffset: {
      width: -10,
      height: 15,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 6,
  },
});

export default Tabs;
