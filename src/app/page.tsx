import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import ForWhom from "@/components/ForWhom";
import Program from "@/components/Program";
import Route from "@/components/Route";
import Yacht from "@/components/Yacht";
import Crew from "@/components/Crew";
import ApplicationForm from "@/components/ApplicationForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Manifesto />
      <ForWhom />
      <Program />
      <Route />
      <Crew />
      <Yacht />
      <ApplicationForm />
      <FAQ />
      <Footer />
    </main>
  );
}
