'use client'
import React from "react";
import { Progress } from "@nextui-org/react";
import NextNProgress from 'nextjs-progressbar';
export default function App() {
  return (
    <>
    <Progress
      size="sm"
      isIndeterminate
      aria-label="Loading..."
      className="w-full"
    />
    </>
  );
}
