import { sendEmail } from './emailService';

export async function submitRegistration(form: HTMLFormElement): Promise<void> {
  await sendEmail(form);
}
