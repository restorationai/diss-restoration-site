// Brand config — hydrated at scaffold time by build_site.py from
// plan-input.json and the client record. All {{TOKENS}} are replaced
// by the scaffold step; this file should not be hand-edited after that.

export const brand = {
  slug: "diss-restoration",
  displayName: "DISS Restoration",
  shortName: "DISS Restoration",
  legalName: "DISS Restoration",
  // Registered DBA / trade name — filled by rename_site_sync.py the moment
  // the state approves the client's DBA filing (empty until then). When set,
  // the footer carries the "[legal] doing business as [DBA]" line and schema
  // declares it as the business name, so Google/BrightLocal find the new
  // name corroborated on the site before and during the GBP rename.
  dbaName: "DISS Restoration - 24/7 Emergency Flood, Water Damage, and Mold Remediation",
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
  foundedYear: "2021",
  primaryCity: "Farrell",
  primaryState: "PA",
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
  sameAsUrls: ["https://maps.google.com/maps?cid=3976360707548162480", "https://www.bbb.org/us/pa/farrell/profile/fire-water-damage-restoration/diss-restoration-0141-10835", "https://www.houzz.com/pro/webuser-746039517"] as string[],
  // GBP rating fields — synced from the live Google Business Profile by
  // scripts/sync_brand_reviews.py; never hand-edited (real ratings only).
  gbpRatingValue: "4.7",
  gbpReviewCount: "71",
  gbpReviews: [
    { author: "Cj", rating: 5, text: "Great company to work with! Extremely professional and great communication. Would highly recommend!", when: "October 2026" },
    { author: "Joseph", rating: 5, text: "My neighbor had a really bad garage fire last year; so bad it took out a bit of my shed. The insurance company sent sent these folks out. They were prompt and thorough; salvaged what they could and cleaned it up, and a comprehensive list of lost items. They got the new shed up quickly and all of my…", when: "October 2026" },
    { author: "Jeffrey", rating: 5, text: "DISS was on site within 1 hour of calling them. Within 4 days they had the carpet ripped out of my flooded basement and had the basement completely dried and restored. They did a fantastic job. I highly recommend them.", when: "October 2026" },
    { author: "James", rating: 5, text: "Alex was excellent! Overall, the food was its usual great taste! Everything was fresh! The orange juice was as advertised and tasted fresh squeezed! My four eggs were cooked sunny side up to perfection! The breakfast potatoes had a wonderful spice! Everyone at our table thoroughly enjoyed their…", when: "October 2026" },
    { author: "Rob", rating: 5, text: "Unfortunately, I have had to contact DISS for service, which means I had a relative disaster that needed assistance. Fortunately, DISS is a fantastic company and goes the extra mile to ensure the job is done the right way. Can’t say enough about their services!", when: "October 2026" },
    { author: "Trucrime", rating: 5, text: "DISS is a class act! They are knowledgeable, keep me informed, and are very, very kind and empathetic. So far, I would not change to another contractor. I had a different one in mind, but I quickly learned that they were not at all dependable. DISS is. I might add that my spirit was down, and my…", when: "October 2026" },
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
