import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3",
};

const tasks = [
  {
    task: "Morning Walk",
    icon: "hike",
    theme: "#008b8b",
    stamp: "Today . 8pm",
  },
  {
    task: "Meet with HR",
    icon: "account-tie",
    theme: "#37003c",
    stamp: "Today . 4pm",
  },
  {
    task: "Shopping",
    icon: "weight",
    theme: "#008b8b",
    stamp: "Saturday . 8pm",
  },
];

const Task = ({ task, icon, theme, stamp }) => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 4,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 24,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons
          name={icon}
          size={30}
          style={{ color: theme, marginRight: 5 }}
        />
        <View>
          <Text style={{ fontSize: 16 }}>{task}</Text>
          <Text style={{ color: colors.greyish }}>{stamp}</Text>
        </View>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.themeColor,
      }}
    >
      <StatusBar style="light" backgroundColor={colors.themeColor} />
      <View style={{ backgroundColor: colors.themeColor }}>
        <View
          style={{
            marginTop: 20,
            padding: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MaterialCommunityIcons
            name="text"
            size={30}
            style={{ color: colors.white }}
          />

          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={30}
              style={{ color: colors.white }}
            />
            <AntDesign name="user" size={30} style={{ color: colors.white }} />
          </View>
        </View>
        <View style={{ padding: 16 }}>
          <Text style={{ color: colors.white, fontSize: 30 }}>
            {"Hello,\nRicardo"}
          </Text>
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 6,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: colors.tint,
              borderRadius: 20,
              marginVertical: 20,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="magnify"
              size={30}
              style={{ color: colors.white }}
            />
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="microphone"
                size={30}
                style={{ color: colors.white }}
              />
              <MaterialCommunityIcons
                name="tune"
                size={30}
                style={{ color: colors.white }}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          backgroundColor: colors.background,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 24 }}>Tasks</Text>
        <MaterialCommunityIcons
          name="plus"
          size={40}
          style={{
            color: colors.themeColor,
            backgroundColor: colors.white,
            borderRadius: 20,
            marginHorizontal: 8,
          }}
        />
      </View>
      <ScrollView
        style={{
          backgroundColor: colors.white,
        }}
      >
        {tasks.map((task) => (
          <Task
            task={task.task}
            icon={task.icon}
            theme={task.theme}
            stamp={task.stamp}
          />
        ))}
      </ScrollView>
    </View>
  );
}
