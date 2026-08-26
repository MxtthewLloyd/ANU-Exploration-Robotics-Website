import Header from "@/components/Header";

// Covers rubric: "Vehicle Design Documentation" (40% — largest single category)
// Needs: photos/videos, test summaries (water time, objectives, results, sim + real),
// design decision write-ups, build blog / historical record
export default function VehiclePage() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Vehicle</h1>
        <section className="mt-8">
          <h2 className="text-xl font-medium">Design overview</h2>
          <p className="mt-2 text-neutral-600">{/* TODO */}</p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-medium">Test summaries</h2>
          <p className="mt-2 text-neutral-600">
            {/* TODO: table or list — date, objective, result, water time, sim vs real */}
          </p>
        </section>
      </div>
    </>
  );
}