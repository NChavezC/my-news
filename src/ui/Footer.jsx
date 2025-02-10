function Footer() {
  return (
    <footer className="text-right py-4 my-4 border border-stone-300 dark:border-stone-800">
      <p>
        NChavez <span>&trade;</span> {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
