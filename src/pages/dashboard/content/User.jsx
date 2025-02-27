import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "@/features/counter/counterSlice";

const User = () => {
  const counterValue = useSelector((state) => state.counterR.countValue);
  console.log(counterValue);

  const dispatch = useDispatch();
  return (
    <div className="p-4 sm:ml-64 mt-14">
      <p>{counterValue}</p>
      <button
        className="bg-blue-600 px-5 py-2 rounded-md"
        onClick={() => {
          dispatch(increase());
        }}
      >
        Add
      </button>
    </div>
  );
};

export default User;
