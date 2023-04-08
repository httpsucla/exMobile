import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Contador() {

    const [copo, setCopo] = useState([]);
    const [count, setCount] = useState(0);

    function adicionarCopo(agua, x) {
        agua += 1;
        x += 1;
        setCopo(agua);
        setCount(x);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Copos de água do dia {count}</Text>
            <View style={styles.legenda}>
                <Text style={styles.legendaTitulo}>Legenda:</Text>
                <View style={styles.legendaComponentes}>
                    <View style={styles.legendaTipo}>
                        <Icon name="wine-glass-alt" size={50} color={'#88cbf7'} />
                        <Text>Meio copo</Text>
                    </View>
                    <View style={styles.legendaTipo}>
                        <Icon name="wine-glass" size={50} color={'#88cbf7'} />
                        <Text>1 copo</Text>
                    </View>
                    <View style={styles.legendaTipo}>
                        <Icon name="wine-bottle" size={50} color={'#88cbf7'} />
                        <Text>1 litro</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => adicionarCopo(copo, count)}>
                <Text style={styles.buttonText}>Adicionar copo d'agua</Text>
            </TouchableOpacity>
            {
                copo == 0 ?
                    <View style={{ marginHorizontal: 20 }}>
                        <Text style={styles.emptyList}>
                            Você não bebeu nenhum copo hoje
                            <Icon name="sad-cry" size={20} color={'black'} />
                        </Text>
                    </View>
                    :
                    <FlatList
                        style={styles.lista}
                        data={copo}
                        keyExtractor={((item, index) => "Index do item" + index)}
                        numColumns={6}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.listaCopos} >
                                <Icon name="wine-glass" size={50} color={'#88cbf7'} />
                            </View>
                        )}
                    />

            }

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
    legenda: {
        marginVertical: 20
    },
    legendaTitulo: {
        alignItems: 'flex-start',
        fontSize: 16
    },
    legendaComponentes: {
        flexDirection: 'row',
        marginVertical: 10
    },
    legendaTipo: {
        flexDirection: 'column',
        paddingHorizontal: 20,
        alignItems: 'center'

    },
    button: {
        marginVertical: 25,
        height: 50,
        backgroundColor: '#88cbf7',
        borderRadius: 2,
        paddingHorizontal: 50,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    lista: {
        flex: 1,
        flexWrap: 'wrap',
    },
    emptyList: {
        fontStyle: 'italic',
        color: '#292929f3',
        fontSize: 20,
        paddingHorizontal: 20,
        textAlign: 'center',
    },
    listaCopos: {
        flexDirection: 'row',
        margin: 10,
        flexWrap: 'wrap'
    }
});