import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#ffffff] dark:bg-[#0a0e1a] text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        {/* <Products /> */}
        {/* <Testimonials /> */}
        <Faq />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
