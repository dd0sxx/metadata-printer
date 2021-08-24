const fs = require('fs').promises;


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



//   async function moveFile(source, destination) {
//     try {
//       await fs.rename(source, destination);
//       console.log(`Moved file from ${source} to ${destination}`);
//     } catch (error) {
//       console.error(`Got an error trying to move the file: ${error.message}`);
//     }
//   }
  
  writeSkull(1);