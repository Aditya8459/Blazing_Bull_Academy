import { SITE } from '../config/site';
const P: Record<string, [string, [string, string][]]> = {
 privacy: ['Privacy Policy', [['Information we collect', 'When you register, we may collect your name, date of birth, phone and WhatsApp numbers, email, city, state, trading experience and any message you submit.'],
  ['How we use it', 'We use this information to contact you about Blazzing Bull Academy programs, answer your questions and manage your registration.'],
  ['Sharing', 'We do not sell your personal information. We share it only with service providers needed to operate the academy, or where required by law.'],
  ['Your choices', `To access, correct or delete your information, contact ${SITE.email}.`], ['Updates', 'We may update this policy from time to time. Continued use of the website means you accept the updated policy.']]],
 terms: ['Terms & Conditions', [['Educational nature', 'The program is for education only. It is not financial, investment or trading advice.'], ['Registration', 'Registration is complete once you submit the form and the academy team confirms it with you.'],
  ['Course fee', `The fee for the 60-day program is ${SITE.fee}. Payment and refund details will be shared by the academy team at registration.`], ['Student responsibilities', 'Provide accurate information, use the material for personal learning, and take responsibility for your own trading decisions.'],
  ['Intellectual property', 'All course content, strategies, branding and materials belong to Blazzing Bull Academy and may not be copied, shared or resold without permission.'],
  ['Website usage', 'Use this website lawfully and do not attempt to disrupt or misuse it.'], ['Risk disclaimer', SITE.disclaimer],
  ['Limitation of liability', 'To the extent permitted by law, Blazzing Bull Academy is not liable for any trading losses or other damages arising from use of the website or program.']]],
 risk: ['Risk Disclaimer', [['', SITE.disclaimer]]],
};
export default function Legal({ page }: { page: string }) {
  const [t, s] = P[page];
  return (<main className="mx-auto max-w-3xl px-5 py-28"><a href="#" className="text-gold">← Back to home</a><h1 className="mt-6 font-display text-4xl font-bold">{t}</h1>
    {s.map(([h, b]) => <section key={h} className="mt-8">{h && <h2 className="text-xl font-semibold">{h}</h2>}<p className="mt-2 text-white/65">{b}</p></section>)}</main>);
}
