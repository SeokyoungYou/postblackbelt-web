"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import Image from "next/image";
type IFile = {
  url: string;
  name: string;
};

export default function ShareImagePage() {
  const searchParams = useSearchParams();
  const os = searchParams.get("os");
  const email = searchParams.get("email");

  const [selectedFile, setSelectedFile] = useState<File>();
  const [preview, setPreview] = useState<string>("");

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      //   setSelectedFile();
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  return (
    <main className="flex flex-col">
      <input type="file" onChange={onSelectFile} />
      {selectedFile && <img src={preview} />}
    </main>
  );
}
