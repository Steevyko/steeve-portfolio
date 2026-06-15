"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    async function loadBootstrap() {
      const bootstrap = await import("bootstrap/dist/js/bootstrap.bundle.min.js");
      window.bootstrap = bootstrap;
    }

    loadBootstrap();
  }, []);

  return null;
}