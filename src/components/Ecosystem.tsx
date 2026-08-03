const platforms = [
  {
    name: 'Vairify',
    desc: 'Safety platform for adult service providers',
    logo: '/assets/vairify-circle-dark.svg',
    status: 'LIVE',
    flagship: true,
  },
  {
    name: 'VAI Vault',
    desc: 'Secure document storage',
    logo: '/assets/Vai Vault.svg',
    status: '',
    flagship: false,
  },
  {
    name: 'Avictria',
    desc: 'Verified escort directory',
    logo: '/assets/3.svg',
    status: '',
    flagship: false,
  },
  {
    name: 'AVChexxx',
    desc: 'Adult performer verification',
    logo: '/assets/AVChexx LOGO.svg',
    status: '',
    flagship: false,
  },
  {
    name: 'Girlfriend Exchange',
    desc: 'Companion services platform',
    logo: '/assets/GFExhange.svg',
    status: '',
    flagship: false,
  },
  {
    name: 'Erotic Kneads',
    desc: 'Massage services directory',
    logo: '/assets/partner-erotic-kneads.svg',
    status: '',
    flagship: false,
  },
  {
    name: 'Your Platform Here',
    desc: 'Integrate ChainPass V.A.I. for free',
    logo: '',
    status: 'INTEGRATE',
    flagship: false,
    isPlaceholder: true,
  },
];

export default function Ecosystem() {
  return (
    <section className="cp-section-dark py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="
            text-5xl md:text-6xl lg:text-7xl font-black
            mb-4
          " style={{ color: 'var(--cp-accent-teal)' }}>
            ONE ChainPass V.A.I.
          </h2>
          <p className="
            text-3xl md:text-4xl font-bold
            text-white
            mb-4
          ">
            Every Platform.
          </p>
          <p className="
            text-lg text-gray-400
            max-w-xl mx-auto
            mb-8
          ">
            Users verify once and arrive verified — on your platform, and every platform that joins after.
          </p>

          {/* CTA */}
          <button
            onClick={() => {
              const form = document.querySelector('section.cp-section-primary:last-of-type');
              form?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="
              px-8 py-4
              text-black font-bold text-lg
              rounded-lg
              shadow-lg hover:shadow-xl
              transform hover:scale-105
              transition-all duration-200
            "
            style={{ backgroundColor: 'var(--cp-accent-teal)' }}
          >
            Request integration
          </button>
        </div>

        {/* Divider */}
        <div className="w-24 h-1 mx-auto my-12" style={{ backgroundColor: 'var(--cp-accent-teal)' }} />

        {/* Subheader */}
        <div className="text-center mb-12">
          <p className="
            text-xl font-bold text-white
            mb-2
          ">
            ChainPass is proud to power Vairify — and platforms joining every day.
          </p>
          <p style={{ color: 'var(--cp-accent-teal)' }}>
            One ChainPass V.A.I. Zero-knowledge architecture. Unlimited Platforms.
          </p>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className={`
                relative p-6 rounded-xl text-center
                transition-all duration-300
                ${platform.isPlaceholder
                  ? 'border-2 border-dashed bg-[#12121a] hover:bg-[#1a1a2e] cursor-pointer'
                  : platform.flagship
                    ? 'border-2 bg-[rgba(0,212,170,0.1)] text-white'
                    : 'border-2 bg-[#1a1a2e] hover:border-[rgba(0,212,170,0.5)]'
                }
              `}
              style={{
                borderColor: platform.isPlaceholder
                  ? 'var(--cp-accent-teal)'
                  : platform.flagship
                    ? 'var(--cp-accent-teal)'
                    : '#2d3748',
                boxShadow: platform.flagship ? '0 0 30px rgba(0, 212, 170, 0.3)' : 'none'
              }}
              onClick={platform.isPlaceholder ? () => {
                const form = document.querySelector('section.cp-section-primary:last-of-type');
                form?.scrollIntoView({ behavior: 'smooth' });
              } : undefined}
            >
              {/* Flagship badge */}
              {platform.flagship && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="
                    px-4 py-1
                    bg-[#00d4aa]
                    text-black text-xs font-bold uppercase tracking-wider
                    rounded-full
                    whitespace-nowrap
                  ">
                    ⭐ Flagship Partner
                  </span>
                </div>
              )}

              {/* Icon - FIXED SIZE CONTAINER */}
              {!platform.isPlaceholder && (
                <div className="h-24 flex items-center justify-center mb-3 overflow-hidden">
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className={`object-contain rounded-xl ${
                      ['Avictria', 'AVChexxx', 'Girlfriend Exchange', 'Erotic Kneads'].includes(platform.name)
                        ? 'max-h-14 max-w-14'
                        : 'max-h-24 max-w-24'
                    }`}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}

              {platform.isPlaceholder && (
                <div className="h-24 flex items-center justify-center mb-3">
                  <div className="text-6xl text-gray-600">+</div>
                </div>
              )}

              {/* Name */}
              <h3 className="text-xl font-bold text-white mb-2">
                {platform.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-4">
                {platform.desc}
              </p>

              {/* Status */}
              {platform.status && (
                <span className={`
                  inline-block px-3 py-1 rounded-full text-xs font-bold uppercase
                  ${platform.status === 'LIVE'
                    ? 'bg-[rgba(239,68,68,0.2)] text-[#ef4444]'
                    : platform.status === 'INTEGRATE'
                      ? 'text-black'
                      : 'bg-gray-500/20 text-gray-400'
                  }
                `}
                style={platform.status === 'INTEGRATE' ? { backgroundColor: 'var(--cp-accent-teal)' } : {}}
                >
                  {platform.status === 'LIVE' ? '● LIVE' : platform.status === 'INTEGRATE' ? 'Integrate Free' : platform.status}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
