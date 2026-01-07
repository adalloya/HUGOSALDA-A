export const profileData = {
    name: "Hugo Saldaña Gutiérrez",
    headline: "Director de Finanzas (CFO) | Estrategia Corporativa & Data Science",
    location: "Guadalajara, MX",
    contact: {
        email: "hugo.sagu@gmail.com",
        phone: "33 34 73 43 14",
        linkedin: "https://www.linkedin.com/in/hugo-saldana-gutierrez/",
    },
    about: `Director Financiero con más de 13 años de trayectoria liderando estrategias de rentabilidad en sectores de alta complejidad (Oil & Gas, Retail, Agroindustria y Logística).

Mi diferenciador: Soy un CFO que escribe código. Integro Ciencia de Datos (Python/SQL) con la gestión financiera tradicional para optimizar márgenes, flujo de caja y CAPEX. MBA por IPADE con historial comprobado en reestructuración de modelos de negocio y transformación digital.`,
    valueProp: `🎯 Propuesta de Valor
Combino la visión estratégica de un CFO con la capacidad de ejecución técnica de un Data Scientist. No solo pido el reporte, puedo programar la automatización que lo genera.`,
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
            title: "Mexican Market Minimum Spanning Tree (MST)",
            category: "Data Analysis / Financial Markets",
            image: "/projects/mst_chart.png",
            link: "/projects/mst_chart.png",
            description: "Analysis based on Distance Correlation of Mexican Market sectors (Telecom, Transport, Food/Beverage, Financials, etc.). visualizing market interconnectedness and clustering."
        },
        {
            title: "Precipitation Map Analysis",
            category: "Data Visualization / Geospatial",
            image: "/projects/precipitation_map_thumb.png",
            link: "/projects/precipitation_map.html",
            description: "Interactive geospatial analysis of precipitation patterns. Visualizing weather data across different regions."
        }
    ]
};
