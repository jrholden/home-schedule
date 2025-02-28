FROM node:23-alpine AS deps
WORKDIR /app

COPY client/package*.json ./
RUN npm ci --omit=dev

FROM node:23-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package*.json ./
COPY client/.env.local ./
COPY shared ./src/shared
COPY client/tsconfig.json.docker ./tsconfig.json
COPY client/tailwind.config.ts ./
COPY client/next.config.ts ./
COPY client/postcss.config.mjs ./
COPY client/public ./public
COPY client/src ./src
RUN npm run build

FROM node:23-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app ./

# Load environment variables
ARG CLIENT_PORT
ENV PORT=${CLIENT_PORT}

# Expose the application port
EXPOSE ${PORT}

CMD ["npm", "start"]
