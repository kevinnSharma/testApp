import React, { useContext, useEffect } from 'react';
import {View, Text} from 'react-native';
import { ScrollContext } from '../Context/Context';

const ReelScreen = () => {
    const {setScrollEnabled} = useContext(ScrollContext);
    useEffect(() => {
        setScrollEnabled(true);
    }, [])
    return(
        <View>
            <Text>ReelScreen</Text>
        </View>
    )
}

export default ReelScreen;