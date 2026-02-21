"use client";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-8 no-print">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} Bamidele Ayomide Precious. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
