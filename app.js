const fs = require('fs')
const path = require('path')

console.log(__dirname)
fs.readdir(__dirname, (err, files) => {
    files.forEach(parentFile => {
        if(parentFile === 'app.js') return
        const filePath = path.join(__dirname, parentFile)
        console.log(parentFile)

        fs.readdir(filePath, (err, files) => {
            files.forEach(file => {
                gate = file.split('-')[2]
                street = file.split('-')[3]

                const oldName = `${__dirname}/${parentFile}/${file}`
                const newName = `${__dirname}/${parentFile}/${gate}_${street}`
                fs.rename(oldName, newName, (err) => {
                    console.log('-----')
                    console.log(oldName)
                    console.log(newName)
                    console.log('-----')
                })
            })
        })
    });
})