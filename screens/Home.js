import React from 'react'
import { Text , SafeAreaView, View } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <View>
        <HeaderTabs />
        <SearchBar />
    </View>
  )
}
