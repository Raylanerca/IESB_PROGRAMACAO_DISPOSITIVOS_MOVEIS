import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';

export default function PetDetailsScreen() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title title="Detalhes do Pet" />
        <Card.Content>
          <Text>Nome: Rex</Text>
          <Text>Raça: Labrador</Text>
          <Text>Idade: 5 anos</Text>
          <Text>Próxima vacina: 10/07/2025</Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
