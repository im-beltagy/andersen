import { Box } from "@mui/material";
import React from "react";
import Section1 from "../../section1/Section1";
import Section3 from "../../section3/Section3";
import Section4 from "../../section4/Section4";
import Section5 from "../../section5/Section5";
import Section6 from "../../section6/Section6";
import Section7 from "../../section7/Section7";
import Section8 from "../../section8/Section8";
import Section10 from "../../section10/Section10";
import Section11 from "../../section11/Section11";
import Section9 from "../../section9/Section9";
import Section2 from "../../section2/Section2";

function ViewProjectCases(): React.JSX.Element {
  return (
    <Box sx={{padding:"20px", maxWidth:"1200px", margin:"auto", marginTop:"50px", backgroundColor: "#ffffff"}}>
      <Section1
          title="Mola Pay - Die smarte Finanzlösung"
          branch="Fintech"
          imageUrl= "https://d3jqtupnzefbtn.cloudfront.net/andersenlab/new-andersensite/cases/fti/preview-shots/big.webp"

      />
      <Section2
          description=""
      />
      <Section3
          description={"Die Mola Pay-Anwendung ist ein unverzichtbares Werkzeug für Unternehmen, die ihre Ausgaben effizient und effektiv steuern möchten. Sie bietet die notwendigen Funktionen zur Nachverfolgung von Ausgaben und zur Kontrolle von Budgets, was dazu beiträgt, fundierte Finanzentscheidungen zu treffen und gleichzeitig Zeit und Ressourcen zu sparen. Die Anwendung steht in Verbindung mit der T2 International Company. Das Team hinter Mola Pay besteht aus erfahrenen Fachleuten, die sich darauf spezialisiert haben, Unternehmen auf ihrem Weg zum finanziellen Erfolg zu begleiten.\n" +
              "\n" +
              "Anwendung Funktionalität"}
          duration={"24 Monate"}
          technologies={["Node JS", "Vue.js", "MySQL", "Azure", "Gitlab CI/CD", "Flutter"]}
      />
      <Section4
          imageUrl={"https://static.andersenlab.com/andersenlab/new-andersensite/cases/fti/1.1.desktop-2x.webp"}
          alt={"Pronto Versandlösung" }
          imageDescription={"Pronto - Effiziente Versandlösung"}
      />
      <Section5
          functionalities={[
              "Automatisierung von Buchhaltungsprozessen: Mola Pay erleichtert die Verwaltung von Ausgaben durch die Automatisierung von Buchhaltungsprozessen. Dies reduziert den Zeitaufwand für die Bearbeitung und Abwicklung von Rechnungen erheblich und minimiert Fehler.",
              "Ausgabenkontrolle: Die Anwendung ermöglicht es Unternehmen, Ausgabenlimits festzulegen und Ausgaben zu kontrollieren, bevor sie anfallen. Dies trägt zu einer besseren Budgetkontrolle bei und verhindert unnötige Ausgaben.",
              "Sicherheit: Mola Pay gewährleistet sichere Geschäftstransaktionen durch den Einsatz von traditionellen und virtuellen Karten, die vollständig verschlüsselt sind. Zusätzlich werden mehrere Authentifizierungsstufen implementiert, um die Sicherheit der Transaktionen zu gewährleisten.",
              "Integration: Die Anwendung lässt sich nahtlos in andere Buchhaltungssoftware integrieren, was die Datengenauigkeit verbessert und hilft, Einsparpotenziale zu identifizieren.",
              "Sofortberichte: Mola Pay bietet sofortige Finanzberichte, die es Unternehmen ermöglichen, Ausgaben zu analysieren und ihre Finanzentscheidungen zu verbessern. Diese Berichte sorgen für Klarheit und Transparenz im Kostenmanagement und steigern die betriebliche Effizienz."

              ]}

      />
      <Section6
          description={
              "Ein Proof of Concept (PoC) wurde durchgeführt, um die Machbarkeit und den Nutzen der Mola Pay-Anwendung zu validieren. Diese Phase war entscheidend für den Softwareentwicklungsprozess und umfasste:" +
              "\n" +
              "Zunächst wurde eine umfassende Marktanalyse durchgeführt, um die Bedürfnisse des Marktes und die Herausforderungen, denen Kunden und Dienstleister gegenüberstehen, zu identifizieren. Diese Analyse legte die Grundlage für die Entwicklung einer Anwendung, die diese Anforderungen effektiv erfüllt.\n" +
              "\n" +
              "In den anschließenden ersten Tests und Interviews mit einer repräsentativen Stichprobe potenzieller Benutzer zeigte sich ein großes Interesse an den vorgeschlagenen Funktionen der Pronto-Anwendung. \n" +
              "Die positiven Rückmeldungen aus diesen Tests wurden genutzt, um die Anwendung weiter zu verbessern.\n" +
              "\n" +
              "Die Nutzer reagierten insgesamt sehr positiv auf die Pronto-Anwendung, zeigten eine hohe Bereitschaft zur Nutzung und lobten die erleichterte und transparentere Abwicklung des Versandbetriebs. \n" +
              "\n" +
              "Nach der Markteinführung verzeichnete die Anwendung ein kontinuierliches Wachstum in Bezug auf Nutzerzahlen und durchgeführte Vorgänge, was die positive Marktreaktion und die Akzeptanz der Zielgruppe verdeutlichte.\n"
          }
      />
      <Section7
          description={"Die Implementierung der Mola Pay-Anwendung führte zu folgenden konkreten Ergebnissen:"}
          functionalities={
            [
                "Verbesserung der Effizienz: Mola Pay reduzierte den Zeit- und Arbeitsaufwand für die Verwaltung von Ausgaben und die Bearbeitung von Rechnungen erheblich.",
                "Erhöhte Transparenz: Die Anwendung bietet einen klaren Überblick über die Ausgaben, was zu einer verbesserten Nachverfolgung und Kontrolle der Unternehmensausgaben führt.",
                "Transparenz und Vertrauen: Die Bereitstellung präziser Informationen hat die Transparenz erhöht und das Vertrauen zwischen den Nutzern und den Dienstanbietern gestärkt.",
                "Fehlerreduzierung: Durch die Automatisierung der Prozesse werden potenzielle menschliche Fehler minimiert.",
                "Verbesserung der Entscheidungsfindung: Die Bereitstellung genauer und aktueller Daten unterstützt Unternehmen dabei, fundierte Finanzentscheidungen zu treffen.",
                "Integration: Mola Pay ermöglicht eine einfache Integration mit anderen Buchhaltungssystemen, wodurch die Datengenauigkeit verbessert und Einsparpotenziale identifiziert werden können."
            ]
          }

      />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
    </Box>
  );
}

export default ViewProjectCases;
