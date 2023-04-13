import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'

export default function Galeria() {

    data = [
        { id: 0, url: require('../../images/operarios.png'), label: 'Tarsila do Amaral - Operários (1933)', height: 225, width: 315 },
        { id: 1, url: require('../../images/a_boba.jpeg'), label: 'Anita Malfatti - A Boba (1916)', height: 400, width: 329 },
        { id: 2, url: require('../../images/os_retirantes.jpg'), label: 'Candido Portinari - Os Retirante (1944)', height: 218, width: 232 },
        { id: 3, url: require('../../images/samba.png'), label: 'Di Cavalcanti - Samba (1925)', height: 392, width: 340 },
        { id: 4, url: require('../../images/perfil_de_zulmira.jpg'), label: 'Lasar Segall - Perfil de Zulmira (1928)', height: 400, width: 356 },
        { id: 5, url: require('../../images/sereia.jpg'), label: 'Alfredo Volpi - Sereia (1960)', height: 164, width: 307 },
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Obras de arte brasileira</Text>
            <View style={styles.galeria}>
                <FlatList
                    style={styles.lista}
                    data={data}
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={((item, index) => "Index do item" + index)}
                    renderItem={({ item }) => (
                        <View style={{height: item.height, width: item.width, marginHorizontal: 10}}>
                            <Image
                                style={{height: item.height, width: item.width}}
                                source={item.url} />
                            <Text style={styles.label}>{item.label}</Text>
                        </View>
                    )}
                />
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
    galeria: {
        alignContent: 'center'
    },
    lista: {
        flex: 1,
        margin: 10,
    },
    label: {
        fontStyle: 'italic',
        color: '#292929f3',
        fontSize: 20,
        textAlign: 'center',
    }
});