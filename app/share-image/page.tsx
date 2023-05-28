"use client";
import React, { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import Image from "next/image";

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export default function ShareImagePage() {
  const searchParams = useSearchParams();
  const os = searchParams.get("os");
  const email = searchParams.get("email");

  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  return (
    <main className="flex flex-col">
      <input
        type="file"
        accept="image/*"
        id="profileImg"
        onChange={saveImgFile}
        ref={imgRef}
      />
      {imgFile && (
        <img
          src={imgFile ? imgFile : `/images/icon/user.png`}
          alt="프로필 이미지"
        />
      )}
    </main>
  );
}
