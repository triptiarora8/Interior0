import Link from "next/link";
import Arrow from "@/components/Arrow";

export default function NotFound() {
  return (
    <section className="not-found">
      <div>
        <div className="not-found__code">404</div>
        <h1>This room hasn&apos;t been designed yet.</h1>
        <p className="lead">The page you&apos;re looking for has moved or never existed.</p>
        <Link href="/" className="btn btn--solid">
          Back to Home <Arrow />
        </Link>
      </div>
    </section>
  );
}
