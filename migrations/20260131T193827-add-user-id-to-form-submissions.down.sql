-- Rollback: add-user-id-to-form-submissions

DROP INDEX IF EXISTS idx_form_submissions_user_id;
ALTER TABLE form_submissions DROP COLUMN IF EXISTS user_id;
