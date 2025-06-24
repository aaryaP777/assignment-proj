import Table from "@/components/Table";
import { artists } from "@/lib/data";

export default function DashboardPage() {
  return (
    <section>
      <Table data={artists} />
    </section>
  );
}
