import React, { useState } from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, TextInput, Alert,
    TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, ScrollView
} from 'react-native';
import Notas from '../../service/Notas';

export default function EditarNota({ route, navigation }) {

    const { item } = route.params
    const [nota, setNota] = useState(item);
    const [mediaNota, setMediaNota] = useState(null);

    function calcularMedia() {
        const Media = (((parseFloat(nota.nota1) + parseFloat(nota.nota2)) / 2).toFixed(2))
        setMediaNota(Media)
    }

    editar = () => {
        const data = {
            nome: nota.nome,
            nota1: parseFloat(nota.nota1),
            nota2: parseFloat(nota.nota2),
            media: parseFloat(mediaNota),
            id: nota.id
        };

        Notas.updateNota(data, () => {
            Alert.alert('Sucesso', 'Nota atualizada com sucesso.');
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

                    <Text style={styles.title}>Alterar nota do aluno</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome"
                            clearButtonMode="always"
                            onChangeText={nome => setNota({ ...nota, nome })}
                            value={nota.nome}
                            returnKeyType='done'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Nota 1"
                            clearButtonMode="always"
                            inputMode="decimal"
                            onChangeText={nota1 => setNota({ ...nota, nota1 })}
                            value={String(nota.nota1)}
                            returnKeyType='done'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Nota 2"
                            clearButtonMode="always"
                            inputMode="decimal"
                            onChangeText={nota2 => setNota({ ...nota, nota2 })}
                            value={String(nota.nota2)}
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
                        <TouchableOpacity style={styles.buttonLista} onPress={editar}>
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