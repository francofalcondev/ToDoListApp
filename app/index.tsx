import { TaskProvider } from "@/context";
import { Home } from "@/screens";

export default function Page() {
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  );
}
