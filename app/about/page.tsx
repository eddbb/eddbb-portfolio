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
            practicing guitar and piano, or rewatching Breaking Bad for the
            third time. I’ve always been someone who enjoys building, learning,
            and experimenting, whether that means going on a new life adventure,
            or as simple as building computers just to see how they work. I’m
            the kind of person who gets energised by challenges and discovery.
            This mindset has taken me from pursuing my degree at KTH to
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
        <p className="text-center max-w-3xl">
          Through my travels across Asia, I’ve been fascinated by how
          differently each society integrates technology into daily life, from
          mobile payment ecosystems in Southeast Asia to public infrastructure
          systems in East Asia. I thus realised that technology should adapt to
          people, not the other way around.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-3">
          <img
            src="/me/about-2.webp"
            alt="Edvin Blomgren"
            className="h-90 rounded-2xl border-2 border-foreground object-cover"
          />
          <p className="text-center max-w-sm">
            I’m passionate about finding ways that digital tools can make life
            simpler, fairer, and more connected. While many see computer science
            as boring and technical, I’ve always been drawn to its human side. I
            love working with people. I thrive in multicultural and
            interdisciplinary teams. I believe that in today’s world,
            understanding technology alone is not sufficient, you also need to
            understand people and context. That’s why I explore beyond my field,
            from taking a psychology course at Monash, to joining weekly pub
            quizzes where I get competitive about history questions. I learn
            best by doing. I’m hungry for opportunities to apply what I know,
            push my limits, and keep growing.
          </p>
        </div>
      </div>
    </main>
  );
}
