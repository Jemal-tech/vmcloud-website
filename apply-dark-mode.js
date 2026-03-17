import fs from 'fs';
import path from 'path';

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.astro')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Simple string replacements for dark mode adaptation
      content = content.replace(/text-white(?!\/)/g, 'text-slate-900 dark:text-white');
      content = content.replace(/text-slate-400(?!\/)/g, 'text-slate-600 dark:text-slate-400');
      content = content.replace(/text-slate-300(?!\/)/g, 'text-slate-700 dark:text-slate-300');
      content = content.replace(/bg-white\/5(?!\d)/g, 'bg-slate-900/5 dark:bg-white/5');
      content = content.replace(/bg-white\/10(?!\d)/g, 'bg-slate-900/10 dark:bg-white/10');
      content = content.replace(/border-white\/5(?!\d)/g, 'border-slate-900/10 dark:border-white/5');
      content = content.replace(/border-white\/10(?!\d)/g, 'border-slate-900/20 dark:border-white/10');

      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
}

processDirectory('./src');
