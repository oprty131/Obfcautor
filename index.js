const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

function simpleObfuscate(script) {
    // A simple Lua obfuscation method (Replace with a real obfuscator like luarph)
    return script.split('').reverse().join(''); // Example: Reversing the script
}

app.post('/obfuscate', (req, res) => {
    const { script } = req.body;
    
    if (!script) {
        return res.status(400).json({ error: 'No script provided' });
    }

    // Obfuscate the Lua script
    const obfuscatedScript = simpleObfuscate(script);

    // Return the obfuscated script
    res.json({ obfuscatedScript });
});

// Set the server to listen on port 3000
app.listen(3000, () => {
    console.log('Obfuscator running on http://localhost:3000');
});
