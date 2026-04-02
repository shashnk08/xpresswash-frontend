-- ================================
-- 1. LOCATIONS
-- ================================
INSERT INTO config_locations (label) VALUES 
('mahadevapura'),
('garudacharpalya'),
('A narayanapura'),
('B narayanapura'),
('singanpalya'),
('doddanakundi'),
('Kaggadasapura');


-- ================================
-- 2. VEHICLE CATEGORIES
-- ================================
INSERT INTO config_vehicle_categories (label, vehicle_type, base_surcharge) VALUES 
('Hatchback / Sedan', 'Sedan', 0), 
('SUV / Premium', 'SUV', 84.75);


-- ================================
-- 3. SERVICES (WITH DESCRIPTIONS)
-- ================================
INSERT INTO config_services (label, base_price, description) VALUES 
('QUICK WASH(EXTERIOR ONLY)', 592.37, 
 'Exterior foam wash with pressure rinse and basic drying. Ideal for quick cleaning.'),

('STANDARD WASH(EXTERIOR & INTERIOR)', 846.61, 
 'Complete exterior wash with interior vacuuming, dashboard wipe, and basic cleaning.'),

('INTERIOR STEAM WASH', 719.49, 
 'Deep interior cleaning using steam for seats, carpets, and hard-to-reach areas.'),

('SLIVER PACKAGE', 1058.47, 
 'Exterior + interior cleaning with enhanced detailing and shine treatment.'),

('GOLD PACKAGE', 1736.44, 
 'Premium detailing package including polishing, interior deep clean, and finishing.'),

('PLATINUM PACKAGE', 2583.90, 
 'Top-tier full detailing including paint care, deep interior restoration, and premium finish.');


-- ================================
-- 4. ADD-ONS (WITH DESCRIPTIONS)
-- ================================
INSERT INTO config_addons (label, price, description) VALUES 
('None', 0, 
 'No additional services selected.'),

('Body Yellow Marks Removal', 635.59, 
 'Removes stubborn yellow stains and discoloration from the vehicle body.'),

('Body Water Marks Removal', 423.73, 
 'Eliminates hard water stains and mineral deposits from exterior surfaces.'),

('Glass Water Marks Removal', 254.24, 
 'Cleans and restores glass clarity by removing water spots and streaks.'),

('Tar n Gum Removal', 423.73, 
 'Removes sticky tar, gum, and road residues safely from paint surfaces.'),

('Exterior Shine Plus(CAR POLISH)', 847.46, 
 'Applies polish to enhance shine and restore paint gloss.'),

('Rubbing/Polishing/Wax', 4237.29, 
 'Complete paint correction with rubbing, polishing, and protective waxing.');


-- ================================
-- 5. SUBSCRIPTIONS (WITH DESCRIPTIONS)
-- ================================
INSERT INTO config_subscriptions (label, wash_count, vehicle_type, base_price, description)  VALUES 
('Monthly Sub - 4 (Sedan)', 4, 'Sedan', 2118.64, 
 '4 washes per month for sedans. Ideal for regular upkeep.'),

('Monthly Sub - 4 (SUV)', 4, 'SUV', 2372.88, 
 '4 washes per month for SUVs with higher surface coverage.'),

('Monthly Sub - 8 (Sedan)', 8, 'Sedan', 4067.80, 
 '8 washes per month for sedans. Best for frequent cleaning.'),

('Monthly Sub - 8 (SUV)', 8, 'SUV', 4237.29, 
 '8 washes per month for SUVs. Great for heavy usage vehicles.'),

('Monthly Sub - 16 (Sedan)', 16, 'Sedan', 7457.63, 
 '16 washes per month for sedans. High-frequency maintenance plan.'),

('Monthly Sub - 16 (SUV)', 16, 'SUV', 7627.12, 
 '16 washes per month for SUVs. Maximum coverage and value plan.');