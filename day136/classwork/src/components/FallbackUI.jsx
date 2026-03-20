const FallbackUI = ({ error, resetErrorBoundary }) => {
  return (
    <>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>again!</button>
    </>
  );
};
