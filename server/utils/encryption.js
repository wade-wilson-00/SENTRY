// utils/encryption.js
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const ivLength = 16;

function encrypt(text) {
    const secretKey = process.env.SECRET_KEY;
    
    if (!secretKey || secretKey.length !== 32) {
        throw new Error('SECRET_KEY must be defined and 32 characters long.');
    }

    const iv = crypto.randomBytes(ivLength);
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey), iv);
    let encrypted = cipher.update(text, 'utf8');
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(encryptedText) {
    const secretKey = process.env.SECRET_KEY;

    if (!secretKey || secretKey.length !== 32) {
        throw new Error('SECRET_KEY must be defined and 32 characters long.');
    }

    const [ivHex, encryptedHex] = encryptedText.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const encryptedTextBuffer = Buffer.from(encryptedHex, 'hex');
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey), iv);
    let decrypted = decipher.update(encryptedTextBuffer);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

module.exports = { encrypt, decrypt };
