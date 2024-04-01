import React from "react";
import { View, Text, FlatList } from "react-native";
import useFetch from "../hooks/useFetch";

/*
     TODO:
    - Loading do swr em vez do if data !== undefined
    - Usar Flatlist em vez de ScrollView
    - Colocar um topo na lista usando ListHeaderComponent do FLatlist com o títlo "POKEMONS"
    */

const renderItem = ({ item }) => (
  <View>
    <Text>{item.name}</Text>
  </View>
);

export default function PokemonList() {
  const { data, isLoading } = useFetch();

  if (isLoading) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <FlatList
        data={data.results}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        ListHeaderComponent=
        {() => (
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
              marginVertical: 10,
            }}
          >
            POKEMONS
          </Text>
        )}
      />
    );
  }
}
