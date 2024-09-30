import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; // Import the top tab navigator from react-navigation
import ProfileScreen from './ProfileScreen'; // Import the Profile screen component
import ReelScreen from './ReelScreen'; // Import the Reel screen component
import { Text } from 'react-native'; // Import Text component from React Native

// Create a top tab navigator
const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    // Define the tab navigator with initial screen and styling
    <Tab.Navigator
      initialRouteName="Profile" // Set the initial screen to Profile when the tab navigator loads
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#f8f9fa', // Background color of the tab bar
          elevation: 0,  // Remove shadow/elevation for a flat design
          shadowOpacity: 0, // Remove shadow under the tab bar
        },
        tabBarLabelStyle: {
          fontSize: 14,  // Font size of the tab labels
          fontWeight: 'bold',  // Make tab labels bold
          textTransform: 'capitalize',  // Keep the text in its original case (no automatic uppercase)
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#ff6f61',  // Set the color of the indicator under the active tab
          height: 3,  // Set the height of the active tab indicator
        },
        swipeEnabled: true,  // Allow users to swipe between tabs
        tabBarActiveTintColor: '#ff6f61',  // Set the text color of the active tab
        tabBarInactiveTintColor: '#808080',  // Set the text color of inactive tabs
        tabBarPressColor: 'rgba(255, 111, 97, 0.1)',  // Set the color when a tab is pressed (highlight effect)
      }}
    >
      {/* Define the Profile tab */}
      <Tab.Screen 
        name="Profile" // Name of the screen (tab)
        component={ProfileScreen} // The component rendered for this screen
        options={{
          tabBarLabel: ({ color }) => <Text style={{ color }}>Profile</Text> // Customize tab label with dynamic color
        }}
      />
      
      {/* Define the Reel tab */}
      <Tab.Screen 
        name="Reel" // Name of the screen (tab)
        component={ReelScreen} // The component rendered for this screen
        options={{
          tabBarLabel: ({ color }) => <Text style={{ color }}>Reel</Text> // Customize tab label with dynamic color
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator; // Export the tab navigator as the default export
