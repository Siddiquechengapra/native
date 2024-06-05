import { Stack } from 'expo-router'
import React from 'react'
import { ModalPortal } from "react-native-modals";
function Layout() {
  return (
    <>
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index"/>
    </Stack>
    <ModalPortal/>
    </>
  )
}

export default Layout
