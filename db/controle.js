import SQLite from 'react-native-sqlite-storage'

SQLite.DEBUG(true);
SQLite.enablePromise(false)

export default class DataBase
{
    static CreateDB(database_name, database_version, database_displayname, database_size)
    {
        let db
        db = SQLite.openDatabase({name: database_name, location: 'default'}, () => console.log('DB open sucess'), (err) =>{
        console.log("Erro ao criar o DB: ", err);
        //console.log("Error: "+ (err.message || err));
        return false;});
        return db;
    }

    static CreateTables = async (dataBase) =>
    {
        //Testes
        //dataBase.transaction((tx) => {tx.executeSql("DROP TABLE IF EXISTS anotation;", [], () => console.log('Tabela deletada com sucesso'), () => console.log('Erro ao deletar tabela'))})

        dataBase.transaction((tx) => {tx.executeSql("CREATE TABLE IF NOT EXISTS anotation ("
        + "id_anotation INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
        + " title_anotation VARCHAR(100),"
        + " text_anotation VARCHAR(500) NOT NULL);", [], () => console.log('Table create with sucess'), (err) =>{
            console.log("error: ",err);
            //console.log("Error: "+ (err.message || err));
            return false;})})
    }

    static CloseDB = async (db) =>
    {
        await db.close( () => console.log('DB close sucess'), (err) =>{
            console.log("error: ",err);
            //console.log("Error: "+ (err.message || err));
            return false;});
    }

    static InsertDB = async (sql, dataBase) =>
    {
        await dataBase.transaction((tx) => {tx.executeSql(sql, [], () => console.log('DB Insert with sucess'), (err) =>{
            console.log("error: ",err);
            //console.log("Error: "+ (err.message || err));
            return false;})})
    }

    static GetQuery = async (query, dataBase) =>
    {
        return await dataBase.transaction((tx) => { return tx.executeSql(query, [], (tx, results) =>
        {
            var len = results.rows.length
            var rows = []
            for (let i = 0; i < len; i++)
            {
                rows.push(results.rows.item(i).data)
            }
            console.log(rows)
            return rows
        },
        (err) => {
            console.log("error: ",err);
            //console.log("Error: "+ (err.message || err));
            return false;
        })})
    }

}