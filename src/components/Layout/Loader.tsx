import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

function Loader({
  width = 185,
  height = 110,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <div id="pq-loading">
      <div id="pq-loading-center">
        <img style={{scale: "1.5"}} src="images/Logo/logo-4.png" alt="Loading" />
      </div>
    </div>
  );
}

export default Loader;
