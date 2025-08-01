"use client";

export const Footer = () => {
  return (
    <footer className="mt-16 border-t border-green-500/30 py-8 bg-black/80 backdrop-blur-sm relative overflow-hidden">
      {/* Matrix code background */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute font-mono text-xs text-green-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="text-lg font-mono font-bold text-green-400 border-b border-green-500/30 pb-1">
                <span className="text-white">KRNL</span> P2P <span className="text-xs opacity-70">MARKETPLACE</span>
              </div>
            </div>
            <p className="text-sm text-green-400/70 font-mono mt-1 flex items-center">
              <span className="inline-block w-2 h-2 bg-green-400 mr-2 animate-pulse"></span>
              Secured by Chainanalysis KRNL verification
            </p>
          </div>
          
          <div className="flex space-x-6 border border-green-500/30 px-4 py-2 bg-black/50">
            <a href="#" className="text-green-400/70 hover:text-green-400 transition-colors group relative">
              <span className="sr-only">Documentation</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs font-mono text-green-400/70 opacity-0 group-hover:opacity-100 transition-opacity">DOCS</span>
            </a>
            <a href="#" className="text-green-400/70 hover:text-green-400 transition-colors group relative">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs font-mono text-green-400/70 opacity-0 group-hover:opacity-100 transition-opacity">REPO</span>
            </a>
            <a href="#" className="text-green-400/70 hover:text-green-400 transition-colors group relative">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs font-mono text-green-400/70 opacity-0 group-hover:opacity-100 transition-opacity">SOCIAL</span>
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-green-500/20">
          <p className="text-center text-xs font-mono text-green-400/60 flex items-center justify-center">
            <span className="mr-2">[</span>
            &copy; {new Date().getFullYear()} KRNL Labs. All rights reserved.
            <span className="ml-2">]</span>
          </p>
          
          {/* Matrix-style binary code line */}
          <div className="flex justify-center mt-2 overflow-hidden">
            <div className="text-xs font-mono text-green-400/30 tracking-wider animate-pulse">
              {"01010011 01000101 01000011 01010101 01010010 01000101 00100000 01010000 00110010 01010000"}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Component is already exported as a named export
