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
            id: "markowitz-optimization",
            title: "Optimización de Portafolio: Markowitz & MST",
            category: "Modelación Financiera / Machine Learning",
            image: "/projects/markowitz/normalized_performance.png",
            link: "/project.html?id=markowitz-optimization",
            description: "Análisis profundo del mercado mexicano aplicando Teoría Moderna de Portafolios (Markowitz) y algoritmos de grafos (MST) para identificar eficiencia vs. robustez.",
            methodology: `
**1. Obtención de datos**
*   Conexión a Yahoo Finance y descarga de información histórica de 3 años de las acciones de la BMV.
*   Cálculo del logaritmo de los retornos.

<img src="/projects/markowitz/returns_table.png" alt="Tabla de Retornos Logarítmicos" style="width: 100%; border-radius: 8px; margin: 20px 0;">

**2. Rendimientos históricos**
Para fines de referencia se cálculan los rendimientos históricos por empresa y por sector. Se observa la evolución normalizada de los precios (base 100) y el desempeño anualizado.

<img src="/projects/markowitz/normalized_performance.png" alt="Rendimiento Normalizado" style="width: 100%; border-radius: 8px; margin: 20px 0;">
<img src="/projects/markowitz/sector_returns.png" alt="Retornos por Sector" style="width: 100%; border-radius: 8px; margin: 20px 0;">

**3. Análisis de Centralidad (MST)**
A través de la correlación y distancias euclidianas, detectamos los activos "Hub" (o centrales) que tienden a influir en el movimiento general del mercado.

*   **Cálculo de matriz de correlación:**
<img src="/projects/markowitz/correlation_matrix.png" alt="Matriz de Correlación" style="width: 100%; border-radius: 8px; margin: 20px 0;">

*   **Cálculo de matriz de distancias:**
<img src="/projects/markowitz/distance_matrix.png" alt="Matriz de Distancias" style="width: 100%; border-radius: 8px; margin: 20px 0;">

*   **Top 10 Hubs más influyentes (Grados de centralidad en MST):**
    *   GFNORTEO.MX: 0.21
    *   RA.MX: 0.21
    *   GCARSOA1.MX: 0.14

<img src="/projects/markowitz/mst_graph.png" alt="Minimum Spanning Tree Graph" style="width: 100%; border-radius: 8px; margin: 20px 0;">

**4. Optimización de portafolio (Maximizar rendimiento - Sharpe Ratio)**
*   **Cálculo de matriz de covarianza:**
<img src="/projects/markowitz/covariance_matrix.png" alt="Matriz de Covarianza" style="width: 100%; border-radius: 8px; margin: 20px 0;">

Buscamos maximizar la relación de Sharpe *(Retorno - Tasa Libre de Riesgo / Volatilidad)*.

*   **Resultados:**
    *   Sharpe Ratio: **1.3735**
    *   Retorno anual esperado: **40.61%**
    *   Volatilidad anual: **21.56%**

*   **Top Asignación:**
    *   FRES.MX: 38.7%
    *   GMEXICOB.MX: 18.0%
    *   CEMEXCPO.MX: 12.7%

**5. Optimización de portafolio (Minimizar riesgo)**
El objetivo es encontrar la volatilidad más baja posible ($ \\sigma = \\sqrt{w \\cdot \\Sigma \\cdot w^T} $).

*   **Resultados:**
    *   Retorno anual esperado: **6.95%**
    *   Volatilidad anual: **10.85%**

*   **Top Asignación (Estrategia Defensiva):**
    *   GMXT.MX: 13.0%
    *   KOFUBL.MX: 10.8%
    *   LIVEPOLC: 10.6%

**6. Comparación de Modelos**
*   **Eficiencia (Sharpe):** Ideal para crecimiento agresivo (40% retorno), pero concentrado en pocos activos (99% en top 6).
*   **Seguridad (Min Vol):** Ideal para preservación de capital, reduciendo el riesgo a la mitad (10.85%) mediante una diversificación profunda.
`,
            assetType: "image",
            assetUrl: "/projects/markowitz/normalized_performance.png"
        },
        {
            id: "mexico-clusters",
            title: "Clusters de Calidad de Vida Municipios Mexicanos",
            category: "Análisis de Datos / Geoespacial / Economía",
            image: "/projects/mexico_clusters_article.png",
            link: "/project.html?id=mexico-clusters",
            description: "Análisis avanzado de clustering (K-means) de municipios mexicanos basado en indicadores de calidad de vida (Economía, Tecnología, Seguridad, Medio ambiente, Cultura).",
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
*   Usando la metodología K means con 4 clústers definidos por el método de Silhouette:

<img src="/projects/mexico_clusters_silhouette.png" alt="Silhouette Score" style="width: 100%; border-radius: 8px; margin: 20px 0;">

*   Posteriormente se clasifican los 4 clústers de acuerdo a sus caracteristicas:
    *   0: "Rural y Seguro"
    *   1: "Balanceado y en desarrollo"
    *   2: "Desarrollados"
    *   3: "Buena seguridad y ecología"

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
            id: "smart-mobility-network",
            title: "Análisis de Sistemas Complejos y Redes",
            category: "Network Science / Movilidad Urbana",
            image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000",
            link: "/project.html?id=smart-mobility-network",
            description: "Evaluación integral de sistemas de transporte masivo utilizando Teoría de Grafos y Redes Neuronales para identificar nodos críticos y optimizar la conectividad urbana.",
            methodology: `
**1. Fase 1: Recolección y Limpieza de Datos**
*   **Concatenación de Bases:** Unificación de registros mensuales en una base maestra anual para analizar estacionalidad y tendencias macro.
*   **Enriquecimiento:** Fusión (Merge) con catálogos geoespaciales para asignar nombres y coordenadas a cada código de estación.

**2. Preparación de la Información (Ingeniería de Características)**
*   **Cálculo de Métricas de Viaje:** Estimación precisa de tiempos de traslado y distancias recorridas entre pares de estaciones.
*   **Validación Estadística:** Análisis de distribuciones de variables numéricas para detectar outliers (viajes atípicos) y asegurar la calidad de los datos.

**3. Modelado de Red (Graph Theory)**
*   **Construcción del Grafo:** Definición de nodos (estaciones) y aristas (rutas), creando una red dirigida ponderada por flujo de pasajeros.
*   **Análisis de Centralidad (Network Measures):**
    *   **Degree Centrality:** Identificación de estaciones con mayor volumen de conexiones directas (Hubs de alta actividad).
    *   **Betweenness Centrality:** Detección de estaciones "puente" o cuellos de botella críticos para la resiliencia de la red.
    *   **Closeness Centrality:** Evaluación de accesibilidad; qué tan rápido se puede llegar a una estación desde cualquier otro punto.
    *   **PageRank Centrality:** Medición de la influencia "viral" de una estación basada en la importancia de sus vecinos (inspirado en el algoritmo de Google).

**4. Visualización y Resultados**
*   **Consolidación:** Ranking de estaciones críticas para la planificación operativa.
*   **Mapeo Geoespacial:** Visualización interactiva de los 50 nodos más importantes, resaltando la estructura esqueletal del sistema de transporte.
`,
            assetType: "image",
            assetUrl: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1000"
        }
    ]
};
