import { StatusBar, Text, View } from "react-native";
import { CalculatorScreen } from './screens/CalculatorScreen';
import { styles } from "./config/theme/app-theme.js"; 

function App() {
  return(
    <View style={styles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
      
      <CalculatorScreen/>
    </View>
  );
};

export default App;
