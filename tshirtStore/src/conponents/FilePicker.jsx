import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import CustomButton from "./CustomButton";
import { useSnapshot } from "valtio";
import state from "../store";
const FilePicker = ({ file, setFile, readFile }) => {
  const snap = useSnapshot(state);
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>
      <div className="ml-2 relative flex flex-row w-[40px] h-[25px] rounded-full bg-inherit hover:border-solid border-2">
        <div
          className="absolute plus right-[-10px]"
          onClick={() => (state.logoTextureSize += 0.01)}
        >
          <FiPlusCircle size="25px" />
        </div>
        <div
          className="absolute minus left-[-10px]"
          onClick={() => (state.logoTextureSize -= 0.01)}
        >
          <FiMinusCircle size="25px" />
        </div>
      </div>

      <div className=" relative flex items-center justify-center rounded-full w-[50px] h-[50px] bg-inherit bottom-0 left-[70px] z-30">
        <div
          className=" absolute plusY top-[-10px] text-sm"
          onClick={() => (state.pos.y += 0.01)}
        >
          <IoIosArrowDropup size="20px" />
        </div>
        <div
          className="absolute plusX right-[-10px] text-sm "
          onClick={() => (state.pos.x += 0.01)}
        >
          <IoIosArrowDropright size="20px" />
        </div>
        <div
          className="absolute minusX left-[-10px] text-sm"
          onClick={() => (state.pos.x -= 0.01)}
        >
          <IoIosArrowDropleft size="20px" />
        </div>
        <div
          className=" absolute minusY bottom-[-10px] text-sm"
          onClick={() => {
            state.pos.y -= 0.01;
          }}
        >
          <IoIosArrowDropdown size="20px" />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => readFile("logo")}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile("full")}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
