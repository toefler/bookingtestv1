import React from "react";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export interface RouterContext extends Record<any, any> {
  supabase: any;

}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootRouteWithLayout,
});

function RootRouteWithLayout() {
  return (
    <>
      <div>
        <Link to="/">Home  </Link> 
        <Link to="/about">About  </Link>
        <Link to="/login">Create User  </Link>
        <Link to="/signin">Login  </Link>
       
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
