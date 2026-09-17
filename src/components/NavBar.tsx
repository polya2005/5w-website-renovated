import "../index.css";
import EnvAwareLink from "./EnvAwareLink";

function NavBar() {
  return (
    <nav>
      <div className="block h-0.5 bg-5w-blue w-full" />
      <div className="block h-1.5 bg-5w-blue-dark w-full" />
      <div className="block h-0.5 bg-5w-blue w-full" />
      <div className="flex items-stretch">
        <EnvAwareLink
          href="/"
          className="grow border-x-5w-blue-dark border-[0.1vh] border-y-0 text-2xl bg-5w-blue-light font-[Palatino] italic font-black text-center text-5w-blue-dark"
        >
          About
        </EnvAwareLink>
        <EnvAwareLink
          href="/chairs"
          className="grow border-x-5w-blue-dark border-[0.1vh] border-y-0 text-2xl bg-5w-blue-light font-[Palatino] italic font-black text-center text-5w-blue-dark"
        >
          Chairs
        </EnvAwareLink>
        <EnvAwareLink
          href="/events"
          className="grow border-x-5w-blue-dark border-[0.1vh] border-y-0 text-2xl bg-5w-blue-light font-[Palatino] italic font-black text-center text-5w-blue-dark"
        >
          Events
        </EnvAwareLink>
        <EnvAwareLink
          href="/photos"
          className="grow border-x-5w-blue-dark border-[0.1vh] border-y-0 text-2xl bg-5w-blue-light font-[Palatino] italic font-black text-center text-5w-blue-dark"
        >
          Photos
        </EnvAwareLink>
        <EnvAwareLink
          href="/misc"
          className="grow border-x-5w-blue-dark border-[0.1vh] border-y-0 text-2xl bg-5w-blue-light font-[Palatino] italic font-black text-center text-5w-blue-dark"
        >
          Misc.
        </EnvAwareLink>
      </div>
      <div className="block h-0.5 bg-5w-blue w-full" />
      <div className="block h-1.5 bg-5w-blue-dark w-full" />
      <div className="block h-0.5 bg-5w-blue w-full" />
    </nav>
  );
}

export default NavBar;
