import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

import { HomeIcon, BellIcon, UserIcon, MagnifyingGlassIcon, BookmarkIcon } from "react-native-heroicons/outline";



const TabIcon = ({focused, Icon, title}: any) => {
    return focused?
    (
        <ImageBackground 
        // source={ require("@/assets/images/splash-icon.png") }
        className={ 
            focused ? 
            'fles flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden bg-purple-300'
            :
            'fles flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'
        }>
        <Icon  size={15} color='black' />

        <Text className='text-secondary text-base font-semibold'>{title}</Text>
    </ImageBackground>
    ):
    (
        <ImageBackground 
        // source={ require("@/assets/images/splash-icon.png") }
        className={'fles flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'}>
        <Icon  size={15} color='white' />

        <Text className='text-white text-base font-semibold'>{title}</Text>
    </ImageBackground>
    )
}


const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            },
            tabBarStyle: {
                backgroundColor: '#0f0D23',
                borderRadius: 50,
                marginHorizontal: 20,
                marginBottom: 36,
                height: 52,
                position: 'absolute',
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: '0f0d23'
            }
        }}
    >
        <Tabs.Screen 
            name="index"
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <>
                       <TabIcon 
                            focused = { focused }
                            Icon = { HomeIcon }
                            title = "Home"
                       />
                    </>
                )
            }}
        />

        <Tabs.Screen 
            name="search"
            options={{
                title: 'Search',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        focused = { focused }
                        Icon = { MagnifyingGlassIcon }
                        title = "Search"
                    />
                )
            }}
        />

        <Tabs.Screen 
            name="saved"
            options={{
                title: 'Saved',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        focused = { focused }
                        Icon = { BookmarkIcon }
                        title = "Saved"
                    />
                )
            }}
        />

        <Tabs.Screen 
            name="profile"
            options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        focused = { focused }
                        Icon = { UserIcon }
                        title = "Profile"
                    />
                )
            }}
        />
    </Tabs>
  )
}

export default _layout