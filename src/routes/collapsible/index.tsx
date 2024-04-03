import { type DocumentHead, Link } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@qwik-ui/headless";

export default component$(() => (
  <>
    <Link href="/">Back home</Link>
    <Collapsible>
      <CollapsibleTrigger>Button</CollapsibleTrigger>
      <CollapsibleContent>Content</CollapsibleContent>
    </Collapsible>
  </>
));

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
