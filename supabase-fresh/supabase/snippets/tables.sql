-- LOCATIONS
create table config_locations (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  is_active boolean default true
);

-- VEHICLE TYPES
create table config_vehicle_categories (
  id uuid primary key default gen_random_uuid(),
  label text,
  vehicle_type text,
  base_surcharge numeric,
  is_active boolean default true
);

-- SERVICES
create table config_services (
  id uuid primary key default gen_random_uuid(),
  label text,
  base_price numeric,
  description text,
  is_active boolean default true,
  display_order int default 0
);

-- ADDONS
create table config_addons (
  id uuid primary key default gen_random_uuid(),
  label text,
  price numeric,
  description text,
  is_active boolean default true
);

-- SUBSCRIPTIONS
create table config_subscriptions (
  id uuid primary key default gen_random_uuid(),
  label text,
  wash_count int,
  vehicle_type text,
  base_price numeric,
  description text,
  is_active boolean default true
);