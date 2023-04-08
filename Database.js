import AsyncStorage from '@react-native-async-storage/async-storage';
 
async function saveAluno(listAluno){
    listAluno.id = new Date().getTime();
    let savedAlunos = [];
    const res = await AsyncStorage.getItem('items');
    
    if(res) savedAlunos = JSON.parse(res);
    savedAlunos.push(listAluno);
    
    return AsyncStorage.setItem('items', JSON.stringify(savedAlunos));
}

function getAlunos(){
    return AsyncStorage.getItem('items')
            .then(res => {
                if(res)
                    return Promise.resolve(JSON.parse(res));
                else
                    return Promise.resolve([]);
            })
}

module.exports = {
    saveAluno,
    getAlunos
}