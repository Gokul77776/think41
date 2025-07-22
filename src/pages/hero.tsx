import AppHero from "@/components/ui/background"
import { About } from "./about"
import { Service } from "./service"
import { Contact } from "./contact"
export function Hero() {
 

  

    return (
        <section>
            <AppHero/>
            <About/>
            <Service/>
            <Contact/>

        </section>
    )
}