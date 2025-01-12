import CryptoJS from "crypto-js";

export function encryptAES(data: string, secretKey: string, iv: string) {
  // Base64로 디코딩된 키와 IV 생성
  const key = CryptoJS.enc.Base64.parse(secretKey);
  const ivBytes = CryptoJS.enc.Base64.parse(iv);

  // AES 암호화 수행
  const encrypted = CryptoJS.AES.encrypt(data, key, {
    iv: ivBytes,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  // 결과를 Base64 문자열로 반환
  return encrypted.toString();
}
