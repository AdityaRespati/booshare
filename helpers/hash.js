const crypto = require('crypto');

function hash(password, secret) {
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