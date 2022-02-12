const fs = require('fs')

try {
  console.log("Before read");  
  const data = fs.readFileSync('SyncRead.js', 'utf8')
  console.log("File read completed>>",data);
} catch (err) {
  console.error(err)
}
