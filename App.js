import  React,{ Component } from 'react';
import Routes from "./Routes";
import { StatusBar, View, YellowBox } from "react-native";
import { Font } from 'expo';

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

export default class App extends Component {
	    async componentWillMount() {
	    	 await Expo.Font.loadAsync({
    'Kanit-Regular': require('./assets/fonts/kanit/Kanit-Regular.ttf'),
    'Kanit-Light': require('./assets/fonts/kanit/Kanit-Light.ttf'),
  });
	    	
}
     render() 

     {
     	return (
     		  
    <Routes />
  
     		)

     }

}


