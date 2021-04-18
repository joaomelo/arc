export function createErrorReports (codes, error) {
  const specializedReports = codes.reduce((acc, partial) => {
    return acc.concat(reportCodesPartial(partial, error));
  }, []);
  const escapeReport = createEscapeReport(codes, error);

  return [escapeReport, ...specializedReports];
}

function reportCodesPartial (codesPartial, error) {
  if (!error || !error.code) return null;

  const { code } = error;
  const codes = Array.isArray(codesPartial) ? codesPartial : [codesPartial];
  return codes.includes(code) ? code : null;
}

function createEscapeReport (codes, error) {
  const registeredCodes = Array.from(new Set([...codes.flat()]));

  if (!error) return null;

  const { code } = error;
  if (!code) return error.message;
  if (!registeredCodes.includes(code)) return code;
};
