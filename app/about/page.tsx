import Underline from "@/components/Underline";

export default function AboutPage() {
  return (
    <main>
      <div className="flex flex-col items-center gap-6 mt-6 px-6 pb-10">
        <h1 className="text-4xl">About Me</h1>
        <Underline />
        <div className="flex flex-col md:flex-row gap-4 md:gap-3">
          <p className="text-center max-w-sm">
            On a typical day, you might find me coding, playing video games,
            practicing guitar, or rewatching Breaking Bad for the millionth
            time. I've always been someone who enjoys building, learning, and
            experimenting, whether that means going on a new life adventure, or
            doing something as simple as building computers. I'm the kind of
            person who gets energised by challenges and discovery. This mindset
            has taken me from pursuing my Computer Science degree at KTH to
            completing an exchange semester at Monash University in Australia.
            Living and studying abroad exposed me to new ideas, cultures, and
            working styles, and made me realise how diversity and collaboration
            drive innovation.
          </p>
          <img
            src="/me/about-1.webp"
            alt="Edvin Blomgren"
            className="h-90 rounded-2xl border-2 border-foreground object-cover"
          />
        </div>
        <p className="text-center md:max-w-3xl max-w-sm">
          Throughout my travels across Asia, I was fascinated by how differently
          each society integrates technology into their daily life, from the
          mobile payment ecosystems in Southeast Asia to the public
          infrastructure systems in East Asia. I thus realised that technology
          should adapt to the people, not the other way around.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-3">
          <img
            src="/me/about-2.webp"
            alt="Edvin Blomgren"
            className="h-90 rounded-2xl border-2 border-foreground object-cover"
          />
          <p className="text-center max-w-sm">
            I'm passionate about finding ways that digital tools can make life
            simpler, fairer, and more connected. While many may see Computer
            Science as boring and technical, I've always been fascinated with
            what it can do for people and how it promotes effective workflows.
            Technologies such as Machine Learning and AI have the potential to
            revolutionise how we live and work, and I intend on exploring this
            further. As a Data Scientist, I'm hungry for new opportunities to
            apply what I know, push my limits, and keep growing.
          </p>
        </div>
      </div>
    </main>
  );
}
