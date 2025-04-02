// global.d.ts
import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "rs-module-wrap": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "rs-module": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "rs-slides": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "rs-slide": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "rs-layer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
