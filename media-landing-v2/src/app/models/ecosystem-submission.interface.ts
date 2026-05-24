export interface EcosystemSubmissionInput {
  name: string;
  email: string;
  phone?: string | null;
  designation?: string | null;
  message: string;
}

export interface EcosystemSubmission extends EcosystemSubmissionInput {
  id: string; // uuid
  created_at: string;
  updated_at: string;
}
