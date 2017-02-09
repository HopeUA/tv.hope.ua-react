import Palette from 'components/Assets/Palette';
import fs from 'fs';

const colors = Object.keys(Palette).map((e) => {
    return `$${e}: ${Palette[e]};\n`;
})
.join('');

fs.writeFile('src/theme/Palette.scss', colors, (err) => {
    if (err) {
        console.log(err);
    }
});
