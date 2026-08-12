const fs = require('fs');
const path = require('path');

const dir = 'd:/weathersimple/src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const regex = /\s*\{\/\*\s*Floating Action Buttons\s*\*\/\}\s*<div className="absolute bottom-8 right-8 flex space-x-4 z-30">[\s\S]*?<\/div>\n(?=\s*<\/section>)/g;
  
  if (regex.test(content)) {
    content = content.replace(regex, '\n');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', file);
  }
});
