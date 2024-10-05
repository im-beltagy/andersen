import { Box, Container, Typography } from "@mui/material";

const View = () => {
  const companyData: { key: string; value: string }[] = [
    {
      key: "Inhaber",
      value: "Ammar Ahmed",
    },
    {
      key: "Adresse",
      value: "Bleichstrasse 31, 35390 Giessen",
    },
    {
      key: "Email",
      value: "info@webizi.de",
    },
    {
      key: "Telefon",
      value: "015126155910",
    },
    {
      key: "GEWERBEREGISTER",
      value: "GIESSEN, 06531005",
    },
    {
      key: "USTIDNR",
      value: "2080135172",
    },
  ];
  const generalData: { key: string; values: string | string[] }[] = [
    {
      key: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
      values: "Ammar Ahmed, Bleichstrasse 31, 35390 Giessen",
    },
    {
      key: "Streitschlichtung",
      values:
        "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    },
    {
      key: "Haftung für Inhalte",
      values: [
        "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
        "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
      ],
    },
    {
      key: "Haftung für Links",
      values: [
        "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.",
        "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
      ],
    },
    {
      key: "Urheberrecht",
      values: [
        "Die durch die Seitenbetreiber erstellten bzw. verwendeten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
        "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
      ],
    },
  ];
  return (
    <Container sx={{ my: 20 }}>
      <Typography variant="h2" sx={{color: "#0471ec" , fontSize: "calc(1.375rem + 1.5vw)"}}>Impressum - Webizi</Typography>
      {companyData.map(({ key, value }) => (
        <Box
          key={key}
          sx={{ my: 1, display: "flex", alignItems: "center", gap: 1 }}
        >
          <Typography variant="body2" sx={{fontWeight: "bold", fontSize:"16px"}}>{key}:</Typography>
          <Typography variant="body1">{value}</Typography>
        </Box>
      ))}
      <Box sx={{ mt: 5 }}>
        {generalData.map(({ key, values }) => (
          <Box
            key={key}
            sx={{ my: 3, display: "flex", alignItems: "flex-start", gap: 1, flexDirection: "column" }}
          >
            <Typography variant="body2" sx={{color: "#0471ec" , fontSize: "1rem"}}>{key}</Typography>
            <Box>
              {Array.isArray(values)? (
                values.map((value) => (
                  <Typography variant="body1" key={value} sx={{mb: 2}}>
                    {value}
                  </Typography>
                ))
              ) : (
                <Typography variant="body1">{values}</Typography>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default View;
