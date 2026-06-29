export default function Loading() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#020817",
      }}
    >
      <div className="loading-spinner" role="status" aria-label="Loading" />
    </div>
  );
}
