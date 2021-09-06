const fs = require('fs').promises;
const {URI} =  require('./config.js');

// let skulls; // temp

let counter = 1;
let myths;
let potions;
let keys;
let customs;



async function pickRand() {
    const x = Math.random()
    if (x <= 0.05 && potions !== 0) { //potions
        await writePotion(counter)
        console.log(`wrote potion #${potions}`);

        potions--
    }
    else if (x <= 0.95 && x >= 0.05 && myths !== 0){ // myths
        await writeMyth(counter)
        console.log(`wrote myths #${myths}`);

        myths--
    }
    else if (keys !== 0) { //keys
        await writeKey(counter)
        
        console.log(`wrote key #${keys}`);
        keys--
    } 
        // // temp
        // await writeSkull(counter)
        // console.log(`wrote skull #${counter}`);
        // await copyAndRename(`../Skulls/${counter}.png`, counter, counter)
        // skulls--
        // // console.log('out of supply trying again');

    counter++
}

async function readDir(path) {
    try {
        const files = await fs.readdir(path);
        return files.length
    } catch (error) {
        console.error(`Got an error trying to read dir: ${error.message}`);
    }
}

async function getFolderLengths () {
    try {
        // skulls = await readDir('../Skulls') // temp

        myths = await readDir('../Myths')
        potions = await readDir('../otions')
        keys = await readDir('../Keys')
        customs = await readDir('../Customs')
    } catch (error) {
        console.error(error)
    }
}

async function copyAndRename(path, oldId, newId) {
    try {
        await fs.copyFile(path, `./temp/${oldId}.png`);
        await fs.rename(`./temp/${oldId}.png`, `./temp/${newId}.png`)
        await fs.copyFile(`./temp/${newId}.png`, `./results/${newId}.png`);
        console.log(`${path} was copied, moved and renamed to ` + `${newId}.png`);
      } catch (error) {
        console.error('The file could not be copied ', error);
      }
}


// async function writeSkull(id) {
//     try {
//       const metadata = {
//         name: `skull #${id}`,
//         description: `${id}/100 \n There will only be 100 Oilys Skulls.`,
//         image: `${URI}${id}.png`,
//         attributes: [{ 
//           "trait_type": "Type", 
//           "value": "Skull"
//         }]
//       }
//       await fs.writeFile(`../oilys-json/${id}.json`, JSON.stringify(metadata));
//     } catch (error) {
//       console.error(`Got an error trying to write to a file: ${error.message}`);
//     }
//   }

async function writeMyth(id) { //TODO
    try {
      const metadata = {
        name: `Myth #${id}`,
        description: `Oilys is 1/1 hand drawn collection by Logan Larkin.`,
        image: `${URI}${id}.png`,
        attributes: [{ 
          "trait_type": "Type", 
          "value": "Myth"
        }] 
      }
      await fs.writeFile(`../oilys-json/${id}.json`, JSON.stringify(metadata));
    } catch (error) {
      console.error(`Got an error trying to write to a file: ${error.message}`);
    }
  }

  async function writePotion(id) { //TODO
    try {
      const metadata = {
        name: `Potion #${id}`,
        description: `Oilys is 1/1 hand drawn collection by Logan Larkin.`,
        image: `${URI}${id}.png`,
        attributes: [{ 
          "trait_type": "Type", 
          "value": "Potion"
        }] 
      }
      await fs.writeFile(`../oilys-json/${id}.json`, JSON.stringify(metadata));
    } catch (error) {
      console.error(`Got an error trying to write to a file: ${error.message}`);
    }
  }

  async function writeKey(id) { //TODO
    try {
      const metadata = {
        name: `Key #${id}`,
        description: `Oilys is 1/1 hand drawn collection by Logan Larkin.`,
        image: `${URI}${id}.png`,
        attributes: [{ 
          "trait_type": "Type", 
          "value": "Key"
        }] 
      }
      await fs.writeFile(`../oilys-json/${id}.json`, JSON.stringify(metadata));
    } catch (error) {
      console.error(`Got an error trying to write to a file: ${error.message}`);
    }
  }
  
  async function writeCustom(id) { //TODO
    try {
      const metadata = {
        name: `Custom #${id}`,
        description: `Oilys is 1/1 hand drawn collection by Logan Larkin.`,
        image: `${URI}${id}.png`,
        attributes: [{ 
          "trait_type": "Type", 
          "value": "Key"
        }] 
      }
      await fs.writeFile(`../oilys-json/${id}.json`, JSON.stringify(metadata));
    } catch (error) {
      console.error(`Got an error trying to write to a file: ${error.message}`);
    }
  }

//   async function moveFile(source, destination) {
//     try {
//       await fs.rename(source, destination);
//       console.log(`Moved file from ${source} to ${destination}`);
//     } catch (error) {
//       console.error(`Got an error trying to move the file: ${error.message}`);
//     }
//   }
  
//   writeSkull(1);
//   readDir('../Skulls');

getFolderLengths().then(async () => {
    for (let i = 1; i <= 16; i++)
    for (let j = 1; j <= 100; j++) {
        console.log(j)
        await pickRand()
    }
})
