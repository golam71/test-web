const testimonials = [
  [
    {
      content:
        "Love this app with the customability of the calculation methods and madhab selection. The Qibla compass is accurate for me. The design, aesthetics and themes are amazing.",
      author: {
        name: "Mohammed Khan",
        image: "person1.png",
      },
    },
    {
      content:
        "For first release it may seem bare bones compared to others.. but don’t let that fool you, this is robust and offers everything WITHOUT ads!!!",
      author: {
        name: " sajjz",
        image: "person2.png",
      },
    },
  ],
  [
    {
      content:
        "This was an amazing app and beautifully made MashAllah! The design and UI of the app is very elegant and the Quran with the translations and Hadiths are an amazing addition as well considering it’s all ad-free.",
      author: {
        name: "FahmiK78",
        image: "person3.png",
      },
    },
    {
      content:
        "This actually really helps me study Quran and it even has an interactive tool to point you in the direction of Mecca! All without advertisements it’s super great, bless your hearts Salam team!",
      author: {
        name: "Cowboy7657",
        image: "person4.png",
      },
    },
  ],
  [
    {
      content:
        "Phenomenal. It really is ad-free and the features are really cool. It have qibla direction, Quran, and even salah tracker. I am quite impressed at what one can do for free.",
      author: {
        name: "Firdaus Safari",
        image: "person5.png",
      },
    },
    {
      content:
        "Alhamdulillah, Amazing App. Have all the basic and important information. Looking forward to all the future improvements. May Allah ease.",
      author: {
        name: "Muhammad Faiz",
        image: "person6.png",
      },
    },
  ],
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="py-20 sm:py-32"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="testimonials-semi-title"
            className="font-display font-bold text-3xl tracking-tight text-white sm:text-4xl"
          >
            Loved by Muslims Worldwide.
          </h2>
          <p className="mt-4 text-white text-lg tracking-tight text-slate-700">
            Our app is simple and focused on the features you need and free of
            distracting ads so you can concentrate on your spirituality.
          </p>
        </div>

        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-6 sm:space-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <div class="relative group shadow-xl shadow-slate-900 select-none cursor-pointer">
                      <div class="absolute -inset-1 bg-gradient-to-r from-aquamarine-600 to-indigo-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                      <div class="relative px-7 py-6 bg-smoke-400 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-9  border-2 border-aquamarine">
                        <figure className="relative rounded-2xl  p-6 ">
                          <blockquote className="relative">
                            <p className="text-xl tracking-tight  text-white">
                              {testimonial.content}
                            </p>
                          </blockquote>
                          <figcaption className="relative mt-6 flex flex-row-reverse  items-center justify-between border-t border-slate-100 pt-6">
                            <div>
                              <div className="font-display text-base text-white">
                                {testimonial.author.name}
                              </div>
                            </div>
                            <div className="h-8 w-8 overflow-hidden rounded-full bg-slate-50">
                              <img
                                src={testimonial.author.image}
                                alt="image"
                                height={32}
                                width={32}
                              />
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
