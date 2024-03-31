function checkCashRegister(price, cash, cid) {
  const DENOMINATIONS = [
    { name: "ONE HUNDRED", val: 100 },
    { name: "TWENTY", val: 20 },
    { name: "TEN", val: 10 },
    { name: "FIVE", val: 5 },
    { name: "ONE", val: 1 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 },
  ];

  const output = { status: "", change: [] };
  const changeDue = cash - price;

  const totalCash = cid.reduce((prev, curr) => {
    prev += curr[1];
    return prev;
  }, 0.0);

  if (changeDue > totalCash) {
    output.status = "INSUFFICIENT_FUNDS";
    output.change = [];
  }

  if (changeDue === totalCash) {
    output.status = "CLOSED";
    output.change = [...cid].sort((a, b) => b[1] - a[1]);
  }

  if (changeDue < totalCash) {
    let due = changeDue;

    const denoChange = DENOMINATIONS.reduce((prev, curr) => {
      const r = due % curr.val;
      const q = Math.trunc(due / curr.val);

      // if (due === 0) return prev;
      if (r === due) {
        return prev;
      }

      const found = cid.find((el) => el[0] === curr.name);
      const amount =
        q * curr.val <= found[1] ? q * curr.val : (q - 1) * curr.val;

      due = (due - amount).toFixed(2);
      prev.push([curr.name, amount]);
      return prev;
    }, []);

    const isPayable = denoChange.every(([name, value]) => {
      const found = cid.find((el) => el[0] === name);
      return value <= found[1];
    });

    if (!isPayable) {
      output.status = "INSUFFICIENT_FUNDS";
      output.change = [];
    } else {
      output.status = "OPEN";
      output.change = denoChange.filter((item) => item[1]);
    }
  }
  return output;
}

module.exports = {
  checkCashRegister,
};
