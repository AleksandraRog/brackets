module.exports = function check(str, bracketsConfig) {
  let nStr = str;
  const regExpStr = bracketsConfig
    .map((val) =>
      val.map((value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('')
    )
    .join('|');

  const regExp = new RegExp(regExpStr, 'g');
  while (regExp.test(nStr)) {
    nStr = nStr.replace(regExp, '');
  }
  return nStr.length === 0;
};
