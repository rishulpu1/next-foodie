"use client";
import { useRef } from "react";
import classes from "./image-picker.module.css";
export default function ImagePicker({ label, name }) {
  const fileInput = useRef();
  function handlePickClick() {
    fileInput.current.click();
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          type="file"
          id={name}
          name={name}
          className={classes.input}
          accept="image/png, image/jpg"
          ref={fileInput}
        />
        <button
          type="button"
          className={classes.button}
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
