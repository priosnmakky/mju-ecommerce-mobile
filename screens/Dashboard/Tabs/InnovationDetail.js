import React,{Component} from "react";
import { Dimensions,View ,Image,Text,TouchableOpacity,AppRegistry,TouchableHighlight,Platform ,ScrollView,ImageBackground} from "react-native";
import axios from 'axios';
let windowWidth  =Dimensions.get('window').width;
let windowHeight  =Dimensions.get('window').height;
class InnovationDetail extends React.Component {
      constructor(){
   super();
   this.state = {
    innovationDetail: {}
   }
  }
   componentDidMount(){
     this.getData();
  }
     async getData(){
        const { navigation } = this.props;
        const itemId = await navigation.getParam('itemId', 'NO-ID');
       const res = await axios.get('https://mju-ecom.avalue.co.th/services/api/innovative/'+itemId+'/');
       const { data } = await res;
       this.setState({innovationDetail: data.innovative})
 }
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',
        marginTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
            <ScrollView style={{width: "100%",flex: 1,flexDirection:'row'}}>
            {
                <View style={{flex: 1,flexDirection:'column'}}>

                    <ImageBackground style={{height: 200,width:windowWidth,flexDirection:'row',justifyContent:'space-between'}} source={{uri: this.state.innovationDetail.cover}}>
                        <View style={{margin:10,height: 30,width:80,borderRadius:15,backgroundColor:'green',flexDirection:'column',justifyContent: "center", alignItems: "center"}}>
                            <View style={{backgroundColor:'green',flexDirection:'row',justifyContent: "center", alignItems: "center"}}>
                                <Image source = {require('../../../assets/img/shape/shapeSmall.png')}
                                        style={{marginRight: 5}} />
                                <Text style={{fontFamily: 'Kanit-Light', fontSize: 12,color:'#ffffff'}}>ติดต่อ</Text>
                            </View>
                        </View>
                        <TouchableOpacity   onPress={() => {
                            this.props.navigation.navigate('Tab1');
                            }} style={{margin:10,flexDirection:'column'}}>
                            <Image source = {require('../../../assets/img/close/closeSmall.png')}
                                        style={{marginRight: 5}} />
                        </TouchableOpacity>
                    </ImageBackground >
                    <View style={{height:30,margin:10}}>
                        <Text style={{fontFamily: 'Kanit-Regular', fontSize: 20,color:'#000000'}}>
                            {this.state.innovationDetail.name}
                        </Text>
                     </View>
                     <View style={{height:25,margin:10,flexDirection:'row'}}>
                        <Text style={{fontFamily: 'Kanit-Regular', fontSize: 20,color:'green'}}>
                            {this.state.innovationDetail.price}
                        </Text>
                        <Text style={{fontFamily: 'Kanit-Light', fontSize: 12,color:'#00cc00',marginTop:8,marginLeft:5}}>
                            ฿
                        </Text>
                     </View>
                     <View style={{height:25,margin:10,flexDirection:'row'}}>
                        <Text style={{fontFamily: 'Kanit-Light', fontSize: 14}}>
                            แบ่งปัน
                        </Text>
                        <Image source = {require('../../../assets/img/facebook/icFacebookSmall.png')}
                                        style={{marginLeft: 5,marginBottom:3}} />

                        <Image source = {require('../../../assets/img/Twitter/icTwitterSmall.png')}
                                        style={{marginLeft: 5,marginBottom:3}} />
                         <Image source = {require('../../../assets/img/google/icGoogleSmall.png')}
                                        style={{marginLeft: 5,marginBottom:3}} />
                     </View>

                </View>
                
            }
            </ScrollView>
       
        </View>
    );
  }
}
export default InnovationDetail;