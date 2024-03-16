function checkUserName(name) {
  const arr = name.split('')
  return /^[._]$/.test(arr[0]) || /^[._]$/.test(arr[arr.length - 1]);
}
console.log(checkUserName("abdeioueregmailcom"));
console.log(checkUserName("_abdeiou"));
console.log(checkUserName(".abdeiou"));
console.log(checkUserName(" abdeiou."));

console.log(checkUserName("abdekhk__jkjiou"));
console.log(checkUserName("ab_d e_io.u"));
console.log(checkUserName("a_b_de.i.ou"));
console.log(checkUserName("abde..iou"));
