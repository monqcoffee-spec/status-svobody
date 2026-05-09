-- Remove overly broad policies on site-assets.
-- Public buckets serve files publicly via CDN without needing a SELECT policy,
-- and writes should go through the service role (admin), not the client.
DROP POLICY IF EXISTS "Site assets are publicly readable"      ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload site assets" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update site assets" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete site assets" ON storage.objects;