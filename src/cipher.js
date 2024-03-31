function rot13(str) {
  const firstHalf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").slice(0, 13);
  const secondHalf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").slice(13, 26);

  return str
    .split("")
    .map((s) => {
      let found;
      found = firstHalf.indexOf(s);
      if (found >= 0) {
        return secondHalf[found];
      }
      found = secondHalf.indexOf(s);
      if (found >= 0) {
        return firstHalf[found];
      }
      return s;
    })
    .join("");
}

module.exports = {
  rot13,
};
