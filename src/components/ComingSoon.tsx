import { useState } from 'react';
import { Link } from 'react-router-dom';

// ---------------------------------------------------------------------------
// Waitlist persistence. Fill these with the self-hosted Supabase values and the
// front-page form writes to the coming_soon_signups table. Left blank it still
// works (graceful) but only logs the email — set these before go-live.
// ---------------------------------------------------------------------------
const CONFIG = {
  SUPABASE_URL: '',        // e.g. https://api.chainpass.io
  SUPABASE_ANON_KEY: '',
  TABLE: 'coming_soon_signups',
};

const NAVY = '#0A1929';
const CYAN = '#00D4FF';
const TEAL = '#00d4aa';
const CARD = '#0f2136';
const BORDER = '#1e3a5f';

const featured = {
  name: 'Vairify',
  desc: 'The safety platform for adult service providers. Verify identity, monitor meetings, and keep blockchain-verified reviews — all safety features free forever.',
  url: 'https://vairify.io',
};

const ecosystem = [
  { name: 'VAI Vault', desc: 'Secure, encrypted document storage', url: 'https://vaivault.io' },
  { name: 'Avictria', desc: 'Verified escort directory', url: 'https://avictria.ch' },
  { name: 'AVCheXX', desc: 'Adult performer verification', url: 'https://avchexx.com' },
  { name: 'Girlfriend Exchange', desc: 'Companion services platform', url: 'https://gfexchange.ch' },
  { name: 'Erotic Kneads', desc: 'Massage services directory', url: 'https://erotickneads.ch' },
];

