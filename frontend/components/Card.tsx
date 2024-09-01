import { Text, View, ViewProps,StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { TCard } from "@/types/Card";

export type CardProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
    data: TCard | null;
    revealback?: boolean;
  };
  
  export function Card({ style, lightColor, darkColor,data,revealback=false, ...otherProps }: CardProps) {
    
    if(data == null){
        data={front: "Add Data",back: "fill me",id: -1};
    }

    return (
    <ThemedView style={{flex: 1,padding: 10}}>
        <View style={styles.cardContainer}>
            <ThemedText style={styles.text}>{data.front}</ThemedText>
        </View>
        <View style={styles.cardContainer}>
            { revealback &&
            <ThemedText style={styles.text}>{data.back}</ThemedText>
            }
        </View>
    </ThemedView>
    );
  }
  
const styles =  StyleSheet.create({
    cardContainer: {
        flex: 1,
        borderColor: 'red',
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        padding: 10,
        marginVertical: 10,
    },
    text: {
        // flex: 1,
        fontSize: 20,
        borderColor: 'red',
        // borderWidth: 1,
        alignSelf: "center",
    }
})