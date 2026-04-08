export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-950 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          © {currentYear} ALLBLUE Portfolio. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
