---
name: Vite build environment
description: Vite configuration behavior needed when workspace builds run without runtime service environment variables.
---

Vite configs for the web and mockup artifacts should require `PORT` and `BASE_PATH` when starting development servers, but provide safe build-time defaults when the command is `vite build`.

**Why:** A clean workspace/Vercel-style build does not necessarily inject service runtime variables, and requiring them while loading a static Vite config can stop unrelated artifact builds before compilation starts.

**How to apply:** Detect the build command in Vite config, use a non-serving port and `/` base only for that build path, and keep strict validation for development/preview server startup.