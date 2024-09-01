import { useThemeColor } from "@/hooks/useThemeColor";
import { Text, TouchableOpacity, useColorScheme, View,StyleSheet } from "react-native";
import { useColors } from "@/hooks/useColors";
import { Appearance } from 'react-native';

export default function HomeScreen() {

    const themeStyle = useColors()
    const styles = createStyles(themeStyle);

    const changeStyle = ()=> {
        Appearance.setColorScheme(Appearance.getColorScheme() == 'dark' ? 'light': 'dark');
    }

    const getData = async()=> {
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
    return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
            <TouchableOpacity onPress={getData} style={styles.button}>
                <Text style={styles.styleButtontext}>GetData</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={changeStyle} style={styles.button}>
                <Text style={styles.styleButtontext}>Style</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

//this is obviously shit
const createStyles = (themeStyle: any) => {
return StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: themeStyle.background,
        // alignContent: 'space-between'
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: themeStyle.text,
        alignSelf: 'center'
    },
    styleButtontext: {
        color: themeStyle.text,
        alignSelf: 'center'
    },
    button: {
        backgroundColor: themeStyle.background,
        borderColor: 'red',
        borderWidth: 1,
        // alignSelf: 'flex-end'
    }
})
}