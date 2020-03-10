const fs = require('fs')
const path = require('path')

console.log(__dirname)
fs.readdir(__dirname, (err, files) => {
    files.forEach(parentFile => {
        if(parentFile === 'move.js') return
        const filePath = path.join(__dirname, parentFile)
        console.log(__dirname, parentFile)
        
        fs.readdir(filePath, (err, files) => {
            if(!files) return 
            console.log(__dirname, files)
            files.forEach(file => {
                if(!file) return 
                
                const oldName = `${__dirname}/${parentFile}/${file}`
                const newName = path.join(__dirname, `../../${file}`)
                console.log('-----')
                console.log(oldName)
                console.log(newName)
                console.log('-----')

                fs.rename(oldName, newName, (err) => {
                })
            })
        })
    });
})