-- Migration: add-form-submissions

CREATE TABLE form_submissions (
  id SERIAL PRIMARY KEY,
  form_type TEXT NOT NULL,
  email TEXT,
  name TEXT,
  company TEXT,
  data JSONB NOT NULL DEFAULT '{}',
  ip_address INET,
  user_agent TEXT,
  referrer TEXT,
  session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_form_submissions_form_type ON form_submissions(form_type);
CREATE INDEX idx_form_submissions_email ON form_submissions(email);
CREATE INDEX idx_form_submissions_created_at ON form_submissions(created_at DESC);
CREATE INDEX idx_form_submissions_data ON form_submissions USING GIN(data);
