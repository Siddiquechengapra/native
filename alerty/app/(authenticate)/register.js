import React, { useState } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { useRouter } from "expo-router";
export default function register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>

            <View style={{ marginTop: 80 }}>
                <Text style={{ fontSize: 18, fontWeight: "500", color: "green" }}>Todo List Tracker</Text>
            </View>
            <KeyboardAvoidingView>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 20 }}>Register your account</Text>
                </View>
                <View style={{ marginTop: 70 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#E0E0E0", paddingVertical: 5, borderRadius: 5, marginTop: "30" }}>
                        <MaterialIcons style={{ marginLeft: 8, color: "gray" }} name="email" size={24} color="black" />
                        <TextInput value={email} onChange={(text) => setEmail(text)} style={{ color: "gray", marginVertical: 10, width: 300, fontSize: email ? 17 : 18 }} placeholder='Enter your email' />
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 5,
                        backgroundColor: "#E0E0E0",
                        paddingVertical: 5,
                        borderRadius: 5,
                        marginTop: 30,
                    }}
                >
                    <AntDesign
                        style={{ marginLeft: 8 }}
                        name="lock1"
                        size={24}
                        color="gray"
                    />
                    <TextInput
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        style={{
                            color: "gray",
                            marginVertical: 10,
                            width: 300,
                            fontSize: email ? 17 : 17,
                        }}
                        placeholder="enter your password"
                    />
                </View>

                <View style={{ marginTop: 60 }} />

                <Pressable
                    // onPress={handleLogin}
                    style={{
                        width: 200,
                        backgroundColor: "#6699CC",
                        padding: 15,
                        borderRadius: 6,
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 16,
                        }}
                    >
                        Register
                    </Text>
                </Pressable>

                <Pressable
                    onPress={() => router.replace("/login")}
                    style={{ marginTop: 15 }}
                >
                    <Text style={{ textAlign: "center", fontSize: 15, color: "gray" }}>
                        Already have an account? Sign in !
                    </Text>
                </Pressable>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
