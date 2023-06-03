module.exports = async (HS1, HS2, HS3) => {
  return (
    (parseFloat(HS1) + 2 * parseFloat(HS2) + 3 * parseFloat(HS3)) /
    6
  ).toFixed(2);
};
