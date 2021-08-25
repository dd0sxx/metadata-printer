const fs = require('fs').promises;

let skulls; // temp

let counter;
let monsters;
let potions;
let keys;
let customs;



async function pickRand() {
    const x = Math.random()
    if (x <= 0.05 && potions !== 0) { //potions
        await writePotion(potions)
        console.log(`wrote potion #${potions}`);

        potions--
    }
    else if (x <= 0.95 && x >= 0.05 && monsters !== 0){ // monsters
        await writeMonster(monsters)
        console.log(`wrote monster #${monsters}`);

        monsters--
    }
    else if (keys !== 0) { //keys
        await writeKey(keys)
        
        console.log(`wrote key #${keys}`);
        keys--
    } else {
        // temp
        await writeSkull(potions)
        console.log(`wrote skull #${skulls}`);
        await copyAndRename(`../Skulls/${skulls}`, skulls, counter)
        skulls--
        // console.log('out of supply trying again');
    }
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
        skulls = await readDir('../Skulls') // temp

        // monsters = await readDir('../Monsters')
        // potions = await readDir('../otions')
        // keys = await readDir('../Keys')
        // customs = await readDir('../Customs')
    } catch (error) {
        console.error(error)
    }
}

async function copyAndRename(path, oldId, newId) {
    try {
        await fs.copyFile(path, './temp');
        await fs.rename(`./temp/${oldId}.png`, `${newId}.png`)
        await fs.copyFile(`./temp/${newId}.png`, './results');
        console.log(`${path} was copied, moved and renamed to ` + id);
      } catch (error) {
        console.error('The file could not be copied ', error);
      }
}


async function writeSkull(id) {
    try {
      const metadata = {
        name: `skull #${id}`,
        description: `${id}/100 \n There will only be 100 Oilys Skulls.`,
        image: `${process.env.URI}${id}`,
        attributes: [{ type: "Skull" }] 
      }
      await fs.writeFile(`../oilys-json/${id}.json`, JSON.stringify(metadata));
    } catch (error) {
      console.error(`Got an error trying to write to a file: ${error.message}`);
    }
  }

async function writeMonster(id) { //TODO
    try {
      const metadata = {
        name: `skull #${id}`,
        description: `${id}/100 \n There will only be 100 Oilys Skulls.`,
        image: `${process.env.URI}${id}`,
        attributes: [{ type: "Skull" }] 
      }
      await fs.writeFile(`../oilys-json/${id}.json`, JSON.stringify(metadata));
    } catch (error) {
      console.error(`Got an error trying to write to a file: ${error.message}`);
    }
  }

  async function writePotion(id) { //TODO
    try {
      const metadata = {
        name: `skull #${id}`,
        description: `${id}/100 \n There will only be 100 Oilys Skulls.`,
        image: `${process.env.URI}${id}`,
        attributes: [{ type: "Skull" }] 
      }
      await fs.writeFile(`../oilys-json/${id}.json`, JSON.stringify(metadata));
    } catch (error) {
      console.error(`Got an error trying to write to a file: ${error.message}`);
    }
  }

  async function writeKey(id) { //TODO
    try {
      const metadata = {
        name: `skull #${id}`,
        description: `${id}/100 \n There will only be 100 Oilys Skulls.`,
        image: `${process.env.URI}${id}`,
        attributes: [{ type: "Skull" }] 
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

getFolderLengths().then(() => {
    for (let i = 1; i <= 100; i++) {
        pickRand()
    }
})
