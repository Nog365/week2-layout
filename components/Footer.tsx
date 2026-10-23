
export default function Footer() {
  return (
    <footer className="bg-slate-800 p-4 text-center text-white">
      <p>
        &copy; {new Date().getFullYear()} My Website.
        All rights reserved.
      </p>
    </footer>
  );
}