const zk = [
  { title: 'We can’t give what we never have', body: 'A licensed KYC partner verifies the ID, then deletes it. We only ever receive a verified photo. No name, no address, no birthday, no ID number.' },
  { title: 'Verified — not stored', body: 'Every user proves they are a real, unique human. What proves it never touches your servers or ours. Zero-knowledge by architecture, not by promise.' },
  { title: 'One V.A.I., every platform', body: 'A single Verified Anonymous Identity your users carry across every site in the ecosystem. Verify once. Trust everywhere.' },
];

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  async function join(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      if (CONFIG.SUPABASE_URL && CONFIG.SUPABASE_ANON_KEY) {
        const res = await fetch(`${CONFIG.SUPABASE_URL}/rest/v1/${CONFIG.TABLE}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            apikey: CONFIG.SUPABASE_ANON_KEY,
            Authorization: `Bearer ${CONFIG.SUPABASE_ANON_KEY}`,
            Prefer: 'return=minimal',
          },
          body: JSON.stringify({ email, product: 'chainpass', source: 'coming_soon' }),
        });
        if (!res.ok && res.status !== 409) throw new Error(`HTTP ${res.status}`);
      } else {
        console.warn('Waitlist endpoint not configured — email captured client-side only:', email);
      }
      setStatus('done');
    } catch (err) {
      console.error('Waitlist submit failed', err);
      setStatus('error');
    }
  }

  return (
    <div style={{ background: NAVY, color: '#fff', minHeight: '100vh', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
      <style>{`
        .cp-wrap{max-width:1120px;margin:0 auto;padding:0 24px}
        .cp-grid3{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}
        .cp-eco{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px}
        .cp-h1{font-size:clamp(38px,6.5vw,72px);line-height:1.03;font-weight:800;letter-spacing:-.02em;margin:0}
        .cp-cta{display:inline-flex;align-items:center;gap:8px;border-radius:10px;padding:14px 26px;font-weight:700;text-decoration:none;cursor:pointer;border:none;font-size:16px}
        .cp-input{flex:1;min-width:220px;background:#08131f;border:1px solid #1e3a5f;color:#fff;border-radius:10px;padding:14px 16px;font-size:16px}
        .cp-link{color:#8fb6d6;text-decoration:none}
      `}</style>

      <header className="cp-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 24px' }}>
        <div style={{ fontWeight: 800, fontSize: 22 }}>Chain<span style={{ color: CYAN }}>Pass</span></div>
        <span style={{ fontSize: 12, fontWeight: 700, color: CYAN, border: `1px solid ${CYAN}`, borderRadius: 999, padding: '5px 12px' }}>COMING SOON</span>
      </header>

      {/* B2B hero */}
      <section className="cp-wrap" style={{ padding: '52px 24px 22px', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', fontSize: 12, fontWeight: 800, letterSpacing: '.14em', color: CYAN, marginBottom: 20 }}>IDENTITY INFRASTRUCTURE</div>
        <h1 className="cp-h1">The ID that works everywhere<br /><span style={{ color: CYAN }}>and lives nowhere.</span></h1>
        <p style={{ fontSize: 'clamp(16px,2.4vw,21px)', color: '#b9cbdd', maxWidth: 680, margin: '22px auto 6px' }}>
          For platforms that want to give their users ultimate control — and the safety of zero-knowledge architecture.
        </p>
        <p style={{ fontSize: 'clamp(15px,2vw,18px)', color: '#fff', fontWeight: 700, marginBottom: 30 }}>Prove you’re real. Stay anonymous.</p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#waitlist" className="cp-cta" style={{ background: CYAN, color: NAVY }}>Join the waiting list</a>
          <Link to="/signup" className="cp-cta" style={{ background: 'transparent', color: '#fff', border: `1px solid ${BORDER}` }}>For platforms →</Link>
        </div>
      </section>

      {/* Zero-knowledge value props */}
      <section className="cp-wrap" style={{ padding: '36px 24px' }}>
        <div className="cp-grid3">
          {zk.map((z) => (
            <div key={z.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10, color: CYAN }}>{z.title}</div>
              <div style={{ color: '#9fb4c7', fontSize: 14, lineHeight: 1.6 }}>{z.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming soon — Vairify front and center */}
      <section className="cp-wrap" style={{ padding: '30px 24px 10px' }}>
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(13px,2vw,15px)', fontWeight: 800, letterSpacing: '.16em', color: '#7f97ad', marginBottom: 22 }}>COMING SOON — POWERED BY CHAINPASS</h2>
        <a href={featured.url} target="_blank" rel="noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
          <div style={{ background: 'linear-gradient(135deg,#10233a,#0c1b2e)', border: `1px solid ${TEAL}`, borderRadius: 18, padding: 'clamp(26px,5vw,40px)', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', fontSize: 12, fontWeight: 800, color: TEAL, border: `1px solid ${TEAL}`, borderRadius: 999, padding: '4px 12px', marginBottom: 14 }}>FLAGSHIP</div>
            <div style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>{featured.name}</div>
            <p style={{ color: '#b9cbdd', maxWidth: 620, margin: '0 auto 18px', fontSize: 'clamp(15px,2vw,17px)', lineHeight: 1.6 }}>{featured.desc}</p>
            <span className="cp-cta" style={{ background: TEAL, color: NAVY }}>Visit vairify.io →</span>
          </div>
        </a>
      </section>

      {/* Other ecosystem sites with active links */}
      <section className="cp-wrap" style={{ padding: '18px 24px 20px' }}>
        <div className="cp-eco">
          {ecosystem.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, height: '100%' }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 6 }}>{s.name} <span style={{ color: CYAN }}>→</span></div>
                <div style={{ color: '#8ba1b5', fontSize: 13, lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="cp-wrap" style={{ padding: '30px 24px 60px' }}>
        <div style={{ background: CARD, border: `1px solid ${CYAN}`, borderRadius: 18, padding: 'clamp(26px,5vw,44px)', textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <h3 style={{ fontSize: 'clamp(22px,3.5vw,30px)', fontWeight: 800, marginBottom: 10 }}>Be first to integrate</h3>
          <p style={{ color: '#b9cbdd', marginBottom: 22 }}>Building a platform where privacy isn’t optional? Join the list for early access to the V.A.I. API and launch partner terms.</p>
          {status === 'done' ? (
            <div style={{ background: 'rgba(0,212,255,.1)', border: `1px solid ${CYAN}`, borderRadius: 12, padding: 18, color: CYAN, fontWeight: 700 }}>
              You are on the list. We will be in touch.
            </div>
          ) : (
            <form onSubmit={join} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <input className="cp-input" type="email" required placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button className="cp-cta" type="submit" style={{ background: CYAN, color: NAVY }} disabled={status === 'loading'}>
                {status === 'loading' ? 'Joining…' : 'Join'}
              </button>
              {status === 'error' && <div style={{ width: '100%', color: '#f87171', fontSize: 14 }}>Something went wrong. Please try again.</div>}
            </form>
          )}
        </div>
      </section>

      <footer style={{ borderTop: `1px solid ${BORDER}`, padding: '26px 24px' }}>
        <div className="cp-wrap" style={{ display: 'flex', gap: 18, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', color: '#5f7590', fontSize: 13 }}>
          <span>ChainPass · Delaware C-Corp · support@chainpass.id</span>
          <span style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
            <Link to="/signup" className="cp-link">For platforms</Link>
            <a href="https://vairify.io" className="cp-link" target="_blank" rel="noreferrer">Vairify</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
