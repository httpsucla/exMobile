import React, { useState } from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, TextInput, Alert,
    TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, ScrollView
} from 'react-native';
import Database from '../../../Database';
import Notas from '../../service/Notas';

export default function Media({ navigation }) {

    const [nome, setNome] = useState('');
    const [nota1, setNota1] = useState(null);
    const [nota2, setNota2] = useState(null);
    const [mediaNota, setMediaNota] = useState(null)

    function handleNomeChange(nome) { setNome(nome) };
    function handleNota1Change(nota1) { setNota1(nota1) };
    function handleNota2Change(nota2) { setNota2(nota2) };

    function calcularMedia() {
        const Media = (((parseFloat(nota1) + parseFloat(nota2)) / 2).toFixed(2))
        setMediaNota(Media)
    }

    async function handleButton() {
        const listAluno = {
            id: new Date().getTime(),
            nome,
            nota1: parseFloat(nota1),
            nota2: parseFloat(nota2),
            mediaNota: parseFloat(mediaNota)
        };
        console.log(listAluno);
        Database.saveAluno(listAluno).then(res => navigation.navigate("ListaAluno", listAluno));
    }

    cadastrarNota = () => {
        const data = {
            nome,
            nota1: parseFloat(nota1),
            nota2: parseFloat(nota2),
            media: parseFloat(mediaNota)
        };
        console.log(data)
        Notas.addNota(data, () => {
            Alert.alert('Sucesso', 'Nota adicionada com sucesso.');
            setNome('');
            setNota1(null);
            setNota2(null);
            setMediaNota(null);
            navigation.navigate("ListaSQLite", data);
        });
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                    style={styles.container}
                >

                    <Text style={styles.title}>Calcular média do aluno</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome"
                            clearButtonMode="always"
                            onChangeText={handleNomeChange}
                            value={nome}
                            returnKeyType='done'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Nota 1"
                            clearButtonMode="always"
                            inputMode="decimal"
                            onChangeText={handleNota1Change}
                            value={nota1}
                            returnKeyType='done'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Nota 2"
                            clearButtonMode="always"
                            inputMode="decimal"
                            onChangeText={handleNota2Change}
                            value={nota2}
                            returnKeyType='done'
                        />
                        <TouchableOpacity style={styles.button} onPress={calcularMedia}>
                            <Text style={styles.buttonText}>Calcular nota</Text>
                        </TouchableOpacity>
                        {mediaNota
                            ?
                            <Text style={styles.resultMedia}>Média do aluno: {mediaNota}</Text>
                            : null
                        }
                        <TouchableOpacity style={styles.buttonLista} onPress={handleButton}>
                            <Text style={styles.buttonText}>Lista AsyncStorage</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonLista} onPress={cadastrarNota}>
                            <Text style={styles.buttonText}>Lista SQLite</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        alignItems: 'center',
    },
    title: {
        color: '#292929f3',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50
    },
    inputContainer: {
        flex: 1,
        marginTop: 30,
        width: '90%',
        padding: 20,
        alignItems: 'stretch',
        backgroundColor: '#fff'
    },
    input: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch'
    },
    button: {
        marginTop: 15,
        height: 60,
        backgroundColor: '#4CAF50',
        borderRadius: 5,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
    },
    buttonLista: {
        marginTop: 15,
        height: 60,
        backgroundColor: '#414BB2',
        borderRadius: 5,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    resultMedia: {
        color: '#292929f3',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 25,
        textAlign: 'center'
    }
});