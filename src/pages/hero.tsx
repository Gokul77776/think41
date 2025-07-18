import { BackgroundSection } from "@/components/ui/background";
import { motion } from "framer-motion";
import TextGenerateEffect from '@/components/ui/typewriter';
import { FloatingDock } from "@/components/ui/dock";
import {
  Mail,
  Phone,
  Instagram,
  MessageCircleMore,
} from "lucide-react";

export function Hero() {
   const links = [
  {
    title: "Email",
    icon: (
      <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "mailto:your@email.com",
  },
  {
    title: "Phone",
    icon: (
      <Phone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "tel:+919876543210",
  },
  {
    title: "Instagram",
    icon: (
      <Instagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://instagram.com/yourprofile",
  },
  {
    title: "WhatsApp",
    icon: (
      <MessageCircleMore className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://wa.me/919876543210", // Replace with your actual number
  },
];

  

    return (
        <section>
            <BackgroundSection className="relative w-full h-full">
                <div className="w-full h-full relative flex justify-center items-center flex-col">
                    <h1
                        className="text-4xl md:text-8xl font-bold tracking-widest bg-gradient-to-r from-orange-400 via-pink-500 to-blue-600 bg-clip-text text-transparent"
                        data-aos="fade-down"
                        data-aos-offset="200"
                    >
                        VERTIMARAN
                    </h1>

                    <motion.img
                        src="/web.png"
                        className="h-96 w-96"
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        data-aos="fade-up"
                        data-aos-offset="200"
                    />

                </div>
                <div className="absolute bottom-[-10] md:left-[-100px] md:bottom-32 font-serif">
                    <TextGenerateEffect 
                        words="A Digital Marketer"
                        className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                        data-aos="fade-right"
                        data-aos-offset="200"
                    >
                    </TextGenerateEffect>
                     <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />

                </div>


            </BackgroundSection>
        </section>
    )
}