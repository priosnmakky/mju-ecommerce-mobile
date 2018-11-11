import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

class Test extends React.Component {
  render() {
    return (
      <View>
        
        <Button
            raised
            onPress={() => this.props.navigation.navigate("Home",{ hideTabBar: true })}
          >
            <Text>Go to details screen</Text>
        </Button>
      </View>
    );
  }
}

export default Test;
