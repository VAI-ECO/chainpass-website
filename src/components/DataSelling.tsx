export default function DataSelling() {
  return (
    <section className="cp-section-dark py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Opening question */}
        <h2 className="
          text-3xl md:text-4xl font-bold
          text-white
          mb-8
        ">
          Why do traditional platforms risk saving your data?
        </h2>

        {/* THE ANSWER - MASSIVE */}
        <p className="
          text-7xl md:text-8xl lg:text-9xl
          font-black
          mb-8
          leading-none
        " style={{ color: 'var(--cp-accent-teal)' }}>
          Money.
        </p>

        {/* Supporting stat */}
        <p className="
          text-xl md:text-2xl
          text-gray-300
          mb-6
        ">
          Data brokering is a{' '}
          <span className="font-bold text-[#ff6b6b]">$280 billion/year</span>
          {' '}business.
        </p>

        {/* Explanation */}
        <p className="
          text-lg
          text-gray-400
          max-w-2xl mx-auto
          mb-12
        ">
          That tailor-made email you received last week? Those SMS messages that keep coming?
          That ad that follows you everywhere? Platforms you trusted sold your data.
        </p>

        {/* Zero-knowledge intro */}
        <p className="text-2xl font-bold text-white mb-4">
          Zero-knowledge architecture means we never have your data.
        </p>

        {/* Punchline */}
        <p className="
          text-2xl md:text-3xl
          font-bold
        ">
          <span className="text-gray-400">V.A.I. platforms </span>
          <span className="line-through text-gray-600">won't</span>
          <span style={{ color: 'var(--cp-accent-teal)' }}> can't </span>
          <span className="text-white">sell what they never have.</span>
        </p>
      </div>
    </section>
  );
}
