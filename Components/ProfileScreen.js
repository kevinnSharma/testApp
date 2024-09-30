import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { ScrollContext } from '../Context/Context';


const ProfileScreen = () => {
    const [height, setHeight] = useState(0); // State to store content height
    const {onScrollToTop, setOnScrollToTop, isProfileScrollEnabled, setIsProfileScrollEnabled} = useContext(ScrollContext);
    
    // This function will be triggered on scrolling
    const handleScroll = (event) => {
        const { contentOffset } = event.nativeEvent;
        if (contentOffset.y <= 0) {
            setOnScrollToTop(true); // If scrolled to the top
        } else {
            setOnScrollToTop(false); // If scrolled away from the top
        }
    };

    // This function will handle the layout measurement of the content
    const handleLayout = (event) => {
        const { height } = event.nativeEvent.layout; // Get the height of the content
        setHeight(height); // Update local state
    };

    return (
        <ScrollView
            style={styles.scrollView}
            scrollEnabled={isProfileScrollEnabled}
            onScrollToTop={handleScroll}
            onScroll={handleScroll}
            scrollEventThrottle={16} // Set the frequency of the onScroll event
        >

            <Text style={styles.heightText}>Height of content: {height}px</Text>
            <View onLayout={handleLayout} style={styles.contentContainer}>
                {Array.from({ length: 50 }).map((_, index) => (
                    <Text key={index}>ProfileScreen - {index + 1}</Text>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    contentContainer: {
        padding: 16,
    },
    heightText: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 16,
    },
});

export default ProfileScreen;
