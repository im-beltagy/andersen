"use client";

import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const caseStudies = [
    {
        id: 1,
        title: "Pronto - Effiziente Versandlösung",
        description: "Pronto vereinfacht den Versand von Waren zwischen Städten, bietet eine schnelle, effiziente Lösung und erleichtert den gesamten Prozess für Kunden und Dienstleister.",
        category: "Logistik",
        imageUrl: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/source/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/09/c2171a5a36ef99d621b79775abe9acd6.portfolio-log-bharatpay.svg",
        stats: {
            downloads: "1k+",
            rating: "4.7/5",
            funding: "$100K+",
        },
        availableOn: {
            appleStore: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/source/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/09/b6c8582d22b0931adebab631f350cece.apple-store.svg",
            playStore: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/source/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/09/7b7fef4813775657e82e44a30e3573a4.play-store.svg",
        },
        caseStudyUrl: "/project-cases/case1",
        backgroundImg: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/09/9aceea39b7236ecc9721eaeab27e93aa.portfolio-app-bharatpay-bg.webp",
        phoneImg: "/assets/images/cases/phone1.png"
    },
    {
        id: 2,
        title: "Mola Pay - Die smarte Finanzlösung",
        description: "Mola Pay, als Web- und mobile App verfügbar, hilft Unternehmen in Zusammenarbeit mit T2 International, ihre Finanzen effizient zu verwalten und Kosten zu sparen.",
        category: "Fintech",
        imageUrl: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/source/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/09/c2171a5a36ef99d621b79775abe9acd6.portfolio-log-bharatpay.svg",
        stats: {
            downloads: "1K+",
            rating: "4.7/5",
            funding: "$70K+",
        },
        availableOn: {
            appleStore: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/source/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/09/b6c8582d22b0931adebab631f350cece.apple-store.svg",
            playStore: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/source/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/09/7b7fef4813775657e82e44a30e3573a4.play-store.svg",
        },
        caseStudyUrl: "/project-cases/case2",
        backgroundImg: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/09/9aceea39b7236ecc9721eaeab27e93aa.portfolio-app-bharatpay-bg.webp",
        phoneImg: "/assets/images/cases/phone1.png"
    },
    {
        id: 3,
        title: "Quick clean  - Die mobile Autowaschanwendung für Komfort und Effizienz",
        description: "Quicki Clean ist eine mobile App, die hochwertige Autowaschdienste bietet. Mit Funktionen wie Geolokalisierung und sicheren Zahlungstechniken ermöglicht die App eine bequeme und benutzerfreundliche Buchung von Fahrzeugpflege-Diensten.",
        category: "Mobile Apps / Fahrzeugpflege",
        imageUrl: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/source/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/09/c2171a5a36ef99d621b79775abe9acd6.portfolio-log-bharatpay.svg",
        stats: {
            downloads: "1K+",
            rating: "4.8/5",
            funding: "$105K+",
        },
        availableOn: {
            appleStore: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/source/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/09/b6c8582d22b0931adebab631f350cece.apple-store.svg",
            playStore: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/source/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/09/7b7fef4813775657e82e44a30e3573a4.play-store.svg",
        },
        caseStudyUrl: "/project-cases/case3",
        backgroundImg: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/09/9aceea39b7236ecc9721eaeab27e93aa.portfolio-app-bharatpay-bg.webp",
        phoneImg: "/assets/images/cases/phone1.png"
    },
    {
        id: 4,
        title: "Barq Daily - Die führende Plattform für Online-Einkäufe",
        description: "Barq Daily ist die führende Plattform für Online-Einkäufe. Sie bietet ein reibungsloses und komfortables Einkaufserlebnis und kombiniert eine große Auswahl an hochwertigen Produkten mit wettbewerbsfähigen Preisen, die bequem von zu Hause aus zugänglich sind. Die Anwendung spart den Nutzern Zeit und Mühe und ermöglicht ihnen eine erstklassige Einkaufserfahrung.",
        category: "E-Commerce / Online-Shopping",
        imageUrl: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/source/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/09/c2171a5a36ef99d621b79775abe9acd6.portfolio-log-bharatpay.svg",
        stats: {
            downloads: "1K+",
            rating: "4.8/5",
            funding: "$105K+",
        },
        availableOn: {
            appleStore: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/source/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/09/b6c8582d22b0931adebab631f350cece.apple-store.svg",
            playStore: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/source/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/09/7b7fef4813775657e82e44a30e3573a4.play-store.svg",
        },
        caseStudyUrl: "/project-cases/case4",
        backgroundImg: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/09/9aceea39b7236ecc9721eaeab27e93aa.portfolio-app-bharatpay-bg.webp",
        phoneImg: "/assets/images/cases/phone1.png"
    }


];
const Case = () => {
    const router = useRouter();

    return (
        <>
            {caseStudies.map((study, index) => (
                <Box
                    key={study.id}
                    sx={{
                        direction: index % 2 === 0 ? "rtl" : "ltr",
                        mx: "auto",
                        my: 20,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            mx: { xs: 4, md: 8 },
                            justifyContent: "center",
                        }}
                    >
                        <Grid container columnGap={3} justifyContent="center">
                            <Grid
                                item
                                xs={12}
                                md={6}
                                sx={{
                                    order: { xs: 2, md: 1 },
                                    border: 1,
                                    borderColor: "#ddd",
                                    minHeight: 300,
                                    bgcolor: "#F8F8F8",
                                }}
                            >
                                <Box>
                                    <Grid container justifyContent="start">
                                        <Grid item xs={3} sx={{ textAlign: "center", ml: "auto" }}>
                                            <Typography sx={{ bgcolor: "#b0f13c", px: 1, py: 0.5 }}>
                                                {study.category}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box sx={{ direction: "ltr", mb: 9, py: 2, px: 4 }}>
                                                <Image
                                                    objectFit="cover"
                                                    sizes="100%"
                                                    width="200"
                                                    height="100"
                                                    alt={study.title}
                                                    src={study.imageUrl}
                                                />
                                                <Typography variant="h5" fontWeight="bold">
                                                    {study.title}
                                                </Typography>
                                                <Typography variant="body1" sx={{ mt: 2 }}>
                                                    {study.description}
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        flexWrap: "wrap",
                                                        gap: 2,
                                                        display: "flex",
                                                        my: 2,
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Typography variant="h6">Verfügbar im</Typography>
                                                    <Image
                                                        objectFit="cover"
                                                        sizes="100%"
                                                        width="100"
                                                        height="50"
                                                        alt="Apple Store"
                                                        src={study.availableOn.appleStore}
                                                    />
                                                    <Image
                                                        objectFit="cover"
                                                        sizes="100%"
                                                        width="100"
                                                        height="50"
                                                        alt="Play Store"
                                                        src={study.availableOn.playStore}
                                                    />
                                                </Box>
                                                <Box
                                                    sx={{
                                                        flexWrap: "wrap",
                                                        gap: 5,
                                                        display: "flex",
                                                        my: 2,
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Box>
                                                        <Typography variant="h4" fontWeight="bold">
                                                            {study.stats.downloads}
                                                        </Typography>
                                                        <Typography variant="body2">Downloads</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography variant="h4" fontWeight="bold">
                                                            {study.stats.rating}
                                                        </Typography>
                                                        <Typography variant="body2">Avg. Rating</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography variant="h4" fontWeight="bold">
                                                            {study.stats.funding}
                                                        </Typography>
                                                        <Typography variant="body2">Funding Raised</Typography>
                                                    </Box>
                                                </Box>
                                                <Button
                                                    onClick={() => router.push(study.caseStudyUrl)}
                                                    variant="contained"
                                                    sx={{
                                                        fontWeight: "bold",
                                                        color: "#000",
                                                        transition: "0.3s",
                                                        bgcolor: "#b0f13c",
                                                        ":hover": { bgcolor: "#23C761" },
                                                        py: 1,
                                                        px: { xs: 2, md: 4 },
                                                    }}
                                                >
                                                     Case Study ansehen
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                md={4.5}
                                sx={{
                                    order: { xs: 1, md: 2 },
                                    background:
                                        "linear-gradient(145deg, rgba(92,210,223,1) 0%, rgba(75,154,209,1) 100%)",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        backgroundSize: "auto auto",
                                        backgroundImage: `url(${study.backgroundImg})`,
                                    }}
                                >
                                    <Image
                                        style={{
                                            margin: "20px auto",
                                            maxWidth: "100%",
                                            maxHeight: "530px",
                                            height: "auto",
                                        }}
                                        alt={study.title}
                                        src={study.phoneImg}
                                        width={280}
                                        height={1000}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            ))}
        </>
    );
};

export default Case;
