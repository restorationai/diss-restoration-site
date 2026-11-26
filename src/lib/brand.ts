// Brand config — hydrated at scaffold time by build_site.py from
// plan-input.json and the client record. All {{TOKENS}} are replaced
// by the scaffold step; this file should not be hand-edited after that.

export const brand = {
  slug: "diss-restoration",
  displayName: "DISS Restoration",
  shortName: "DISS Restoration",
  legalName: "Direct Industrial Service & Supply LLC",
  // Registered DBA / trade name — filled by rename_site_sync.py the moment
  // the state approves the client's DBA filing (empty until then). When set,
  // the footer carries the "[legal] doing business as [DBA]" line and schema
  // declares it as the business name, so Google/BrightLocal find the new
  // name corroborated on the site before and during the GBP rename.
  dbaName: "DISS Restoration - 24/7 Emergency Flood, Water Damage, and Mold Remediation",
  // Brand name as text beside the header logo (Santino 2026-11-21): set
  // ONLY by the rename flow (header_name_rollout.py) from the Citations
  // Building stage on. false = logo only.
  headerName: true,
  domain: "dissrestoration.com",
  canonicalUrl: "https://dissrestoration.com",
  phone: "(724) 981-1441",
  phoneRaw: "+17249811441",
  hideMobileHeaderCall: false,
  // A2P/SMS-registration legal entity. When set, the estimate forms render
  // the carrier-compliant consent checkbox naming this entity (exact wording
  // matters to reviewers — do not paraphrase). Empty = generic consent only.
  smsConsentEntity: "",
  // Sitewide call-tracking number (2026-08-24). When BOTH fields are set,
  // a tiny inline script in BaseLayout swaps every visible phone mention
  // and tel: link to this number AFTER the page renders. The HTML source,
  // the JSON-LD in schema.ts, and anything crawlers/citation-checkers read
  // keep the canonical NAP number above — humans dial the tracked line,
  // Google sees consistent NAP. Empty = feature off (default at scaffold;
  // filled by the call-tracking provisioning step).
  trackingPhone: "(724) 578-5739",
  trackingPhoneRaw: "+17245785739",
  email: "info@dissrestoration.com",
  hours: "24/7",
  // AVAILABILITY 24/7 (Santino 2026-11-21, scripts/availability.py): calls are
  // answered 24/7 (the AI receptionist), every trade, default true; false only
  // when the client said not to. Separate from the emergency-SERVICE rule
  // (emergency_policy.py, the `hours` gate above). openingHoursSpec = the
  // schema hours (scripts/schema_hours.py): 24/7 when available, else the
  // real Google hours, else none.
  available247: true,
  openingHoursSpec: [{"days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59"}] as { days: string[]; opens: string; closes: string }[],
  foundedYear: "2021",
  primaryCity: "Farrell",
  primaryState: "PA",
  // SERVICE REGION (Santino 2026-11-19): multi-metro clients name the region
  // on every region-wide surface (see src/lib/region.ts); city pages and the
  // address/NAP keep the city. Empty = one-metro client, city wording.
  serviceRegion: "Farrell, PA & the Shenango Valley",
  serviceRegionDetail: "Sharon, Hermitage, Mercer County and the Youngstown, OH area",
  // primaryCity/primaryState = the #1 MARKETING city (headlines, coverage
  // copy). addressCity/addressState = where the business PHYSICALLY is.
  // They are usually the same and sometimes diverge (DISS was Farrell PA office,
  // Youngstown OH target until 2026-10-04) — only the address pair may go in a PostalAddress.
  addressCity: "Farrell",
  addressState: "PA",
  streetAddress: "712 Spearman Avenue",
  postalCode: "16121",
  lat: "41.1035786",
  lng: "-80.6520161",
  placeId: "ChIJHWRJjvrBM4gRsKk68P7eLjc",
  googleCid: "",
  imagesBase: "https://images.dissrestoration.com",
  googleMapsApiKey: "",
  // Analytics — set post-scaffold (scripts/analytics_set.py / create_ga4.py); no-op if empty
  ga4MeasurementId: "G-QQDEBB808D",
  clarityProjectId: "",
  logoUrl: "/images/logo.png",
  licenseNumbers: [] as string[],
  licenseAuthority: "",
  // State license-verification page — the footer links the license number here.
  licenseLookupUrl: "",
  licenseType: "",
  // Operator-confirmed "licensed & insured" attestation from plan-input.json —
  // lets the TrustStrip show the badge before a license number is on file.
  licensedInsuredAttested: true as boolean,
  certifications: ["IICRC Certified Firm", "IICRC WRT (Water)", "IICRC FSRT (Fire & Smoke)", "IICRC AMRT (Mold)", "EPA Lead-Safe Certified", "OSHA Trained", "IICRC ASD (Structural Drying)"] as string[],
  trustBadges: ["IICRC Certified Firm", "Licensed & Insured", "24/7 Emergency Service", "Locally Owned & Operated"] as string[],
  jobPhotos: [] as string[],
  sameAsUrls: ["https://www.facebook.com/DISSRestoration", "https://www.instagram.com/dissrestoration", "https://www.linkedin.com/company/diss-restoration", "https://maps.google.com/maps?cid=3976360707548162480", "https://www.yelp.com/biz/diss-restoration-farrell-3", "https://www.yellowpages.com/farrell-pa/mip/diss-restoration-24-7-emergency-flood-water-damage-and-mold-remediation-567601634"] as string[],
  credentials: [{"name": "IICRC Certified Firm", "kind": "certification", "authority": "IICRC", "holder": "company"}, {"name": "IICRC WRT (Water)", "kind": "certification", "authority": "IICRC", "holder": "technicians", "course": "WRT"}, {"name": "IICRC FSRT (Fire & Smoke)", "kind": "certification", "authority": "IICRC", "holder": "technicians", "course": "FSRT"}, {"name": "IICRC AMRT (Mold)", "kind": "certification", "authority": "IICRC", "holder": "technicians", "course": "AMRT"}, {"name": "EPA Lead-Safe Certified", "kind": "certification", "authority": "U.S. EPA", "holder": "company"}, {"name": "OSHA Trained", "kind": "certification", "holder": "company"}, {"name": "IICRC ASD (Structural Drying)", "kind": "certification", "authority": "IICRC", "holder": "technicians", "course": "ASD"}] as { name: string; kind: string; number?: string; authority?: string; url?: string; since?: string; state?: string; holder?: string; course?: string }[],
  credentialsLine: [{"text": "IICRC-certified technicians (WRT, FSRT, AMRT, ASD)"}, {"text": "IICRC Certified Firm"}, {"text": "EPA Lead-Safe Certified"}, {"text": "OSHA Trained"}] as { text: string; url?: string }[],
  // GBP rating fields — synced from the live Google Business Profile by
  // scripts/sync_brand_reviews.py; never hand-edited (real ratings only).
  gbpRatingValue: "4.6",
  gbpReviewCount: "100",
  gbpReviews: [
    { author: "Denise", rating: 5, text: "Very professional and kept me fully informed of the entire process.", when: "November 2026" },
    { author: "Ladawn", rating: 5, text: "The guys were so friendly and on point!", when: "November 2026" },
    { author: "Gina", rating: 5, text: "Incredible service. Amazing people. Easy to work with. Recommend", when: "October 2026" },
    { author: "Ed", rating: 5, text: "Very professional team, worked very efficiently and effectively", when: "October 2026" },
    { author: "Sandy", rating: 5, text: "Excellent work, very pleased with their work and efficiency.", when: "October 2026" },
    { author: "Susan", rating: 5, text: "DISS did a great job of attending to the results of a gutter problem. They were very careful and protected my floors and baby grand extremely well. Theyvresponded very quickly.", when: "October 2026" },
  ] as { author: string; rating: number; text: string; when: string }[],
  tagline: "24/7 restoration services in Farrell, PA.",
  ctaLabel: "24/7 Emergency Line",
  // Vertical trade-identity copy — resolved at scaffold time from
  // templates/{vertical}/vertical-tokens.json (see scripts/verticals.py).
  // Components must use these instead of hardcoding a trade phrase.
  // vertical gates layout too: restoration is call-first, so the homepage
  // hero renders NO estimate form there (Santino 2026-09-11).
  vertical: "restoration",
  tradeNoun: "restoration",
  specialistPhrase: "Damage Restoration Specialists",
  announcementSuffix: "24/7 Emergency Response",
  homeAboutBlurb: "DISS Restoration serves Farrell, PA and the surrounding Shenango and Mahoning Valley communities, including Youngstown, with professional damage restoration for homes and businesses. From the first emergency call to the final walkthrough, our team manages the entire recovery — and we answer the phone 24/7, so help is on the way the moment something goes wrong.",
} as const;

export const entityId = `${brand.canonicalUrl}/#identity`;
