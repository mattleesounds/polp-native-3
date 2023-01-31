import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Navbar = () => {
  return (
    <View className="fixed h-24 w-full bg-white z-10 top-0">
      <SafeAreaView className="max-w-[1240px] h-full flex justify-between ">
        {/* Logo */}
        <SafeAreaView className="bg-red-500 absolute bottom-0 left-0 h-full">
        <SafeAreaView className="w-[90px] h-[32px] relative m-1 bg-slate-500 mt-2">
        </SafeAreaView>
        </SafeAreaView>

        {/* Search */}
        <SafeAreaView className="absolute left-1/4 bottom-0 w-[50%] h-full items-center bg-blue-500">

        </SafeAreaView>

        {/* Navigation */}
        <SafeAreaView className="bg-green-500 h-full w-[25%] right-0 bottom-0 absolute">
        </SafeAreaView>
      </SafeAreaView>
    </View>
  )
}

export default Navbar