import CryptoJS from 'crypto-js';

/**
 * MD5 加密算法
 * @param {*} data 要加密的值
 * @param {*} toCase 要转大小写、L是小写、U是大写
 * @param {*} num 要返回的位数
 * @returns 
 */
function md5(data, toCase = 'L', num = 32) {
  try {
    let md5Str = CryptoJS.MD5(data).toString(); // 获取md5字符串
    if (toCase === 'U') md5Str = md5Str.toUpperCase(); // 如果需要转大写、就转成大写输出、默认都是小写
    if (32 - num) {
      let start = (32 - num) / 2 - 1; // 开始提取字符串的key
      md5Str = md5Str.substring(start, start + num);
    }
    return md5Str;
  } catch (error) {
    console.log('md5 error', error);
    return "";
  }
}

/**
 * Base64 加解密算法
 * @param {*} data 要加解密的值
 * @param {*} method 加密还是解密、E是解密、D是解密
 */
function base64(data, method = 'E') {
  try {
    if (method == 'E') {
      let wordArray = CryptoJS.enc.Utf8.parse(data);
      return CryptoJS.enc.Base64.stringify(wordArray);
    } else {
      let parsedWordArray = CryptoJS.enc.Base64.parse(data);
      return parsedWordArray.toString(CryptoJS.enc.Utf8);
    }
  } catch (error) {
    console.log('base64 error', error);
    return "";
  }
}

export default {
  md5,
  base64
}