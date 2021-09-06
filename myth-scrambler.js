const fs = require('fs').promises;

let counter = 1;
let mythsLength;

let pickedNums = {};

async function Rename(path, oldId, newId) {
    try {
        await fs.copyFile(`../myths/${oldId}.png`, `./scrambleTemp/${oldId}.png`);
        await fs.rename(`./scrambleTemp/${oldId}.png`, `./scrambleTemp/${newId}.png`)
        await fs.copyFile(`./scrambleTemp/${newId}.png`, `./scramble/${newId}.png`);
        console.log(`${oldId}.png was copied, moved and renamed to ` + `${newId}.png`);
      } catch (error) {
        console.error('The file could not be copied ', error);
      }
}

async function readDir(path) {
    try {
        const files = await fs.readdir(path);
        return files.length
    } catch (error) {
        console.error(`Got an error trying to read dir: ${error.message}`);
    }
}

async function l () {
    mythsLength = await readDir('../myths');
}

const tryRename = async (r, i) => {
    await Rename('./scramble', r, i)
}

l().then(async (res) => {
    files = await fs.readdir('../myths');
    console.log(files.length)
    files1 = await fs.readdir('./scramble');
    console.log(files1.length)

    // for (let i = 2; i <= 254; i++) {
        
    //     console.log('hello ', i);
    //     let r = Math.floor(Math.random() * mythsLength)
    //     while (pickedNums[r]) {
    //         console.log('r: ', r);
    //         r = Math.floor(Math.random() * mythsLength)
    //     }
    //     try{
    //         console.log('trying rename ', r, i)
    //         await tryRename(r, i)
    //         pickedNums[r] = true;
    //     } catch {
    //         console.error(r, i)
    //     }
    // }
})