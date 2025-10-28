const fs = require('fs');
const path = require('path');

// This script injects the console capture script into all HTML files after build
function injectConsoleCapture() {
  const buildDir = path.join(__dirname, '..', '.next', 'server', 'app');
  const scriptTag = '<script src="/dashboard-console-capture.js"></script>';
  
  function processDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else if (file.endsWith('.html')) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        if (!content.includes('dashboard-console-capture.js')) {
          content = content.replace('</head>', `${scriptTag}</head>`);
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Injected console capture into: ${filePath}`);
        }
      }
    });
  }
  
  processDirectory(buildDir);
  console.log('Console capture injection complete!');
}

injectConsoleCapture();