import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Social from "@/components/Social";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main>
                <Hero />
                <Projects />
                <Skills />
                <Social />
            </main>
            <Footer />
        </div>
    );
}
