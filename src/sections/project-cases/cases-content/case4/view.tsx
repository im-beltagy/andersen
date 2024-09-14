import { Box } from "@mui/material";
import React from "react";
import Section1 from "@/sections/project-cases/sectionTitle/Section1";
import Section3 from "@/sections/project-cases/sectionAboutProject/Section3";
import Section4 from "@/sections/project-cases/sectionImage/Section4";
import Section5 from "@/sections/project-cases/sectionFunctionalities/Section5";
import Section6 from "@/sections/project-cases/sectionSolution/Section6";
import Section7 from "@/sections/project-cases/sectionResults/Section7";
import Section8 from "../../section8/Section8";
import Section10 from "../../section10/Section10";
import Section11 from "../../section11/Section11";
import Section9 from "../../section9/Section9";
import Section2 from "@/sections/project-cases/sectionAboutCustomer/Section2";
import SectionProblem from "@/sections/project-cases/sectionProblem/SectionProblem";

function ViewProjectCases(): React.JSX.Element {
  return (
    <Box sx={{padding:"20px", maxWidth:"1200px", margin:"auto", marginTop:"50px", backgroundColor: "#ffffff"}}>
        <Section1
            title="Barq Daily - Die führende Plattform für Online-Einkäufe"
            branch="E-Commerce / Online-Shopping"
            imageUrl= "/assets/images/cases/Frame 7.png"
        />
        <Section2
            description= "TODO"
        />
        <Section3
            description={
                "Barq Daily ist eine führende Plattform für Online-Einkäufe. Sie bietet ein reibungsloses und komfortables Einkaufserlebnis und kombiniert eine große Auswahl an hochwertigen Produkten mit wettbewerbsfähigen Preisen, die bequem von zu Hause aus zugänglich sind. Die Anwendung spart den Nutzern Zeit und Mühe und ermöglicht ihnen eine erstklassige Einkaufserfahrung."
            }
            duration={"12 Monate"}
            technologies={["Node JS", "React JS", "MySQL", "Azure", "GitHub CI/CD", "Flutter"]}
        />

        <Section4
            imageUrl={"/assets/images/cases/Frame 8.png"}
            alt={"Barq Daily" }
            imageDescription={"Barq Daily - Online-Einkaufsplattform"}
        />

        <Section5
            functionalities={[
                "Sorgenfreiheit und Leichtigkeit: Die Anwendung bietet alles, was die Nutzer benötigen, in einer benutzerfreundlichen Oberfläche, die jederzeit und von überall aus zugänglich ist.",
                "Zeit- und Müheersparnis: Dank eines schnellen und bequemen Lieferservices können Nutzer wertvolle Zeit sparen und sich auf das Wesentliche konzentrieren.",
                "Produktvielfalt und Qualität: Barq Daily bietet eine breite Palette an Produkten, die höchste Qualität und vielfältige Optionen garantieren.",
                "Wettbewerbsfähige Preise und Sonderangebote: Nutzer profitieren von den besten Preisen und exklusiven Rabatten.",
                "Ständiger Kundensupport: Ein engagiertes Support-Team steht rund um die Uhr zur Verfügung, um etwaige Probleme schnell zu lösen."
            ]}
        />

        <SectionProblem
            description={
                <>
                     viele Menschen stehen vor Herausforderungen beim Einkaufen, insbesondere aufgrund von eingeschränktem Zugang zu Geschäften und langen Lieferzeiten.
                    <br /><br />
                    Es bestand der Bedarf an einer bequemen und effizienten Lösung, die den Einkauf von zu Hause aus ermöglicht, mit einer großen Produktauswahl, schnellen Lieferzeiten und wettbewerbsfähigen Preisen.
                    <br /><br />
                    Darüber hinaus war es entscheidend, dass eine Plattform entwickelt wird, die auch unter eingeschränkten Internetverbindungen stabil läuft und eine hohe Datensicherheit gewährleistet.
                </>
            }
        />

        <Section6
            description={
                <>
                    Ein Proof of Concept (PoC) wurde durchgeführt, um die Machbarkeit und den Nutzen der Barq Daily-Anwendung zu validieren. Diese Phase war entscheidend für die erfolgreiche Umsetzung des Projekts und umfasste:
                    <br /><br />
                    <strong>• Marktanalyse:</strong> Eine gründliche Untersuchung der Einkaufsgewohnheiten und Herausforderungen, um eine maßgeschneiderte Lösung zu entwickeln.
                    <br /><br />
                    <strong>• Prototypenentwicklung:</strong> Ein erster Prototyp der Barq Daily-App wurde entwickelt, der die grundlegenden Funktionen wie Produktsuche und Bestellvorgänge integrierte.
                    <br /><br />
                    <strong>• Feedback sammeln:</strong> Die Testversion wurde genutzt, um wertvolles Feedback von ersten Nutzern zu sammeln. Dieses Feedback half dabei, Verbesserungen basierend auf den Bedürfnissen der Nutzer vorzunehmen.
                    <br /><br />
                    <strong>• Technologiebewertung:</strong> Es wurde geprüft, ob die verwendeten Technologien den lokalen Herausforderungen wie begrenzter Internetverbindung gerecht werden.
                    <br /><br />
                    Die Funktionsweise der Barq Daily-Anwendung basiert auf einer detaillierten Analyse der Kundenanforderungen und wurde in zwei Hauptbereichen implementiert:
                    <br /><br />
                    <strong>1. Kundenseite:</strong> Kunden laden die App herunter, durchsuchen das Produktsortiment, fügen Produkte zum Warenkorb hinzu und wählen eine bevorzugte Zahlungsmethode.
                    <br /><br />
                    <strong>2. Lieferantenanwendung:</strong> Lieferanten erhalten Aufträge über die App, organisieren Lieferungen und aktualisieren den Status der Bestellungen in Echtzeit.
                </>
            }
        />

        <Section7
            description={"Die Implementierung der Barq Daily-Anwendung führte zu folgenden konkreten Ergebnissen:"}
            functionalities={[
                "Wachstum der Nutzerbasis: Die Nutzerzahlen stiegen nach der Markteinführung erheblich an.",
                "Hohe Kundenzufriedenheit: Die App erhielt positive Bewertungen, was die hohe Zufriedenheit der Nutzer widerspiegelt.",
                "Verbesserte Lieferzeiten: Dank des Echtzeit-Tracking-Systems wurden die Lieferzeiten deutlich verkürzt.",
                "Erweiterung des Produktangebots: Die Produktpalette wurde erweitert, um den Bedürfnissen der Kunden gerecht zu werden.",
                "Erhöhte Sicherheit und Stabilität: Durch regelmäßige Updates und den Einsatz moderner Schutztechnologien wurde die Sicherheit und Stabilität der Anwendung kontinuierlich verbessert."
            ]}
        />

      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
    </Box>
  );
}

export default ViewProjectCases;
