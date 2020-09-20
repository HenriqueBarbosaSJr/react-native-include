import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './src/styles/styles';
import api from './src/services/api';


export default function App() {

  const [nome, setNome] = useState('');
  const [descri, setDesc] = useState('');
  const [fabricante, setFabri] = useState('');
  const [qtda, setQtda] = useState('');

  async function cadastro(e){

    /* Teste para verificar se está pegando os dados
       do formilário
       
        console.log({
            nome,
            descri,
            fabricante,
            qtda
          });
    */

    const data=({
      nome,
      descri,
      fabricante,
      qtda
    });

    try{
      const response = await api.post('produtos', data);
      alert('cadastro efetuado');

    }catch(error){
      console.log(error);
      alert('Erro no cadastro, tente novamente.')
    }
    

  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.TextTitles}> Cadastro de produtos</Text>

      <Text style={styles.TextLabel}>Nome:</Text>
      <TextInput
        style={styles.TextInput}
        placeholder='Nome do produto'
        value={nome}
        onChangeText={valor=>setNome(valor)}
      ></TextInput>

      <Text style={styles.TextLabel}>Descrição:</Text>
      <TextInput
        style={styles.TextInput}
        placeholder='Descrição do produto'
        value={descri}
        onChangeText={valor=>setDesc(valor)}
      ></TextInput>

      <Text style={styles.TextLabel}>Quantidade:</Text>
      <TextInput
        style={styles.TextInput}
        placeholder='Fabricante do produto'
        value={qtda}
        onChangeText={valor=>setQtda(valor)}
      ></TextInput>

      <Text style={styles.TextLabel}>Fabricante:</Text>
      <TextInput
        style={styles.TextInput}
        placeholder='Quantidade do produto'
        value={fabricante}
        onChangeText={valor=>setFabri(valor)}
      ></TextInput>
      
      <TouchableOpacity
        style={styles.ButtonCad}
        onPress={cadastro}
      >
        <Text style={styles.ButtonText}>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  );
}

