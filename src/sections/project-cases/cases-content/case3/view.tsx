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
            title="Quick Clean – Mobile Autowäsche für Komfort"
            branch="Mobile Apps / Fahrzeugpflege"
            imageUrl= "/assets/images/cases/Frame 1.png"
        />
        <Section2
            description= "TODO"
        />
        <Section3
            description={"Quicki Clean ist eine spezialisierte mobile Anwendung, die entwickelt wurde, um sowohl Einzelpersonen als auch Unternehmen in Saudi-Arabien hochwertige Autowaschdienste anzubieten. Ziel des Projekts war es, eine benutzerfreundliche und effiziente Lösung für die Fahrzeugpflege zu schaffen, die den alltäglichen Bedürfnissen der Kunden gerecht wird. Die Anwendung bietet eine innovative und komfortable Möglichkeit, Autowäschen direkt über das Smartphone zu buchen."}
            duration={"9 Monate"}
            technologies={["Node JS", "React JS", "MySQL", "Azure", "Gitlab CI/CD", "Flutter"]}
        />
        <Section4
            imageUrl={"/assets/images/cases/Frame 2.png"}
            alt={"Quick clean" }
            imageDescription={"Quick clean - mobile Autowaschanwendung"}

        />
        <Section5
            functionalities={[
               "Mobile App-Technologie: Kunden können die App herunterladen und innerhalb weniger Minuten einen Autowaschservice buchen.",
                "Geolokalisierungstechnologie: Quicki Clean nutzt Geolokalisierung, um den Standort des Kunden genau zu bestimmen und das Waschteam direkt zu ihm zu leiten.",
                "Sichere Zahlungstechniken: Quicki Clean bietet sichere und zuverlässige Zahlungsmethoden, die den Zahlungsvorgang vereinfachen. Kunden haben die Wahl zwischen verschiedenen Zahlungsmethoden"

                ]}

        />
        <SectionProblem
            description={
                <>
                    An einem Tag voller Tagesabläufe haben viele Menschen nur wenig Zeit, sich um die Pflege ihrer Fahrzeuge zu kümmern.
                    <br /><br />
                    Der Bedarf an einem bequemen und effizienten Service, der Zeit spart und gleichzeitig eine hohe Qualität bietet, war eine zentrale Herausforderung, die es zu bewältigen galt.
                    <br /><br />
                    Zudem bestand der Wunsch nach einer vertrauenswürdigen und sicheren Autowaschlösung, die durch einfache Buchung und professionelle Dienstleistungen besticht.
                </>
            }
        />


        <Section6
            description={
                <>
                    Ein Proof of Concept (PoC) wurde durchgeführt, um die Machbarkeit und den Nutzen der Quicki Clean-Anwendung zu validieren. Diese Phase war entscheidend für die erfolgreiche Umsetzung des Projekts und umfasste:
                    <br /><br />
                    <strong>• Prototypenentwicklung:</strong> Ein erster Prototyp der Quicki Clean-App wurde entwickelt, der grundlegende Funktionen wie die Buchung von Autowaschanfragen und Geolokalisierung integrierte. Dies diente als Basis für die Validierung der technischen Umsetzbarkeit und des Kundennutzens.
                    <br /><br />
                    <strong>• Ideenvalidierung:</strong> Durch den Einsatz des Prototyps und die Auswertung von Testdurchläufen konnte festgestellt werden, dass die Idee der mobilen Autowaschanwendung erfolgreich weiterentwickelt werden kann.
                    <br /><br />
                    <strong>• Feedback sammeln:</strong> Durch die Nutzung des Prototyps wurde wertvolles Feedback von frühen Testkunden gesammelt. Dies half dabei, wichtige Anpassungen und Verbesserungen basierend auf den Bedürfnissen der Nutzer vorzunehmen.
                    <br /><br />
                    <strong>• Technologiebewertung:</strong> Es wurde geprüft, ob die verwendeten Technologien, wie Geolokalisierung und mobile Zahlungen, den Anforderungen entsprechen und zuverlässig in einer realen Umgebung funktionieren.
                    <br /><br />
                    Die Funktionsweise der Quicki Clean-Anwendung basiert auf einer detaillierten Analyse der Kundenanforderungen und wurde in zwei Hauptbereichen implementiert:
                    <br /><br />
                    <strong>1. Kundenseite:</strong> Kunden laden die App herunter, registrieren sich, wählen ein passendes Paket, buchen eine Autowäsche und bezahlen über die verfügbaren Zahlungsmethoden. Der Service erfolgt am gewünschten Ort und zur gewählten Zeit.
                    <br /><br />
                    <strong>2. Mitarbeiterseite:</strong> Das Waschteam erhält über die App Aufträge von Kunden in der Nähe, führt die Autowäsche durch und benachrichtigt die Kunden nach Abschluss des Services. Die Kommunikation erfolgt über integrierten Chat oder Telefon.
                </>
            }
        />


        <Section7
            description={"Die Implementierung der Quicki Clean-Anwendung führte zu folgenden konkreten Ergebnissen:"}
            functionalities={[
                "Verbesserung der Benutzererfahrung: Die App bietet eine benutzerfreundliche und einfache Möglichkeit, Autowäschen zu buchen, was das Kundenerlebnis erheblich verbessert hat. Kunden können bequem den Service buchen und spezifische Anforderungen angeben.",
                "Steigerung von Komfort und Effizienz: Nutzer können jederzeit und von jedem Ort aus Autowaschanfragen stellen, was ihren Alltag erleichtert und die Effizienz der Fahrzeugpflegeprozesse erhöht.",
                "Sichere elektronische Zahlungen: Durch die Integration von sicheren Zahlungstechnologien wurde der Zahlungsprozess vereinfacht und sicherer gestaltet.",
                "Kundenbewertung und Feedback: Die Möglichkeit, den Service zu bewerten und Feedback zu geben, hat die Servicequalität kontinuierlich verbessert und trägt zur Kundenzufriedenheit bei.",
                "Effiziente Verwaltung: Die Anwendung unterstützt das Waschteam bei der Organisation ihrer Arbeit, der Verwaltung von Aufträgen und der Überwachung der Leistung, was zu einer optimierten betrieblichen Effizienz führt."
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
