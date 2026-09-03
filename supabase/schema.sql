create table if not exists public.location_shares (
  id uuid primary key default gen_random_uuid(),
  label text,
  latitude double precision not null,
  longitude double precision not null,
  accuracy_m double precision,
  created_at timestamptz not null default now()
);

alter table public.location_shares enable row level security;

-- Browser users do not get direct database access.
-- The Next.js server uses the Supabase service-role key.
-- No anon INSERT/SELECT policy is intentionally created.
