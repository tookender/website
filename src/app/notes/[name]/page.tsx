import { auth } from "@/auth";
import { BsArrowLeft } from "react-icons/bs";
import { getNote, modifyNote } from "@/actions/notes";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import NoteEditor from "../note-editor";

async function handleSubmit(data: FormData) {
  "use server";
  const session = await auth();
  const content = data.get("content") as string;
  const oldNoteName = data.get("oldNoteName") as string;
  const newNoteName = data.get("newNoteName") as string;

  console.log(content);

  await modifyNote(oldNoteName, newNoteName, session?.user?.id as string, content);
  revalidatePath("/");

  if (newNoteName !== oldNoteName) {
    redirect(`/notes/${encodeURIComponent(newNoteName)}`);
  }
}

export default async function NotesSlug({ params }: { params: Promise<{ name: string }> }) {
  const session = await auth();
  const name = decodeURIComponent((await params).name);

  if (session?.user) {
    const note = getNote(name, session.user.id as string);
    const noteContent = (await note)[0].content;

    return (
      <>
        <a className="text-neutral-400 hover:text-neutral-500 duration-300 flex flex-row gap-1 items-center" href="/notes">
          <BsArrowLeft/>
          <p>Go back to Notes</p>
        </a>
        
        <form className="mt-6" action={handleSubmit}>
          <input type="hidden" name="oldNoteName" value={name}/>
          <NoteEditor defaultContent={noteContent} defaultTitle={name} />
          {/* <button type="submit" className="mt-4">Save</button> */}
        </form>
      </>
    );
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