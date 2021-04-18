import { useRef } from 'react';

export function useReportError () {
  const registeredCodes = useRef([]);

  const isCodeRegistered = code => registeredCodes.current.includes(code);
  const registerCodes = codes => {
    const codesSet = new Set([...registeredCodes.current, ...codes]);
    registeredCodes.current = Array.from(codesSet);
  };

  const reportError = (error, codes) => {
    if (!error) return;

    const { code } = error;

    if (!codes && !code) return error.message;
    if (!codes && !isCodeRegistered(code)) return code;
    if (!codes) return;

    registerCodes(codes);
    if (codes.includes(code)) return code;
  };

  return reportError;
}
