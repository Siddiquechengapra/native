import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView, Image } from 'react-native';

export default function index() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  return (
    <>
      <View style={{
        marginHorizontal: 10,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
      }}>
        <Pressable
          style={{
            backgroundColor: "#7CB9E8",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>All</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#7CB9E8",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Work</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#7CB9E8",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            marginRight: "auto",
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Personal</Text>
        </Pressable>
        <Pressable onPress={() => setModalVisible(!isModalVisible)}>
          <AntDesign name="pluscircle" size={30} color="#007FFF" />
        </Pressable>
       
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
          <View style={{ padding: 10 }}>
            {todos?.length > 0 ? (
              <View>
                {pendingTodos?.length > 0 && <Text>Tasks to Do! {today}</Text>}

                {pendingTodos?.map((item, index) => (
                  <Pressable
                    onPress={() => {
                      router?.push({
                        pathname: "/home/info",
                        params: {
                          id: item._id,
                          title: item?.title,
                          category: item?.category,
                          createdAt: item?.createdAt,
                          dueDate: item?.dueDate,
                        },
                      });
                    }}
                    style={{
                      backgroundColor: "#E0E0E0",
                      padding: 10,
                      borderRadius: 7,
                      marginVertical: 10,
                    }}
                    key={index}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <Entypo
                        onPress={() => markTodoAsCompleted(item?._id)}
                        name="circle"
                        size={18}
                        color="black"
                      />
                      <Text style={{ flex: 1 }}>{item?.title}</Text>
                      <Feather name="flag" size={20} color="black" />
                    </View>
                  </Pressable>
                ))}

                {completedTodos?.length > 0 && (
                  <View>
                    <Text>List</Text>
                  </View>
                )}
              </View>
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 130,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Image
                  style={{ width: 200, height: 200, resizeMode: "contain" }}
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/128/2387/2387679.png",
                  }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    marginTop: 15,
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  No Tasks for today! add a task
                </Text>
                <Pressable
                  onPress={() => setModalVisible(!isModalVisible)}
                  style={{ marginTop: 15 }}
                >
                  <AntDesign name="pluscircle" size={30} color="#007FFF" />
                </Pressable>
              </View>
            )}
          </View>
        </ScrollView>
      </>


  );
}
