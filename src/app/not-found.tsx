import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(126,97,231,0.2),_transparent_60%)]" />
      <p className="text-[7rem] font-extrabold leading-none text-gradient sm:text-[10rem]">
        404
      </p>
      <h1 className="mt-2 text-2xl font-bold sm:text-3xl">Page not found</h1>
      <p className="mt-3 max-w-md text-muted">
        The page you’re looking for drifted off into the aurora. Let’s get you
        back home.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-iris-light to-iris px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:shadow-glow-strong hover:brightness-110"
      >
        <FaArrowLeft className="text-xs" /> Back home
      </Link>
    </main>
  );
}
