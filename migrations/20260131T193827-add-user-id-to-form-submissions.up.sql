-- Migration: add-user-id-to-form-submissions

ALTER TABLE form_submissions ADD COLUMN user_id INTEGER REFERENCES users(id);
CREATE INDEX idx_form_submissions_user_id ON form_submissions(user_id);
