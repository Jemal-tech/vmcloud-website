# --- Stage 1: Dependencies ---
FROM node:22-alpine AS deps
WORKDIR /app

# Copy package files for better caching
COPY package.json package-lock.json ./
RUN npm ci

# --- Stage 2: Builder ---
FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the project
# This generates the /dist folder
RUN npm run build

# --- Stage 3: Runtime ---
# OPTION A: For SSR (Server-Side Rendering)
FROM node:22-alpine AS runtime
WORKDIR /app

# Only copy production dependencies and built files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

# Start the Node server (adjust path if using a different adapter)
CMD ["node", "./dist/server/entry.mjs"]