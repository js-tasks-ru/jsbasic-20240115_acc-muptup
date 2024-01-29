function truncate(str, maxlength) {
  const ellipsis = '…';
  if (str.length > maxlength) {
    return str.slice(0, maxlength - ellipsis.length) + ellipsis;
  }
  return str;
}


console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
console.log(truncate('Всем привет!', 20));
