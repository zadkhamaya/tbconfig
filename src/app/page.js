import React from "react";
import { App } from "../components/App";
import { SharedHeader } from "@/components/SharedHeader";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <SharedHeader />
      <App />
      <Footer />
    </div>
  );
}
