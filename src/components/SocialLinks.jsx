import { Linkedin, Instagram, Youtube, MessageCircle } from "lucide-react";

export default function SocialLinks() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2
          className="
            text-3xl font-bold mb-4
            text-white-800 dark:text-black
          "
        >
          🤝 Let’s Connect
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Feel free to connect with me on social platforms
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 flex-wrap">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/dheeraj-rathore/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex flex-col items-center gap-2"
          >
            <div className="p-4 rounded-full bg-[#0A66C2]/10">
              <Linkedin size={28} className="text-[#0A66C2]" />
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              LinkedIn
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/its_dheerajrathore/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex flex-col items-center gap-2"
          >
            <div className="p-4 rounded-full bg-pink-500/10">
              <Instagram size={28} className="text-pink-500" />
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Instagram
            </span>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@smile_with_Dheeraj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex flex-col items-center gap-2"
          >
            <div className="p-4 rounded-full bg-red-500/10">
              <Youtube size={28} className="text-red-600" />
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              YouTube
            </span>
          </a>

          {/* WhatsApp (Prefilled Message) */}
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20Dheeraj,%20I%E2%80%99d%20like%20to%20connect%20with%20you%20regarding%20opportunities."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex flex-col items-center gap-2"
          >
            <div className="p-4 rounded-full bg-green-500/10">
              <MessageCircle size={28} className="text-green-500" />
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              WhatsApp
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}
