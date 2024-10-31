import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import type { Editor as TinyMCEEditor } from "tinymce"; // Importa el tipo de Editor

const TakeNotes = () => {
  const editorRef = useRef<TinyMCEEditor | null>(null);

  const handleDownload = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent({ format: "text" });
      const blob = new Blob([content], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "notes.txt";
      link.click();
      URL.revokeObjectURL(url); // Limpiar la URL para liberar memoria
    }
  };

  return (
    <>
      <div className="h-full container py-4 px-2 bg-slate-100 border-r-[3px] border-b-[3px] border-black border-opacity-15">
        <h1 className="px-6 justify-start text-2xl font-medium">Take Notes <i className='bx bx-notepad'></i></h1>
        <div className="p-6">
          <Editor
            apiKey="5b1gotwnrux0q9bb0o9uc1zd47wfndq6hcvzcicpegy9lgid" // Reemplaza con tu API Key de TinyMCE
            onInit={(_evt, editor) => (editorRef.current = editor)}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>
        <div className="p-6 flex items-center justify-center">
          <button
            onClick={handleDownload}
            className="mt-4 p-5 bg-black text-white rounded-lg gap-2 flex justify-center items-center hover:bg-[var(--accent-color)] hover:text-[var(--principal-text)] transition-all"
          >
            <p>Download as .txt </p>
            <i className="bx bx-download text-2xl"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default TakeNotes;
