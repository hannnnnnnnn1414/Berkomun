const fs = require('fs');
const content = fs.readFileSync('src/components/sections/Categories.tsx', 'utf8');
console.log('First 50 chars:', JSON.stringify(content.substring(0, 50)));
console.log('Has use client at start:', content.startsWith('"use client"'));
console.log('File length:', content.length);