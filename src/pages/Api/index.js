import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'
import api from '../../API/api';

export default function Api() {

    const [parametro, setParametro] = useState('');
    const [data, setData] = useState([]);

    function handleParametroChange(parametro) { setParametro(parametro); searchApi(parametro) };

    async function searchApi(query) {

        try {
            const response = await api().get('?brand='+ query ,{
                headers: {
                    Accept: "application/json",
                    "User-Agent": "axios 0.21.1",
                    'Content-Type': 'application/json'
                  }
            });
            setData(response.data)
            return response.data;

        } catch (error) {
       
            throw error;
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pesquisar por Maquiagem</Text>
            <View style={styles.inputContainer}>
                <Text>Filtro:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Marca"
                    clearButtonMode="always"
                    onChangeText={handleParametroChange}
                    value={parametro}
                    returnKeyType='done'
                />
           
                {
                    data.length > 0 ?
                        <FlatList
                            style={styles.lista}
                            data={data}
                            keyExtractor={((item, index) => "Index do item" + index)}
                            renderItem={({ item }) => (
                                <View style={styles.campolista}>
                                    <View style={styles.campoconteudo}>
                                        <Text style={{ fontSize: 16 }}>Nome: {item.name}</Text>
                                        <Text style={{ fontSize: 16 }}>Marca: {item.brand}</Text>
                                        <Text style={{ fontSize: 16 }}>Preço: ${item.price}</Text>
                                    </View >
                                </View>
                            )}
                            showsVerticalScrollIndicator={false}
                        />
                        :
                        <Text style={styles.emptyList}>Nenhuma busca realizada.</Text>
                }
            </View>
        </View>
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
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    lista: {
        flex: 1,
        marginVertical: 10,
        width: '100%',
    },
    campolista: {
        flexDirection: 'column',
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderColor: '#dedede',
        borderBottomWidth: 1,
        flex: 1,
    },
    campoconteudo: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 12
    },
    emptyList: {
        textAlign: 'center',
        marginVertical: 10
    }
});