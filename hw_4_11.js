import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer.prompt([
    {
        type: "input",
        name: 'URL'

    }
    
])
.then((answers) => {
    console.log(answers["URL"]);
    const qr_png = qr.imageSync(answers["URL"], {type: "png"});
    fs.writeFileSync('qr_code.png', qr_png);
    fs.writeFileSync('text.txt',answers["URL"])

});