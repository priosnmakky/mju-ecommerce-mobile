import React from "react";
import { View, Text,ScrollView,Image ,Dimensions,TouchableOpacity} from "react-native";
import { Button } from "react-native-paper";
import axios from 'axios';
let windowWidth  =Dimensions.get('window').width;
let windowHeight  =Dimensions.get('window').height;
class InnovationList extends React.Component {
     constructor(){
   super();
   this.state = {
    names: []
   }
    this.setTags = this.setTags.bind(this);
  }
    componentDidMount(){
     this.getData();
  }
  setTags(tags)
    {
      var tagsList = tags.split(",");
      var i;
      var tagsText="";
      for (i = 0; i < tagsList.length; i++) 
      { 
          if(i==tagsList.length-1)
          {
            tagsText = tagsText +tagsList[i] 

          }
          else
          {
            tagsText = tagsText+tagsList[i] +" / "

          }
           
      }
      return <Text style={{fontFamily: 'Kanit-Light',marginLeft:3, fontSize: 12,color:'#bfbfbf'}}>{tagsText}</Text>;
    }
     async getData(){
   const res = await axios.get('https://mju-ecom.avalue.co.th/services/api/innovative');
   const { data } = await res;
   this.setState({names: data.innovativeList})
 }
  render() {
    return (
      <View style={{ flex: 1, flexDirection:'column',justifyContent: "flex-start", alignItems: "center",backgroundColor:'#000000',top:25}}>
         
            <ScrollView style={{width: "100%",flex: 1,backgroundColor:'#ffffff',flexDirection:'row'}}>
            {
                 this.state.names.map((item, index) => (
                       <TouchableOpacity key = {item.id}  onPress={() => {
                            this.props.navigation.navigate('InnovationDetail', {
                            itemId: item.id,
                            otherParam: 'anything you want here',
                            });
                            }} style={{width:'100%',flexDirection:'row',height: 110 ,marginTop:5, borderBottomWidth:2,
  borderBottomColor: '#cccccc',}}>
                            <View style={{  width:windowWidth ,flexDirection:'row'}}>
                                <View style={{  margin:5}}>
                                    <Image source = {{uri:item.cover}}
                                     style = {{ width: 100, height: 100 ,borderRadius:10}}
                                        />
                                </View>
                                <View style={{ flexDirection:'column', margin:5}}>
                                    <Text style={{fontFamily: 'Kanit-Regular', fontSize: 16,flex: 2}}>
                                    {item.name}</Text>
                                    <View style={{flex: 1,flexDirection:'row'}}>
                                        <Text style={{fontFamily: 'Kanit-Regular', fontSize: 16,color:'#00cc00'}}>
                                            {item.price}
                                        </Text>
                                        <Text style={{fontFamily: 'Kanit-Light', fontSize: 12,top:2,marginLeft:5,color:'#bfbfbf'}}>
                                            ฿
                                        </Text>
                                    </View>
                                    <View style={{flex: 1,flexDirection:'row'}}>
                                        <Image source = {require('../../../assets/img/Tag/tagSmall.png')}
                                        style={{top: 5}} />
                                        
                                            {this.setTags(item.category)}
                                 
                                    </View>
                                    
                                     


                                </View>

                            </View>
                       </TouchableOpacity>
                    ))

            }
            </ScrollView>
      </View>
    );
  }
}

export default InnovationList;