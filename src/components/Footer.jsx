export default function Footer(){
  return (
    <footer className="mt-20 border-t border-black/10 dark:border-white/10 py-10 text-sm text-black/60 dark:text-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} SomDev Solutions. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-600">Privacy</a>
          <a href="#" className="hover:text-blue-600">Terms</a>
          <a href="#" className="hover:text-blue-600">Security</a>
        </div>
      </div>
    </footer>
  );
}
