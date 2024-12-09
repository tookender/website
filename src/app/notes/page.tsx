import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ToastHandler from "./toast-handler";
import { getNotes, createNote } from "@/actions/notes";

export default async function NotesDashboard() {
  const session = await auth();

  async function handleCreateNote() {
    "use server";
    const notes = await getNotes(session?.user?.id as string);
    
    const existingNote = notes.find(note => note.name === "New Note");
    if (existingNote) {
      redirect("/notes?error=duplicate");
    }

    await createNote("New Note", session?.user?.id as string, "...");
    redirect(`/notes/${encodeURIComponent("New Note")}`);
  }  

  if (session?.user) {
    const notes = getNotes(session.user.id as string);

    return (
      <>
        <ToastHandler />
        <h1 className="text-3xl font-extrabold">
          Welcome back, {session.user.name} 👋
        </h1>
        
        <div className="flex flex-col">
          <div className="flex justify-between items-center mt-8 mb-4">
            <h1 className="font-bold text-xl">Your Notes</h1>
            <form action={handleCreateNote}>
              <button 
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                New Note
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-2">
            {(await notes).map((note, index) => (
              <a href={`/notes/${note.name}`} key={index}>
                <div className="p-4 rounded-md border flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-xl">{note.name}</h1>
                    <h1 className="font-semibold text-sm text-neutral-300 -translate-y-2 translate-x-2">{note.date.toLocaleString()}</h1>
                  </div>
                  
                  <p className="hidden sm:block">{typeof(note.content) === "string" ? note.content.slice(0,48) : ""}...</p>
                  <p className="block sm:hidden">{typeof(note.content) === "string" ? note.content.slice(0,24) : ""}...</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="h-[90vh]">
      <h1 className="text-3xl font-extrabold text-red-300">
        No Access
      </h1>

      <p>
        Only signed-in users can access this page.
        <br/>
        You can currently only sign in using Discord or Google.
      </p>
    </div>
  )
}
