import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const Main = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {

        let respone = require('./Data/content.json')

        try {
            if (respone) {
                setData(respone)
            }
        } catch (error) {
            console.warn(error)
        }
    }
    return (
        <View style={styles.mainContainer}>
            <StatusBar />
            <View style={styles.titleConatiner}>
                <Text style={styles.title}>Simple Blog Post Display</Text>
            </View>

            <FlatList data={data} renderItem={({ item }) =>

                <View style={styles.listBox}>

                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#ff0000' }}>{item.title}</Text>
                    <Text style={{ marginTop: 8, fontSize: 15, fontWeight: 'bold' }}>Author : {item.author} | {item.date}</Text>
                    <Text style={{ fontSize: 15, fontStyle: 'italic' }}>Category : {item.category}</Text>
                    <Text style={{ fontSize: 17, margin: 5, marginLeft: 7, marginTop: 10, marginBottom: 10 }}>{item.content}</Text>
                    <Text style={{ fontSize: 15, marginTop: 5 }}>Tags : {item.tags}</Text>
                    <Text style={{ fontSize: 15, fontStyle: 'italic' }}>Comments : {item.comments}</Text>

                </View>

            } />


        </View>
    )
}

export default Main;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'silver',
        padding: 5
    },
    titleConatiner: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: '100%',
        marginTop:20,
        marginBottom: 10,
        backgroundColor: '#ff0000',
        borderRadius: 10
    },
    title: {
        fontSize: 28,
        color: 'white',
        margin: 9
    },
    listBox: {
        backgroundColor: 'white',
        margin: 5,
        padding: 10,
        borderRadius: 8,
        marginBottom: 15
    }
})