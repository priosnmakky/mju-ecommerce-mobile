import React,{Component} from "react";
import { View ,Image,Text,TouchableOpacity,AppRegistry,TouchableHighlight } from "react-native";
import {
  TabNavigator,
  TabBarBottom,createBottomTabNavigator,
  createStackNavigator,StackNavigator ,withNavigation 
} from "react-navigation";
import { Ionicons } from '@expo/vector-icons';
import InnovationList from "./Tabs/InnovationList";
import Tab1Screen from "./Tabs/Tab1Screen";
import Tab1Details from "./Tabs/Tab1Details";
import Tab2Screen from "./Tabs/Tab2Screen";
import InnovationDetail from "./Tabs/InnovationDetail";
import CustomHeader from "../../components/CustomHeader";
import HeaderStyles from "../../headerStyles";
import Test from "./Tabs/Test";

let headerDefaultNavigationConfig = {
  header: props => <CustomHeader {...props} />,
  ...HeaderStyles
};


class HomeScreen1 extends React.Component {
  constructor(props) {
    super(props);
  }
   _onPressButton = ()=> {
   this.props.navigation.navigate('Tab1Details');
  }
  render() {
    return (

      <TouchableOpacity  onPress={() => this._onPressButton()}>
        <Image source = {require('../../assets/img/icFilter/icFilterSmall.png')} />
      </TouchableOpacity> 
    );
  }
}

const Innovation = createStackNavigator(
  {
    Tab1: {
      screen: InnovationList,
      navigationOptions: ({navigation}) => ({
      
         headerLeft:(
            <TouchableHighlight
              onPress={() => navigation.navigate('Test')}
              underlayColor={'#444444'}
              >
                <Image source = {require('../../assets/img/icFilter/icFilterSmall.png')} />
            </TouchableHighlight>
          ),
         headerRight:<HomeScreen1/> ,
        headerTitle: <Text style={{fontFamily: 'Kanit-Regular', fontSize: 16,}}>ผลิตภัณฑ์</Text>,
        headerTitleStyle:
        {

          textAlign: 'center',
          color:'#000000',
          fontFamily: 'Kanit-Regular',
          fontSize: 16,
       
        },
        headerTitleContainerStyle:
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Kanit-Regular',
          flex: 1

        },
         headerLeftContainerStyle:
        {

           marginLeft: 10
        }
        ,
        headerRightContainerStyle:
        {

           marginRight: 10
        },
          headerStyle:
      { 
         backgroundColor:'#ffffff',

      }
      })

    },
     
    Tab1Details: {
      screen: Tab1Details,
      navigationOptions: {
        headerTitle: "Tab 1 without botton bar"
      }
    }
  },
  {
    navigationOptions: {
      ...headerDefaultNavigationConfig
    }
  }
);

const Tab2 = createStackNavigator(
  {
    Tab2: {
      screen: Tab2Screen,
      navigationOptions: {
        headerLeft: null,
        headerTitle: "Tab 2 Screen"
      }
    }
  },
  {
    navigationOptions: {
      ...headerDefaultNavigationConfig
    }
  }
);


const Tab3 = createStackNavigator(
  {
    Tab3: {
      screen: Tab2Screen,
      navigationOptions: {
        headerLeft: null,
        headerTitle: "Tab 2 Screen3"
      }
    }
  },
  {
  tabBarOptions: {
      style: {
     
      backgroundColor:'#000000',
      }
  },
    navigationOptions: {
    
      ...headerDefaultNavigationConfig
    }
  }
);

const Tab4 = createStackNavigator(
  {
    Tab4: {
      screen: Tab2Screen,
      navigationOptions: {
        headerLeft: null,
        headerTitle: "Tab 2 Screen2"
      }
    }
  },
  {
    navigationOptions: {
      ...headerDefaultNavigationConfig
    }
  }
);


const DashboardTabRoutes = createBottomTabNavigator(
  {
    Innovation: Innovation,
    Tab2: Tab2,
     Tab3:Tab3,
    Tab4:Tab4,

  },
  {
    initialRouteName: "Innovation",
    navigationOptions: ({ navigation }) => {
      const { routeName, routes } = navigation.state;
      let params = routes && routes[1] && routes[1].params;
      return {
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
            if (routeName === 'Innovation') {

            return <Image source = {require('../../assets/img/innovationActive/innovationActiveSmall.png')} /> 
          } else if (routeName === 'Tab2') {
            return <Image source = {require('../../assets/img/newsInactive/newsInactiveSmall.png')} />
            // iconName = `ios-options${focused ? '' : '-outline'}`;
          }
          else if (routeName === 'Tab3') {
            return <Image source = {require('../../assets/img/cartInactive/cartInactiveSmall.png')} />
            // iconName = `ios-options${focused ? '' : '-outline'}`;
          }
           else if (routeName === 'Tab4') {
            return <Image source = {require('../../assets/img/more/moreSmall.png')} />
            // iconName = `ios-options${focused ? '' : '-outline'}`;
          }
  
          // You can return any component that you like here! For demo we use an
          // icon component from react-native-vector-icons
  
          // You can return any component that you like here! For demo we use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
        tabBarVisible:
          params && params.hideTabBar != null ? !params.hideTabBar : true,
        swipeEnabled:
          params && params.hideTabBar != null ? !params.hideTabBar : true
      };
    },
    tabBarOptions: {
      activeTintColor: "#6200EE",
      inactiveTintColor: "#858585",
      style: {
        height: 60,
        paddingVertical: 5,
        backgroundColor: "#000000"
      },
      labelStyle: {
        fontSize: 12,
        lineHeight: 20
      }
    },
    tabBarPosition: "bottom",
    animationEnabled: true,
    swipeEnabled: true
  }
);

AppRegistry.registerComponent('HomeScreen1', () => DashboardTabRoutes);


export default DashboardTabRoutes;
