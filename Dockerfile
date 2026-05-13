FROM node:20-alpine AS deps

WORKDIR /app
COPY farrer-therapy-site/package*.json ./
COPY shared-ui- /shared-ui-
RUN npm install

FROM node:20-alpine AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY farrer-therapy-site/ ./
COPY shared-ui- /shared-ui-
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "run", "start"]
