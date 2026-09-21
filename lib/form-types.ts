export type FormKind = "general" | "referral" | "landlord";

export type FormState = {
  ok: boolean | null;
  message: string;
  errors?: Record<string, string>;
};

export const initialFormState: FormState = { ok: null, message: "" };
