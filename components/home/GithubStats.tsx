import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeUp from "@/components/animations/FadeUp";

export default function GithubStats() {
  return (
    <section
      id="github"
      className="bg-white py-28 dark:bg-slate-950"
    >
      <Container>

        <FadeUp>
          <SectionHeading
            eyebrow="GitHub"
            title="My GitHub Activity"
            description="I enjoy building projects, experimenting with new technologies and continuously improving my development skills."
          />
        </FadeUp>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* GitHub Stats */}

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-700 dark:bg-slate-900">

            <img
              src="https://github-readme-stats.vercel.app/api?username=hanwant26&show_icons=true&theme=transparent&hide_border=true"
              alt="GitHub Stats"
              className="w-full"
            />

          </div>

          {/* Top Languages */}

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-700 dark:bg-slate-900">

            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=hanwant26&layout=compact&theme=transparent&hide_border=true"
              alt="Top Languages"
              className="w-full"
            />

          </div>

        </div>

      </Container>
    </section>
  );
}