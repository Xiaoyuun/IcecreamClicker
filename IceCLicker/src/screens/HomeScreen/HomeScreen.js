{/*}
import React from 'react'
import { Text, View } from 'react-native'

export default function HomeScreen(props) {
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}

*/}

import React, { useEffect, useState } from 'react'
import { Image, FlatList, Keyboard, Text, ImageBackground, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import firestore from '@react-native-firebase/firestore'

import {
    SafeAreaView,
    StyleSheet,
} from 'react-native';



//

const App = () => {
    const [username, setUsername] = useState('base');
    const [score, setScore] = useState(0);
    const [allScores, setAllScores] = useState([]);



    //This useEffect runs once when this component is first rendered
    useEffect(() => {
        //fetch all scores, return ordered by score in descending order
        getCurrentScores();
    }, []);

    //Get current leaderboard
    const getCurrentScores = () => {
        firestore()
            .collection('scores')
            .orderBy('score', 'desc')
            .get()
            .then(querySnapshot => {
                const docs = [];
                querySnapshot.forEach(doc => {
                    docs.push(doc.data());
                });
                setAllScores(docs);
            })
            .catch(error => {
                console.log('Error getting documents: ', error);
            });
    };

    //update user score on firebase
    const updateUserScore = newScore => {
        firestore()
            .collection('scores')
            .doc(username)
            .set({ username: username, score: score })
            .then(() => {
                //refetch current leaderboard
                getCurrentScores();
            })
            .catch(error => {
                console.log('Error: ', error);
            });
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            height: 80,
            marginTop: 40,
            marginBottom: 20,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 30,
            paddingRight: 30,
            justifyContent: 'center',
        },
        button: {
            //flexDirection: 'row',
            height: 50,
            //marginTop: 190,
            //marginBottom: 300,
            //flex: 1,
            //paddingTop: 10,
            //paddingBottom: 10,
            paddingLeft: 30,
            paddingRight: 30,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lightblue',
            borderRadius: 90
        },
        logo: {
            flex: 1,
            height: 100,
            width: 90,
            alignSelf: "center",
            margin: -7
        },
    });

    const renderEntity = ({ item, index }) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityText}>
                    {index}. {item.text}
                </Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    setScore(score + 1);
                    updateUserScore(score + 1);
                }}>
                <ImageBackground
                    source={require('../../../assets/icecream-icon.png')}
                    style={{
                        height: 400,
                        width: 400,
                        opacity: .9,
                        position: 'absolute',
                    }}
                />
                <Text>Press me! Current score: {score}</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.userNameInput}
                placeholder="Enter username"
                onChangeText={setUsername}
            />
            <Text>Leaderboard</Text>
            {allScores.map(userScore => {
                return (
                    /*
                                        entities && (
                                            <View style={styles.listContainer}>
                                                <FlatList
                                                    data={entities}
                                                    renderItem={renderEntity}
                                                    keyExtractor={(item) => item.id}
                                                    removeClippedSubviews={true}
                                                />
                                            </View>
                                        )
                    */

                    <>
                        <FlatList>
                            <Text>
                                {userScore.username}: {userScore.score}
                            </Text>
                        </FlatList>
                    </>

                );
            })}
            <Image
                style={styles.logo}
                source={require('../../../assets/icecream-icon.png')}
            />
        </SafeAreaView>

    );
};



export default App;

/*
export default function HomeScreen(props) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])

    const entityRef = firestore().collection('entities')
    const userID = props.extraData.id

    useEffect(() => {
        entityRef
            .where("authorID", "==", userID)
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        entity.id = doc.id
                        newEntities.push(entity)
                    });
                    setEntities(newEntities)
                },
                error => {
                    console.log(error)
                }
            )
    }, [])

    const onAddButtonPress = () => {
        if (entityText && entityText.length > 0) {
            const timestamp = firestore.FieldValue.serverTimestamp();
            const data = {
                text: entityText,
                authorID: userID,
                createdAt: timestamp,
            };
            entityRef
                .add(data)
                .then(_doc => {
                    setEntityText('')
                    Keyboard.dismiss()
                })
                .catch((error) => {
                    alert(error)
                });
        }
    }


    const renderEntity = ({ item, index }) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityText}>
                    {index}. {item.text}
                </Text>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Add new entity'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEntityText(text)}
                    value={entityText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
            {entities && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={entities}
                        renderItem={renderEntity}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    />
                </View>
            )}
        </View>
    )
}
*/