const fs = require('fs').promises;
const {URI} = require('./config.js')

fs.readdir('../oilys-json').then(async (files) => {
    try {
        files.forEach( async (file) => {
            try {
                let json = await fs.readFile(`../oilys-json/${file}`)
                let f = JSON.parse(json)
                let suffix = ''
                for (let i = f.image.length - 1; f.image[i] !== '/'; i--) {
                    suffix = f.image[i] + suffix;
                }
                f.image = URI + suffix;
                let updatedJSON = JSON.stringify(f)
                await fs.writeFile(`./updated-json/${file}`, updatedJSON)
            } catch (err) {
                console.error(err)
            }
        })
        console.log(files.length)
} catch (err) {
    console.error(err)
}
}).catch(err => {
    console.error(err)
})