"use client";
export default function PrintButton() { return <button className="button secondary print-button" type="button" onClick={() => window.print()}>Print or save as PDF</button>; }
