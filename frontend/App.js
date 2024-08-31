import { registerRootComponent } from 'expo';
import { Text, View } from "react-native";

function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'green',
      }}
    >
      <Text style={{}}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

registerRootComponent(App);