export const profileData = {
    name: "Hugo Saldaña Gutiérrez",
    headline: "Estrategia Financiera & Data Science | Portfolio & Blog",
    location: "Guadalajara, MX",
    contact: {
        email: "hugo.sagu@gmail.com",
        phone: "33 34 73 43 14",
        linkedin: "https://www.linkedin.com/in/hugo-saldana-gutierrez/",
    },
    about: `Este espacio funciona como un laboratorio personal donde exploro la intersección entre Finanzas Corporativas y Ciencia de Datos.
    
    Aquí documento metodologías, casos de estudio y experimentos de visualización que demuestran cómo herramientas como Python y SQL pueden modernizar el análisis financiero tradicional.`,
    valueProp: `🎯 Enfoque del Sitio
    Demostrar a través de proyectos reales la aplicación de modelos cuantitativos y automatización en la toma de decisiones estratégicas.`,
    experience: [
        {
            company: "OLEOMEX",
            role: "Gerente de Planeación y Finanzas",
            period: "Dic 2024 – Actual",
            location: "Guadalajara, Jalisco, México",
            description: `Conglomerado multisectorial: Agroindustria, Aceites, Logística, Transporte y Manufactura.

**Orquestación Estratégica 2026-2030:** Liderazgo de la modelación financiera integral para +10 unidades de negocio.
**Gestión de Valor (VBM):** Implementación de EVA y ROIC como métricas core para asignación de CAPEX.
**Ingeniería Financiera:** Optimización del WACC y análisis de sostenibilidad de deuda (Net Debt/EBITDA).
**Data Consolidation:** Integración de proyecciones dispares en un modelo consolidado de Flujo de Efectivo Libre.`
        },
        {
            company: "UPPER",
            role: "Director de Finanzas (CFO)",
            period: "Ene 2022 – Dic 2024",
            location: "Guadalajara, Jalisco, México",
            description: `Retail, Oil & Gas y Transporte (+700 colaboradores).

**Pricing Dinámico:** Incremento del **40% en margen bruto** en combustibles mediante modelos de elasticidad.
**Tech-Driven Supply Chain:** Implementación de Oracle NetSuite y algoritmos de reabastecimiento (Fill-Rate 82% → 95%).
**Reducción de Merma:** **-67%** en desperdicios mediante auditoría basada en datos.
**CAPEX Control:** Supervisión de proyectos activos por +2,000 MDP.`
        },
        {
            company: "GRUPO ENERGIKO",
            role: "Head of Financial Analysis",
            period: "Jul 2015 – Ene 2022",
            location: "Guadalajara, Jalisco, Mexico",
            description: `Energía & Home Appliances.

**Optimización de Costos:** Reducción del **12% en COGS** vía integración vertical e importación directa.
**Turnaround Exitoso:** Logro de punto de equilibrio en unidad de Home Appliances mediante racionalización de SKUs.
**Eficiencia:** Automatización del cierre contable, reduciendo el ciclo en 4 días (-20%).`
        }
    ],
    techLab: [
        {
            title: "Optimización de Inventarios con ML",
            tags: ["Python", "Pandas", "Oracle NetSuite", "Forecasting"],
            problem: "Exceso de inventario y quiebres de stock (Fill-rate 82%) en Retail.",
            solution: "Desarrollo de algoritmo en Python (Scikit-learn) para predicción de demanda estacional conectado a Oracle NetSuite.",
            impact: "Mejora de Fill-rate al 95% y reducción de merma del 67%."
        },
        {
            title: "Dashboard EVA & ROIC en Tiempo Real",
            tags: ["SQL", "Power BI", "Financial Modeling", "VBM"],
            problem: "Toma de decisiones lenta basada en reportes estáticos mensuales.",
            solution: "Pipeline de datos SQL automatizado que alimenta un Dashboard interactivo de creación de valor (EVA).",
            impact: "Visibilidad diaria de rentabilidad real vs presupuesto para +10 unidades de negocio."
        },
        {
            title: "Automatización de Conciliación Bancaria",
            tags: ["Python", "Pandas", "Automation", "ERP"],
            problem: "Procesos manuales propensos a error y cierres contables lentos.",
            solution: "Script de Python para cruce automático de movimientos bancarios vs ERP.",
            impact: "Reducción de 4 días en el cierre mensual (-20% tiempo de ciclo)."
        }
    ],
    education: [
        {
            school: "IPADE Business School",
            degree: "Master of Business Administration (MBA)",
            period: "2013 - 2015",
            description: ""
        },
        {
            school: "Universidad Panamericana",
            degree: "Ingeniería Industrial",
            period: "2006 - 2011",
            description: ""
        }
    ],
    skills: [
        "Python (Pandas, Scikit-learn)", "SQL Avanzado", "Power BI / Tableau", "Oracle NetSuite / SAP", "Excel VBA",
        "Strategic Planning", "P&L Management", "Valuación de Proyectos", "CAPEX Control", "Cash Flow Forecasting"
    ],
    languages: [
        "Español: Nativo", "Inglés: Profesional / Negocios (TOEIC 950)", "Francés: Intermedio"
    ],
    projects: [
        {
            id: "mexico-clusters",
            title: "Mexican Market Clusters & Quality of Life",
            category: "Data Analysis / Geospatial / Economics",
            image: "/projects/mexico_clusters_thumb.png", // Assuming we will create a thumb or use a placeholder
            link: "/project.html?id=mexico-clusters",
            description: "Advanced K-means clustering analysis of Mexican municipalities based on quality of life indicators (Economy, Tech, Security, Environment, Culture).",
            methodology: `
**1. Definición de Variables (Las "Dimensiones")**

*   **A. Economía (Poder Adquisitivo):** Dato: Ingreso corriente promedio trimestral por hogar Fuente: INEGI.
*   **B. Ciencia y Tecnología (Conectividad):** Dato: Porcentaje de viviendas con acceso a Internet. Fuente: Censo de Población y Vivienda 2020 (INEGI).
*   **C. Seguridad (Paz Social):** Dato: Tasa de homicidios por cada 100k habitantes. Fuente: SESNSP.
*   **D. Medio ambiente:** Densidad de emisiones (Toneladas PM2.5/ Superficie) y Probabilidad de sequia. Fuente: SEMARNAT y CONAGUA.
*   **E. Cultura y Deporte (El "Factor Felicidad"):** Dato: Número de museos, centros culturales y parques/unidades deportivas administradas por el municipio per cápita. Fuente: SIC.

**2. Cálculo del Índice de Calidad de vida**

*   **Cálculo de variables nuevas:**
    *   Score Economía: Ingreso trimestral
    *   Score Tecnología: % viviendas con internet
    *   Score Cultura: Museos + universidades per cápita
    *   Score Seguridad: log(Homicidios por cada 100,000 habitantes)
    *   Score Medio ambiente: 40% * log(Emisiones PM2.5 por km2) + 60% * Probabilidad de sequia
*   **Normalización:** Se normalizaron variables positivas y negativas para hacerlas comparables.

**3. Análisis de Clústers**

Usando la metodología K-means con 8 predefinidos y random state para replicabilidad, se identificaron 8 perfiles de municipios:
0.  "Rural y Seguro (Desarrollo bajo)"
1.  "Buen acceso a la tecnología y balanceado (Buena calificación ecológica)"
2.  "Pacífico y verde (Seguridad alta)"
3.  "Buena cultura y ecología (Top calificación ecológica)"
4.  "Promedio"
5.  "Básico y vulnerable (Baja calidad de vida)"
6.  "En desarrollo con retos ambientales"
7.  "Desarrollado económicamente (Alta calidad de vida)"

**4. Creación de Mapa Interactivo**
Se calculan los centroides para cada municipio y se crea un mapa interactivo mostrando el score y clúster de cada región.

**5. Análisis de sensibilidad**
Simulación Montecarlo con 1,000 iteraciones para validar la robustez del score, asignando pesos aleatorios en cada iteración.

<div style="margin-top: 30px;">
  <h4 style="color: var(--text-primary); margin-bottom: 15px;">Análisis de Robustez: Top 20</h4>
  <img src="/projects/mexico_clusters_robustness_top.png" alt="Análisis de Robustez Top 20" style="width: 100%; border-radius: 8px; margin-bottom: 20px;">
  
  <h4 style="color: var(--text-primary); margin-bottom: 15px;">Análisis de Robustez: Bottom 20</h4>
  <img src="/projects/mexico_clusters_robustness_bottom.png" alt="Análisis de Robustez Bottom 20" style="width: 100%; border-radius: 8px;">
</div>
`,
            assetType: "html",
            assetUrl: "/projects/mexico_clusters_map.html"
        },
        {
            id: "mst-analysis",
            title: "Mexican Market Minimum Spanning Tree (MST)",
            category: "Data Analysis / Financial Markets",
            image: "/projects/mst_chart.png",
            link: "/project.html?id=mst-analysis",
            description: "Analysis based on Distance Correlation of Mexican Market sectors (Telecom, Transport, Food/Beverage, Financials, etc.). visualizing market interconnectedness and clustering.",
            assetType: "image",
            assetUrl: "/projects/mst_chart.png"
        },
        {
            id: "precipitation-map",
            title: "Precipitation Map Analysis",
            category: "Data Visualization / Geospatial",
            image: "/projects/precipitation_map_thumb.png",
            link: "/project.html?id=precipitation-map",
            description: "Interactive geospatial analysis of precipitation patterns. Visualizing weather data across different regions.",
            assetType: "html",
            assetUrl: "/projects/precipitation_map.html"
        }
    ]
};
