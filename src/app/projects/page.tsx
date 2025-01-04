import SocialLinks from "@/components/SocialLinks";

export default function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-4xl">Projects</p>
      <p>
        Welcome to my blog! Here, I will be sharing my thoughts and experiences
        about web development. My plan is to write a post whenever I solve a
        problem that I want to remember or learn something new. I hope you find
        something useful here. These days, I mostly work with React and Next.js,
        so expect content related to those technologies.
      </p>
      <div className="flex gap-2 items-center">
        <p>Social Links:</p>
        <SocialLinks />
      </div>
    </div>
  );
}
