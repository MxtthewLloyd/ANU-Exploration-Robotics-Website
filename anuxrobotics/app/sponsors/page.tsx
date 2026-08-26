import Header from "@/components/Header";

// Covers rubric: "list of sponsors with logos" under Team Information
export default function SponsorsPage() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Sponsors</h1>
        <div className="mt-8 flex flex-wrap gap-8">
          {/* TODO: sponsor logo grid, linked to sponsor sites */}
        </div>
      </div>
    </>
  );
}