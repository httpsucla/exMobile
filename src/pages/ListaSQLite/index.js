import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, RefreshControl } from 'react-native';
import Notas from '../../service/Notas';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function ListaSQLite({ route, navigation }) {

    const [notas, setNotas] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
        Notas.getNotas((notas) => {
            setNotas(notas);
        })
        console.log(notas)
    }, [route]);

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000)

        Notas.getNotas((notas) => {
            setNotas(notas)
        });
    }, []);

    const deletarNota = (item) => {
        Alert.alert(
            "Atenção",
            'Você tem certeza que deseja excluir a nota: ' + item.nome + '?',
            [{
                text: "Não",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            {
                text: "Sim",
                onPress: () => {
                    Notas.deleteNota(item.id);
                    Alert.alert('Sucesso', 'Nota ' + item.nome + ' foi removido com sucesso.');
                }
            }],
            { cancelable: false }
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Média de todos alunos</Text>
            {
                notas.length > 0 ?
                    <FlatList
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                        style={styles.lista}
                        data={notas}
                        keyExtractor={((item, index) => "Index do item" + index)}
                        renderItem={({ item }) => (
                            <View style={styles.campolista}>
                                <View style={styles.campoconteudo}>
                                    <Text style={{ fontSize: 18, fontWeight: '600' }}>Nome: {item.nome}</Text>
                                    <Text style={{ fontSize: 18, fontWeight: '600' }}>Nota 1: {item.nota1}</Text>
                                    <Text style={{ fontSize: 18, fontWeight: '600' }}>Nota 2: {item.nota2}</Text>
                                    <Text style={{ fontSize: 18, fontWeight: '600' }}>Média: {item.media}</Text>
                                </View >
                                <View style={styles.campoicone}>
                                    <View style={styles.componentenumero}>
                                        <TouchableOpacity
                                            onPress={() =>
                                                navigation.navigate("Editar Nota", { item: item })}>
                                            <Icon name="edit" size={18} color={'#292929f3'} />
                                        </TouchableOpacity>
                                    </View >
                                    <View style={styles.componentenumero}>
                                        <TouchableOpacity onPress={() => deletarNota(item)}>
                                            <Icon name="trash" size={18} color={'#292929f3'} />
                                        </TouchableOpacity>
                                    </View >
                                </View>
                            </View>
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                    :
                    <Text style={styles.emptyList}>Nenhuma nota cadastrada!</Text>
            }
        </View>
    )

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
    lista: {
        flex: 1,
        marginTop: 10,
        width: '90%',
        padding: 20
    },
    campolista: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        height: 100,
        backgroundColor: '#fff',
        borderColor: '#292929f3',
        borderWidth: 2,
        borderRadius: 15,
        flex: 1,
        marginBottom: 10
    },
    campoconteudo: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 12,
    },
    campoicone: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    componentenumero: {
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    emptyList: {
        fontStyle: 'italic',
        color: '#292929f3',
        fontSize: 20,
        paddingHorizontal: 20,
        textAlign: 'center',
        marginVertical: 30
    }
})