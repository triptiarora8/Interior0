// A template remounts on every navigation, which replays the fade-in.
export default function Template({ children }) {
  return <main className="page-enter">{children}</main>;
}
