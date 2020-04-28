-- -- Paste in the following to create type -------------
-- CREATE TYPE "type-order_status" AS enum
-- ( 
--   'new',
--   'in-process',
--   'rejected',
--   'packed',
--   'delivered'
-- );

-- -- Paste in the following to create a function --------
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER 
AS $$
   BEGIN
      NEW.status_changed_at = NOW();
   RETURN NEW;
   END;
$$ 
LANGUAGE 
   plpgsql;

-- Table for "active" orders ----
CREATE TABLE allUsers
(
  id SERIAL PRIMARY KEY, 
   user_name VARCHAR NOT NULL,
   created_in_app_at TIMESTAMPTZ DEFAULT NOW()
);
--- Table for finished orders ----
CREATE TABLE MSF_users
(
   id SERIAL PRIMARY KEY, 
   user_name VARCHAR NOT NULL,
   created_in_app_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE users_sessions(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR NOT NULL,
    logged_in date,
    logged_out date,
    session_time data
)

--- Paste in the following to connect trigger to table ---------
CREATE TRIGGER 
   set_timestamp
BEFORE
UPDATE ON 
   orders
FOR EACH ROW
EXECUTE PROCEDURE 
   trigger_set_timestamp();
--  butikk tabell


   -- Trigger that deletes rows from table orders 
   -- if created_in_app timestamp is older than 120 minute -> (created_in_app_at < NOW() - INTERVAL '120 minute').
   -- and order_status is rejected or delivered

-- CREATE OR REPLACE FUNCTION
--    delete_old_rows() 
-- RETURNS TRIGGER 
-- AS $$
--    BEGIN
--       DELETE FROM 
--          orders 
--       WHERE order_status = 'rejected'
--       OR order_status = 'delivered'
--       AND created_in_app_at < NOW() - INTERVAL '120 minute';
--       RETURN NEW;
--    END;
-- $$
-- LANGUAGE
--    plpgsql;

-- CREATE TRIGGER 
--    delete_old_rows_trigger
--    AFTER INSERT ON 
--       orders
--    EXECUTE PROCEDURE
--       delete_old_rows(); 