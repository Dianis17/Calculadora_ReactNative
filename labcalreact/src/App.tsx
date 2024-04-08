import { StatusBar, Text, View } from "react-native";


function App() {
  return(
    <View style={styles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
      
      <CalculatorScreen/>
    </View>
  );
};

export default App;
