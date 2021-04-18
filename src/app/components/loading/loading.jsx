export function Loading ({ isLoading }) {
  if (!isLoading) return null;

  return (<p>{isLoading && 'Loading...'}</p>);
}
