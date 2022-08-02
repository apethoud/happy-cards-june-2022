export default function ProfileCard({ cardTitle, children }) {
  return (
    <div style={{ margin: "16px 0", border: "1px solid black" }}>
      <div style={{ fontWeight: "bold" }}>{cardTitle}</div>
      <div>{children}</div>
    </div>
  );
}
