import React from 'react';
import { Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicins from "react-native-vector-icons/Ionicons"
export default function SearchBar() {
  return (
    <View style={{marginTop: 15, flexDirection: "row"}}>
        <GooglePlacesAutocomplete 
        // styles={{
        //   textInputContainer: {
        //     backgroundColor: 'grey',
        //   },
        //   textInput: {
        //     height: 38,
        //     color: '#5d5d5d',
        //     fontSize: 16,
        //   },
        //   predefinedPlacesDescription: {
        //     color: '#1faadb',
        //   },
        // }}
        renderLeftButton={() => {
          return (
             <View style={{marginTop: 10, marginRight: 10, marginLeft:10}}>
            <Ionicins name='location-sharp' size={24} />
          </View>)
        }}
        placeholder='Search'
        
        />
    </View>
  )
}
