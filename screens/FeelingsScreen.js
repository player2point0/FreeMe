import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';

import FeelingSlider from '../components/FeelingSlider';

import {createFeelings, updateDay, createDay} from "../src/graphql/mutations";
import {API, graphqlOperation, Auth} from "aws-amplify";
import {getDay} from "../src/graphql/queries";

export default function FeelingsScreen({navigation, route}) {

    //todo refactor this mess
    const onDone = () => {
        API.graphql(graphqlOperation(createFeelings, {
            input: {
                tired: tiredVal,
                happy: happyVal,
                bored: boredVal,
                hungry: hungryVal,
            },
            authMode: 'AMAZON_COGNITO_USER_POOLS',
        }))
            .catch(error => {
                console.log('error adding feeling', error);
            });

        //todo refactor this
        const getCurrentDate = () => {
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            const yyyy = today.getFullYear();

            return dd + '/' + mm + '/' + yyyy;
        };

        const currentDate = getCurrentDate();
        const currentUserId = Auth.user.username;

        //fetch the current day object or create a new one
        API.graphql(graphqlOperation(getDay, {
            userId: currentUserId,
            date: currentDate,
            authMode: 'AMAZON_COGNITO_USER_POOLS',
        }))
            .then(value => {
                let currentDay = value.data.getDay;
                let dayAddition = {
                    tired: tiredVal,
                    happy: happyVal,
                    bored: boredVal,
                    hungry: hungryVal,
                    feelingEntries: 1,
                    focus: 0,
                    productive: 0,
                    distracted: 0,
                    flow: 0,
                    postWorkEntries: 0,
                };

                if (route.params.focus && route.params.productive && route.params.distracted && route.params.flow) {
                    dayAddition.focus = route.params.focus;
                    dayAddition.productive = route.params.productive;
                    dayAddition.distracted = route.params.distracted;
                    dayAddition.flow = route.params.flow;
                    dayAddition.postWorkEntries = 1;
                }

                //create new day
                if (currentDay === null) {
                    API.graphql(graphqlOperation(createDay, {
                        input:  {
                            userId: currentUserId,
                            date: currentDate,
                            totalTired: dayAddition.tired,
                            totalHappy: dayAddition.happy,
                            totalBored: dayAddition.bored,
                            totalHungry: dayAddition.hungry,
                            numberFeelingEntries: dayAddition.feelingEntries,
                            totalFocus: dayAddition.focus,
                            totalProductive: dayAddition.productive,
                            totalDistracted: dayAddition.distracted,
                            totalFlow: dayAddition.flow,
                            numberPostWorkEntries: dayAddition.postWorkEntries,
                        },
                        authMode: 'AMAZON_COGNITO_USER_POOLS',
                    }))
                        .catch(error => {
                            console.log('error adding feeling', error);
                        });

                } else {
                    API.graphql(graphqlOperation(updateDay, {
                        input: {
                            userId: currentUserId,
                            date: currentDate,
                            totalTired: currentDay.totalTired + dayAddition.tired,
                            totalHappy: currentDay.totalHappy + dayAddition.happy,
                            totalBored: currentDay.totalBored + dayAddition.bored,
                            totalHungry: currentDay.totalHungry + dayAddition.hungry,
                            numberFeelingEntries: currentDay.numberFeelingEntries + dayAddition.feelingEntries,
                            totalFocus: currentDay.totalFocus + dayAddition.focus,
                            totalProductive: currentDay.totalProductive + dayAddition.productive,
                            totalDistracted: currentDay.totalDistracted + dayAddition.distracted,
                            totalFlow: currentDay.totalFlow + dayAddition.flow,
                            numberPostWorkEntries: currentDay.numberPostWorkEntries + dayAddition.postWorkEntries,
                        },
                        authMode: 'AMAZON_COGNITO_USER_POOLS',
                    }))
                        .catch(error => {
                            console.log('error updating day', error);
                        });
                }


            })
            .catch(error => {
                console.log('error getting day', error);
            });

        if(route.params.startWork === true){
            navigation.navigate('WorkFocusScreen');
        }

        else{
            //todo using the feelings and the post work values send a request to the recommendation server
            //todo display a loading animation
            //todo navigate to a recommendation or back to the distraction screen depending on the server response

            //navigation.navigate('DistractionsScreen');
            navigation.navigate('RecommendationScreen');
        }
    };

    const [tiredVal, setTiredVal] = useState(3);
    const [happyVal, setHappyVal] = useState(3);
    const [boredVal, setBoredVal] = useState(3);
    const [hungryVal, setHungryVal] = useState(3);

    return (
        <View style={styles.container}>
            <FeelingSlider
                wordsArr={['hell no', 'nah', 'kinda', 'yep', 'fucking wrecked']}
                sliderName={'Tired...'}
                sliderValue={tiredVal}
                handleSliderChange={(val) => {
                    setTiredVal(val)
                }}
            />
            <FeelingSlider
                wordsArr={['goldfish just died', 'nah', 'give or take', 'gucci', 'fucking ecstatic']}
                sliderName={'Happy...'}
                sliderValue={happyVal}
                handleSliderChange={(val) => {
                    setHappyVal(val)
                }}
            />
            <FeelingSlider
                wordsArr={['really interested', 'bearable', 'not really', 'oh yeah', 'out of my mind']}
                sliderName={'Bored...'}
                sliderValue={boredVal}
                handleSliderChange={(val) => {
                    setBoredVal(val)
                }}
            />
            <FeelingSlider
                wordsArr={['stuffed', 'just ate', 'nope', 'peckish', 'starving']}
                sliderName={'Hungry...'}
                sliderValue={hungryVal}
                handleSliderChange={(val) => {
                    setHungryVal(val)
                }}
            />
            <Button
                title={'Done'}
                onPress={onDone}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});