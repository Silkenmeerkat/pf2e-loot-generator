//Api calls to go to https://github.com/foundryvtt/pf2e/tree/master/packs/equipment, search through the dir, and get all .json files. Ingest their data to DB?
const axios = require('axios');


//Get list of files
async function getList(){
    //Hard defining Owner and Repo but we can pass them in later if needed
    const owner = 'foundryvtt'
    const repo  = 'pf2e'
    const path = 'packs/equipment'
    const token = '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'

    try {
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
    });
    if (Array.isArray(response.data)) {
        const files = response.data.map(file => file.name);
        console.log(files);
        } else {
        console.log('Error: Unable to fetch directory contents.');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
      }

// Import each file and store to the DB



//Import File



//

export function itemImporter(timeInterval){
    // go get the list of json files this returns a map of them
    await response=getList()
    console.log(response)

};