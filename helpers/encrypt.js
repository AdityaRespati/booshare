const crypto = require('crypto');

function encrypt() {
  let secret = ''
  for (let i = 0; i < 10; i++) {
      secret += Math.floor(Math.random() * 10)
  }
  return secret
}

function hash(password) {
  let secret = encrypt()
  const hash = crypto.createHmac('sha256', secret)
                 .update(password)
                 .digest('hex');
  let objHash = {
      secret : secret,
      hash : hash
  }
return objHash;
}

module.exports = hash