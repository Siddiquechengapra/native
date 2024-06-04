import React, { useState } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { useRouter } from "expo-router";
import axios from "axios";
export default function register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const router = useRouter()

    const handleRegister = () => {
        const user = { 
            name,
            email,
            password
        }
        console.log('User object before sending:', user);

        axios.post("http://192.168.1.3:3000/register",user).then((response) => {
            console.log(response);
            Alert.alert("Registration successfull","You have been registered succesfully");
            setEmail("");
            setPassword("");
            setName("");
        }).catch((error) => {
            Alert.alert("Registration failed","an error ocurred during registration");
            console.log("error",error)
        })
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>

            <View style={{ marginTop: 80 }}>
                <Text style={{ fontSize: 18, fontWeight: "500", color: "green" }}>Maalu's Tracker</Text>
            </View>
            <KeyboardAvoidingView>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 20 }}>Register your account</Text>
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
                        name="user"
                        size={24}
                        color="gray"
                    />
                    <TextInput
                        value={name}
                        onChangeText={(text) => setName(text)}
                        style={{
                            color: "gray",
                            marginVertical: 10,
                            width: 300,
                            fontSize: email ? 17 : 17,
                        }}
                        placeholder="enter your name"
                    />
                </View>
                
                <View style={{ marginTop: 30 }}>
                    
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#E0E0E0", paddingVertical: 5, borderRadius: 5, marginTop: "30" }}>
                        <MaterialIcons style={{ marginLeft: 8, color: "gray" }} name="email" size={24} color="black" />
                        <TextInput value={email} onChangeText={(text) => setEmail(text)} style={{ color: "gray", marginVertical: 10, width: 300, fontSize: email ? 17 : 18 }} placeholder='Enter your email' />
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
                    onPress={handleRegister}
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
