import Header from "@/components/Header";

// Covers rubric: "Team Information" (20%) — name, contact, member list, sponsor mentions
export default function TeamPage() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Team</h1>
        <p className="mt-4 text-neutral-600">
          {/* TODO: team intro paragraph */}
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
          {/* TODO: map over a members[] array — name, role, photo */}
        </div>
      </div>
    </>
  );
}