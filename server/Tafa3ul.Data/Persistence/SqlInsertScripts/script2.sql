-- ============================================================
-- Tafa3ul Sample Data Seed Script
-- UserRole enum: Admin = 0, User = 1, Guest = 2
-- Passwords are hashes of "1234"
-- ============================================================
-- SCRIPT 2: ADDITIONAL 10 USERS AND COMPLETE PROFILES
-- ============================================================

-- ============================================================
-- 1. USERS (16-25)
-- ============================================================
INSERT INTO "Users" ("Id", "Username", "Email", "PasswordHash", "Role", "RefreshToken", "RefreshTokenExpiryTime", "CreatedAt", "UpdatedAt")
VALUES
    ('11111111-0000-0000-0000-000000000016', 'ahmed.malik',      'ahmed.malik@tafa3ul.dev',      'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 1, NULL, NULL, '2025-07-15 08:30:00', '2025-07-15 08:30:00'),
    ('11111111-0000-0000-0000-000000000017', 'sana.jamil',       'sana.jamil@tafa3ul.dev',       'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 1, NULL, NULL, '2025-07-22 09:00:00', '2025-07-22 09:00:00'),
    ('11111111-0000-0000-0000-000000000018', 'karim.hassan',     'karim.hassan@tafa3ul.dev',     'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 0, NULL, NULL, '2025-08-03 10:15:00', '2025-08-03 10:15:00'),
    ('11111111-0000-0000-0000-000000000019', 'lina.adel',        'lina.adel@tafa3ul.dev',        'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 1, NULL, NULL, '2025-08-10 14:45:00', '2025-08-10 14:45:00'),
    ('11111111-0000-0000-0000-000000000020', 'reza.ghaffari',    'reza.ghaffari@tafa3ul.dev',    'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 1, NULL, NULL, '2025-08-18 11:20:00', '2025-08-18 11:20:00'),
    ('11111111-0000-0000-0000-000000000021', 'maha.ibrahim',     'maha.ibrahim@tafa3ul.dev',     'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 1, NULL, NULL, '2025-08-25 13:30:00', '2025-08-25 13:30:00'),
    ('11111111-0000-0000-0000-000000000022', 'jamal.salem',      'jamal.salem@tafa3ul.dev',      'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 1, NULL, NULL, '2025-09-01 10:00:00', '2025-09-01 10:00:00'),
    ('11111111-0000-0000-0000-000000000023', 'yasmin.fakhr',     'yasmin.fakhr@tafa3ul.dev',     'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 0, NULL, NULL, '2025-09-08 15:25:00', '2025-09-08 15:25:00'),
    ('11111111-0000-0000-0000-000000000024', 'samir.nassar',     'samir.nassar@tafa3ul.dev',     'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 1, NULL, NULL, '2025-09-15 12:40:00', '2025-09-15 12:40:00'),
    ('11111111-0000-0000-0000-000000000025', 'nida.khan',        'nida.khan@tafa3ul.dev',        'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 1, NULL, NULL, '2025-09-22 09:50:00', '2025-09-22 09:50:00');


-- ============================================================
-- 2. PROFILES (16-25)
-- ============================================================
INSERT INTO "Profiles" ("Id", "UserId", "FirstName", "LastName", "Company", "Website", "Country", "Location", "Bio", "CreatedAt", "UpdatedAt")
VALUES
    ('22222222-0000-0000-0000-000000000016', '11111111-0000-0000-0000-000000000016', 'Ahmed',    'Malik',     'Google',            'https://ahmed-tech.com',       'Morocco',      'Casablanca, Morocco',    'Machine learning engineer building recommendation systems at scale. Passionate about TensorFlow and distributed computing.',                                            '2025-07-15 08:35:00', '2025-07-15 08:35:00'),
    ('22222222-0000-0000-0000-000000000017', '11111111-0000-0000-0000-000000000017', 'Sana',     'Jamil',     'Careem',            'https://sana-dev.ae',          'UAE',          'Dubai, UAE',            'Backend engineer specializing in real-time systems and websockets. Building scalable chat infrastructure for millions of users.',                                        '2025-07-22 09:05:00', '2025-07-22 09:05:00'),
    ('22222222-0000-0000-0000-000000000018', '11111111-0000-0000-0000-000000000018', 'Karim',    'Hassan',    'Microsoft',         'https://karim-code.sa',        'Saudi Arabia', 'Riyadh, Saudi Arabia',  'Cloud architect and DevOps specialist. Expert in Azure, Terraform, and serverless architectures. Mentor for junior engineers.',                                         '2025-08-03 10:20:00', '2025-08-03 10:20:00'),
    ('22222222-0000-0000-0000-000000000019', '11111111-0000-0000-0000-000000000019', 'Lina',     'Adel',      'Uber',              'https://lina-mobile.eg',       'Egypt',        'Cairo, Egypt',          'Mobile architect leading Android development across multiple product lines. Advocate for clean architecture and testing practices.',                                      '2025-08-10 14:50:00', '2025-08-10 14:50:00'),
    ('22222222-0000-0000-0000-000000000020', '11111111-0000-0000-0000-000000000020', 'Reza',     'Ghaffari',  'Netflix',           'https://reza-eng.ir',          'Iran',         'Tehran, Iran',          'Engineering manager and principal engineer. Building scalable streaming infrastructure. Focused on system design and technical leadership.',                              '2025-08-18 11:25:00', '2025-08-18 11:25:00'),
    ('22222222-0000-0000-0000-000000000021', '11111111-0000-0000-0000-000000000021', 'Maha',     'Ibrahim',   'PWC',               'https://maha-consult.eg',      'Egypt',        'Alexandria, Egypt',     'Enterprise architect and digital transformation specialist. Helping large organizations modernize legacy systems using cloud-native approaches.',                          '2025-08-25 13:35:00', '2025-08-25 13:35:00'),
    ('22222222-0000-0000-0000-000000000022', '11111111-0000-0000-0000-000000000022', 'Jamal',    'Salem',     'SAP',               'https://jamal-sap.kw',         'Kuwait',       'Kuwait City, Kuwait',   'ERP consultant with 10+ years implementing SAP systems. Specialist in supply chain and financial modules for Fortune 500 companies.',                                     '2025-09-01 10:05:00', '2025-09-01 10:05:00'),
    ('22222222-0000-0000-0000-000000000023', '11111111-0000-0000-0000-000000000023', 'Yasmin',   'Fakhr',     'Nvidia',            'https://yasmin-gpu.ae',        'UAE',          'Abu Dhabi, UAE',        'AI researcher focused on computer vision and deep learning. Published papers in CVPR and ICCV. Building next-gen AI chips.',                                           '2025-09-08 15:30:00', '2025-09-08 15:30:00'),
    ('22222222-0000-0000-0000-000000000024', '11111111-0000-0000-0000-000000000024', 'Samir',    'Nassar',    'Deloitte',          'https://samir-cyber.jo',       'Jordan',       'Amman, Jordan',         'Cybersecurity consultant specializing in enterprise threat detection. CISSP certified with expertise in zero-trust networking.',                                         '2025-09-15 12:45:00', '2025-09-15 12:45:00'),
    ('22222222-0000-0000-0000-000000000025', '11111111-0000-0000-0000-000000000025', 'Nida',     'Khan',      'TCS',               'https://nida-dev.pk',          'Pakistan',     'Karachi, Pakistan',     'Senior full-stack engineer with expertise in healthcare and fintech. HIPAA compliant system builder. Passionate about coding education.',                               '2025-09-22 09:55:00', '2025-09-22 09:55:00');


-- ============================================================
-- 3. PROFILE SKILLS (Additional entries for new profiles)
-- ============================================================
INSERT INTO "ProfileSkills" ("Id", "ProfileId", "SkillId", "YearsOfExperience")
VALUES
    -- Ahmed Malik: Python, Kotlin, PostgreSQL, Docker, Kubernetes
    ('44444444-0000-0000-0000-000000000024', '22222222-0000-0000-0000-000000000016', '33333333-0000-0000-0000-000000000005', 7),
    ('44444444-0000-0000-0000-000000000025', '22222222-0000-0000-0000-000000000016', '33333333-0000-0000-0000-000000000011', 4),
    ('44444444-0000-0000-0000-000000000026', '22222222-0000-0000-0000-000000000016', '33333333-0000-0000-0000-000000000006', 5),
    ('44444444-0000-0000-0000-000000000027', '22222222-0000-0000-0000-000000000016', '33333333-0000-0000-0000-000000000007', 3),
    -- Sana Jamil: TypeScript, React, C#, ASP.NET Core
    ('44444444-0000-0000-0000-000000000028', '22222222-0000-0000-0000-000000000017', '33333333-0000-0000-0000-000000000002', 6),
    ('44444444-0000-0000-0000-000000000029', '22222222-0000-0000-0000-000000000017', '33333333-0000-0000-0000-000000000003', 5),
    ('44444444-0000-0000-0000-000000000030', '22222222-0000-0000-0000-000000000017', '33333333-0000-0000-0000-000000000001', 6),
    ('44444444-0000-0000-0000-000000000031', '22222222-0000-0000-0000-000000000017', '33333333-0000-0000-0000-000000000004', 6),
    -- Karim Hassan: Docker, Kubernetes, Azure, PostgreSQL
    ('44444444-0000-0000-0000-000000000032', '22222222-0000-0000-0000-000000000018', '33333333-0000-0000-0000-000000000006', 8),
    ('44444444-0000-0000-0000-000000000033', '22222222-0000-0000-0000-000000000018', '33333333-0000-0000-0000-000000000007', 6),
    ('44444444-0000-0000-0000-000000000034', '22222222-0000-0000-0000-000000000018', '33333333-0000-0000-0000-000000000012', 7),
    ('44444444-0000-0000-0000-000000000035', '22222222-0000-0000-0000-000000000018', '33333333-0000-0000-0000-000000000005', 6),
    -- Lina Adel: Kotlin, Swift, Docker
    ('44444444-0000-0000-0000-000000000036', '22222222-0000-0000-0000-000000000019', '33333333-0000-0000-0000-000000000011', 6),
    ('44444444-0000-0000-0000-000000000037', '22222222-0000-0000-0000-000000000019', '33333333-0000-0000-0000-000000000010', 5),
    ('44444444-0000-0000-0000-000000000038', '22222222-0000-0000-0000-000000000019', '33333333-0000-0000-0000-000000000006', 4),
    -- Reza Ghaffari: C#, ASP.NET Core, Kubernetes, Docker, PostgreSQL
    ('44444444-0000-0000-0000-000000000039', '22222222-0000-0000-0000-000000000020', '33333333-0000-0000-0000-000000000001', 9),
    ('44444444-0000-0000-0000-000000000040', '22222222-0000-0000-0000-000000000020', '33333333-0000-0000-0000-000000000004', 9),
    ('44444444-0000-0000-0000-000000000041', '22222222-0000-0000-0000-000000000020', '33333333-0000-0000-0000-000000000007', 6),
    ('44444444-0000-0000-0000-000000000042', '22222222-0000-0000-0000-000000000020', '33333333-0000-0000-0000-000000000006', 8),
    ('44444444-0000-0000-0000-000000000043', '22222222-0000-0000-0000-000000000020', '33333333-0000-0000-0000-000000000005', 7),
    -- Maha Ibrahim: TypeScript, React, Docker, Kubernetes, Azure
    ('44444444-0000-0000-0000-000000000044', '22222222-0000-0000-0000-000000000021', '33333333-0000-0000-0000-000000000002', 8),
    ('44444444-0000-0000-0000-000000000045', '22222222-0000-0000-0000-000000000021', '33333333-0000-0000-0000-000000000003', 8),
    ('44444444-0000-0000-0000-000000000046', '22222222-0000-0000-0000-000000000021', '33333333-0000-0000-0000-000000000006', 6),
    ('44444444-0000-0000-0000-000000000047', '22222222-0000-0000-0000-000000000021', '33333333-0000-0000-0000-000000000007', 5),
    ('44444444-0000-0000-0000-000000000048', '22222222-0000-0000-0000-000000000021', '33333333-0000-0000-0000-000000000012', 5),
    -- Jamal Salem: C#, ASP.NET Core, PostgreSQL, Docker
    ('44444444-0000-0000-0000-000000000049', '22222222-0000-0000-0000-000000000022', '33333333-0000-0000-0000-000000000001', 10),
    ('44444444-0000-0000-0000-000000000050', '22222222-0000-0000-0000-000000000022', '33333333-0000-0000-0000-000000000004', 10),
    ('44444444-0000-0000-0000-000000000051', '22222222-0000-0000-0000-000000000022', '33333333-0000-0000-0000-000000000005', 9),
    ('44444444-0000-0000-0000-000000000052', '22222222-0000-0000-0000-000000000022', '33333333-0000-0000-0000-000000000006', 7),
    -- Yasmin Fakhr: TypeScript, React, Rust, Python
    ('44444444-0000-0000-0000-000000000053', '22222222-0000-0000-0000-000000000023', '33333333-0000-0000-0000-000000000002', 5),
    ('44444444-0000-0000-0000-000000000054', '22222222-0000-0000-0000-000000000023', '33333333-0000-0000-0000-000000000003', 5),
    ('44444444-0000-0000-0000-000000000055', '22222222-0000-0000-0000-000000000023', '33333333-0000-0000-0000-000000000009', 3),
    -- Samir Nassar: Go, Rust, Docker, Kubernetes, Azure
    ('44444444-0000-0000-0000-000000000056', '22222222-0000-0000-0000-000000000024', '33333333-0000-0000-0000-000000000008', 5),
    ('44444444-0000-0000-0000-000000000057', '22222222-0000-0000-0000-000000000024', '33333333-0000-0000-0000-000000000009', 4),
    ('44444444-0000-0000-0000-000000000058', '22222222-0000-0000-0000-000000000024', '33333333-0000-0000-0000-000000000006', 7),
    ('44444444-0000-0000-0000-000000000059', '22222222-0000-0000-0000-000000000024', '33333333-0000-0000-0000-000000000007', 5),
    ('44444444-0000-0000-0000-000000000060', '22222222-0000-0000-0000-000000000024', '33333333-0000-0000-0000-000000000012', 6),
    -- Nida Khan: TypeScript, React, C#, ASP.NET Core, PostgreSQL
    ('44444444-0000-0000-0000-000000000061', '22222222-0000-0000-0000-000000000025', '33333333-0000-0000-0000-000000000002', 7),
    ('44444444-0000-0000-0000-000000000062', '22222222-0000-0000-0000-000000000025', '33333333-0000-0000-0000-000000000003', 7),
    ('44444444-0000-0000-0000-000000000063', '22222222-0000-0000-0000-000000000025', '33333333-0000-0000-0000-000000000001', 8),
    ('44444444-0000-0000-0000-000000000064', '22222222-0000-0000-0000-000000000025', '33333333-0000-0000-0000-000000000004', 8),
    ('44444444-0000-0000-0000-000000000065', '22222222-0000-0000-0000-000000000025', '33333333-0000-0000-0000-000000000005', 7);


-- ============================================================
-- 4. EXPERIENCES (Additional)
-- ============================================================
INSERT INTO "Experiences" ("Id", "ProfileId", "JobTitle", "Company", "IsCurrentlyWorkingHere", "StartDate", "EndDate", "Description", "CreatedAt", "UpdatedAt")
VALUES
    ('55555555-0000-0000-0000-000000000011', '22222222-0000-0000-0000-000000000016', 'ML Engineer',                  'Google',              TRUE,  '2022-01-01', NULL,         'Building recommendation algorithms serving 2B+ users. Improved CTR by 15% using deep learning techniques.',                                                           '2025-07-15 08:40:00', '2025-07-15 08:40:00'),
    ('55555555-0000-0000-0000-000000000012', '22222222-0000-0000-0000-000000000016', 'Data Scientist',               'Uber Cairo',          FALSE, '2019-06-01', '2021-12-31', 'Developed demand prediction models and pricing algorithms for ride optimization.',                                                                                        '2025-07-15 08:40:00', '2025-07-15 08:40:00'),
    ('55555555-0000-0000-0000-000000000013', '22222222-0000-0000-0000-000000000017', 'Senior Backend Engineer',       'Careem',              TRUE,  '2021-03-01', NULL,         'Lead backend team building real-time messaging infrastructure. Handled 50M+ messages per day.',                                                                         '2025-07-22 09:10:00', '2025-07-22 09:10:00'),
    ('55555555-0000-0000-0000-000000000014', '22222222-0000-0000-0000-000000000017', 'Backend Engineer',             'Dubizzle',            FALSE, '2018-09-01', '2021-02-28', 'Built REST APIs and microservices for classified listings platform.',                                                                                                    '2025-07-22 09:10:00', '2025-07-22 09:10:00'),
    ('55555555-0000-0000-0000-000000000015', '22222222-0000-0000-0000-000000000018', 'Principal Cloud Architect',     'Microsoft',           TRUE,  '2020-06-01', NULL,         'Leading cloud migration initiatives for enterprise customers. Designed infrastructure for 100k+ users.',                                                               '2025-08-03 10:25:00', '2025-08-03 10:25:00'),
    ('55555555-0000-0000-0000-000000000016', '22222222-0000-0000-0000-000000000018', 'Senior DevOps Engineer',        'Saudi Aramco',        FALSE, '2017-03-01', '2020-05-31', 'Managed cloud infrastructure and CI/CD pipelines for critical systems.',                                                                                                '2025-08-03 10:25:00', '2025-08-03 10:25:00'),
    ('55555555-0000-0000-0000-000000000017', '22222222-0000-0000-0000-000000000019', 'Engineering Manager',          'Uber',                TRUE,  '2022-01-01', NULL,         'Manage 8-person mobile engineering team. Shipped 3 major features. Led technical hiring.',                                                                              '2025-08-10 14:55:00', '2025-08-10 14:55:00'),
    ('55555555-0000-0000-0000-000000000018', '22222222-0000-0000-0000-000000000019', 'Senior Android Engineer',       'Swvl',                FALSE, '2019-08-01', '2021-12-31', 'Built Android app serving 500k+ daily active riders. Improved app performance by 40%.',                                                                              '2025-08-10 14:55:00', '2025-08-10 14:55:00'),
    ('55555555-0000-0000-0000-000000000019', '22222222-0000-0000-0000-000000000020', 'VP Engineering',               'Netflix',             TRUE,  '2021-05-01', NULL,         'Leading 50-person engineering org. Driving architectural decisions for streaming platform.',                                                                             '2025-08-18 11:30:00', '2025-08-18 11:30:00'),
    ('55555555-0000-0000-0000-000000000020', '22222222-0000-0000-0000-000000000020', 'Tech Lead',                     'Apple',               FALSE, '2018-07-01', '2021-04-30', 'Led platform team building infrastructure for 1B+ devices.',                                                                                                           '2025-08-18 11:30:00', '2025-08-18 11:30:00'),
    ('55555555-0000-0000-0000-000000000021', '22222222-0000-0000-0000-000000000021', 'Solutions Architect',           'PWC',                 TRUE,  '2020-01-01', NULL,         'Consulting on digital transformation for Fortune 500 companies. Cloud migration expertise.',                                                                            '2025-08-25 13:40:00', '2025-08-25 13:40:00'),
    ('55555555-0000-0000-0000-000000000022', '22222222-0000-0000-0000-000000000021', 'Senior Implementation Consultant', 'Accenture',        FALSE, '2017-06-01', '2019-12-31', 'Implemented enterprise systems for telecom and finance sectors.',                                                                                                       '2025-08-25 13:40:00', '2025-08-25 13:40:00'),
    ('55555555-0000-0000-0000-000000000023', '22222222-0000-0000-0000-000000000022', 'Senior SAP Consultant',         'SAP',                 TRUE,  '2021-03-01', NULL,         'Implementing SAP S/4HANA for GCC region. Managed projects with budgets exceeding $5M.',                                                                               '2025-09-01 10:10:00', '2025-09-01 10:10:00'),
    ('55555555-0000-0000-0000-000000000024', '22222222-0000-0000-0000-000000000022', 'Functional Consultant',         'Oracle',              FALSE, '2015-09-01', '2021-02-28', 'Configured supply chain and finance modules for 20+ global clients.',                                                                                                  '2025-09-01 10:10:00', '2025-09-01 10:10:00'),
    ('55555555-0000-0000-0000-000000000025', '22222222-0000-0000-0000-000000000023', 'Senior AI Researcher',          'Nvidia',              TRUE,  '2020-10-01', NULL,         'Publishing papers on computer vision. Developing next-generation AI accelerator architectures.',                                                                        '2025-09-08 15:35:00', '2025-09-08 15:35:00'),
    ('55555555-0000-0000-0000-000000000026', '22222222-0000-0000-0000-000000000023', 'Researcher',                    'MIT CSAIL',            FALSE, '2018-09-01', '2020-09-30', 'Conducted research on deep learning optimization and efficient inference.',                                                                                             '2025-09-08 15:35:00', '2025-09-08 15:35:00'),
    ('55555555-0000-0000-0000-000000000027', '22222222-0000-0000-0000-000000000024', 'Head of Cybersecurity',         'Deloitte',            TRUE,  '2019-06-01', NULL,         'Leading threat intelligence and incident response for enterprise clients.',                                                                                              '2025-09-15 12:50:00', '2025-09-15 12:50:00'),
    ('55555555-0000-0000-0000-000000000028', '22222222-0000-0000-0000-000000000024', 'Security Consultant',           'Ernst & Young',       FALSE, '2017-01-01', '2019-05-31', 'Conducted penetration testing and risk assessments for banking sector.',                                                                                                '2025-09-15 12:50:00', '2025-09-15 12:50:00'),
    ('55555555-0000-0000-0000-000000000029', '22222222-0000-0000-0000-000000000025', 'Senior Full-Stack Engineer',    'TCS',                 TRUE,  '2021-07-01', NULL,         'Leading healthcare and fintech projects. Built HIPAA-compliant systems for major healthcare providers.',                                                               '2025-09-22 10:00:00', '2025-09-22 10:00:00'),
    ('55555555-0000-0000-0000-000000000030', '22222222-0000-0000-0000-000000000025', 'Full-Stack Developer',          'Daraz',               FALSE, '2018-11-01', '2021-06-30', 'Built e-commerce features serving 20M+ users in South Asia.',                                                                                                         '2025-09-22 10:00:00', '2025-09-22 10:00:00');


-- ============================================================
-- 5. EDUCATIONS (Additional)
-- ============================================================
INSERT INTO "Educations" ("Id", "ProfileId", "Institution", "Degree", "FieldOfStudy", "IsCurrentlyStudyingHere", "StartDate", "EndDate", "Description", "CreatedAt", "UpdatedAt")
VALUES
    ('66666666-0000-0000-0000-000000000007', '22222222-0000-0000-0000-000000000016', 'Université Mohammad V',         'Master of Science', 'Machine Learning',       FALSE, '2017-09-01', '2019-06-30', 'Thesis on neural networks optimization. Top of class.',                                                                                                                '2025-07-15 08:42:00', '2025-07-15 08:42:00'),
    ('66666666-0000-0000-0000-000000000008', '22222222-0000-0000-0000-000000000017', 'Ajman University',              'Bachelor of Science', 'Computer Science',       FALSE, '2015-09-01', '2019-06-30', 'Graduated with distinction. Active in robotics club.',                                                                                                                  '2025-07-22 09:12:00', '2025-07-22 09:12:00'),
    ('66666666-0000-0000-0000-000000000009', '22222222-0000-0000-0000-000000000018', 'King Saud University',          'Master of Science', 'Computer Science',       FALSE, '2014-09-01', '2016-06-30', 'Specialized in distributed systems. Published 2 conference papers.',                                                                                                    '2025-08-03 10:27:00', '2025-08-03 10:27:00'),
    ('66666666-0000-0000-0000-000000000010', '22222222-0000-0000-0000-000000000019', 'Ain Shams University',          'Bachelor of Science', 'Software Engineering',   FALSE, '2016-09-01', '2020-05-31', 'Dean''s List. Capstone on Android security frameworks.',                                                                                                               '2025-08-10 14:57:00', '2025-08-10 14:57:00'),
    ('66666666-0000-0000-0000-000000000011', '22222222-0000-0000-0000-000000000020', 'Sharif University of Technology', 'PhD',           'Computer Systems',       FALSE, '2015-09-01', '2020-06-30', 'Doctoral thesis on distributed consensus algorithms. Multiple publications.',                                                                                          '2025-08-18 11:32:00', '2025-08-18 11:32:00'),
    ('66666666-0000-0000-0000-000000000012', '22222222-0000-0000-0000-000000000021', 'Helwan University',             'Bachelor of Science', 'Computer Science',       FALSE, '2012-09-01', '2016-06-30', 'First class honors. Winner of national programming competition.',                                                                                                     '2025-08-25 13:42:00', '2025-08-25 13:42:00'),
    ('66666666-0000-0000-0000-000000000013', '22222222-0000-0000-0000-000000000022', 'Kuwait University',              'Bachelor of Science', 'Computer Science',       FALSE, '2010-09-01', '2014-06-30', 'Focusing on software engineering and algorithms. Graduated top of cohort.',                                                                                             '2025-09-01 10:12:00', '2025-09-01 10:12:00'),
    ('66666666-0000-0000-0000-000000000014', '22222222-0000-0000-0000-000000000023', 'American University of Beirut',  'Master of Science', 'Computer Science',       FALSE, '2016-09-01', '2018-06-30', 'Focus on machine learning and AI. Published research in ICCV.',                                                                                                        '2025-09-08 15:37:00', '2025-09-08 15:37:00'),
    ('66666666-0000-0000-0000-000000000015', '22222222-0000-0000-0000-000000000024', 'University of Jordan',           'Bachelor of Science', 'Information Security',   FALSE, '2015-09-01', '2019-06-30', 'Specialized in cybersecurity. CISSP certified. Multiple internships in security.',                                                                                      '2025-09-15 12:52:00', '2025-09-15 12:52:00'),
    ('66666666-0000-0000-0000-000000000016', '22222222-0000-0000-0000-000000000025', 'Pakistan Institute of Engineering & Applied Sciences', 'Bachelor of Science', 'Computer Engineering', FALSE, '2015-09-01', '2019-06-30', 'Focus on software development. Merit scholarship holder.',                  '2025-09-22 10:02:00', '2025-09-22 10:02:00');


-- ============================================================
-- 6. SOCIAL MEDIA ACCOUNTS (Additional)
-- ============================================================
INSERT INTO "SocialMediaAccounts" ("Id", "ProfileId", "GitHub", "LinkedIn", "Twitter", "YouTube", "Facebook", "Instagram", "TikTok", "CreatedAt", "UpdatedAt")
VALUES
    ('77777777-0000-0000-0000-000000000006', '22222222-0000-0000-0000-000000000016', 'https://github.com/ahmed-ml',      'https://linkedin.com/in/ahmed-malik-ml',  'https://twitter.com/ahmedmleng',   NULL,                                    NULL, NULL, NULL, '2025-07-15 08:45:00', '2025-07-15 08:45:00'),
    ('77777777-0000-0000-0000-000000000007', '22222222-0000-0000-0000-000000000017', 'https://github.com/sana-jamil',    'https://linkedin.com/in/sana-jamil',     'https://twitter.com/sana_codes',   NULL,                                    NULL, 'https://instagram.com/sana.dev', NULL, '2025-07-22 09:15:00', '2025-07-22 09:15:00'),
    ('77777777-0000-0000-0000-000000000008', '22222222-0000-0000-0000-000000000018', 'https://github.com/karim-devops',  'https://linkedin.com/in/karim-hassan',    NULL,                              NULL,                                    NULL, NULL, NULL, '2025-08-03 10:30:00', '2025-08-03 10:30:00'),
    ('77777777-0000-0000-0000-000000000009', '22222222-0000-0000-0000-000000000019', 'https://github.com/lina-mobile',   'https://linkedin.com/in/lina-adel',      'https://twitter.com/lina_android',  NULL,                                    NULL, NULL, NULL, '2025-08-10 15:00:00', '2025-08-10 15:00:00'),
    ('77777777-0000-0000-0000-000000000010', '22222222-0000-0000-0000-000000000020', 'https://github.com/reza-netflix',  'https://linkedin.com/in/reza-ghaffari',  'https://twitter.com/reza_eng',     'https://youtube.com/@rezatalk',       NULL, NULL, NULL, '2025-08-18 11:35:00', '2025-08-18 11:35:00'),
    ('77777777-0000-0000-0000-000000000011', '22222222-0000-0000-0000-000000000021', 'https://github.com/maha-architect','https://linkedin.com/in/maha-ibrahim',   'https://twitter.com/maha_digital',  NULL,                                    NULL, NULL, NULL, '2025-08-25 13:45:00', '2025-08-25 13:45:00'),
    ('77777777-0000-0000-0000-000000000012', '22222222-0000-0000-0000-000000000022', 'https://github.com/jamal-sap',     'https://linkedin.com/in/jamal-salem',    'https://twitter.com/jamal_erp',    NULL,                                    NULL, NULL, NULL, '2025-09-01 10:15:00', '2025-09-01 10:15:00'),
    ('77777777-0000-0000-0000-000000000013', '22222222-0000-0000-0000-000000000023', 'https://github.com/yasmin-ai',     'https://linkedin.com/in/yasmin-fakhr',   'https://twitter.com/yasmin_cv',    NULL,                                    NULL, 'https://instagram.com/yasmin.ai', NULL, '2025-09-08 15:40:00', '2025-09-08 15:40:00'),
    ('77777777-0000-0000-0000-000000000014', '22222222-0000-0000-0000-000000000024', 'https://github.com/samir-cyber',   'https://linkedin.com/in/samir-nassar',   'https://twitter.com/samir_infosec', NULL,                                    NULL, NULL, NULL, '2025-09-15 12:55:00', '2025-09-15 12:55:00'),
    ('77777777-0000-0000-0000-000000000015', '22222222-0000-0000-0000-000000000025', 'https://github.com/nida-fullstack','https://linkedin.com/in/nida-khan',      'https://twitter.com/nida_codes',   'https://youtube.com/@nida_teaches', NULL, NULL, NULL, '2025-09-22 10:05:00', '2025-09-22 10:05:00');


-- ============================================================
-- 7. POSTS (Additional - users 16-25)
-- ============================================================
INSERT INTO "Posts" ("Id", "UserId", "Content", "ImageUrl", "LikesCount", "CommentsCount", "CreatedAt", "UpdatedAt")
VALUES
    ('88888888-0000-0000-0000-000000000010', '11111111-0000-0000-0000-000000000016',
     'Just published my 5th paper on neural network optimization. A 22% efficiency gain on transformer inference. The ML community is amazing — so much collaboration happening right now. Preprint available on ArXiv!',
     NULL, 12, 4, '2025-10-25 10:00:00', '2025-10-25 10:00:00'),

    ('88888888-0000-0000-0000-000000000011', '11111111-0000-0000-0000-000000000017',
     'Building a real-time chat system that can handle 50M+ daily messages puts your infrastructure to the test. Lessons learned: message queues are your friend, and always plan for 10x scale.',
     NULL, 8, 2, '2025-11-01 14:30:00', '2025-11-01 14:30:00'),

    ('88888888-0000-0000-0000-000000000012', '11111111-0000-0000-0000-000000000018',
     'Cloud cost optimization is not just about IaC — it is a mindset. Analyzed our AWS bill and found 35% waste in idle resources. Small adjustments compound into massive savings. #CloudNative',
     NULL, 10, 3, '2025-10-15 09:00:00', '2025-10-15 09:00:00'),

    ('88888888-0000-0000-0000-000000000013', '11111111-0000-0000-0000-000000000019',
     'Shipped a complete redesign of our Android app architecture. Moving from MVP to MVVM took effort, but the testing improvements alone made it worthwhile. 80% test coverage is no joke.',
     NULL, 7, 2, '2025-11-05 11:45:00', '2025-11-05 11:45:00'),

    ('88888888-0000-0000-0000-000000000014', '11111111-0000-0000-0000-000000000020',
     'Leading 50 engineers is exhilarating and terrifying. Focus: clear communication, unblocking the team, and making space for innovation. That is where magic happens. #Engineering #Leadership',
     NULL, 15, 5, '2025-11-10 13:20:00', '2025-11-10 13:20:00'),

    ('88888888-0000-0000-0000-000000000015', '11111111-0000-0000-0000-000000000021',
     'Working on a $10M cloud migration project is humbling. Every architectural decision impacts 100k+ users. But seeing a legacy system transform into a scalable cloud-native platform? Chef is kiss.',
     NULL, 9, 2, '2025-10-20 15:00:00', '2025-10-20 15:00:00'),

    ('88888888-0000-0000-0000-000000000016', '11111111-0000-0000-0000-000000000022',
     'SAP is complex, but once you understand the data model, everything clicks. Just customized a supply chain module for 3 different industries. Business processes are delightfully nuanced.',
     NULL, 6, 1, '2025-11-08 16:40:00', '2025-11-08 16:40:00'),

    ('88888888-0000-0000-0000-000000000017', '11111111-0000-0000-0000-000000000023',
     'Our new computer vision model beats previous SOTA on image classification. But the real breakthrough? 60% smaller model size with 10x faster inference. Efficiency is the new frontier in AI.',
     NULL, 18, 6, '2025-11-12 10:30:00', '2025-11-12 10:30:00'),

    ('88888888-0000-0000-0000-000000000018', '11111111-0000-0000-0000-000000000024',
     'Zero-trust architecture is not optional anymore. Implemented it for 5 enterprises this year. Defense in depth works. Every micro-segment, every device, zero assumptions. Security first.',
     NULL, 11, 3, '2025-11-03 12:15:00', '2025-11-03 12:15:00'),

    ('88888888-0000-0000-0000-000000000019', '11111111-0000-0000-0000-000000000025',
     'Built a HIPAA-compliant patient data system that serves 2M+ patients. Healthcare tech is where software changes lives. Proud to be contributing to better patient outcomes through better tech.',
     NULL, 13, 4, '2025-11-14 14:00:00', '2025-11-14 14:00:00');


-- ============================================================
-- 8. POST COMMENTS (Additional)
-- ============================================================
INSERT INTO "PostComments" ("Id", "PostId", "UserId", "Content", "CreatedAt", "UpdatedAt")
VALUES
    ('99999999-0000-0000-0000-000000000018', '88888888-0000-0000-0000-000000000010', '11111111-0000-0000-0000-000000000018',
     'Congrats on the paper! A 22% efficiency gain is massive. Did you evaluate on other model architectures too?', '2025-10-25 11:00:00', '2025-10-25 11:00:00'),
    ('99999999-0000-0000-0000-000000000019', '88888888-0000-0000-0000-000000000011', '11111111-0000-0000-0000-000000000020',
     'Message queues are indeed critical at scale. Which system are you using? Kafka, RabbitMQ, or something custom?', '2025-11-01 15:00:00', '2025-11-01 15:00:00'),
    ('99999999-0000-0000-0000-000000000020', '88888888-0000-0000-0000-000000000012', '11111111-0000-0000-0000-000000000001',
     '35% waste is not uncommon. Reserved instances and spot instances helped us a lot. Good tracking is key.', '2025-10-15 10:00:00', '2025-10-15 10:00:00'),
    ('99999999-0000-0000-0000-000000000021', '88888888-0000-0000-0000-000000000013', '11111111-0000-0000-0000-000000000004',
     'MVVM is worth the investment. Test-driven mobile development is the future. 80% coverage is great!', '2025-11-05 12:45:00', '2025-11-05 12:45:00'),
    ('99999999-0000-0000-0000-000000000022', '88888888-0000-0000-0000-000000000014', '11111111-0000-0000-0000-000000000007',
     'This resonates with me. Unblocking engineers is 80% of our job as managers. How do you handle cross-team dependencies?', '2025-11-10 14:20:00', '2025-11-10 14:20:00'),
    ('99999999-0000-0000-0000-000000000023', '88888888-0000-0000-0000-000000000015', '11111111-0000-0000-0000-000000000012',
     'What migration patterns worked best in your experience? Lift and shift or refactoring?', '2025-10-20 16:00:00', '2025-10-20 16:00:00'),
    ('99999999-0000-0000-0000-000000000024', '88888888-0000-0000-0000-000000000017', '11111111-0000-0000-0000-000000000001',
     'Model compression is the key to edge AI. How are you handling quantization and pruning?', '2025-11-12 11:30:00', '2025-11-12 11:30:00'),
    ('99999999-0000-0000-0000-000000000025', '88888888-0000-0000-0000-000000000018', '11111111-0000-0000-0000-000000000010',
     'Zero-trust adoption is accelerating. What was the biggest challenge in your implementations?', '2025-11-03 13:15:00', '2025-11-03 13:15:00'),
    ('99999999-0000-0000-0000-000000000026', '88888888-0000-0000-0000-000000000019', '11111111-0000-0000-0000-000000000003',
     'Healthcare tech is truly impactful. 2M patients is massive responsibility. How do you ensure 99.99% uptime?', '2025-11-14 15:00:00', '2025-11-14 15:00:00');


-- ============================================================
-- 9. POST LIKES (Additional)
-- ============================================================
INSERT INTO "PostLikes" ("Id", "PostId", "UserId", "LikedAt")
VALUES
    -- Post 10 (Ahmed's ML paper) - 12 likes
    ('aaaaaaaa-0000-0000-0000-000000000052', '88888888-0000-0000-0000-000000000010', '11111111-0000-0000-0000-000000000001', '2025-10-25 10:15:00'),
    ('aaaaaaaa-0000-0000-0000-000000000053', '88888888-0000-0000-0000-000000000010', '11111111-0000-0000-0000-000000000002', '2025-10-25 10:20:00'),
    ('aaaaaaaa-0000-0000-0000-000000000054', '88888888-0000-0000-0000-000000000010', '11111111-0000-0000-0000-000000000003', '2025-10-25 10:25:00'),
    ('aaaaaaaa-0000-0000-0000-000000000055', '88888888-0000-0000-0000-000000000010', '11111111-0000-0000-0000-000000000004', '2025-10-25 10:30:00'),
    ('aaaaaaaa-0000-0000-0000-000000000056', '88888888-0000-0000-0000-000000000010', '11111111-0000-0000-0000-000000000005', '2025-10-25 10:35:00'),
    ('aaaaaaaa-0000-0000-0000-000000000057', '88888888-0000-0000-0000-000000000010', '11111111-0000-0000-0000-000000000018', '2025-10-25 10:40:00'),
    ('aaaaaaaa-0000-0000-0000-000000000058', '88888888-0000-0000-0000-000000000010', '11111111-0000-0000-0000-000000000020', '2025-10-25 10:45:00'),
    ('aaaaaaaa-0000-0000-0000-000000000059', '88888888-0000-0000-0000-000000000010', '11111111-0000-0000-0000-000000000023', '2025-10-25 10:50:00'),
    ('aaaaaaaa-0000-0000-0000-000000000060', '88888888-0000-0000-0000-000000000010', '11111111-0000-0000-0000-000000000024', '2025-10-25 10:55:00'),
    ('aaaaaaaa-0000-0000-0000-000000000061', '88888888-0000-0000-0000-000000000010', '11111111-0000-0000-0000-000000000025', '2025-10-25 11:00:00'),
    ('aaaaaaaa-0000-0000-0000-000000000062', '88888888-0000-0000-0000-000000000010', '11111111-0000-0000-0000-000000000006', '2025-10-25 11:05:00'),
    ('aaaaaaaa-0000-0000-0000-000000000063', '88888888-0000-0000-0000-000000000010', '11111111-0000-0000-0000-000000000007', '2025-10-25 11:10:00'),
    -- Post 11 (Sana's chat) - 8 likes
    ('aaaaaaaa-0000-0000-0000-000000000064', '88888888-0000-0000-0000-000000000011', '11111111-0000-0000-0000-000000000001', '2025-11-01 14:45:00'),
    ('aaaaaaaa-0000-0000-0000-000000000065', '88888888-0000-0000-0000-000000000011', '11111111-0000-0000-0000-000000000003', '2025-11-01 14:50:00'),
    ('aaaaaaaa-0000-0000-0000-000000000066', '88888888-0000-0000-0000-000000000011', '11111111-0000-0000-0000-000000000010', '2025-11-01 14:55:00'),
    ('aaaaaaaa-0000-0000-0000-000000000067', '88888888-0000-0000-0000-000000000011', '11111111-0000-0000-0000-000000000017', '2025-11-01 15:00:00'),
    ('aaaaaaaa-0000-0000-0000-000000000068', '88888888-0000-0000-0000-000000000011', '11111111-0000-0000-0000-000000000018', '2025-11-01 15:05:00'),
    ('aaaaaaaa-0000-0000-0000-000000000069', '88888888-0000-0000-0000-000000000011', '11111111-0000-0000-0000-000000000020', '2025-11-01 15:10:00'),
    ('aaaaaaaa-0000-0000-0000-000000000070', '88888888-0000-0000-0000-000000000011', '11111111-0000-0000-0000-000000000021', '2025-11-01 15:15:00'),
    ('aaaaaaaa-0000-0000-0000-000000000071', '88888888-0000-0000-0000-000000000011', '11111111-0000-0000-0000-000000000025', '2025-11-01 15:20:00'),
    -- Post 12 (Karim's cost optimization) - 10 likes
    ('aaaaaaaa-0000-0000-0000-000000000072', '88888888-0000-0000-0000-000000000012', '11111111-0000-0000-0000-000000000001', '2025-10-15 09:15:00'),
    ('aaaaaaaa-0000-0000-0000-000000000073', '88888888-0000-0000-0000-000000000012', '11111111-0000-0000-0000-000000000002', '2025-10-15 09:20:00'),
    ('aaaaaaaa-0000-0000-0000-000000000074', '88888888-0000-0000-0000-000000000012', '11111111-0000-0000-0000-000000000005', '2025-10-15 09:25:00'),
    ('aaaaaaaa-0000-0000-0000-000000000075', '88888888-0000-0000-0000-000000000012', '11111111-0000-0000-0000-000000000018', '2025-10-15 09:30:00'),
    ('aaaaaaaa-0000-0000-0000-000000000076', '88888888-0000-0000-0000-000000000012', '11111111-0000-0000-0000-000000000021', '2025-10-15 09:35:00'),
    ('aaaaaaaa-0000-0000-0000-000000000077', '88888888-0000-0000-0000-000000000012', '11111111-0000-0000-0000-000000000006', '2025-10-15 09:40:00'),
    ('aaaaaaaa-0000-0000-0000-000000000078', '88888888-0000-0000-0000-000000000012', '11111111-0000-0000-0000-000000000007', '2025-10-15 09:45:00'),
    ('aaaaaaaa-0000-0000-0000-000000000079', '88888888-0000-0000-0000-000000000012', '11111111-0000-0000-0000-000000000009', '2025-10-15 09:50:00'),
    ('aaaaaaaa-0000-0000-0000-000000000080', '88888888-0000-0000-0000-000000000012', '11111111-0000-0000-0000-000000000017', '2025-10-15 09:55:00'),
    ('aaaaaaaa-0000-0000-0000-000000000081', '88888888-0000-0000-0000-000000000012', '11111111-0000-0000-0000-000000000024', '2025-10-15 10:00:00'),
    -- Post 13 (Lina's Android) - 7 likes
    ('aaaaaaaa-0000-0000-0000-000000000082', '88888888-0000-0000-0000-000000000013', '11111111-0000-0000-0000-000000000004', '2025-11-05 12:00:00'),
    ('aaaaaaaa-0000-0000-0000-000000000083', '88888888-0000-0000-0000-000000000013', '11111111-0000-0000-0000-000000000010', '2025-11-05 12:05:00'),
    ('aaaaaaaa-0000-0000-0000-000000000084', '88888888-0000-0000-0000-000000000013', '11111111-0000-0000-0000-000000000019', '2025-11-05 12:10:00'),
    ('aaaaaaaa-0000-0000-0000-000000000085', '88888888-0000-0000-0000-000000000013', '11111111-0000-0000-0000-000000000021', '2025-11-05 12:15:00'),
    ('aaaaaaaa-0000-0000-0000-000000000086', '88888888-0000-0000-0000-000000000013', '11111111-0000-0000-0000-000000000025', '2025-11-05 12:20:00'),
    ('aaaaaaaa-0000-0000-0000-000000000087', '88888888-0000-0000-0000-000000000013', '11111111-0000-0000-0000-000000000001', '2025-11-05 12:25:00'),
    ('aaaaaaaa-0000-0000-0000-000000000088', '88888888-0000-0000-0000-000000000013', '11111111-0000-0000-0000-000000000003', '2025-11-05 12:30:00'),
    -- Post 14 (Reza's leadership) - 15 likes
    ('aaaaaaaa-0000-0000-0000-000000000089', '88888888-0000-0000-0000-000000000014', '11111111-0000-0000-0000-000000000001', '2025-11-10 13:30:00'),
    ('aaaaaaaa-0000-0000-0000-000000000090', '88888888-0000-0000-0000-000000000014', '11111111-0000-0000-0000-000000000002', '2025-11-10 13:35:00'),
    ('aaaaaaaa-0000-0000-0000-000000000091', '88888888-0000-0000-0000-000000000014', '11111111-0000-0000-0000-000000000003', '2025-11-10 13:40:00'),
    ('aaaaaaaa-0000-0000-0000-000000000092', '88888888-0000-0000-0000-000000000014', '11111111-0000-0000-0000-000000000004', '2025-11-10 13:45:00'),
    ('aaaaaaaa-0000-0000-0000-000000000093', '88888888-0000-0000-0000-000000000014', '11111111-0000-0000-0000-000000000005', '2025-11-10 13:50:00'),
    ('aaaaaaaa-0000-0000-0000-000000000094', '88888888-0000-0000-0000-000000000014', '11111111-0000-0000-0000-000000000007', '2025-11-10 13:55:00'),
    ('aaaaaaaa-0000-0000-0000-000000000095', '88888888-0000-0000-0000-000000000014', '11111111-0000-0000-0000-000000000012', '2025-11-10 14:00:00'),
    ('aaaaaaaa-0000-0000-0000-000000000096', '88888888-0000-0000-0000-000000000014', '11111111-0000-0000-0000-000000000018', '2025-11-10 14:05:00'),
    ('aaaaaaaa-0000-0000-0000-000000000097', '88888888-0000-0000-0000-000000000014', '11111111-0000-0000-0000-000000000019', '2025-11-10 14:10:00'),
    ('aaaaaaaa-0000-0000-0000-000000000098', '88888888-0000-0000-0000-000000000014', '11111111-0000-0000-0000-000000000020', '2025-11-10 14:15:00'),
    ('aaaaaaaa-0000-0000-0000-000000000099', '88888888-0000-0000-0000-000000000014', '11111111-0000-0000-0000-000000000021', '2025-11-10 14:20:00'),
    ('aaaaaaaa-0000-0000-0000-000000000100', '88888888-0000-0000-0000-000000000014', '11111111-0000-0000-0000-000000000022', '2025-11-10 14:25:00'),
    ('aaaaaaaa-0000-0000-0000-000000000101', '88888888-0000-0000-0000-000000000014', '11111111-0000-0000-0000-000000000017', '2025-11-10 14:30:00'),
    ('aaaaaaaa-0000-0000-0000-000000000102', '88888888-0000-0000-0000-000000000014', '11111111-0000-0000-0000-000000000023', '2025-11-10 14:35:00'),
    ('aaaaaaaa-0000-0000-0000-000000000103', '88888888-0000-0000-0000-000000000014', '11111111-0000-0000-0000-000000000025', '2025-11-10 14:40:00'),
    -- Post 15 (Maha's cloud migration) - 9 likes
    ('aaaaaaaa-0000-0000-0000-000000000104', '88888888-0000-0000-0000-000000000015', '11111111-0000-0000-0000-000000000001', '2025-10-20 15:15:00'),
    ('aaaaaaaa-0000-0000-0000-000000000105', '88888888-0000-0000-0000-000000000015', '11111111-0000-0000-0000-000000000018', '2025-10-20 15:20:00'),
    ('aaaaaaaa-0000-0000-0000-000000000106', '88888888-0000-0000-0000-000000000015', '11111111-0000-0000-0000-000000000012', '2025-10-20 15:25:00'),
    ('aaaaaaaa-0000-0000-0000-000000000107', '88888888-0000-0000-0000-000000000015', '11111111-0000-0000-0000-000000000021', '2025-10-20 15:30:00'),
    ('aaaaaaaa-0000-0000-0000-000000000108', '88888888-0000-0000-0000-000000000015', '11111111-0000-0000-0000-000000000007', '2025-10-20 15:35:00'),
    ('aaaaaaaa-0000-0000-0000-000000000109', '88888888-0000-0000-0000-000000000015', '11111111-0000-0000-0000-000000000008', '2025-10-20 15:40:00'),
    ('aaaaaaaa-0000-0000-0000-000000000110', '88888888-0000-0000-0000-000000000015', '11111111-0000-0000-0000-000000000009', '2025-10-20 15:45:00'),
    ('aaaaaaaa-0000-0000-0000-000000000111', '88888888-0000-0000-0000-000000000015', '11111111-0000-0000-0000-000000000011', '2025-10-20 15:50:00'),
    ('aaaaaaaa-0000-0000-0000-000000000112', '88888888-0000-0000-0000-000000000015', '11111111-0000-0000-0000-000000000017', '2025-10-20 15:55:00'),
    -- Post 16 (Jamal's SAP) - 6 likes
    ('aaaaaaaa-0000-0000-0000-000000000113', '88888888-0000-0000-0000-000000000016', '11111111-0000-0000-0000-000000000001', '2025-11-08 16:55:00'),
    ('aaaaaaaa-0000-0000-0000-000000000114', '88888888-0000-0000-0000-000000000016', '11111111-0000-0000-0000-000000000021', '2025-11-08 17:00:00'),
    ('aaaaaaaa-0000-0000-0000-000000000115', '88888888-0000-0000-0000-000000000016', '11111111-0000-0000-0000-000000000022', '2025-11-08 17:05:00'),
    ('aaaaaaaa-0000-0000-0000-000000000116', '88888888-0000-0000-0000-000000000016', '11111111-0000-0000-0000-000000000018', '2025-11-08 17:10:00'),
    ('aaaaaaaa-0000-0000-0000-000000000117', '88888888-0000-0000-0000-000000000016', '11111111-0000-0000-0000-000000000012', '2025-11-08 17:15:00'),
    ('aaaaaaaa-0000-0000-0000-000000000118', '88888888-0000-0000-0000-000000000016', '11111111-0000-0000-0000-000000000024', '2025-11-08 17:20:00'),
    -- Post 17 (Yasmin's CV model) - 18 likes
    ('aaaaaaaa-0000-0000-0000-000000000119', '88888888-0000-0000-0000-000000000017', '11111111-0000-0000-0000-000000000001', '2025-11-12 10:45:00'),
    ('aaaaaaaa-0000-0000-0000-000000000120', '88888888-0000-0000-0000-000000000017', '11111111-0000-0000-0000-000000000002', '2025-11-12 10:50:00'),
    ('aaaaaaaa-0000-0000-0000-000000000121', '88888888-0000-0000-0000-000000000017', '11111111-0000-0000-0000-000000000003', '2025-11-12 10:55:00'),
    ('aaaaaaaa-0000-0000-0000-000000000122', '88888888-0000-0000-0000-000000000017', '11111111-0000-0000-0000-000000000004', '2025-11-12 11:00:00'),
    ('aaaaaaaa-0000-0000-0000-000000000123', '88888888-0000-0000-0000-000000000017', '11111111-0000-0000-0000-000000000016', '2025-11-12 11:05:00'),
    ('aaaaaaaa-0000-0000-0000-000000000124', '88888888-0000-0000-0000-000000000017', '11111111-0000-0000-0000-000000000020', '2025-11-12 11:10:00'),
    ('aaaaaaaa-0000-0000-0000-000000000125', '88888888-0000-0000-0000-000000000017', '11111111-0000-0000-0000-000000000023', '2025-11-12 11:15:00'),
    ('aaaaaaaa-0000-0000-0000-000000000126', '88888888-0000-0000-0000-000000000017', '11111111-0000-0000-0000-000000000005', '2025-11-12 11:20:00'),
    ('aaaaaaaa-0000-0000-0000-000000000127', '88888888-0000-0000-0000-000000000017', '11111111-0000-0000-0000-000000000006', '2025-11-12 11:25:00'),
    ('aaaaaaaa-0000-0000-0000-000000000128', '88888888-0000-0000-0000-000000000017', '11111111-0000-0000-0000-000000000007', '2025-11-12 11:30:00'),
    ('aaaaaaaa-0000-0000-0000-000000000129', '88888888-0000-0000-0000-000000000017', '11111111-0000-0000-0000-000000000008', '2025-11-12 11:35:00'),
    ('aaaaaaaa-0000-0000-0000-000000000130', '88888888-0000-0000-0000-000000000017', '11111111-0000-0000-0000-000000000009', '2025-11-12 11:40:00'),
    ('aaaaaaaa-0000-0000-0000-000000000131', '88888888-0000-0000-0000-000000000017', '11111111-0000-0000-0000-000000000010', '2025-11-12 11:45:00'),
    ('aaaaaaaa-0000-0000-0000-000000000132', '88888888-0000-0000-0000-000000000017', '11111111-0000-0000-0000-000000000011', '2025-11-12 11:50:00'),
    ('aaaaaaaa-0000-0000-0000-000000000133', '88888888-0000-0000-0000-000000000017', '11111111-0000-0000-0000-000000000015', '2025-11-12 11:55:00'),
    ('aaaaaaaa-0000-0000-0000-000000000134', '88888888-0000-0000-0000-000000000017', '11111111-0000-0000-0000-000000000017', '2025-11-12 12:00:00'),
    ('aaaaaaaa-0000-0000-0000-000000000135', '88888888-0000-0000-0000-000000000017', '11111111-0000-0000-0000-000000000018', '2025-11-12 12:05:00'),
    -- Post 18 (Samir's zero-trust) - 11 likes
    ('aaaaaaaa-0000-0000-0000-000000000136', '88888888-0000-0000-0000-000000000018', '11111111-0000-0000-0000-000000000001', '2025-11-03 12:30:00'),
    ('aaaaaaaa-0000-0000-0000-000000000137', '88888888-0000-0000-0000-000000000018', '11111111-0000-0000-0000-000000000005', '2025-11-03 12:35:00'),
    ('aaaaaaaa-0000-0000-0000-000000000138', '88888888-0000-0000-0000-000000000018', '11111111-0000-0000-0000-000000000010', '2025-11-03 12:40:00'),
    ('aaaaaaaa-0000-0000-0000-000000000139', '88888888-0000-0000-0000-000000000018', '11111111-0000-0000-0000-000000000024', '2025-11-03 12:45:00'),
    ('aaaaaaaa-0000-0000-0000-000000000140', '88888888-0000-0000-0000-000000000018', '11111111-0000-0000-0000-000000000012', '2025-11-03 12:50:00'),
    ('aaaaaaaa-0000-0000-0000-000000000141', '88888888-0000-0000-0000-000000000018', '11111111-0000-0000-0000-000000000018', '2025-11-03 12:55:00'),
    ('aaaaaaaa-0000-0000-0000-000000000142', '88888888-0000-0000-0000-000000000018', '11111111-0000-0000-0000-000000000021', '2025-11-03 13:00:00'),
    ('aaaaaaaa-0000-0000-0000-000000000143', '88888888-0000-0000-0000-000000000018', '11111111-0000-0000-0000-000000000014', '2025-11-03 13:05:00'),
    ('aaaaaaaa-0000-0000-0000-000000000144', '88888888-0000-0000-0000-000000000018', '11111111-0000-0000-0000-000000000016', '2025-11-03 13:10:00'),
    ('aaaaaaaa-0000-0000-0000-000000000145', '88888888-0000-0000-0000-000000000018', '11111111-0000-0000-0000-000000000017', '2025-11-03 13:15:00'),
    ('aaaaaaaa-0000-0000-0000-000000000146', '88888888-0000-0000-0000-000000000018', '11111111-0000-0000-0000-000000000022', '2025-11-03 13:20:00'),
    -- Post 19 (Nida's HIPAA) - 13 likes
    ('aaaaaaaa-0000-0000-0000-000000000147', '88888888-0000-0000-0000-000000000019', '11111111-0000-0000-0000-000000000001', '2025-11-14 14:15:00'),
    ('aaaaaaaa-0000-0000-0000-000000000148', '88888888-0000-0000-0000-000000000019', '11111111-0000-0000-0000-000000000002', '2025-11-14 14:20:00'),
    ('aaaaaaaa-0000-0000-0000-000000000149', '88888888-0000-0000-0000-000000000019', '11111111-0000-0000-0000-000000000003', '2025-11-14 14:25:00'),
    ('aaaaaaaa-0000-0000-0000-000000000150', '88888888-0000-0000-0000-000000000019', '11111111-0000-0000-0000-000000000025', '2025-11-14 14:30:00'),
    ('aaaaaaaa-0000-0000-0000-000000000151', '88888888-0000-0000-0000-000000000019', '11111111-0000-0000-0000-000000000007', '2025-11-14 14:35:00'),
    ('aaaaaaaa-0000-0000-0000-000000000152', '88888888-0000-0000-0000-000000000019', '11111111-0000-0000-0000-000000000009', '2025-11-14 14:40:00'),
    ('aaaaaaaa-0000-0000-0000-000000000153', '88888888-0000-0000-0000-000000000019', '11111111-0000-0000-0000-000000000011', '2025-11-14 14:45:00'),
    ('aaaaaaaa-0000-0000-0000-000000000154', '88888888-0000-0000-0000-000000000019', '11111111-0000-0000-0000-000000000013', '2025-11-14 14:50:00'),
    ('aaaaaaaa-0000-0000-0000-000000000155', '88888888-0000-0000-0000-000000000019', '11111111-0000-0000-0000-000000000019', '2025-11-14 14:55:00'),
    ('aaaaaaaa-0000-0000-0000-000000000156', '88888888-0000-0000-0000-000000000019', '11111111-0000-0000-0000-000000000020', '2025-11-14 15:00:00'),
    ('aaaaaaaa-0000-0000-0000-000000000157', '88888888-0000-0000-0000-000000000019', '11111111-0000-0000-0000-000000000021', '2025-11-14 15:05:00'),
    ('aaaaaaaa-0000-0000-0000-000000000158', '88888888-0000-0000-0000-000000000019', '11111111-0000-0000-0000-000000000023', '2025-11-14 15:10:00'),
    ('aaaaaaaa-0000-0000-0000-000000000159', '88888888-0000-0000-0000-000000000019', '11111111-0000-0000-0000-000000000024', '2025-11-14 15:15:00');

