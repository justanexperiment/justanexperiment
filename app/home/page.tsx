import { InlineSnippet } from "@/components/form/domain-configuration";
import Link from "next/link";
import { Siren, Globe2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center px-16 text-center">
      <br />
      <div>👆🏼 Choose an AI tool to try out 👆🏼 </div>
      <br />
      <div>I created these AI tools based on what I personally needed. I hope they're helpful for you too!</div>
      <br />
      {/* <Link href="/what" className="font-medium text-primary underline underline-offset-4">Getting started</Link> */}
      <Link
        href="https://write.justanexperiment.com"
        className="font-medium text-primary underline underline-offset-4"
        target="_blank"
      >
        About
      </Link>
      <Link
        href="https://github.com/justanexperiment/justanexperiment"
        className="font-medium text-primary underline underline-offset-4"
        target="_blank"
      >
        Github
      </Link>
      <br />
      <br />
    </div>
  );
}
