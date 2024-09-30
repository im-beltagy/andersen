"use client"


import { Box } from "@mui/material";
import React from "react";
import Section1 from "@/sections/project-cases/sectionTitle/Section1";
import Section3 from "@/sections/project-cases/sectionAboutProject/Section3";
import Section4 from "@/sections/project-cases/sectionImage/Section4";
import Section5 from "@/sections/project-cases/sectionFunctionalities/Section5";
import Section6 from "@/sections/project-cases/sectionSolution/Section6";
import Section7 from "@/sections/project-cases/sectionResults/Section7";
import Section10 from "../../section10/Section10";
import Section11 from "../../section11/Section11";
import Section9 from "@/sections/project-cases/sectionContactForm/Section9";
import Section2 from "@/sections/project-cases/sectionAboutCustomer/Section2";
import SectionProblem from "@/sections/project-cases/sectionProblem/SectionProblem";

function ViewProjectCases(): React.JSX.Element {
  return (
    <Box sx={{padding:"20px", maxWidth:"1200px", margin:"auto", marginTop:"50px", backgroundColor: "#ffffff"}}>
      <Section1
            title="Pronto - Effiziente Versandlösung"
            branch="Logistik"
            imageUrl= "/assets/images/cases/Frame 3.png"
      />
        <Section2
            description="FTI Group operates in six source markets and offers holiday packages in more than 120 countries."
        />
      <Section3
            description={"Pronto ist eine spezialisierte Anwendung, die sich auf den Versand von Waren und Artikeln konzentriert, um die Bedürfnisse von Kunden zwischen verschiedenen Regionen und Städten schnell und mit minimalem Aufwand zu erfüllen. Die Pronto-Anwendung zielt darauf ab, den Versandprozess effizienter zu gestalten und den gesamten Schifffahrtsdienstleistungssektor zu verbessern. Sie bietet eine umfassende Lösung, die sowohl für den Endkunden als auch für den Dienstleister eine spürbare Erleichterung darstellt."}
            duration={"24 Monate"}
            technologies={[".Net", "React JS", "MySQL", "Azure", "Gitlab CI/CD", "Flutter"]}
      />
      <Section4
            imageUrl={"/assets/images/cases/Frame 4.png"}
            alt={"Pronto Versandlösung" }
            imageDescription={"Pronto - Effiziente Versandlösung"}

      />
      <Section5
            functionalities={[
                "Benutzerfreundliche Verwaltung: Pronto erleichtert die Organisation und Verwaltung von Versandvorgängen durch eine intuitive Oberfläche, die Zeit und Aufwand spart.",
                "Echtzeit-Tracking: Nutzer können den Status und Standort ihrer Sendungen in Echtzeit verfolgen, was eine bessere Planbarkeit ermöglicht",
                "Erhöhte Transparenz: Detaillierte Informationen zu Sendungen und Zahlungen fördern Vertrauen und stärken die Kundenbindung.",
                "Verbesserte Kommunikation: Die Anwendung unterstützt eine nahtlose Interaktion zwischen Dienstleistern und Kunden, wodurch Anfragen und Unterstützung leicht gehandhabt werden können.",
                "Nahtloses Ladeerlebnis: Pronto bietet ein bequemes Ladeerlebnis, das zur Kundenzufriedenheit und einem positiven Ruf des Dienstanbieters beiträgt.",
                "Moderne Technologien: Die Anwendung nutzt mobile Apps für iOS und Android, Standortverfolgung, elektronische Zahlungen, Cloud-Computing und fortschrittliche Kommunikationstechnologien, um ein effizientes und sicheres Nutzungserlebnis zu gewährleisten."]}

      />
        <SectionProblem
            description={
                <>
                    Das Hauptproblem, das durch die Pronto-App gelöst wurde, war die Ineffizienz und Komplexität im Versandprozess. Unternehmen hatten Schwierigkeiten, ihre Sendungen und Bestellungen effektiv zu verwalten, was oft zu Verzögerungen, Kommunikationsproblemen und einem Mangel an Transparenz führte.
                    <br /><br />
                    Zudem bestand die Herausforderung, mehrere Systeme zu integrieren, den Versandprozess zu automatisieren und gleichzeitig den rechtlichen Anforderungen in Bezug auf Datenschutz und Sicherheit gerecht zu werden.
                    <br /><br />
                    Die Notwendigkeit einer zentralen, benutzerfreundlichen Lösung, die diese Prozesse vereinfacht, war entscheidend.
                </>
            }
        />


        <Section6
            description={
                <>
                    Ein Proof of Concept (PoC) wurde durchgeführt, um die Machbarkeit und den Nutzen der Mola Pay-Anwendung zu validieren. Diese Phase war entscheidend für den Softwareentwicklungsprozess und umfasste:
                    <br /><br />
                    <strong>• Prototypenentwicklung:</strong> Ein erster Prototyp der Anwendung wurde entwickelt, der grundlegende Funktionen zur Spesenverwaltung beinhaltete. Dies half dabei, die Anwendbarkeit und den praktischen Nutzen der Lösung zu demonstrieren.
                    <br /><br />
                    <strong>• Ideenvalidierung:</strong> Durch Tests des Prototyps wurde sichergestellt, dass die Idee der Mola Pay-Anwendung umsetzbar ist und erfolgreich weiterentwickelt werden kann.
                    <br /><br />
                    <strong>• Feedback sammeln:</strong> Der Prototyp wurde genutzt, um Feedback von potenziellen Nutzern zu sammeln. Dies half dabei, die Anforderungen und notwendige Verbesserungen zu identifizieren.
                    <br /><br />
                    <strong>• Technologiebewertung:</strong> Es wurde geprüft, ob die in der Anwendung verwendeten Technologien die erforderliche Funktionalität unterstützen, stabil und sicher sind.
                    <br /><br />
                    Die Analyse der Funktionsweise von Mola Pay basierte auf den Anforderungen des Kunden und der Transformation manueller Ausgabenprozesse in ein digitales, sicheres System:
                    <br /><br />
                    <strong>1. Erfassung von Ausgaben:</strong> Mitarbeiter erfassen ihre Ausgaben digital und sicher in der Anwendung. Diese Ausgaben werden dann zur Genehmigung vorgelegt.
                    <br /><br />
                    <strong>2. Überprüfung und Genehmigung:</strong> Die Verwaltung prüft die eingereichten Ausgaben. Bei Genehmigung wird der Betrag freigegeben.
                    <br /><br />
                    <strong>3. Bearbeitung im Falle einer Ablehnung:</strong> Falls eine Ausgabe abgelehnt wird, erhält der Mitarbeiter Benachrichtigungen über die Ablehnung, und die Ausgaben werden nicht freigegeben. Die Kommunikation zwischen Mitarbeitern und Abteilungen erfolgt über E-Mail oder Benachrichtigungen innerhalb der Anwendung.
                </>
            }


        />


        <Section7
            description={"Die Implementierung der Pronto-Anwendung führte zu folgenden konkreten Ergebnissen:"}
            functionalities={[
                "Verbesserung der Benutzererfahrung: Durch die Vereinfachung der Versandprozesse und die Bereitstellung einer benutzerfreundlichen Oberfläche konnte das Benutzererlebnis erheblich verbessert werden. Kunden können nun ihre Sendungen und Bestellungen effizient verwalten und verfolgen.",
                "Steigerung der Effektivität und Effizienz: Die Effektivität und Effizienz der Versandabläufe wurde deutlich erhöht. Die Bearbeitungszeiten für Sendungen wurden reduziert, und die Terminplanung sowie das Liefermanagement konnten optimiert werden.",
                "Transparenz und Vertrauen: Die Bereitstellung präziser Informationen hat die Transparenz erhöht und das Vertrauen zwischen den Nutzern und den Dienstanbietern gestärkt.",
                "Verbreitung und Wachstum: Aufgrund der positiven Erfahrungen mit der Pronto-Anwendung stieg die Anzahl der Nutzer und die Nutzung der Anwendung erheblich. Dies führte zu einem signifikanten Wachstum der Benutzerbasis und der Versandaktivitäten.",
                "Verbesserung der betrieblichen Leistung: Durch die Analyse der bereitgestellten Daten konnten Dienstleister ihre betriebliche Leistung optimieren und gezielt weiterentwickeln, um eine maximale Effizienz zu erreichen."
            ]}

        />
      <Section9 />
      <Section10
            title=  "Barq Daily – Deine Plattform für Online-Shopping"
            imageUrl= "/assets/images/cases/Frame 7.png"
            caseUrl= "/project-cases/case4"
            title2="Quick Clean – Mobile Autowäsche für Komfort"
            imageUrl2="/assets/images/cases/Frame 1.png"
            caseUrl2="/project-cases/case3"

      />
      <Section11
          title= { "Moola Pay - Die smarte Finanzlösung"}
          imageUrl= {"/assets/images/cases/Frame 5.png"}
          caseUrl= "/project-cases/case2" />
    </Box>
  );
}

export default ViewProjectCases;
