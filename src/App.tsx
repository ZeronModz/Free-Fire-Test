/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Gamepad2, 
  Trophy, 
  Target, 
  Users, 
  Youtube, 
  Instagram, 
  Twitter, 
  Facebook,
  ExternalLink,
  Shield,
  Zap,
  Star,
  ChevronRight,
  Menu,
  X,
  Flame,
  Sword,
  Skull,
  Heart,
  Activity
} from "lucide-react";
import { useState, useEffect } from "react";

const STATS = [
  { label: "K/D Ratio", value: "5.24", icon: Skull, color: "text-ff-yellow" },
  { label: "Win Rate", value: "42%", icon: Trophy, color: "text-ff-yellow" },
  { label: "Headshots", value: "58%", icon: Target, color: "text-ff-red" },
  { label: "Booyah!", value: "1,240", icon: Flame, color: "text-ff-orange" },
];

const ACHIEVEMENTS = [
  { title: "Grandmaster", season: "Season 35", date: "2024", icon: Shield, rank: "Grandmaster" },
  { title: "Heroic", season: "Season 34", date: "2023", icon: Shield, rank: "Heroic" },
  { title: "Elite Pass", season: "Season 35", date: "Active", icon: Star, rank: "Elite" },
];

const SOCIALS = [
  { name: "YouTube", icon: Youtube, link: "#", color: "hover:text-red-600" },
  { name: "Instagram", icon: Instagram, link: "#", color: "hover:text-pink-500" },
  { name: "Twitter", icon: Twitter, link: "#", color: "hover:text-blue-400" },
  { name: "Facebook", icon: Facebook, link: "#", color: "hover:text-blue-600" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-ff-dark selection:bg-ff-yellow selection:text-black font-ff tracking-wide">
      {/* FF Grid Overlay */}
      <div className="fixed inset-0 ff-grid-bg pointer-events-none z-0 opacity-20" />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-ff-dark/95 border-b border-ff-yellow/20 py-2" : "bg-transparent py-4"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-ff-yellow flex items-center justify-center ff-trapezoid shadow-[0_0_15px_rgba(255,204,0,0.5)]">
              <Gamepad2 className="text-black w-7 h-7" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black uppercase italic tracking-tighter">
                BOOYAH<span className="text-ff-yellow">GAMER</span>
              </span>
              <span className="text-[10px] text-ff-yellow/60 uppercase tracking-[0.3em] font-bold">Battle Royale Elite</span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {["Home", "Profile", "Stats", "Socials"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="px-6 py-2 font-bold uppercase tracking-widest hover:text-ff-yellow transition-all relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ff-yellow transition-all group-hover:w-full" />
              </a>
            ))}
            <button className="ml-4 bg-ff-yellow text-black px-8 py-2 ff-trapezoid font-bold uppercase tracking-widest hover:brightness-125 transition-all active:scale-95">
              Join Squad
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-ff-yellow" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-40 bg-ff-dark/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {["Home", "Profile", "Stats", "Socials"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-black uppercase italic tracking-widest hover:text-ff-yellow transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="mt-8 bg-ff-yellow text-black px-12 py-4 ff-trapezoid text-2xl font-black uppercase tracking-widest">
              Join Squad
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero / Profile Header */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image - Character Focus */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-ff-dark via-ff-dark/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-ff-dark via-transparent to-transparent z-10" />
          <img 
            src="https://picsum.photos/seed/freefire-character/1920/1080" 
            alt="FF Character" 
            className="w-full h-full object-cover object-right opacity-60"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Profile Badge */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-ff-gray p-1 ff-card-clip border-2 border-ff-yellow/50">
                    <img 
                      src="https://picsum.photos/seed/avatar/200/200" 
                      alt="Avatar" 
                      className="w-full h-full object-cover ff-card-clip"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-ff-yellow text-black px-2 py-0.5 text-xs font-black italic ff-trapezoid">
                    LV. 75
                  </div>
                </div>
                <div>
                  <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-none ff-glow">
                    ELITE<span className="text-ff-yellow">HUNTER</span>
                  </h2>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="bg-ff-red/20 text-ff-red px-3 py-0.5 rounded text-xs font-bold uppercase tracking-widest border border-ff-red/30">
                      Grandmaster
                    </span>
                    <span className="text-ff-yellow/60 text-sm font-bold uppercase tracking-widest">UID: 284759302</span>
                  </div>
                </div>
              </div>

              <h1 className="text-6xl md:text-9xl font-black uppercase italic leading-[0.8] mb-8 tracking-tighter">
                READY TO <br />
                <span className="text-ff-yellow">DOMINATE</span>
              </h1>

              {/* Resource Bars (Visual Flair) */}
              <div className="flex flex-col gap-3 max-w-sm mb-10">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-white/60">
                    <span>HP</span>
                    <span>200 / 200</span>
                  </div>
                  <div className="h-2 bg-ff-gray rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-white shadow-[0_0_10px_white]" 
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-ff-yellow/60">
                    <span>EP</span>
                    <span>185 / 200</span>
                  </div>
                  <div className="h-2 bg-ff-gray rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "92.5%" }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full bg-ff-yellow shadow-[0_0_10px_#ffcc00]" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-ff-yellow text-black px-10 py-4 ff-trapezoid font-black uppercase text-xl tracking-widest hover:brightness-125 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,204,0,0.3)]">
                  Start Match
                </button>
                <button className="bg-ff-gray/80 backdrop-blur-md text-white px-10 py-4 ff-trapezoid font-black uppercase text-xl tracking-widest border border-white/10 hover:bg-white/10 transition-all active:scale-95">
                  Collection
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - In-game Style */}
      <section id="stats" className="py-24 relative bg-ff-gray/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-12 bg-ff-yellow" />
            <h2 className="text-5xl font-black uppercase italic tracking-tighter">BATTLE <span className="text-ff-yellow">STATS</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-ff-gray/40 border border-white/5 p-6 ff-card-clip group hover:border-ff-yellow/50 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                  <Activity className="w-4 h-4 text-white/20" />
                </div>
                <div className="text-5xl font-black italic mb-1 group-hover:text-ff-yellow transition-colors">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-white/40">{stat.label}</div>
                
                {/* Visual Graph Placeholder */}
                <div className="mt-6 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    className={`h-full ${stat.color.replace('text-', 'bg-')}`} 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rank & Achievements */}
      <section id="profile" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Rank Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="lg:col-span-2 bg-ff-gray/40 border border-white/5 p-8 ff-card-clip relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-ff-yellow/5 blur-[100px] -mr-32 -mt-32 group-hover:bg-ff-yellow/10 transition-all" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-12">
                  <h3 className="text-3xl font-black uppercase italic">RANKED <span className="text-ff-yellow">HISTORY</span></h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-ff-yellow rounded-full animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest text-ff-yellow">Season 35 Active</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {ACHIEVEMENTS.map((ach, idx) => (
                    <div key={idx} className="flex items-center gap-6 p-4 bg-ff-dark/50 border border-white/5 ff-trapezoid group/item hover:border-ff-yellow/30 transition-all">
                      <div className={`w-16 h-16 flex items-center justify-center rounded-xl ${ach.rank === 'Grandmaster' ? 'bg-ff-red/20 text-ff-red' : 'bg-ff-yellow/20 text-ff-yellow'}`}>
                        <ach.icon size={32} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xl font-black uppercase italic">{ach.title}</div>
                        <div className="text-sm font-bold text-white/40 uppercase tracking-widest">{ach.season}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-ff-yellow uppercase tracking-widest">{ach.date}</div>
                        <div className="text-[10px] text-white/20 uppercase font-black">Verified</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Weapon Mastery / Loadout */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-ff-gray/40 border border-white/5 p-8 ff-card-clip"
            >
              <h3 className="text-3xl font-black uppercase italic mb-8">WEAPON <span className="text-ff-yellow">MASTERY</span></h3>
              <div className="space-y-8">
                {[
                  { name: "MP40", level: 95, color: "bg-ff-yellow" },
                  { name: "M1887", level: 88, color: "bg-ff-red" },
                  { name: "AWM", level: 75, color: "bg-blue-500" },
                  { name: "AK47", level: 82, color: "bg-ff-orange" },
                ].map((weapon) => (
                  <div key={weapon.name} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-xl font-black uppercase italic tracking-wider">{weapon.name}</span>
                      <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Mastery {weapon.level}%</span>
                    </div>
                    <div className="h-1.5 bg-ff-dark rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${weapon.level}%` }}
                        className={`h-full ${weapon.color}`} 
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-12 py-4 border border-ff-yellow/30 text-ff-yellow font-black uppercase tracking-[0.2em] hover:bg-ff-yellow hover:text-black transition-all ff-trapezoid">
                View Full Armory
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booyah Banner Section */}
      <section className="py-12 bg-ff-yellow overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="flex whitespace-nowrap animate-marquee">
            {Array(10).fill("BOOYAH! ").map((text, i) => (
              <span key={i} className="text-9xl font-black italic uppercase text-black">{text}</span>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-black text-7xl md:text-9xl font-black italic uppercase tracking-tighter ff-glow"
          >
            BOOYAH!
          </motion.div>
          <p className="text-black/60 font-black uppercase tracking-[0.5em] text-sm mt-2">Victory is the only option</p>
        </div>
      </section>

      {/* Socials & Community */}
      <footer id="socials" className="py-24 relative bg-ff-dark border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-12">
              <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-4">JOIN THE <span className="text-ff-yellow">SQUAD</span></h2>
              <p className="text-white/40 max-w-xl mx-auto uppercase font-bold tracking-widest text-sm">
                Follow my journey across all platforms. Daily streams, tips, and high-tier gameplay highlights.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-20">
              {SOCIALS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-ff-gray flex items-center justify-center ff-trapezoid border border-white/5 hover:border-ff-yellow/50 transition-all group"
                >
                  <social.icon className={`w-8 h-8 text-white/40 group-hover:text-ff-yellow transition-colors`} />
                </motion.a>
              ))}
            </div>

            <div className="w-full pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-ff-yellow flex items-center justify-center ff-trapezoid">
                  <Gamepad2 className="text-black w-6 h-6" />
                </div>
                <span className="text-2xl font-black uppercase italic tracking-tighter">
                  BOOYAH<span className="text-ff-yellow">GAMER</span>
                </span>
              </div>
              
              <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em]">
                Battle Royale Excellence • Season 35 • 2024
              </div>

              <div className="flex gap-8">
                <a href="#" className="text-white/40 hover:text-ff-yellow text-xs font-bold uppercase tracking-widest transition-colors">Support</a>
                <a href="#" className="text-white/40 hover:text-ff-yellow text-xs font-bold uppercase tracking-widest transition-colors">Sponsors</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
