import React, { useEffect, useState, useRef } from "react";

function Editor(props) {
  let editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {}; // if it don't find any document then it will be an empty object

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };

    setLoaded(true);
  }, []); // run on mounting

  const API_URl = "https://noteyard-backend.herokuapp.com";
  const UPLOAD_ENDPOINT = "api/blogs/uploadImg";

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("uploadImg", file);
            fetch(`${API_URl}/${UPLOAD_ENDPOINT}`, {
              method: "post",
              body: body,
            })
              .then((res) => res.json())
              .then((res) => {
                resolve({ default: `${API_URl}/${res.url}` });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  const config = {
    placeholder: props.placeholder,
    ckfinder: {
      // Upload the images to the server using the CKFinder QuickUpload command.
      uploadUrl:
        // 'https://localhost:44374/api/v1/announcements/upload-file?command=QuickUpload&type=Images&responseType=json'
        "https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json",
    },
    mediaEmbed: {
      previewsInData: true,
    },
    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
    },
    outerHeight: "600px",
    extraPlugins: [uploadPlugin],
  };

  const simpleToolBarConfig = {
    placeholder: props.placeholder,
    toolbar: ["undo", "redo", "uploadImage", "mediaEmbed"],
    ckfinder: {
      // Upload the images to the server using the CKFinder QuickUpload command.
      uploadUrl:
        // 'https://localhost:44374/api/v1/announcements/upload-file?command=QuickUpload&type=Images&responseType=json'
        "https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json",
    },
    mediaEmbed: {
      previewsInData: true,
    },
    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
    },
    outerHeight: "600px",
    extraPlugins: [uploadPlugin],
  };

  if (loaded) {
    return (
      <CKEditor
        className={props.className}
        config={props.simpleToolBarConfig ? simpleToolBarConfig : config}
        editor={ClassicEditor}
        data={props.value}
        disabled={props.disabled}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          // console.log("Editor is ready to use!", editor);
        }}
        // onChange={(event, editor) => {
        //   // do something when editor's content changed
        //   const data = editor.getData();
        //   console.log("Change.", data);
        // }}
        onChange={props.onChange}
        onBlur={(event, editor) => {
          // console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          // console.log("Focus.", editor);
        }}
      />
    );
  } else {
    return <h2> Editor is loading </h2>;
  }
}

export default Editor;
