export interface Product {
  slug: string;
  name: string;
  fullForm: string;
  category: string;
  categorySlug: string;
  tagline: string;
  intro: string;
  purpose: string;
  applications: string[];
  components: string[];
  configurations: string[];
  image: string;
  relatedSlugs: string[];
}

export const productCategories = [
  { slug: "power-distribution", label: "Power Distribution Panels" },
  { slug: "power-factor-correction", label: "Power Factor Correction" },
  { slug: "motor-control", label: "Motor Control Panels" },
  { slug: "power-transfer", label: "Power Transfer & Source Management" },
  { slug: "switching-isolation", label: "Switching & Isolation" },
];

export const products: Product[] = [
  // ── Power Distribution ──────────────────────────────────
  {
    slug: "mdb-main-distribution-board",
    name: "MDB",
    fullForm: "Main Distribution Board",
    category: "Power Distribution Panels",
    categorySlug: "power-distribution",
    tagline: "The primary power distribution hub for your project.",
    intro:
      "A Main Distribution Board (MDB) is the central electrical panel that receives incoming power supply and distributes it to multiple sub-circuits or sub-distribution boards within a facility.",
    purpose:
      "The MDB acts as the first point of power distribution after the utility supply or generator. It houses the main incomer protection device and distributes power through individual outgoing feeders, each protected by appropriately rated circuit breakers or fuses.",
    applications: [
      "Commercial buildings and office towers",
      "Residential complexes and apartment buildings",
      "Industrial facilities and factories",
      "Hotels, shopping malls and mixed-use developments",
      "Infrastructure and utility buildings",
    ],
    components: [
      "Main incomer MCCB or ACB",
      "Copper busbars (L1, L2, L3, N, PE)",
      "Outgoing MCCBs or MCBs",
      "Metering instrumentation (optional)",
      "Surge protection devices (optional)",
      "Panel enclosure with IP-rated doors",
    ],
    configurations: [
      "Floor-standing or wall-mounted",
      "Single or double door configuration",
      "IP31 to IP65 ingress protection",
      "Form 1 to Form 4 internal separation",
      "Metered or non-metered versions",
    ],
    image: "/images/products/mdb.jpg",
    relatedSlugs: ["smdb-sub-main-distribution-board", "db-fdb-distribution-board", "meter-cabinet"],
  },
  {
    slug: "smdb-sub-main-distribution-board",
    name: "SMDB",
    fullForm: "Sub-Main Distribution Board",
    category: "Power Distribution Panels",
    categorySlug: "power-distribution",
    tagline: "Zonal power distribution for floors and departments.",
    intro:
      "A Sub-Main Distribution Board (SMDB) receives power from the MDB and further distributes it to final distribution boards or large electrical loads within a specific zone or floor.",
    purpose:
      "SMDBs provide an intermediate distribution layer between the main supply and the final distribution boards. They allow zonal control of power, simplify fault isolation and enable efficient load management across different areas of a building.",
    applications: [
      "Floor-level distribution in multi-storey buildings",
      "Zonal distribution in large commercial complexes",
      "Department-level power supply in factories",
      "Hospital wing distribution",
      "Shopping mall zone distribution",
    ],
    components: [
      "Incomer MCCB",
      "Copper or aluminium busbars",
      "Outgoing MCCBs",
      "Neutral and earth terminal bars",
      "Panel enclosure",
    ],
    configurations: [
      "Wall-mounted or floor-standing",
      "Various IP ratings available",
      "With or without metering",
      "Flush or surface-mounted options",
    ],
    image: "/images/products/smdb.jpg",
    relatedSlugs: ["mdb-main-distribution-board", "db-fdb-distribution-board"],
  },
  {
    slug: "db-fdb-distribution-board",
    name: "DB / FDB",
    fullForm: "Distribution Board / Final Distribution Board",
    category: "Power Distribution Panels",
    categorySlug: "power-distribution",
    tagline: "Final-stage protection for individual circuits and loads.",
    intro:
      "A Distribution Board or Final Distribution Board is the last point of electrical distribution before individual circuits supply specific loads such as lighting, power outlets, and equipment.",
    purpose:
      "DBs provide overcurrent and fault protection for final circuits. They are the panels most directly interacting with everyday electrical loads such as lighting, air conditioning, socket outlets and small equipment.",
    applications: [
      "Apartment units and villas",
      "Office floors and retail spaces",
      "Utility rooms and plant areas",
      "Data centres and IT rooms",
      "Hospitality guest rooms",
    ],
    components: [
      "Incomer MCB or RCCB",
      "Outgoing MCBs",
      "RCCBs for earth leakage protection",
      "Neutral and earth bar",
      "Din-rail mounted enclosure",
    ],
    configurations: [
      "Single-phase or three-phase",
      "12 to 72 ways capacity",
      "Flush or surface mounted",
      "Metal or insulated enclosures",
    ],
    image: "/images/products/db.jpg",
    relatedSlugs: ["mdb-main-distribution-board", "smdb-sub-main-distribution-board"],
  },
  {
    slug: "meter-cabinet",
    name: "Meter Cabinet",
    fullForm: "Meter Cabinet",
    category: "Power Distribution Panels",
    categorySlug: "power-distribution",
    tagline: "Utility-compliant metering enclosures for multi-tenant applications.",
    intro:
      "A Meter Cabinet is a dedicated enclosure designed to house energy meters for multiple consumers or tenants, providing individual measurement of electrical consumption from a common supply.",
    purpose:
      "Meter cabinets are used in multi-unit residential, commercial and industrial developments where individual tenants require separate metering for billing purposes. They are designed to meet the requirements of local distribution utilities.",
    applications: [
      "Residential apartment complexes",
      "Commercial building tenant metering",
      "Industrial park tenant supply",
      "Staff accommodation and labour camps",
      "Mixed-use development metering points",
    ],
    components: [
      "Individual metering units per consumer",
      "Incomer isolation switch",
      "Outgoing MCBs per tenant",
      "Locking provisions for utility access",
      "Tamper-evident sealing",
    ],
    configurations: [
      "2 to 24 way metering configurations",
      "Single-phase or three-phase metering",
      "Flush or surface-mounted options",
      "IP43 or higher ingress protection",
    ],
    image: "/images/products/meter-cabinet.jpg",
    relatedSlugs: ["mdb-main-distribution-board", "cut-out"],
  },
  {
    slug: "cut-out",
    name: "Cut-out",
    fullForm: "Service Cut-out / Fuse Cut-out",
    category: "Power Distribution Panels",
    categorySlug: "power-distribution",
    tagline: "The first point of protection after the utility supply.",
    intro:
      "A Cut-out is a protective enclosure fitted at the point of supply from the utility network. It houses the service fuse that protects the consumer installation from the distribution network.",
    purpose:
      "Cut-outs act as the boundary between the utility distribution network and the consumer installation. The service fuse within the cut-out provides protection against overloads and short circuits at the incoming supply point.",
    applications: [
      "Incoming supply point for residential units",
      "Commercial premises utility supply",
      "Street furniture and outdoor installations",
      "Temporary supply points",
    ],
    components: [
      "Fuse carrier and fuse element",
      "Fuse base",
      "IP-rated enclosure",
      "Utility-sealed cover",
    ],
    configurations: [
      "Various fuse ratings available",
      "Single-phase and three-phase versions",
      "Weather-resistant outdoor versions",
    ],
    image: "/images/products/cut-out.jpg",
    relatedSlugs: ["meter-cabinet", "mdb-main-distribution-board"],
  },
  {
    slug: "socket-panel",
    name: "Socket Panel",
    fullForm: "Socket Outlet Panel",
    category: "Power Distribution Panels",
    categorySlug: "power-distribution",
    tagline: "Dedicated power outlet panels for industrial and commercial use.",
    intro:
      "A Socket Panel is a purpose-built electrical panel providing multiple protected socket outlets for equipment, tools and temporary loads at industrial sites, construction sites and commercial facilities.",
    purpose:
      "Socket panels provide safe, protected and organised power access for multiple tools or equipment simultaneously. Each outlet circuit is individually protected, and the panel is designed to withstand the demanding environment of industrial and construction applications.",
    applications: [
      "Construction sites and labour camps",
      "Industrial workshops and maintenance areas",
      "Data centres and server rooms",
      "Events and exhibition spaces",
      "Marine and offshore applications",
    ],
    components: [
      "Incomer RCCB or MCB",
      "Individual MCBs per outlet",
      "Industrial socket outlets (CEE or BS type)",
      "IP65-rated enclosure",
    ],
    configurations: [
      "2-way to 12-way socket configurations",
      "Single-phase and three-phase outlets",
      "Portable or fixed mounting versions",
      "Various socket standards available",
    ],
    image: "/images/products/socket-panel.jpg",
    relatedSlugs: ["db-fdb-distribution-board", "mdb-main-distribution-board"],
  },

  // ── Power Factor Correction ──────────────────────────────
  {
    slug: "capacitor-bank-apfc-panel",
    name: "Capacitor Bank / APFC Panel",
    fullForm: "Automatic Power Factor Correction Panel",
    category: "Power Factor Correction",
    categorySlug: "power-factor-correction",
    tagline: "Improve power factor, reduce penalties and lower energy costs.",
    intro:
      "A Capacitor Bank or Automatic Power Factor Correction (APFC) Panel is a system designed to automatically compensate for reactive power demand, improving the power factor of an electrical installation.",
    purpose:
      "Inductive loads such as motors, transformers and fluorescent lighting draw reactive power that reduces the power factor of an installation. Poor power factor results in higher utility bills, penalties and reduced system capacity. APFC panels automatically switch capacitor banks in and out of service to maintain the power factor at or near unity.",
    applications: [
      "Industrial facilities with heavy motor loads",
      "Commercial buildings with large HVAC systems",
      "Manufacturing plants",
      "Pumping stations",
      "Data centres",
    ],
    components: [
      "Power factor controller (PFC relay)",
      "Capacitor banks",
      "Capacitor duty contactors",
      "Detuned reactors (harmonic protection)",
      "Metering and indication",
      "Incomer MCCB",
    ],
    configurations: [
      "Fixed or automatic switching",
      "With or without detuned reactors",
      "Various kVAr ratings",
      "Floor-standing or wall-mounted",
    ],
    image: "/images/products/capacitor-bank.jpg",
    relatedSlugs: ["mdb-main-distribution-board", "mcc-motor-control-centre"],
  },

  // ── Motor Control ────────────────────────────────────────
  {
    slug: "mcc-motor-control-centre",
    name: "MCC",
    fullForm: "Motor Control Centre",
    category: "Motor Control Panels",
    categorySlug: "motor-control",
    tagline: "Centralised control and protection for multiple motor drives.",
    intro:
      "A Motor Control Centre (MCC) is a centralised assembly of motor starter units, each providing power distribution, protection and control for individual motor circuits within a single enclosure.",
    purpose:
      "MCCs bring together multiple motor starter and control units into a single organised panel, reducing installation complexity, saving space and simplifying maintenance. They are used wherever several motors need to be controlled and monitored from a central location.",
    applications: [
      "Water treatment and pumping stations",
      "HVAC plant rooms",
      "Manufacturing and production lines",
      "Oil and gas facilities",
      "Food and beverage processing",
    ],
    components: [
      "Individual motor starter modules (DOL, Star-Delta or VFD)",
      "Incoming MCCB or ACB",
      "Motor protection relays",
      "Control transformers",
      "PLC interface provisions (optional)",
      "Busbar and cable distribution",
    ],
    configurations: [
      "Fixed or draw-out module design",
      "Various separation forms",
      "DOL, Star-Delta and VFD starter combinations",
      "With or without PLC/SCADA integration",
    ],
    image: "/images/products/mcc.jpg",
    relatedSlugs: ["dol-starter", "star-delta-starter", "vfd-starter"],
  },
  {
    slug: "dol-starter",
    name: "DOL Starter",
    fullForm: "Direct On-Line Starter",
    category: "Motor Control Panels",
    categorySlug: "motor-control",
    tagline: "Simple and reliable starting for small to medium motors.",
    intro:
      "A Direct On-Line (DOL) Starter is the simplest form of motor starter that connects the motor directly to the supply voltage, providing full voltage starting for single-phase and three-phase motors.",
    purpose:
      "DOL starters are used for motors where the starting torque requirement is high and the system can accommodate the inrush current during starting. They provide overcurrent, overload and phase failure protection for the motor.",
    applications: [
      "Water pumps and submersible pumps",
      "Fans and ventilation equipment",
      "Compressors",
      "Conveyors",
      "Small to medium industrial machinery",
    ],
    components: [
      "Contactor",
      "Thermal overload relay",
      "MCCB or MCB",
      "Control circuit components",
      "Indication lamps",
      "Panel enclosure",
    ],
    configurations: [
      "Manual or auto-restart capability",
      "Local or remote start/stop",
      "With or without phase failure relay",
      "Various motor ratings",
    ],
    image: "/images/products/dol-starter.jpg",
    relatedSlugs: ["star-delta-starter", "vfd-starter", "mcc-motor-control-centre"],
  },
  {
    slug: "star-delta-starter",
    name: "Star-Delta Starter",
    fullForm: "Star-Delta Motor Starter",
    category: "Motor Control Panels",
    categorySlug: "motor-control",
    tagline: "Reduced voltage starting to limit inrush current.",
    intro:
      "A Star-Delta Starter reduces the starting current of a three-phase induction motor by initially connecting the motor windings in star configuration and then switching to delta after the motor has accelerated.",
    purpose:
      "Star-Delta starters are used for motors where high starting inrush current would cause voltage dips on the supply network. The star connection during start reduces the voltage across the motor windings to approximately 58% of line voltage, reducing starting current to approximately one-third of direct-on-line starting current.",
    applications: [
      "Large pumps and compressors",
      "Fans and blowers",
      "Industrial machinery",
      "HVAC chillers and air handling units",
      "Conveyor systems",
    ],
    components: [
      "Main contactor",
      "Star contactor",
      "Delta contactor",
      "Timer relay",
      "Thermal overload relay",
      "MCCB incomer",
    ],
    configurations: [
      "Open or closed transition switching",
      "Adjustable star-to-delta timer",
      "Local or remote control",
      "With or without auto-restart",
    ],
    image: "/images/products/star-delta-starter.jpg",
    relatedSlugs: ["dol-starter", "vfd-starter", "mcc-motor-control-centre"],
  },
  {
    slug: "vfd-starter",
    name: "VFD Starter",
    fullForm: "Variable Frequency Drive Starter",
    category: "Motor Control Panels",
    categorySlug: "motor-control",
    tagline: "Precise motor speed control with energy savings.",
    intro:
      "A Variable Frequency Drive (VFD) Starter panel houses a VFD unit along with its associated protection, control and bypass circuits in a purpose-built enclosure for motor speed control applications.",
    purpose:
      "VFD starters control the speed of AC induction motors by varying the frequency and voltage of the power supply. They provide smooth starting, adjustable speed operation, reduced energy consumption for variable torque loads and comprehensive motor protection.",
    applications: [
      "Pumps with variable flow requirements",
      "Fans and air handling units",
      "Compressors",
      "Conveyor systems",
      "Process machinery requiring speed control",
    ],
    components: [
      "Variable frequency drive unit",
      "Input MCCB",
      "Line reactor or EMC filter (optional)",
      "Bypass contactor (optional)",
      "Control and interface terminals",
      "Cooling provisions",
    ],
    configurations: [
      "With or without bypass circuit",
      "Various drive brands available",
      "Local keypad or remote control",
      "IP20 to IP54 panel protection",
    ],
    image: "/images/products/vfd-starter.jpg",
    relatedSlugs: ["dol-starter", "star-delta-starter", "mcc-motor-control-centre"],
  },
  {
    slug: "swimming-pool-control-panel",
    name: "Swimming Pool Control Panel",
    fullForm: "Swimming Pool Electrical Control Panel",
    category: "Motor Control Panels",
    categorySlug: "motor-control",
    tagline: "Dedicated control panels for pool filtration and circulation systems.",
    intro:
      "A Swimming Pool Control Panel is a purpose-designed electrical control panel providing switching, protection and control for the pump motors, filtration systems and other electrical equipment associated with swimming pool installations.",
    purpose:
      "Swimming pool installations require dedicated electrical panels designed for the specific requirements of pool equipment including filtration pumps, backwash pumps, chemical dosing equipment and lighting. The panel provides appropriate motor protection, earth leakage protection and control functionality.",
    applications: [
      "Residential private swimming pools",
      "Hotel and resort swimming pools",
      "Public swimming pools and leisure facilities",
      "Water parks and aquatic centres",
      "Spa and wellness facilities",
    ],
    components: [
      "Incomer RCCB with high earth leakage sensitivity",
      "Motor starters for filtration pumps",
      "Timer controls for automatic operation",
      "Individual circuit protection",
      "Weatherproof enclosure",
    ],
    configurations: [
      "Single or multiple pump configurations",
      "Manual or automatic timer operation",
      "With or without chemical dosing control",
      "IP65 weatherproof rating",
    ],
    image: "/images/products/pool-control-panel.jpg",
    relatedSlugs: ["dol-starter", "mcc-motor-control-centre"],
  },

  // ── Power Transfer ───────────────────────────────────────
  {
    slug: "ats-automatic-transfer-switch",
    name: "ATS",
    fullForm: "Automatic Transfer Switch",
    category: "Power Transfer & Source Management",
    categorySlug: "power-transfer",
    tagline: "Automatic switchover between mains and generator supply.",
    intro:
      "An Automatic Transfer Switch (ATS) automatically transfers the electrical load from the normal mains supply to a standby generator or alternative supply source when the primary supply fails, without manual intervention.",
    purpose:
      "ATS panels monitor the incoming mains supply continuously. On detecting a supply failure or abnormality, the ATS automatically starts the standby generator and transfers the electrical load to the generator supply. When the mains supply is restored and stable, the ATS transfers the load back to mains and stops the generator.",
    applications: [
      "Hospitals and healthcare facilities",
      "Data centres and server rooms",
      "Hotels and hospitality buildings",
      "Commercial buildings with critical loads",
      "Telecommunications facilities",
    ],
    components: [
      "Automatic transfer switching mechanism",
      "Mains and generator contactors or changeover switch",
      "ATS controller with generator start signal",
      "Voltage and frequency monitoring",
      "Time delay relays",
      "Indication and metering",
    ],
    configurations: [
      "Open or closed transition transfer",
      "With or without bypass isolation",
      "Various current ratings",
      "Generator start signal provisions",
    ],
    image: "/images/products/ats.jpg",
    relatedSlugs: ["mts-manual-transfer-switch", "synchronizing-panel", "mdb-main-distribution-board"],
  },
  {
    slug: "mts-manual-transfer-switch",
    name: "MTS",
    fullForm: "Manual Transfer Switch",
    category: "Power Transfer & Source Management",
    categorySlug: "power-transfer",
    tagline: "Manual changeover between two power sources.",
    intro:
      "A Manual Transfer Switch (MTS) allows an operator to manually switch electrical loads between two power supply sources, typically between mains utility supply and a standby generator.",
    purpose:
      "MTS panels provide a safe and mechanically interlocked means of switching between two power sources. The mechanical or electrical interlock prevents both sources from being connected simultaneously, eliminating the risk of back-feeding the utility network.",
    applications: [
      "Small commercial premises",
      "Residential properties with generator backup",
      "Industrial facilities",
      "Agricultural installations",
      "Temporary power arrangements",
    ],
    components: [
      "Mechanically interlocked changeover switch or contactors",
      "Incomer MCCBs for each source",
      "Indication lamps for source status",
      "Panel enclosure",
    ],
    configurations: [
      "Rotary switch or contactor-based design",
      "Various current ratings",
      "With or without metering",
    ],
    image: "/images/products/mts.jpg",
    relatedSlugs: ["ats-automatic-transfer-switch", "mdb-main-distribution-board"],
  },
  {
    slug: "synchronizing-panel",
    name: "Synchronizing Panel",
    fullForm: "Generator Synchronizing Panel",
    category: "Power Transfer & Source Management",
    categorySlug: "power-transfer",
    tagline: "Parallel operation of multiple generators.",
    intro:
      "A Synchronizing Panel enables multiple generator sets to be connected in parallel to share load, providing greater capacity, redundancy and flexibility for critical power applications.",
    purpose:
      "Generator synchronization requires precise matching of voltage, frequency and phase angle before connecting generators in parallel. The synchronizing panel provides the instruments, protection and controls necessary to bring generators into synchronism and manage load sharing between them.",
    applications: [
      "Large commercial and industrial facilities with multiple generators",
      "Data centres with N+1 or 2N generator configurations",
      "Hospitals and critical infrastructure",
      "Marine and offshore power systems",
      "Events and temporary power installations",
    ],
    components: [
      "Synchronizer relay or controller",
      "Generator ACBs or MCCBs",
      "Voltage, frequency and power meters",
      "Load sharing controller",
      "Protection relays",
      "Synchronizing check relay",
    ],
    configurations: [
      "2 to multiple generator synchronization",
      "Manual or automatic synchronization",
      "With or without load shedding",
      "With or without AMF (Auto Mains Failure)",
    ],
    image: "/images/products/synchronizing-panel.jpg",
    relatedSlugs: ["ats-automatic-transfer-switch", "mts-manual-transfer-switch"],
  },

  // ── Switching & Isolation ────────────────────────────────
  {
    slug: "isolator-disconnecting-switch",
    name: "Isolator",
    fullForm: "Isolator / Disconnecting Switch",
    category: "Switching & Isolation",
    categorySlug: "switching-isolation",
    tagline: "Safe electrical isolation for maintenance and protection.",
    intro:
      "An Isolator or Disconnecting Switch is an electrical device used to isolate a circuit or piece of equipment from the supply for the purpose of safe maintenance, testing or fault isolation.",
    purpose:
      "Isolators provide a visible means of disconnecting electrical circuits and confirming isolation before maintenance work is carried out. They are designed to be operated under no-load or low-load conditions and are padlockable in the open position to prevent accidental re-energisation.",
    applications: [
      "Transformer and switchgear maintenance isolation",
      "Motor maintenance isolation points",
      "Section isolation in distribution networks",
      "Equipment disconnect in control panels",
      "Feeder isolation in switchboards",
    ],
    components: [
      "Isolating switch mechanism",
      "Enclosure or panel",
      "Locking provisions",
      "Indication of open/closed status",
    ],
    configurations: [
      "Various current ratings available",
      "Single-phase and three-phase",
      "With or without earthing switch",
      "Fused or non-fused versions",
    ],
    image: "/images/products/isolator.jpg",
    relatedSlugs: ["mdb-main-distribution-board", "mcc-motor-control-centre"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return products.filter((p) => slugs.includes(p.slug)).slice(0, 3);
}
