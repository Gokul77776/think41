
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Hero } from './pages/hero';



export function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000,  
    once: true,      
  });
}, []);
  return (
    <Hero/>
  )
}