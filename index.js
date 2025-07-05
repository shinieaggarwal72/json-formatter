import inquirer from 'inquirer';
import fs from "fs";

inquirer
  .prompt([
   {
    "type": "input",
    "name": "json_data",
    "message": "Enter the unformatted json data here: "
   }
  ])
  .then((answers) => {
    try{
        const unformatted_data = JSON.parse(answers.json_data);
        //console.log(unformatted_data);
        const formatted_data = JSON.stringify(unformatted_data, null, 2)
        //console.log(formatted_data);
        fs.writeFile('json_formatted.json', formatted_data, err => {
        if (err) {
          console.error(err);
        } else {
          console.log('File written sucessfully');
        }
      });

    }
    catch(e){
        console.error("Invalid json provided..")
    }
    

  })
  .catch((error) => {
    console.log("Unexpected error.");
  });