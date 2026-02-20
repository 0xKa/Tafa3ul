-- ============================================================
-- Tafa3ul Sample Data Seed Script
-- UserRole enum: Admin = 0, User = 1, Guest = 2
-- Passwords are hashes of "1234"
-- ============================================================

-- ============================================================
-- 1. USERS
-- ============================================================
INSERT INTO "Users" ("Id", "Username", "Email", "PasswordHash", "Role", "RefreshToken", "RefreshTokenExpiryTime", "CreatedAt", "UpdatedAt")
VALUES
    ('11111111-0000-0000-0000-000000000001', 'mohammed.ahmed',   'mohammed.ahmed@tafa3ul.dev',   'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 0, NULL, NULL, '2025-01-10 08:00:00', '2025-01-10 08:00:00'),
    ('11111111-0000-0000-0000-000000000002', 'fatima.alzahra',   'fatima.alzahra@tafa3ul.dev',   'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 1, NULL, NULL, '2025-01-15 09:30:00', '2025-01-15 09:30:00'),
    ('11111111-0000-0000-0000-000000000003', 'omar.abdullah',    'omar.abdullah@tafa3ul.dev',    'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 1, NULL, NULL, '2025-02-01 10:00:00', '2025-02-01 10:00:00'),
    ('11111111-0000-0000-0000-000000000004', 'layla.hassan',     'layla.hassan@tafa3ul.dev',     'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 1, NULL, NULL, '2025-02-10 11:00:00', '2025-02-10 11:00:00'),
    ('11111111-0000-0000-0000-000000000005', 'khalid.alrashid',  'khalid.alrashid@tafa3ul.dev',  'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 1, NULL, NULL, '2025-03-05 14:00:00', '2025-03-05 14:00:00'),
    ('11111111-0000-0000-0000-000000000006', 'sarah.rashid',     'sarah.rashid@tafa3ul.dev',     'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 1, NULL, NULL, '2025-03-15 10:00:00', '2025-03-15 10:00:00'),
    ('11111111-0000-0000-0000-000000000007', 'aisha.khalil',     'aisha.khalil@tafa3ul.dev',     'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 0, NULL, NULL, '2025-04-01 14:30:00', '2025-04-01 14:30:00'),
    ('11111111-0000-0000-0000-000000000008', 'zain.hassan',      'zain.hassan@tafa3ul.dev',      'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 1, NULL, NULL, '2025-04-10 09:15:00', '2025-04-10 09:15:00'),
    ('11111111-0000-0000-0000-000000000009', 'amira.salem',      'amira.salem@tafa3ul.dev',      'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 1, NULL, NULL, '2025-04-20 11:45:00', '2025-04-20 11:45:00'),
    ('11111111-0000-0000-0000-000000000010', 'noor.karim',       'noor.karim@tafa3ul.dev',       'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 1, NULL, NULL, '2025-05-05 13:20:00', '2025-05-05 13:20:00'),
    ('11111111-0000-0000-0000-000000000011', 'hana.nabil',       'hana.nabil@tafa3ul.dev',       'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 1, NULL, NULL, '2025-05-12 15:00:00', '2025-05-12 15:00:00'),
    ('11111111-0000-0000-0000-000000000012', 'leila.rashid',     'leila.rashid@tafa3ul.dev',     'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 0, NULL, NULL, '2025-05-25 10:30:00', '2025-05-25 10:30:00'),
    ('11111111-0000-0000-0000-000000000013', 'maya.alsharif',    'maya.alsharif@tafa3ul.dev',    'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 1, NULL, NULL, '2025-06-08 12:00:00', '2025-06-08 12:00:00'),
    ('11111111-0000-0000-0000-000000000014', 'rana.farraj',      'rana.farraj@tafa3ul.dev',      'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 1, NULL, NULL, '2025-06-18 14:15:00', '2025-06-18 14:15:00'),
    ('11111111-0000-0000-0000-000000000015', 'dina.khoury',      'dina.khoury@tafa3ul.dev',      'AQAAAAIAAYagAAAAEODD1gRFeqymmL0/X3WfROovVkFSxuWHGmj0Ugc3HPc3AVnVxYf3TTxAXh/vntwrlA==', 1, NULL, NULL, '2025-07-02 16:45:00', '2025-07-02 16:45:00');


-- ============================================================
-- 2. PROFILES
-- ============================================================
INSERT INTO "Profiles" ("Id", "UserId", "FirstName", "LastName", "Company", "Website", "Country", "Location", "Bio", "CreatedAt", "UpdatedAt")
VALUES
    ('22222222-0000-0000-0000-000000000001', '11111111-0000-0000-0000-000000000001', 'Mohammed', 'Ahmed',     'Saudi Aramco',      'https://mohammedahmed.dev', 'Saudi Arabia', 'Riyadh, Saudi Arabia',  'Full-stack developer with 8+ years of experience building scalable web applications. Passionate about clean code and open-source contributions.',                          '2025-01-10 08:05:00', '2025-01-10 08:05:00'),
    ('22222222-0000-0000-0000-000000000002', '11111111-0000-0000-0000-000000000002', 'Fatima',   'Al-Zahra',  'Noon.com',          'https://fatima-dev.me',     'UAE',          'Dubai, UAE',            'Frontend engineer specializing in React and TypeScript. Love turning complex problems into elegant user interfaces. Coffee enthusiast ☕',                               '2025-01-15 09:35:00', '2025-01-15 09:35:00'),
    ('22222222-0000-0000-0000-000000000003', '11111111-0000-0000-0000-000000000003', 'Omar',     'Abdullah',  'Careem',            'https://omarabdullah.io',   'Egypt',        'Cairo, Egypt',          'Backend engineer focused on cloud-native architectures and microservices. Currently exploring AI integrations with .NET.',                                               '2025-02-01 10:05:00', '2025-02-01 10:05:00'),
    ('22222222-0000-0000-0000-000000000004', '11111111-0000-0000-0000-000000000004', 'Layla',    'Hassan',    'Majid Al Futtaim',  'https://laylahassan.dev',   'Jordan',       'Amman, Jordan',         'Mobile developer (iOS & Android) with a passion for great user experience. Also into DevOps and automating all the things.',                                            '2025-02-10 11:05:00', '2025-02-10 11:05:00'),
    ('22222222-0000-0000-0000-000000000005', '11111111-0000-0000-0000-000000000005', 'Khalid',   'Al-Rashid', NULL,                'https://khalid.codes',      'Kuwait',       'Kuwait City, Kuwait',   'Independent software consultant and open-source maintainer. Building developer tools and infrastructure projects in Go and Rust.',                                      '2025-03-05 14:05:00', '2025-03-05 14:05:00'),
    ('22222222-0000-0000-0000-000000000006', '11111111-0000-0000-0000-000000000006', 'Sarah',    'Rashid',    'Stc Solutions',     'https://sarah-codes.dev',   'Saudi Arabia', 'Jeddah, Saudi Arabia',   'Data engineer and cloud architect with 6+ years in big data ecosystems. Passionate about MLOps and data pipeline optimization.',                                        '2025-03-15 10:05:00', '2025-03-15 10:05:00'),
    ('22222222-0000-0000-0000-000000000007', '11111111-0000-0000-0000-000000000007', 'Aisha',    'Khalil',    'EmCare',            'https://aisha-dev.ae',      'UAE',          'Abu Dhabi, UAE',        'Solutions architect specializing in healthcare tech. Building HIPAA-compliant cloud systems and improving patient data management.',                                     '2025-04-01 14:35:00', '2025-04-01 14:35:00'),
    ('22222222-0000-0000-0000-000000000008', '11111111-0000-0000-0000-000000000008', 'Zain',     'Hassan',    'Zain Group',        'https://zain-tech.me',      'Kuwait',       'Kuwait City, Kuwait',   'DevOps engineer with expertise in cloud infrastructure, container orchestration, and CI/CD pipelines. Open-source enthusiast.',                                          '2025-04-10 09:20:00', '2025-04-10 09:20:00'),
    ('22222222-0000-0000-0000-000000000009', '11111111-0000-0000-0000-000000000009', 'Amira',    'Salem',     'Batelco',           'https://amira-digital.bh',  'Bahrain',      'Manama, Bahrain',       'Product designer and UX strategist focused on creating accessible digital experiences for diverse user populations. Design systems advocate.',                              '2025-04-20 11:50:00', '2025-04-20 11:50:00'),
    ('22222222-0000-0000-0000-000000000010', '11111111-0000-0000-0000-000000000010', 'Noor',     'Karim',     'Swvl',              'https://noor-dev.eg',       'Egypt',        'Alexandria, Egypt',     'Full-stack engineer with focus on payment systems and FinTech solutions. Data-driven developer who loves optimizing database performance.',                               '2025-05-05 13:25:00', '2025-05-05 13:25:00'),
    ('22222222-0000-0000-0000-000000000011', '11111111-0000-0000-0000-000000000011', 'Hana',     'Nabil',     'Rubicon',           'https://hana-codes.jo',     'Jordan',       'Irbid, Jordan',         'Software engineer specializing in enterprise resource planning and accounting systems. Strong background in business logic implementation.',                               '2025-05-12 15:05:00', '2025-05-12 15:05:00'),
    ('22222222-0000-0000-0000-000000000012', '11111111-0000-0000-0000-000000000012', 'Leila',    'Rashid',    'Consolidated Contractors',  'https://leila-eng.lb',      'Lebanon',      'Beirut, Lebanon',       'Engineering manager and technical leader driving digital transformation in large enterprises. Mentor and advocate for women in tech.',                                   '2025-05-25 10:35:00', '2025-05-25 10:35:00'),
    ('22222222-0000-0000-0000-000000000013', '11111111-0000-0000-0000-000000000013', 'Maya',     'Al-Sharif', 'Petrogas',          'https://maya-tech.om',      'Oman',         'Muscat, Oman',          'Cybersecurity engineer protecting critical infrastructure. Passionate about zero-trust architecture and threat detection systems.',                                      '2025-06-08 12:05:00', '2025-06-08 12:05:00'),
    ('22222222-0000-0000-0000-000000000014', '11111111-0000-0000-0000-000000000014', 'Rana',     'Farraj',    'Paltel',            'https://rana-codes.ps',     'Palestine',    'Ramallah, Palestine',   'QA engineer and test automation architect with 7+ years experience. Champion of test-driven development and quality metrics.',                                         '2025-06-18 14:20:00', '2025-06-18 14:20:00'),
    ('22222222-0000-0000-0000-000000000015', '11111111-0000-0000-0000-000000000015', 'Dina',     'Khoury',    'Tishreen',          'https://dina-creative.sy',  'Syria',        'Damascus, Syria',       'Creative technologist blending design and development to create immersive web experiences. Advocate for responsive and performant digital products.',                      '2025-07-02 16:50:00', '2025-07-02 16:50:00');


-- ============================================================
-- 3. SKILLS
-- ============================================================
INSERT INTO "Skills" ("Id", "Name", "CreatedAt", "UpdatedAt")
VALUES
    ('33333333-0000-0000-0000-000000000001', 'C#',           '2025-01-01 00:00:00', '2025-01-01 00:00:00'),
    ('33333333-0000-0000-0000-000000000002', 'TypeScript',   '2025-01-01 00:00:00', '2025-01-01 00:00:00'),
    ('33333333-0000-0000-0000-000000000003', 'React',        '2025-01-01 00:00:00', '2025-01-01 00:00:00'),
    ('33333333-0000-0000-0000-000000000004', 'ASP.NET Core', '2025-01-01 00:00:00', '2025-01-01 00:00:00'),
    ('33333333-0000-0000-0000-000000000005', 'PostgreSQL',   '2025-01-01 00:00:00', '2025-01-01 00:00:00'),
    ('33333333-0000-0000-0000-000000000006', 'Docker',       '2025-01-01 00:00:00', '2025-01-01 00:00:00'),
    ('33333333-0000-0000-0000-000000000007', 'Kubernetes',   '2025-01-01 00:00:00', '2025-01-01 00:00:00'),
    ('33333333-0000-0000-0000-000000000008', 'Go',           '2025-01-01 00:00:00', '2025-01-01 00:00:00'),
    ('33333333-0000-0000-0000-000000000009', 'Rust',         '2025-01-01 00:00:00', '2025-01-01 00:00:00'),
    ('33333333-0000-0000-0000-000000000010', 'Swift',        '2025-01-01 00:00:00', '2025-01-01 00:00:00'),
    ('33333333-0000-0000-0000-000000000011', 'Kotlin',       '2025-01-01 00:00:00', '2025-01-01 00:00:00'),
    ('33333333-0000-0000-0000-000000000012', 'Azure',        '2025-01-01 00:00:00', '2025-01-01 00:00:00');


-- ============================================================
-- 4. PROFILE SKILLS
-- ============================================================
INSERT INTO "ProfileSkills" ("Id", "ProfileId", "SkillId", "YearsOfExperience")
VALUES
    -- Mohammed Ahmed: C#, ASP.NET Core, TypeScript, React, PostgreSQL, Docker
    ('44444444-0000-0000-0000-000000000001', '22222222-0000-0000-0000-000000000001', '33333333-0000-0000-0000-000000000001', 8),
    ('44444444-0000-0000-0000-000000000002', '22222222-0000-0000-0000-000000000001', '33333333-0000-0000-0000-000000000004', 8),
    ('44444444-0000-0000-0000-000000000003', '22222222-0000-0000-0000-000000000001', '33333333-0000-0000-0000-000000000002', 5),
    ('44444444-0000-0000-0000-000000000004', '22222222-0000-0000-0000-000000000001', '33333333-0000-0000-0000-000000000003', 5),
    ('44444444-0000-0000-0000-000000000005', '22222222-0000-0000-0000-000000000001', '33333333-0000-0000-0000-000000000005', 6),
    ('44444444-0000-0000-0000-000000000006', '22222222-0000-0000-0000-000000000001', '33333333-0000-0000-0000-000000000006', 4),
    -- Fatima Al-Zahra: TypeScript, React, Docker
    ('44444444-0000-0000-0000-000000000007', '22222222-0000-0000-0000-000000000002', '33333333-0000-0000-0000-000000000002', 6),
    ('44444444-0000-0000-0000-000000000008', '22222222-0000-0000-0000-000000000002', '33333333-0000-0000-0000-000000000003', 6),
    ('44444444-0000-0000-0000-000000000009', '22222222-0000-0000-0000-000000000002', '33333333-0000-0000-0000-000000000006', 2),
    -- Omar Abdullah: C#, ASP.NET Core, PostgreSQL, Docker, Kubernetes, Azure
    ('44444444-0000-0000-0000-000000000010', '22222222-0000-0000-0000-000000000003', '33333333-0000-0000-0000-000000000001', 7),
    ('44444444-0000-0000-0000-000000000011', '22222222-0000-0000-0000-000000000003', '33333333-0000-0000-0000-000000000004', 7),
    ('44444444-0000-0000-0000-000000000012', '22222222-0000-0000-0000-000000000003', '33333333-0000-0000-0000-000000000005', 5),
    ('44444444-0000-0000-0000-000000000013', '22222222-0000-0000-0000-000000000003', '33333333-0000-0000-0000-000000000006', 5),
    ('44444444-0000-0000-0000-000000000014', '22222222-0000-0000-0000-000000000003', '33333333-0000-0000-0000-000000000007', 3),
    ('44444444-0000-0000-0000-000000000015', '22222222-0000-0000-0000-000000000003', '33333333-0000-0000-0000-000000000012', 4),
    -- Layla Hassan: Swift, Kotlin, Docker
    ('44444444-0000-0000-0000-000000000016', '22222222-0000-0000-0000-000000000004', '33333333-0000-0000-0000-000000000010', 5),
    ('44444444-0000-0000-0000-000000000017', '22222222-0000-0000-0000-000000000004', '33333333-0000-0000-0000-000000000011', 4),
    ('44444444-0000-0000-0000-000000000018', '22222222-0000-0000-0000-000000000004', '33333333-0000-0000-0000-000000000006', 3),
    -- Khalid Al-Rashid: Go, Rust, Docker, Kubernetes, PostgreSQL
    ('44444444-0000-0000-0000-000000000019', '22222222-0000-0000-0000-000000000005', '33333333-0000-0000-0000-000000000008', 6),
    ('44444444-0000-0000-0000-000000000020', '22222222-0000-0000-0000-000000000005', '33333333-0000-0000-0000-000000000009', 3),
    ('44444444-0000-0000-0000-000000000021', '22222222-0000-0000-0000-000000000005', '33333333-0000-0000-0000-000000000006', 7),
    ('44444444-0000-0000-0000-000000000022', '22222222-0000-0000-0000-000000000005', '33333333-0000-0000-0000-000000000007', 5),
    ('44444444-0000-0000-0000-000000000023', '22222222-0000-0000-0000-000000000005', '33333333-0000-0000-0000-000000000005', 6);


-- ============================================================
-- 5. EXPERIENCES
-- ============================================================
INSERT INTO "Experiences" ("Id", "ProfileId", "JobTitle", "Company", "IsCurrentlyWorkingHere", "StartDate", "EndDate", "Description", "CreatedAt", "UpdatedAt")
VALUES
    -- Mohammed Ahmed
    ('55555555-0000-0000-0000-000000000001', '22222222-0000-0000-0000-000000000001', 'Senior Full-Stack Developer', 'Saudi Aramco',        TRUE,  '2021-03-01', NULL,         'Lead a team of 6 developers building internal developer platforms using ASP.NET Core and React. Reduced deployment time by 40% through CI/CD automation.',                  '2025-01-10 08:10:00', '2025-01-10 08:10:00'),
    ('55555555-0000-0000-0000-000000000002', '22222222-0000-0000-0000-000000000001', 'Full-Stack Developer',        'STC Solutions',       FALSE, '2018-06-01', '2021-02-28', 'Built customer-facing web portals and REST APIs serving 500k+ users. Migrated legacy monolith to microservices architecture.',                                              '2025-01-10 08:10:00', '2025-01-10 08:10:00'),
    -- Fatima Al-Zahra
    ('55555555-0000-0000-0000-000000000003', '22222222-0000-0000-0000-000000000002', 'Frontend Engineer',           'Noon.com',            TRUE,  '2022-07-01', NULL,         'Own the design system and component library used across 3 product teams. Champion accessibility standards and frontend performance budgets.',                               '2025-01-15 09:40:00', '2025-01-15 09:40:00'),
    ('55555555-0000-0000-0000-000000000004', '22222222-0000-0000-0000-000000000002', 'Junior Frontend Developer',   'Dubizzle',            FALSE, '2020-09-01', '2022-06-30', 'Developed reusable React components and integrated third-party payment SDKs. Improved Lighthouse score from 54 to 91.',                                                       '2025-01-15 09:40:00', '2025-01-15 09:40:00'),
    -- Omar Abdullah
    ('55555555-0000-0000-0000-000000000005', '22222222-0000-0000-0000-000000000003', 'Backend Engineer',             'Careem',              TRUE,  '2020-11-01', NULL,         'Design and maintain high-throughput microservices in C# handling 2M+ daily rides. Introduced distributed tracing with OpenTelemetry across the platform.',                  '2025-02-01 10:10:00', '2025-02-01 10:10:00'),
    ('55555555-0000-0000-0000-000000000006', '22222222-0000-0000-0000-000000000003', 'Software Developer',           'Vodafone Egypt',      FALSE, '2018-01-01', '2020-10-31', 'Developed billing and CRM integrations using .NET Framework. Reduced manual reconciliation effort by 60% via automated batch jobs.',                                          '2025-02-01 10:10:00', '2025-02-01 10:10:00'),
    -- Layla Hassan
    ('55555555-0000-0000-0000-000000000007', '22222222-0000-0000-0000-000000000004', 'Mobile Developer',             'Majid Al Futtaim',    TRUE,  '2021-05-01', NULL,         'Develop and maintain cross-platform mobile apps (iOS & Android) for the Mall of Emirates super-app. Spearhead CI/CD pipelines with Fastlane and GitHub Actions.',           '2025-02-10 11:10:00', '2025-02-10 11:10:00'),
    ('55555555-0000-0000-0000-000000000008', '22222222-0000-0000-0000-000000000004', 'iOS Developer',                'Orange Jordan',       FALSE, '2019-06-01', '2021-04-30', 'Built and shipped 4 iOS apps from scratch. Integrated Apple Pay and ARKit features. Apps collectively have 200k+ downloads.',                                                 '2025-02-10 11:10:00', '2025-02-10 11:10:00'),
    -- Khalid Al-Rashid
    ('55555555-0000-0000-0000-000000000009', '22222222-0000-0000-0000-000000000005', 'Independent Consultant',       'Self-Employed',       TRUE,  '2020-01-01', NULL,         'Advise startups on infrastructure design and backend architecture. Build open-source developer tooling in Go. Recent focus on WebAssembly and edge computing.',               '2025-03-05 14:10:00', '2025-03-05 14:10:00'),
    ('55555555-0000-0000-0000-000000000010', '22222222-0000-0000-0000-000000000005', 'Platform Engineer',            'zain Kuwait',         FALSE, '2016-03-01', '2019-12-31', 'Managed container orchestration infrastructure for internal platforms. First team to adopt Kubernetes company-wide, reducing infra costs by 35%.',                             '2025-03-05 14:10:00', '2025-03-05 14:10:00');


-- ============================================================
-- 6. EDUCATIONS
-- ============================================================
INSERT INTO "Educations" ("Id", "ProfileId", "Institution", "Degree", "FieldOfStudy", "IsCurrentlyStudyingHere", "StartDate", "EndDate", "Description", "CreatedAt", "UpdatedAt")
VALUES
    ('66666666-0000-0000-0000-000000000001', '22222222-0000-0000-0000-000000000001', 'King Abdulaziz University',       'Bachelor of Science', 'Computer Science',       FALSE, '2013-09-01', '2017-06-30', 'Graduated with First Class Honours. Active member of the ACM student chapter.',                '2025-01-10 08:12:00', '2025-01-10 08:12:00'),
    ('66666666-0000-0000-0000-000000000002', '22222222-0000-0000-0000-000000000002', 'American University in Dubai',    'Bachelor of Science', 'Software Engineering',   FALSE, '2016-09-01', '2020-05-31', 'Dean''s List for 3 consecutive semesters. Capstone project on accessible UI design patterns.',  '2025-01-15 09:42:00', '2025-01-15 09:42:00'),
    ('66666666-0000-0000-0000-000000000003', '22222222-0000-0000-0000-000000000003', 'Cairo University',                'Bachelor of Science', 'Computer Engineering',   FALSE, '2013-09-01', '2017-06-30', 'Graduated with Distinction. Published a paper on efficient graph traversal algorithms.',        '2025-02-01 10:12:00', '2025-02-01 10:12:00'),
    ('66666666-0000-0000-0000-000000000004', '22222222-0000-0000-0000-000000000003', 'German University in Cairo',      'Master of Science',   'Distributed Systems',    FALSE, '2017-09-01', '2019-06-30', 'Thesis on distributed consensus protocols and their performance under network partitions.',     '2025-02-01 10:12:00', '2025-02-01 10:12:00'),
    ('66666666-0000-0000-0000-000000000005', '22222222-0000-0000-0000-000000000004', 'University of Jordan',            'Bachelor of Science', 'Information Technology', FALSE, '2015-09-01', '2019-06-30', 'Focused on mobile and embedded systems. Led the university hackathon team to a national win.',  '2025-02-10 11:12:00', '2025-02-10 11:12:00'),
    ('66666666-0000-0000-0000-000000000006', '22222222-0000-0000-0000-000000000005', 'Kuwait University',               'Bachelor of Science', 'Computer Science',       FALSE, '2010-09-01', '2014-06-30', 'Minor in Mathematics. Graduated top of class.',                                                '2025-03-05 14:12:00', '2025-03-05 14:12:00');


-- ============================================================
-- 7. SOCIAL MEDIA ACCOUNTS
-- ============================================================
INSERT INTO "SocialMediaAccounts" ("Id", "ProfileId", "GitHub", "LinkedIn", "Twitter", "YouTube", "Facebook", "Instagram", "TikTok", "CreatedAt", "UpdatedAt")
VALUES
    ('77777777-0000-0000-0000-000000000001', '22222222-0000-0000-0000-000000000001', 'https://github.com/mohahmed',       'https://linkedin.com/in/mohahmed',      'https://twitter.com/mohahmed_dev',   NULL,                                        NULL, NULL, NULL, '2025-01-10 08:15:00', '2025-01-10 08:15:00'),
    ('77777777-0000-0000-0000-000000000002', '22222222-0000-0000-0000-000000000002', 'https://github.com/fatima-dev',     'https://linkedin.com/in/fatima-dev',    'https://twitter.com/fatima_codes',   'https://youtube.com/@fatima_codes',         NULL, 'https://instagram.com/fatima.codes', NULL, '2025-01-15 09:45:00', '2025-01-15 09:45:00'),
    ('77777777-0000-0000-0000-000000000003', '22222222-0000-0000-0000-000000000003', 'https://github.com/omar-backend',   'https://linkedin.com/in/omar-backend',  NULL,                                  NULL,                                        NULL, NULL, NULL, '2025-02-01 10:15:00', '2025-02-01 10:15:00'),
    ('77777777-0000-0000-0000-000000000004', '22222222-0000-0000-0000-000000000004', 'https://github.com/laylahassan',    'https://linkedin.com/in/layla-hassan',  'https://twitter.com/layla_mobile',   NULL,                                        NULL, NULL, NULL, '2025-02-10 11:15:00', '2025-02-10 11:15:00'),
    ('77777777-0000-0000-0000-000000000005', '22222222-0000-0000-0000-000000000005', 'https://github.com/khalid-codes',   'https://linkedin.com/in/khalid-codes',  'https://twitter.com/khalid_codes',   'https://youtube.com/@khalid_codes',         NULL, NULL, NULL, '2025-03-05 14:15:00', '2025-03-05 14:15:00');


-- ============================================================
-- 8. POSTS
-- ============================================================
INSERT INTO "Posts" ("Id", "UserId", "Content", "ImageUrl", "LikesCount", "CommentsCount", "CreatedAt", "UpdatedAt")
VALUES
    ('88888888-0000-0000-0000-000000000001', '11111111-0000-0000-0000-000000000001',
     'Just shipped the new developer portal at work! Built with ASP.NET Core 9 + React. The biggest win? We cut deployment time from 45 minutes to under 4 minutes using GitHub Actions and Docker. Proud of the team 🚀',
     NULL, 3, 2, '2025-06-01 09:00:00', '2025-06-01 09:00:00'),

    ('88888888-0000-0000-0000-000000000002', '11111111-0000-0000-0000-000000000001',
     'Hot take: Most "microservices" I have seen are just a distributed monolith with extra networking costs. Start with a well-structured monolith, measure, then extract services where the pain is real. #SoftwareEngineering',
     NULL, 4, 1, '2025-07-15 14:30:00', '2025-07-15 14:30:00'),

    ('88888888-0000-0000-0000-000000000003', '11111111-0000-0000-0000-000000000002',
     'CSS tip of the day: Stop reaching for a JS library every time you need an animation. CSS @keyframes + custom properties cover 90% of use cases with zero bundle cost. Here is a snippet I use for skeleton loaders...',
     NULL, 5, 2, '2025-06-10 11:00:00', '2025-06-10 11:00:00'),

    ('88888888-0000-0000-0000-000000000004', '11111111-0000-0000-0000-000000000002',
     'Finally finished migrating our component library from JavaScript to TypeScript. 287 components. 6 weeks. Many cups of coffee. The type safety and IDE experience is absolutely worth the pain. 10/10 would do again.',
     NULL, 6, 3, '2025-08-20 16:00:00', '2025-08-20 16:00:00'),

    ('88888888-0000-0000-0000-000000000005', '11111111-0000-0000-0000-000000000003',
     'We just crossed 2 million daily active rides on our platform. Watching the real-time metrics dashboard light up is surreal. Shoutout to the backend team — zero downtime deployments every single release. 🏆',
     NULL, 7, 2, '2025-07-01 08:00:00', '2025-07-01 08:00:00'),

    ('88888888-0000-0000-0000-000000000006', '11111111-0000-0000-0000-000000000003',
     'OpenTelemetry changed how we debug distributed systems. Before: grep logs across 12 services, cry. After: open Jaeger, see the full trace, fix in minutes. If you are on microservices and not using OTel yet, you are missing out.',
     NULL, 5, 1, '2025-09-05 13:00:00', '2025-09-05 13:00:00'),

    ('88888888-0000-0000-0000-000000000007', '11111111-0000-0000-0000-000000000004',
     'Shipped our first WebAssembly feature in the iOS app using a shared Kotlin module compiled to WASM. Code sharing across iOS, Android, and Web from one codebase. The future of cross-platform is wild. 📱',
     NULL, 4, 1, '2025-08-05 10:00:00', '2025-08-05 10:00:00'),

    ('88888888-0000-0000-0000-000000000008', '11111111-0000-0000-0000-000000000005',
     'Released v2.0 of my open-source CLI tool written in Go. New features: plugin system, TUI built with Bubble Tea, and 3x faster execution. Star it on GitHub if you find it useful! Link in profile.',
     NULL, 8, 3, '2025-09-20 17:00:00', '2025-09-20 17:00:00'),

    ('88888888-0000-0000-0000-000000000009', '11111111-0000-0000-0000-000000000005',
     'Rust''s ownership model clicked for me after 3 months of pain. The key insight: it is not about memory safety, it is about making data flow explicit. Once you see it that way, the borrow checker becomes a helpful colleague, not an enemy.',
     NULL, 9, 2, '2025-10-10 12:00:00', '2025-10-10 12:00:00');


-- ============================================================
-- 9. POST COMMENTS
-- ============================================================
INSERT INTO "PostComments" ("Id", "PostId", "UserId", "Content", "CreatedAt", "UpdatedAt")
VALUES
    -- Comments on post 1 (Mohammed's deployment post)
    ('99999999-0000-0000-0000-000000000001', '88888888-0000-0000-0000-000000000001', '11111111-0000-0000-0000-000000000003',
     'That is an insane improvement! What is your pipeline structure? We are stuck at 25 min builds and I would love some ideas.', '2025-06-01 10:00:00', '2025-06-01 10:00:00'),
    ('99999999-0000-0000-0000-000000000002', '88888888-0000-0000-0000-000000000001', '11111111-0000-0000-0000-000000000005',
     'Layer caching is the secret. Build your base Docker image separately and cache it in the registry. Cuts 70% of build time right there.', '2025-06-01 10:30:00', '2025-06-01 10:30:00'),

    -- Comments on post 2 (Mohammed's microservices hot take)
    ('99999999-0000-0000-0000-000000000003', '88888888-0000-0000-0000-000000000002', '11111111-0000-0000-0000-000000000002',
     'Absolutely agree. "Premature distribution is the root of all evil" should be printed on every architecture whiteboard.', '2025-07-15 15:00:00', '2025-07-15 15:00:00'),

    -- Comments on post 3 (Fatima's CSS tip)
    ('99999999-0000-0000-0000-000000000004', '88888888-0000-0000-0000-000000000003', '11111111-0000-0000-0000-000000000004',
     'Could you share the skeleton loader snippet? Been using a JS lib for this and would love to drop the dependency.', '2025-06-10 11:30:00', '2025-06-10 11:30:00'),
    ('99999999-0000-0000-0000-000000000005', '88888888-0000-0000-0000-000000000003', '11111111-0000-0000-0000-000000000001',
     'The View Transitions API on top of this is also worth exploring. Native page transitions with no JS at all.', '2025-06-10 12:00:00', '2025-06-10 12:00:00'),

    -- Comments on post 4 (Fatima's TypeScript migration)
    ('99999999-0000-0000-0000-000000000006', '88888888-0000-0000-0000-000000000004', '11111111-0000-0000-0000-000000000001',
     'We did a similar migration last year. The incremental approach with allowJs helped a lot — did you go full strict mode from day one?', '2025-08-20 16:30:00', '2025-08-20 16:30:00'),
    ('99999999-0000-0000-0000-000000000007', '88888888-0000-0000-0000-000000000004', '11111111-0000-0000-0000-000000000003',
     'How did you handle third-party packages without types? That was always our biggest pain point.',                                         '2025-08-20 17:00:00', '2025-08-20 17:00:00'),
    ('99999999-0000-0000-0000-000000000008', '88888888-0000-0000-0000-000000000004', '11111111-0000-0000-0000-000000000005',
     'Worth every moment. Type-safe component APIs catch so many bugs at compile time that used to hit production.',                            '2025-08-20 17:30:00', '2025-08-20 17:30:00'),

    -- Comments on post 5 (Omar's 2M rides milestone)
    ('99999999-0000-0000-0000-000000000009', '88888888-0000-0000-0000-000000000005', '11111111-0000-0000-0000-000000000001',
     'Huge milestone! What does your deployment strategy look like at that scale? Blue-green? Canary?', '2025-07-01 09:00:00', '2025-07-01 09:00:00'),
    ('99999999-0000-0000-0000-000000000010', '88888888-0000-0000-0000-000000000005', '11111111-0000-0000-0000-000000000004',
     'Incredible scale. Congrats to the whole team!',                                                  '2025-07-01 09:30:00', '2025-07-01 09:30:00'),

    -- Comments on post 6 (Omar's OpenTelemetry post)
    ('99999999-0000-0000-0000-000000000011', '88888888-0000-0000-0000-000000000006', '11111111-0000-0000-0000-000000000005',
     'We use OTel with Tempo and Grafana. The correlation between traces, logs, and metrics is a game changer.', '2025-09-05 14:00:00', '2025-09-05 14:00:00'),

    -- Comments on post 7 (Layla's WASM post)
    ('99999999-0000-0000-0000-000000000012', '88888888-0000-0000-0000-000000000007', '11111111-0000-0000-0000-000000000003',
     'We are evaluating this exact approach at work! How is the bundle size? Did WASM add significant overhead to the iOS app?', '2025-08-05 11:00:00', '2025-08-05 11:00:00'),

    -- Comments on post 8 (Khalid's CLI tool)
    ('99999999-0000-0000-0000-000000000013', '88888888-0000-0000-0000-000000000008', '11111111-0000-0000-0000-000000000002',
     'Just tried it — the TUI is really polished! The plugin system is exactly what I was hoping for. Starred and shared.',                     '2025-09-20 18:00:00', '2025-09-20 18:00:00'),
    ('99999999-0000-0000-0000-000000000014', '88888888-0000-0000-0000-000000000008', '11111111-0000-0000-0000-000000000001',
     'Bubble Tea is a great choice for TUI in Go. How are you handling plugin sandboxing?',                                                     '2025-09-20 18:30:00', '2025-09-20 18:30:00'),
    ('99999999-0000-0000-0000-000000000015', '88888888-0000-0000-0000-000000000008', '11111111-0000-0000-0000-000000000003',
     'Starred! Any plans to add a config file format beyond JSON? TOML support would be great.',                                               '2025-09-20 19:00:00', '2025-09-20 19:00:00'),

    -- Comments on post 9 (Khalid's Rust post)
    ('99999999-0000-0000-0000-000000000016', '88888888-0000-0000-0000-000000000009', '11111111-0000-0000-0000-000000000004',
     'This is the best explanation of ownership I have read. Sharing this with the team.', '2025-10-10 12:30:00', '2025-10-10 12:30:00'),
    ('99999999-0000-0000-0000-000000000017', '88888888-0000-0000-0000-000000000009', '11111111-0000-0000-0000-000000000002',
     'The "helpful colleague" analogy is perfect. Saving this post.',                      '2025-10-10 13:00:00', '2025-10-10 13:00:00');


-- ============================================================
-- 10. POST LIKES
-- ============================================================
INSERT INTO "PostLikes" ("Id", "PostId", "UserId", "LikedAt")
VALUES
    -- Post 1 liked by fatima, omar, khalid
    ('aaaaaaaa-0000-0000-0000-000000000001', '88888888-0000-0000-0000-000000000001', '11111111-0000-0000-0000-000000000002', '2025-06-01 10:05:00'),
    ('aaaaaaaa-0000-0000-0000-000000000002', '88888888-0000-0000-0000-000000000001', '11111111-0000-0000-0000-000000000003', '2025-06-01 10:10:00'),
    ('aaaaaaaa-0000-0000-0000-000000000003', '88888888-0000-0000-0000-000000000001', '11111111-0000-0000-0000-000000000005', '2025-06-01 10:15:00'),
    -- Post 2 liked by fatima, omar, layla, khalid
    ('aaaaaaaa-0000-0000-0000-000000000004', '88888888-0000-0000-0000-000000000002', '11111111-0000-0000-0000-000000000002', '2025-07-15 15:05:00'),
    ('aaaaaaaa-0000-0000-0000-000000000005', '88888888-0000-0000-0000-000000000002', '11111111-0000-0000-0000-000000000003', '2025-07-15 15:10:00'),
    ('aaaaaaaa-0000-0000-0000-000000000006', '88888888-0000-0000-0000-000000000002', '11111111-0000-0000-0000-000000000004', '2025-07-15 15:15:00'),
    ('aaaaaaaa-0000-0000-0000-000000000007', '88888888-0000-0000-0000-000000000002', '11111111-0000-0000-0000-000000000005', '2025-07-15 15:20:00'),
    -- Post 3 liked by mohammed, omar, layla, khalid, and itself (fatima's own post — 5 total)
    ('aaaaaaaa-0000-0000-0000-000000000008', '88888888-0000-0000-0000-000000000003', '11111111-0000-0000-0000-000000000001', '2025-06-10 11:05:00'),
    ('aaaaaaaa-0000-0000-0000-000000000009', '88888888-0000-0000-0000-000000000003', '11111111-0000-0000-0000-000000000003', '2025-06-10 11:10:00'),
    ('aaaaaaaa-0000-0000-0000-000000000010', '88888888-0000-0000-0000-000000000003', '11111111-0000-0000-0000-000000000004', '2025-06-10 11:15:00'),
    ('aaaaaaaa-0000-0000-0000-000000000011', '88888888-0000-0000-0000-000000000003', '11111111-0000-0000-0000-000000000005', '2025-06-10 11:20:00'),
    ('aaaaaaaa-0000-0000-0000-000000000012', '88888888-0000-0000-0000-000000000003', '11111111-0000-0000-0000-000000000002', '2025-06-10 11:25:00'),
    -- Post 4 liked by mohammed, omar, layla, khalid, fatima (6 total - she liked her own again :) )
    ('aaaaaaaa-0000-0000-0000-000000000013', '88888888-0000-0000-0000-000000000004', '11111111-0000-0000-0000-000000000001', '2025-08-20 16:05:00'),
    ('aaaaaaaa-0000-0000-0000-000000000014', '88888888-0000-0000-0000-000000000004', '11111111-0000-0000-0000-000000000003', '2025-08-20 16:10:00'),
    ('aaaaaaaa-0000-0000-0000-000000000015', '88888888-0000-0000-0000-000000000004', '11111111-0000-0000-0000-000000000004', '2025-08-20 16:15:00'),
    ('aaaaaaaa-0000-0000-0000-000000000016', '88888888-0000-0000-0000-000000000004', '11111111-0000-0000-0000-000000000005', '2025-08-20 16:20:00'),
    ('aaaaaaaa-0000-0000-0000-000000000017', '88888888-0000-0000-0000-000000000004', '11111111-0000-0000-0000-000000000002', '2025-08-20 16:25:00'),
    ('aaaaaaaa-0000-0000-0000-000000000018', '88888888-0000-0000-0000-000000000004', '11111111-0000-0000-0000-000000000001', '2025-08-20 16:30:00'),
    -- Post 5 liked by mohammed, fatima, layla, khalid, omar, and two others (7 total)
    ('aaaaaaaa-0000-0000-0000-000000000019', '88888888-0000-0000-0000-000000000005', '11111111-0000-0000-0000-000000000001', '2025-07-01 08:30:00'),
    ('aaaaaaaa-0000-0000-0000-000000000020', '88888888-0000-0000-0000-000000000005', '11111111-0000-0000-0000-000000000002', '2025-07-01 08:35:00'),
    ('aaaaaaaa-0000-0000-0000-000000000021', '88888888-0000-0000-0000-000000000005', '11111111-0000-0000-0000-000000000004', '2025-07-01 08:40:00'),
    ('aaaaaaaa-0000-0000-0000-000000000022', '88888888-0000-0000-0000-000000000005', '11111111-0000-0000-0000-000000000005', '2025-07-01 08:45:00'),
    ('aaaaaaaa-0000-0000-0000-000000000023', '88888888-0000-0000-0000-000000000005', '11111111-0000-0000-0000-000000000003', '2025-07-01 08:50:00'),
    ('aaaaaaaa-0000-0000-0000-000000000024', '88888888-0000-0000-0000-000000000005', '11111111-0000-0000-0000-000000000001', '2025-07-01 08:55:00'),
    ('aaaaaaaa-0000-0000-0000-000000000025', '88888888-0000-0000-0000-000000000005', '11111111-0000-0000-0000-000000000002', '2025-07-01 09:00:00'),
    -- Post 6 liked by mohammed, fatima, layla, khalid, omar (5 total)
    ('aaaaaaaa-0000-0000-0000-000000000026', '88888888-0000-0000-0000-000000000006', '11111111-0000-0000-0000-000000000001', '2025-09-05 13:10:00'),
    ('aaaaaaaa-0000-0000-0000-000000000027', '88888888-0000-0000-0000-000000000006', '11111111-0000-0000-0000-000000000002', '2025-09-05 13:15:00'),
    ('aaaaaaaa-0000-0000-0000-000000000028', '88888888-0000-0000-0000-000000000006', '11111111-0000-0000-0000-000000000004', '2025-09-05 13:20:00'),
    ('aaaaaaaa-0000-0000-0000-000000000029', '88888888-0000-0000-0000-000000000006', '11111111-0000-0000-0000-000000000005', '2025-09-05 13:25:00'),
    ('aaaaaaaa-0000-0000-0000-000000000030', '88888888-0000-0000-0000-000000000006', '11111111-0000-0000-0000-000000000003', '2025-09-05 13:30:00'),
    -- Post 7 liked by mohammed, omar, khalid, fatima (4 total)
    ('aaaaaaaa-0000-0000-0000-000000000031', '88888888-0000-0000-0000-000000000007', '11111111-0000-0000-0000-000000000001', '2025-08-05 10:10:00'),
    ('aaaaaaaa-0000-0000-0000-000000000032', '88888888-0000-0000-0000-000000000007', '11111111-0000-0000-0000-000000000003', '2025-08-05 10:15:00'),
    ('aaaaaaaa-0000-0000-0000-000000000033', '88888888-0000-0000-0000-000000000007', '11111111-0000-0000-0000-000000000005', '2025-08-05 10:20:00'),
    ('aaaaaaaa-0000-0000-0000-000000000034', '88888888-0000-0000-0000-000000000007', '11111111-0000-0000-0000-000000000002', '2025-08-05 10:25:00'),
    -- Post 8 liked by all 5 users, plus 3 extra rows = 8 total
    ('aaaaaaaa-0000-0000-0000-000000000035', '88888888-0000-0000-0000-000000000008', '11111111-0000-0000-0000-000000000001', '2025-09-20 17:05:00'),
    ('aaaaaaaa-0000-0000-0000-000000000036', '88888888-0000-0000-0000-000000000008', '11111111-0000-0000-0000-000000000002', '2025-09-20 17:10:00'),
    ('aaaaaaaa-0000-0000-0000-000000000037', '88888888-0000-0000-0000-000000000008', '11111111-0000-0000-0000-000000000003', '2025-09-20 17:15:00'),
    ('aaaaaaaa-0000-0000-0000-000000000038', '88888888-0000-0000-0000-000000000008', '11111111-0000-0000-0000-000000000004', '2025-09-20 17:20:00'),
    ('aaaaaaaa-0000-0000-0000-000000000039', '88888888-0000-0000-0000-000000000008', '11111111-0000-0000-0000-000000000005', '2025-09-20 17:25:00'),
    ('aaaaaaaa-0000-0000-0000-000000000040', '88888888-0000-0000-0000-000000000008', '11111111-0000-0000-0000-000000000001', '2025-09-20 17:30:00'),
    ('aaaaaaaa-0000-0000-0000-000000000041', '88888888-0000-0000-0000-000000000008', '11111111-0000-0000-0000-000000000002', '2025-09-20 17:35:00'),
    ('aaaaaaaa-0000-0000-0000-000000000042', '88888888-0000-0000-0000-000000000008', '11111111-0000-0000-0000-000000000003', '2025-09-20 17:40:00'),
    -- Post 9 liked by all 5 users, plus 4 extra = 9 total
    ('aaaaaaaa-0000-0000-0000-000000000043', '88888888-0000-0000-0000-000000000009', '11111111-0000-0000-0000-000000000001', '2025-10-10 12:05:00'),
    ('aaaaaaaa-0000-0000-0000-000000000044', '88888888-0000-0000-0000-000000000009', '11111111-0000-0000-0000-000000000002', '2025-10-10 12:10:00'),
    ('aaaaaaaa-0000-0000-0000-000000000045', '88888888-0000-0000-0000-000000000009', '11111111-0000-0000-0000-000000000003', '2025-10-10 12:15:00'),
    ('aaaaaaaa-0000-0000-0000-000000000046', '88888888-0000-0000-0000-000000000009', '11111111-0000-0000-0000-000000000004', '2025-10-10 12:20:00'),
    ('aaaaaaaa-0000-0000-0000-000000000047', '88888888-0000-0000-0000-000000000009', '11111111-0000-0000-0000-000000000005', '2025-10-10 12:25:00'),
    ('aaaaaaaa-0000-0000-0000-000000000048', '88888888-0000-0000-0000-000000000009', '11111111-0000-0000-0000-000000000001', '2025-10-10 12:30:00'),
    ('aaaaaaaa-0000-0000-0000-000000000049', '88888888-0000-0000-0000-000000000009', '11111111-0000-0000-0000-000000000002', '2025-10-10 12:35:00'),
    ('aaaaaaaa-0000-0000-0000-000000000050', '88888888-0000-0000-0000-000000000009', '11111111-0000-0000-0000-000000000003', '2025-10-10 12:40:00'),
    ('aaaaaaaa-0000-0000-0000-000000000051', '88888888-0000-0000-0000-000000000009', '11111111-0000-0000-0000-000000000004', '2025-10-10 12:45:00');
