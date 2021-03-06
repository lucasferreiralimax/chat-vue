import CryptoJS from 'crypto-js';

const fake = 'FakeToken';

const TokenJS = {
  hash: [
    CryptoJS.SHA256(fake),
    CryptoJS.SHA512(fake),
  ],
  getHash: function () {
    return localStorage.getItem(this.hash[0]);
  },
  setHash: function () {
    localStorage.setItem(this.hash[0], this.hash[1]);
  },
  cleanHash: function () {
    localStorage.removeItem(this.hash[0]);
  },
};

export default TokenJS;
