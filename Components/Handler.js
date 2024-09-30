import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Text } from 'react-native';
import Header from './Header'; // Import custom Header component
import TabNavigator from './TabNagivator'; // Import custom TabNavigator component
import { isScrolledToTop } from './ProfileScreen'; // Import method to check scroll position in ProfileScreen
import { ScrollContext } from '../Context/Context'; // Import context for managing scroll-related state

const { height } = Dimensions.get('window'); // Get the window height to use for layout

const Handler = () => {
    // State to store the height of the TabNavigator
    const [tabNavigatorHeight, setTabNavigatorHeight] = useState(0); 

    // State to track the Y position of the scroll
    const [scrollY, setScrollY] = useState(0); 

    // Destructure values from ScrollContext
    const { 
        onScrollToTop,         // Flag to track if the user is at the top of the scroll
        scrollEnabled,         // State to determine if scrolling is allowed
        setScrollEnabled,      // Function to enable/disable scrolling
        isProfileScrollEnabled,// Flag to track if scrolling is enabled in the profile tab
        setIsProfileScrollEnabled // Function to set profile scroll enabled status
    } = useContext(ScrollContext); // Use ScrollContext to manage scroll state globally

    // Function to handle layout changes and capture the height of the TabNavigator
    const handleTabNavigatorLayout = (event) => {
        const { height } = event.nativeEvent.layout; // Get height of the view component
        setTabNavigatorHeight(height); // Update the state with the new height
    };

    // Function to handle scrolling behavior
    const handleScroll = (event) => {
        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;

        // Check if the user has scrolled to the bottom of the content
        const isScrolledToBottom = 
          layoutMeasurement.height + contentOffset.y >= contentSize.height - 10;
    
        if (isScrolledToBottom) {
          console.log('You have reached the bottom!');
          setIsProfileScrollEnabled(true); // Enable scrolling in the ProfileScreen if at the bottom
          setScrollEnabled(false); // Disable scrolling in the current screen
        } else {
            // If not at the bottom, update the scroll states accordingly
            setIsProfileScrollEnabled(false); // Disable profile scroll
            setScrollEnabled(true); // Enable scrolling in the current screen
        }
      };

    return (
        // ScrollView that handles scrolling in the entire layout
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            bounces={false} // Disable bounce effect on scroll
            alwaysBounceVertical={false} // Ensure vertical bounce is also disabled
            scrollEventThrottle={16} // Set the scroll event rate for smoother scrolling
            decelerationRate="normal" // Set deceleration rate for scroll animation
            scrollEnabled={scrollEnabled} // Enable or disable scrolling based on the state
            onScroll={handleScroll} // Handle scroll events using the function above
        >
            <Header /> {/* Render the custom Header component */}
            
            {/* View to display the TabNavigator height and scroll position */}
            <View style={styles.heightContainer}>
                <Text>Height of TabNavigator: {tabNavigatorHeight}px</Text>
                <Text>Ending Scroll Position: {scrollY}px</Text>
            </View>

            {/* View that dynamically captures the height of the TabNavigator */}
            <View style={{ height }} onLayout={handleTabNavigatorLayout}>
                <TabNavigator /> {/* Render the TabNavigator component */}
            </View>
        </ScrollView>
    );
};

export default Handler; // Export the Handler component as default

// Style definitions for the component layout
const styles = StyleSheet.create({
    container: {
        flex: 1, // Use all available space
    },
    contentContainer: {
        flexGrow: 1, // Ensure content does not stretch unnecessarily
    },
    heightContainer: {
        padding: 16, // Add padding inside the container
        backgroundColor: '#eaeaea', // Light grey background color
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically
    },
    header: {
        height: 300, // Define height for the header
        justifyContent: 'center', // Center header content horizontally
        alignItems: 'center', // Center header content vertically
        backgroundColor: '#f8f9fa', // Set background color for the header
    },
    tabNavigator: {
        minHeight: 0, // Initial minimum height
        zIndex: 1, // Ensure it stays on top of other content
    },
});
