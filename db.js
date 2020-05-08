const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function(){
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    
    `)
    
    /*const query = `
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?);
    `
    const values = [
        "https://image.flaticon.com/icons/svg/2762/2762535.svg",
        "Curso de Programação",
        "Estudo",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos omnis nisi non porro pariatur accusantium quibusdam, illo placeat commodi numquam recusandae quia itaque consectetur iusto totam reiciendis consequuntur praesentium!",
        "https://rocketseat.com.br"
    ]
    db.run(query, values, function(err) {
        if (err) return console.log(err)
        console.log(this)
    })*/

    /*db.run(`DELETE FROM ideas WHERE id = ?`,[6], function(err){
        if (err) return console.log(err)

        console.log("DELETEI", this)
    })*/

    /*db.all(`SELECT * FROM ideas`, function(err, rows){
        if (err) return console.log(err)

        console.log(rows)
    })*/
})

 module.exports = db