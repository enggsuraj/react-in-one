import ErrorBoundary from "./ErrorBoundary";

// replace export
export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
