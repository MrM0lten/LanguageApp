import { useThemeColor } from "@/hooks/useThemeColor";
import { Text, TouchableOpacity, useColorScheme, View,StyleSheet, SafeAreaView } from "react-native";
import { useColors } from "@/hooks/useColors";
import { Appearance } from 'react-native';
import { Card } from "@/components/Card";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TCard } from "@/types/Card";
import { useEffect, useState } from "react";
import { randomArrayElem } from "@/utilities/genericUtils";

let Cards: TCard[] = [

] 
// {id: 0,front: "DummyCardFront",back: "DummyCardBack"},
// {id: 1,front: "DummyCardFront123",back: "DummyCardBack123"},
// {id: 2,front: "DummyCardFront121231233",back: "DummyCardBack12123123"} 

export default function HomeScreen() {

    const themeStyle = useColors()
    const styles = createStyles(themeStyle);
    const [currentCard, setCurrentCard] = useState<TCard | null>(Cards[0])
    const [revealBack, setRevealBack] = useState<boolean>(false)

    useEffect(()=> {

    },[currentCard,revealBack])

    const changeStyle = ()=> {
        Appearance.setColorScheme(Appearance.getColorScheme() == 'dark' ? 'light': 'dark');
    }

    const pickNextCard = () => {
        if(Cards.length < 1){
            setCurrentCard(null)
            return;
        }
        setRevealBack(false);
        setCurrentCard(randomArrayElem(Cards))
    }

    const addNewCard = () => {
        const tempID = Cards.length + 1
        Cards.push({id: tempID,front: `DummyCardFront_${tempID}`,back: "DummyCardBack"},)
    }

    const RevealBack = () => {
        setRevealBack(true);
    }

    const removeCard = () => {
        if(Cards == null || Cards.length < 1){
            console.log("No Cards left to remove")
            return; 
        }
        setRevealBack(false);
        console.log("-----Trying to remove -----")
        console.log(Cards); 
        const currID = currentCard.id; 
        console.log("currID = ",currID)
        Cards = Cards.filter((card)=> card.id !== currID)
        pickNextCard()
        console.log(Cards);
    }  

    return (
    <ThemedView style={styles.container}> 
        <ThemedView style={styles.header}>
            {currentCard &&
            <ThemedText style={styles.headerText}>{currentCard.id}/{Cards.length}</ThemedText>
            }
        </ThemedView>
        <ThemedView style={styles.content}>
            <Card data={currentCard} revealback={revealBack}></Card>
        </ThemedView>
        <ThemedView style={styles.bottomView}>
            <TouchableOpacity onPress={changeStyle} style={styles.button}>
                <ThemedText style={styles.styleButtontext}>Style</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity onPress={removeCard} style={styles.button}>
                <ThemedText style={styles.styleButtontext}>Remove</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity onPress={addNewCard} style={styles.button}>
                <ThemedText style={styles.styleButtontext}>Add</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity onPress={RevealBack} style={styles.button}>
                <ThemedText style={styles.styleButtontext}>Reveal</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity onPress={pickNextCard} style={styles.button}>
                <ThemedText style={styles.styleButtontext}>Next</ThemedText>
            </TouchableOpacity>
        </ThemedView>
    </ThemedView>
    )
}

//this is obviously shit
const createStyles = (themeStyle: any) => {
return StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.15,
        borderColor: 'red',
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
    },
    content: {
        flex: 1,
    },
    text: {
        // color: themeStyle.text,
        alignSelf: 'center'
    },
    styleButtontext: {
        // color: themeStyle.text,
        alignSelf: 'center'
    },
    button: {
        // backgroundColor: themeStyle.background,
        borderColor: 'red',
        borderWidth: 1,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // alignSelf: 'flex-end'
    },
    bottomView: {
        flex: 0.05,
        flexDirection: 'row',
    }
})
}