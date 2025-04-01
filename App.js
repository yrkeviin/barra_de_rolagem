import React from "react";
import { ScrollView, FlatList, SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function App() {
  const data = [
    { id: "1", title: "Bolinha 1" },
    { id: "2", title: "Bolinha 2" },
    { id: "3", title: "Bolinha 3" },
    { id: "4", title: "Bolinha 4" },
    { id: "5", title: "Bolinha 5" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <ScrollView>
        {data.map((item2) => (
          <View key={item2.id} style={styles.item2}>
            <Text style={styles.title}>{item2.title}</Text>
          </View>
        ))}
      </ScrollView>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: "lightblue",
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 16,
    borderRadius: 100,
  },
  item2: {
    backgroundColor: "lightgreen",
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 16,
    borderRadius: 100,
  },
  title: {
    fontSize: 16,
  },
});
