import React from 'react'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {Dimensions, GestureResponderEvent, Platform, SafeAreaView, View} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

type BaseWrapperComponentType = {
    children: JSX.Element | JSX.Element[]
    onTouchStart?: (event: GestureResponderEvent) => void
    onTouchEnd?: (event: GestureResponderEvent) => void
    onScroll?: (event: any) => void
    isKeyboardAwareScrollView?: boolean
    styleSafeArea?: any
    isBackdrop?: boolean
    scrollEventThrottle?: any
    colorBakground?: any
}
export const BaseWrapperComponent = ({
                                         children,
                                         onTouchEnd,
                                         onTouchStart,
                                         isKeyboardAwareScrollView = false,
                                         styleSafeArea,
                                         onScroll,
                                         scrollEventThrottle,
                                         colorBakground
                                     }: BaseWrapperComponentType) => {

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colorBakground ?? '', ...styleSafeArea}}>
            {isKeyboardAwareScrollView ? (
                <KeyboardAwareScrollView
                    scrollEventThrottle={scrollEventThrottle}
                    onScroll={onScroll}
                    enableOnAndroid={true}
                    keyboardShouldPersistTaps={'handled'}
                    contentContainerStyle={{
                        marginBottom: 10,
                        width: '100%',
                        backgroundColor: 'rgba(192,238,131,0.48)'
                    }}
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    {children}
                </KeyboardAwareScrollView>
            ) : (
                children
            )}
        </SafeAreaView>
    )
}
