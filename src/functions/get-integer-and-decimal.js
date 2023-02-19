const getIntegerAndDecimal = (number) => {
  const asString = String(number);
  const [integer, decimal] = asString.split(".");

  return {
    integer: Number(integer),
    decimal: decimal ? Number(decimal) : 0,
  };
};

export default getIntegerAndDecimal;
