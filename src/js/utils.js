class Utils {
  generateRandomText(len) {
    let str = '';
    const sample = 'abcdefghijklmnopqrstuvwxyz123456789';
    for (let i = 0; i < len; i++) { 
      str += sample.charAt(Math.round(sample.length * Math.random()));
    }
    return str;
  }

  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

export default Utils;
