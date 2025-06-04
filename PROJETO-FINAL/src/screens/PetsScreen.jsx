import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Card, Text, FAB } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

export default function PetsScreen({ navigation }) {
  const [pets, setPets] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      loadPets();
    }
  }, [isFocused]);

  const loadPets = async () => {
    const data = await AsyncStorage.getItem('pets');
    if (data) {
      setPets(JSON.parse(data));
    }
  };

  const deletePet = async (id) => {
    const newPets = pets.filter((pet) => pet.id !== id);
    setPets(newPets);
    await AsyncStorage.setItem('pets', JSON.stringify(newPets));
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 8 }}>
            <Card.Title title={item.nome} subtitle={item.raca} />
            <Card.Content>
              <Text>Idade: {item.idade}</Text>
              <Text>Peso: {item.peso} kg</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.navigate('PetForm', { pet: item })}>
                Editar
              </Button>
              <Button onPress={() => deletePet(item.id)}>Excluir</Button>
            </Card.Actions>
          </Card>
        )}
      />

      <FAB
        icon="plus"
        label="Novo Pet"
        style={{
          position: 'absolute',
          right: 16,
          bottom: 16,
        }}
        onPress={() => navigation.navigate('PetForm')}
      />
    </View>
  );
}
