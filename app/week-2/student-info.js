import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <h2>Priya Rana</h2>
      <p>
        GitHub:{" "}
        <Link
          href="https://github.com/PriyaManojRana/cprg306-assignments"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is my repository.
        </Link>
      </p>
    </div>
  );
}
