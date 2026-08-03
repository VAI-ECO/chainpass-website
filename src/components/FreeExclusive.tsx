export default function FreeExclusive() {
  const scrollToForm = () => {
    const form = document.querySelector('section.cp-section-primary:last-of-type');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="cp-section-dark py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Headline in mint */}
        <h2 className="
          text-5xl md:text-6xl lg:text-7xl
          font-black
          mb-6
        " style={{ color: 'var(--cp-accent-teal)' }}>
          Free. And not exclusive.
        </h2>

        {/* Body white */}
        <p className="
          text-xl md:text-2xl
          text-white
          mb-4
        ">
          Integration costs nothing. Keep whatever you're using now — ChainPass runs alongside it, not instead of it.
        </p>

        <p className="
          text-xl md:text-2xl
          text-white
          mb-12
        ">
          Every user who already has a V.A.I. can use it on your platform from day one.
        </p>

        {/* CTA */}
        <button
          onClick={scrollToForm}
          className="
            inline-flex items-center gap-2
            px-8 py-4
            text-black font-bold text-lg
            rounded-lg
            shadow-lg hover:shadow-xl
            transform hover:scale-105 active:scale-100
            transition-all duration-200
          "
          style={{ backgroundColor: 'var(--cp-accent-teal)' }}
        >
          Request integration →
        </button>
      </div>
    </section>
  );
}
