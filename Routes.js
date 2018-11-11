import React from "react";
import { View } from "react-native";
import Home from "./screens/Home";
import DashboardTabRoutes from "./screens/Dashboard/Routes";
import { createStackNavigator } from "react-navigation";
import CustomHeader from "./components/CustomHeader";
import HeaderStyles from "./headerStyles";
import InnovationDetail from "./screens/Dashboard/Tabs/InnovationDetail";

const Routes = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: "Home",
        header: props => <CustomHeader {...props} />
      }
    },
    InnovationDetail: {
      screen: InnovationDetail,
      navigationOptions: {
        header: null
      }
    },
    Dashboard: {
      screen: DashboardTabRoutes,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      ...HeaderStyles,
      animationEnabled: true
    }
  }
);

export default Routes;
