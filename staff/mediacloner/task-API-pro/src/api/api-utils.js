function OKConcatResult(message, data) {
  const res = { status: "OK", message };

  if (data) res.data = data;

  return res;
}

function NOKConcatResult(message, error) {
  const res = { status: "KO", message };

  if (error) res.error = error;

  return res;
}

module.exports = { OKConcatResult, NOKConcatResult }