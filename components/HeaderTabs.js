import React, { useState } from 'react'
import { View } from 'react-native'
import HeaderButton from './HeaderButton'

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState();
  return (
    <View style={{flexDirection: 'row', alignSelf: "center"}}>
       <HeaderButton
         text="Delivery" 
         btnColor="white" 
         textColor="black" 
         activeTab={activeTab}
         setActiveTab={setActiveTab}
        />
       <HeaderButton
          text="Pickup"
          btnColor="white" 
          textColor="black" 
          activeTab={activeTab}
          setActiveTab={setActiveTab} 
       />
    </View>
  )
}
