import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';

export default function PetForm({ navigation }) {
  // Estados para os campos do formulário
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [notes, setNotes] = useState('');

  const handleSave = () => {
    // Aqui você vai salvar os dados (mais para frente vamos fazer com AsyncStorage ou backend)
    console.log('Salvar Pet:', { name, breed, age, weight, notes });

    // Depois pode voltar para a lista ou outra tela
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title>Cadastro de Pet</Title>

      <TextInput
        label="Nome"
        value={name}
        onChangeText={setName}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Raça"
        value={breed}
        onChangeText={setBreed}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Idade"
        value={age}
        onChangeText={setAge}
        style={styles.input}
        keyboardType="numeric"
        mode="outlined"
      />
      <TextInput
        label="Peso (kg)"
        value={weight}
        onChangeText={setWeight}
        style={styles.input}
        keyboardType="numeric"
        mode="outlined"
      />
      <TextInput
        label="Observações"
        value={notes}
        onChangeText={setNotes}
        style={styles.input}
        multiline
        mode="outlined"
      />

      <Button mode="contained" onPress={handleSave} style={styles.button}>
        Salvar
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
});
