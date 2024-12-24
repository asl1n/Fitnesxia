module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // BG
        Aslin: `linear-gradient(
          to right,
          #191923 0%,
          #1a1a24 12%,
          #1e1e26 25%,
          #202028 38%,
          #27272d 50%,
          #302f34 62%,
          #2e3035 75%,
          #292a2e 88%,
          #191923 100%
        )`, 
        // HeroSection 1-LD 2-RB 3-BG
        Aslin2: `
          radial-gradient(circle at 0% 90%, rgba(61, 37, 37) 0%, transparent 30%),  
          radial-gradient(circle at 100% 90%, rgba(222, 87, 87, 0.2) 0%, transparent 30%),
          linear-gradient(
            to right,
            #191923 0%,
            #1a1a24 12%,
            #1e1e26 25%,
            #202028 38%,
            #27272d 50%,
            #302f34 62%,
            #2e3035 75%,
            #292a2e 88%,
            #191923 100%
          )`,       
      },
    },
  },
  plugins: [],
};
