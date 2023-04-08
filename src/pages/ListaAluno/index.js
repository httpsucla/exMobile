import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Database from '../../../Database'

export default function ListaAluno({ route, navigation }) {

    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        Database.getAlunos().then(alunos => setAlunos(alunos));
    }, [route]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Média de todos alunos</Text>
            {
                alunos.length > 0 ?
                    <FlatList
                        style={styles.lista}
                        data={alunos}
                        keyExtractor={((item, index) => "Index do item" + index)}
                        renderItem={({ item }) => (
                            <View style={styles.campolista}>
                                <View style={styles.campoconteudo}>
                                    <Text style={{ fontSize: 18, fontWeight: '600' }}>Nome: {item.nome}</Text>
                                    <Text style={{ fontSize: 18, fontWeight: '600' }}>Nota 1: {item.nota1}</Text>
                                    <Text style={{ fontSize: 18, fontWeight: '600' }}>Nota 2: {item.nota2}</Text>
                                    <Text style={{ fontSize: 18, fontWeight: '600' }}>Média: {item.mediaNota}</Text>
                                </View >
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
        flexDirection: 'column',
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
        paddingHorizontal: 12
    },
    emptyList : {
        fontStyle: 'italic',
        color: '#292929f3',
        fontSize: 20,
        paddingHorizontal: 20,
        textAlign: 'center',
        marginVertical: 30
    }
})