export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactValidationResult {
  valid: boolean;
  errors: string[];
  data?: ContactFormData;
}

const LIMITS = {
  name: 100,
  email: 254,
  message: 5000,
} as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Remove control characters; preserve newlines/tabs in message only. */
function stripControlChars(value: string, allowNewlines = false): string {
  if (allowNewlines) {
    return value.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
  }
  return value.replace(/[\x00-\x1F\x7F]/g, ' ').replace(/\s+/g, ' ').trim();
}

export function sanitizeContactInput(raw: {
  name: string;
  email: string;
  message: string;
}): ContactFormData {
  return {
    name: stripControlChars(raw.name).slice(0, LIMITS.name),
    email: stripControlChars(raw.email.toLowerCase()).slice(0, LIMITS.email),
    message: stripControlChars(raw.message, true).slice(0, LIMITS.message),
  };
}

export function validateContactForm(raw: {
  name: string;
  email: string;
  message: string;
}): ContactValidationResult {
  const errors: string[] = [];
  const data = sanitizeContactInput(raw);

  if (!data.name || data.name.length < 2) {
    errors.push('Please enter your name (at least 2 characters).');
  }

  if (!data.email) {
    errors.push('Email is required.');
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.push('Please enter a valid email address.');
  }

  if (!data.message || data.message.length < 10) {
    errors.push('Message must be at least 10 characters.');
  }

  return {
    valid: errors.length === 0,
    errors,
    data: errors.length === 0 ? data : undefined,
  };
}

export function buildMailtoUrl(
  recipient: string,
  data: ContactFormData,
): string {
  const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`);
  const body = encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
  );
  return `mailto:${recipient}?subject=${subject}&body=${body}`;
}

export function openMailto(url: string): boolean {
  try {
    const link = document.createElement('a');
    link.href = url;
    link.rel = 'noopener noreferrer';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return true;
  } catch {
    return false;
  }
}
