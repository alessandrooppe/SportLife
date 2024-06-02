# Base image
FROM node:18-alpine AS base

# Dependencies image
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json npm.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f npm.lock ]; then npm ci --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Builder image
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Uncomment the following line to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build && ls -l /app/.next

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Set the correct permission for the .next folder
RUN chown -R nextjs:nodejs ./.next

USER nextjs

EXPOSE 3000

ENV PORT 3000
# Set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node_modules/.bin/next", "start"]