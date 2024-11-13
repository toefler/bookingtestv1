import { lazy } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";

// Lazy load the Signin component
const Signin = lazy(() => import("../components/Loginnew"));

export const Route = createLazyFileRoute("/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Signin />
    </div>
  );
}
