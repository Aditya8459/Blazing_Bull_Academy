import emailjs from '@emailjs/browser';

const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } = import.meta.env;

export const isEmailConfigured = () => Boolean(
  VITE_EMAILJS_SERVICE_ID && VITE_EMAILJS_TEMPLATE_ID && VITE_EMAILJS_PUBLIC_KEY,
);

export async function sendEmail(form: HTMLFormElement): Promise<void> {
  if (!isEmailConfigured()) throw new Error('EmailJS is not configured.');

  try {
    await emailjs.sendForm(
      VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_TEMPLATE_ID,
      form,
      { publicKey: VITE_EMAILJS_PUBLIC_KEY },
    );
  } catch (error: any) {
    console.error(error);
    console.error(error?.text);
    throw error;
  }
}