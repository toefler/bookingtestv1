import { lazy } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";

// Use lazy to dynamically import the Signup component
const Signup = lazy(() => import("../components/Signup"));

export const Route = createLazyFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Signup />
    </div>
  );
}
