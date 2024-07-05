import Image from "next/image";
import TodoApp from "@/components/TodoApp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <section className="flex justify-center items-center h-screen">
        <TodoApp/>

      </section>
    </main>
  );
}
