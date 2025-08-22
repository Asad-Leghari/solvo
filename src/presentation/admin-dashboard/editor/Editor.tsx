"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const EditorJS = dynamic(() => import("@editorjs/editorjs"), {
  ssr: false,
});

export default function Editor() {
  const editorInstance = useRef<any>(null);

  useEffect(() => {
    const initEditor = async () => {
      if (!editorInstance.current) {
        const Editor = (await import("@editorjs/editorjs")).default;
        const Header = (await import("@editorjs/header")).default;
        const List = (await import("@editorjs/list")).default;
        const Checklist = (await import("@editorjs/checklist")).default;
        const Quote = (await import("@editorjs/quote")).default;
        const Embed = (await import("@editorjs/embed")).default;
        const Table = (await import("@editorjs/table")).default;
        const Code = (await import("@editorjs/code")).default;
        const ImageTool = (await import("@editorjs/image")).default;
        const LinkTool = (await import("@editorjs/link")).default;
        const Marker = (await import("@editorjs/marker")).default;

        editorInstance.current = new Editor({
          holder: "editorjs",
          tools: {
            header: Header,
            list: List,
            checklist: Checklist,
            quote: Quote,
            embed: Embed,
            table: Table,
            code: Code,
            image: {
              class: ImageTool,
              config: {
                endpoints: {
                  byFile: "/api/uploadFile", // adjust endpoint
                  byUrl: "/api/fetchUrl",
                },
              },
            },
            linkTool: {
              class: LinkTool,
              config: {
                endpoint: "/api/fetchUrl",
              },
            },
            marker: Marker,
          },
        });
      }
    };

    initEditor();

    return () => {
      if (editorInstance.current?.destroy) {
        editorInstance.current.destroy();
      }
      editorInstance.current = null;
    };
  }, []);

  return (
    <div
      id="editorjs"
      className="rounded-2xl border border-gray-300 bg-white shadow p-4"
    />
  );
}
