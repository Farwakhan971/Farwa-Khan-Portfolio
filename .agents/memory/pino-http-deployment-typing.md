---
name: pino-http deployment typing
description: Deployment-specific TypeScript compatibility guidance for the API logger middleware.
---

When TypeScript is checked in a deployment environment with different module-resolution defaults, `pino-http` may treat its default import as a non-callable module namespace even though local checks pass. Prefer its named `pinoHttp` export and annotate request/response serializer parameters with Node HTTP types.

**Why:** The deployment checker reported a non-callable default import and implicit `any` serializer parameters while the workspace compiler accepted the same source.

**How to apply:** Keep this compatibility pattern when changing the API server's `pino-http` middleware or its TypeScript configuration.