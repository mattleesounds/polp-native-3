import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import PageTitle from '../components/PageTitle'
import Navbar from '../components/Navbar'
import Track from '../components/Track'
import Controlbar from '../components/Controlbar'

const Feed = () => {
  return (
    <View className="bg-cream h-screen">
      <Navbar />
      <PageTitle />
      <Track />
      <Controlbar />
    </View>
  )
}

export default Feed