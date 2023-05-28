import db from "./DB";

export default class Notas {

    static createTable() {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS tb_notas (' +
                'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                'nome TEXT,' +
                'nota1 REAL,' +
                'nota2 REAL,' +
                'media REAL);',
                [],
                () => console.log('Tabela Notas criada com sucesso'),
                (_, error) => console.log('Erro ao criar tabela Notas:', error)
            );
        });
    }

    static addNota(nota, callback) {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO tb_notas (nome, nota1, nota2, media) VALUES (?, ?, ?, ?)',
                [nota.nome, nota.nota1, nota.nota2, nota.media],
                (_, { insertId, rows }) => callback({ id: insertId, ...rows._array[0] }),
                (_, error) => console.log('Erro ao executar a query:', error)
            );
        });
    }

    static updateNota(nota, callback) {
        db.transaction(tx => {
            tx.executeSql(
                'UPDATE tb_notas SET nome = ?, nota1 = ?, nota2 = ?, media = ? WHERE id = ?',
                [nota.nome, nota.nota1, nota.nota2, nota.media, nota.id],
                () => callback()
            );
        });
    }

    static deleteNota(id) {
        db.transaction((tx) => {
            tx.executeSql(
                `DELETE FROM tb_notas WHERE id = ?`,
                [id],
                (_, result) => {
                    console.log('Item excluído com sucesso!');
                },
                (_, error) => {
                    console.log('Erro ao excluir o item:', error);
                },
            );
        });
    };

    static getNotas(callback) {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM tb_notas',
                [],
                (_, { rows }) => callback(rows._array)
            );
        });
    }
}