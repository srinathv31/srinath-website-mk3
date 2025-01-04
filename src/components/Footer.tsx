import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-between">
      <div>
        <p>Copyright &copy; 2025</p>
      </div>
      <div>
        <SocialLinks />
      </div>
    </footer>
  );
}
