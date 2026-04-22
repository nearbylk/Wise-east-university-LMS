export default function CTASection() {
  return (
    /* Call to action section for application */
    <section className="py-20 px-8 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-black">Begin Your Journey</h2>
        {/* Apply Now button with hover effect */}
        <button className="bg-[#424242] text-white px-10 py-3 text-sm font-medium hover:bg-black transition duration-300">
          Apply Now
        </button>
      </div>
    </section>
  );
}