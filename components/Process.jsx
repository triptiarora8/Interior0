export default function Process({ steps }) {
  return (
    <div className="process">
      {steps.map((s, i) => (
        <div key={s.title} className={`process__step reveal${i ? ` reveal-delay-${i}` : ""}`}>
          <span className="num">{String(i + 1).padStart(2, "0")}</span>
          <h4>{s.title}</h4>
          <p>{s.text}</p>
        </div>
      ))}
    </div>
  );
}
