import type { MetaFunction } from "@remix-run/cloudflare";
import About from "~/components/home/about";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix on Cloudflare!",
    },
  ];
};

export default function Index() {
  return (
    <div className="mt-10 px-5">
      <About />
    </div>
  );
}
