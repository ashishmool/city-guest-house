
-- Inserting a system_user with Admin role
INSERT INTO system_users (user_id, first_name, last_name, role, email, password)
VALUES (0,'Ashish', 'Mool', 'Admin', 'cityguesthouse2014@gmail.com', '$2a$12$6Kp2ZUQhu3W1./FbuB1YbOCCzKexnmeUkAcxkJk6w.vZADb/eBaZ6');


-- Inserting a role for Admin
INSERT INTO roles (id, name) VALUES (1, 'Admin');
INSERT INTO roles (id, name) VALUES (2, 'Customer');

-- Mapping role for UserId as RoleId for Admin
INSERT INTO users_roles (user_id, role_id) VALUES (0, 1);


-- Inserting Email Credentials
INSERT INTO public.email_credentials (id, email, password, host, port, date, active, protocol)
VALUES (1,'cityguesthouse2014@gmail.com', 'vgcb bsze nknx evzf', 'smtp.gmail.com', '587','2024-01-19 16:04:32.000000', true, 'smtp');
