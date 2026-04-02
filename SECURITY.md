# Security Policy

## Scope

Boss Skills is a collection of text-based persona definitions. It does not execute code on user systems, handle authentication, or process sensitive data.

However, we take the following seriously:

- **Prompt injection risks**: Skills should not contain instructions that could be exploited to override safety boundaries in host AI systems
- **Content safety**: Skills must not generate content that constitutes harassment, discrimination, or privacy violations
- **Supply chain**: Dependencies in our validation tooling should be minimal and audited

## Reporting a Vulnerability

If you discover a security issue, please report it by opening a GitHub issue tagged `security`, or email the maintainers directly.

We will respond within 72 hours.

## Supported Versions

| Version | Supported |
|---------|-----------|
| 0.1.x   | Yes       |
