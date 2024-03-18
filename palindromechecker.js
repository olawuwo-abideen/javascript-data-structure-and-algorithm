function palindrome(str) {
    const newstr = str.toLowerCase().replace(/[^a-z\d]/g, '');
    return newstr.split('').reverse().join('') === newstr;
  }
  
  console.log(palindrome("_eye__"));