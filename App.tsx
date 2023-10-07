import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ActionCard from './components/ActionCard'

const App = () => {
  return (
    <SafeAreaView style = {{backgroundColor:'#856F51'}}>
    <ScrollView>
      <FlatCards/>
      <ActionCard />
    </ScrollView>
    </SafeAreaView>

  )
}

export default App
