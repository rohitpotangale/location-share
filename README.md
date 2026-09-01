# Location Share — Supabase + Vercel

A privacy-respecting location sharing page. The person opening the link must explicitly press **Share my location** and approve the browser's location permission.

## 1. Create the Supabase database

In Supabase, open **SQL Editor** and run `supabase/schema.sql`.

This creates the `location_shares` table and Row Level Security policies.

## 2. Configure environment variables

Create `.env.local` for local development, or add these variables in Vercel:

- `SUPABASE_URL` = your Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` = your Supabase service-role key

IMPORTANT: Never put `SUPABASE_SERVICE_ROLE_KEY` in browser/client JavaScript. This project keeps it server-side.

## 3. Deploy

Upload this project to GitHub, import the repository into Vercel, and add the two environment variables.

The share page is `/`.
The dashboard is `/admin`.

## 4. Protect the dashboard

This starter dashboard uses a simple server-side password (`ADMIN_PASSWORD`).

Add this third Vercel environment variable:

- `ADMIN_PASSWORD` = a strong password you choose

Then open `/admin`, enter the password, and view submitted locations.

## Privacy

The page does not request location automatically. A user must press the button and grant browser permission. The database stores latitude, longitude, accuracy, timestamp, and an optional label.
