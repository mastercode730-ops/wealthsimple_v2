const fs = require('fs');
const path = require('path');

const replacements = [
  { search: /bg-fintech-darker/g, replace: 'bg-fintech-light' },
  { search: /bg-fintech-dark/g, replace: 'bg-fintech-lighter' },
  { search: /bg-fintech-card/g, replace: 'bg-white' },
  { search: /text-white/g, replace: 'text-fintech-textDark' },
  { search: /text-gray-400/g, replace: 'text-fintech-textLight' },
  { search: /text-gray-300/g, replace: 'text-gray-600' },
  { search: /text-gray-200/g, replace: 'text-gray-700' },
  { search: /bg-black/g, replace: 'bg-white' },
  { search: /text-gray-500/g, replace: 'text-gray-500' }, // neutral
  { search: /shadow-lg/g, replace: 'shadow-sm' },
  { search: /shadow-2xl/g, replace: 'shadow-md' },
  { search: /border-fintech-border/g, replace: 'border-fintech-border' }, // tailwind already handles
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      for (const r of replacements) {
        content = content.replace(r.search, r.replace);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(path.join(__dirname, 'src'));
