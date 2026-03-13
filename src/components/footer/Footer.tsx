const Footer = () => {
  return (
    <div className="min-h-32 w-screen bg-footer-background pt-2">
      <div className="px-4 flex flex-col gap-3">
        <section className="flex flex-col gap-1 text-[14px]">
          <p className="text-primary/60">Connect</p>
          <a
            href="https://github.com/julienb84"
            target="_blank"
            className="text-primary"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/julien-bouchez-developer/"
            target="_blank"
            className="text-primary"
          >
            LinkedIn
          </a>
        </section>
        <span className="text-primary text-[12px]">© Julien Bouchez 2026</span>
      </div>
    </div>
  );
};

export default Footer;
