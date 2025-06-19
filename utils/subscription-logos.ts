// Utility function to get the correct logo for subscriptions on Solsubscription
export function getSubscriptionLogo(provider: string, name: string): string {
  const providerLower = provider.toLowerCase()
  const nameLower = name.toLowerCase()

  // YouTube (any YouTube service)
  if (providerLower.includes("youtube") || nameLower.includes("youtube")) {
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/youtube-premium-27dNtETYoUBcLymcw6PeAGIoxBBz3x.png"
  }

  // Netflix
  if (providerLower.includes("netflix") || nameLower.includes("netflix")) {
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/netflix-T6VIpxcqbJh3CCgZLHHEtFxlpgAbrx.png"
  }

  // Spotify
  if (providerLower.includes("spotify") || nameLower.includes("spotify")) {
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/spotify-3VLZjOVhYcqtUyYXKzrcNEJLbzGT6C.png"
  }

  // Adobe
  if (providerLower.includes("adobe") || nameLower.includes("adobe")) {
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/adobe-64PWRXgMdE0T8MThAB2qCzPfdec4x8.png"
  }

  // Disney
  if (providerLower.includes("disney") || nameLower.includes("disney")) {
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/disney-DPozX9YklIJMLIDir73OZvzlZ6bFCP.png"
  }

  // Microsoft
  if (providerLower.includes("microsoft") || nameLower.includes("office") || nameLower.includes("microsoft")) {
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/microsoft-VVxhx5z8u2Hy5Q10LsMV1ZRJ1bTee1.png"
  }

  // Apple Music
  if (providerLower.includes("apple") && (nameLower.includes("music") || nameLower.includes("apple music"))) {
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/apple-music-Ws3ZtQh6u66LmST0QwDdIU2YMk7nqD.png"
  }

  // Apple TV
  if (providerLower.includes("apple") && (nameLower.includes("tv") || nameLower.includes("apple tv"))) {
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/apple-tv-BqkrMgmNqSv7tZjC3g1o9qeWZDGWbW.png"
  }

  // Amazon Music
  if (providerLower.includes("amazon") && nameLower.includes("music")) {
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/amazon-music-3XSGB2UOuTpLneR4NwZdQfd9c3782L.png"
  }

  // HBO Max
  if (providerLower.includes("hbo") || nameLower.includes("hbo")) {
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/hbo-max-uC9r7uBvS4V8xSkYn4vuOvx0yT2fPB.png"
  }

  // Paramount Plus
  if (providerLower.includes("paramount") || nameLower.includes("paramount")) {
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/paramount-plus-4I31JNnn3ddw52oiavasHdzTagOjPz.png"
  }

  // Tidal
  if (providerLower.includes("tidal") || nameLower.includes("tidal")) {
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/tidal-qsm4QyqI5Y7Mtb4ncP34GllQCrop8j.png"
  }

  // Deezer
  if (providerLower.includes("deezer") || nameLower.includes("deezer")) {
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/deezer-r9eNXNptZFivitf2yL3FjhrMcKwAeM.png"
  }

  // Notion
  if (providerLower.includes("notion") || nameLower.includes("notion")) {
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/notion-f8FPA0jbIigs2fzFHuntawU6trNQWZ.png"
  }

  // Grammarly
  if (providerLower.includes("grammarly") || nameLower.includes("grammarly")) {
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/grammarly-dAOZiUTVRivosMRAdVnIxZbLq4lpXY.png"
  }

  // Evernote
  if (providerLower.includes("evernote") || nameLower.includes("evernote")) {
    return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zip-blob/evernote-w8bCsVuFH8EsxATn7px2fgatOb9G1m.png"
  }

  // Use CDN for other services
  const domain = getDomainFromProvider(provider)
  if (domain) {
    return `https://img.logo.dev/${domain}?token=pk_HA1dmfXUTmyxrzcZoCroPw&retina=true`
  }

  // Default fallback
  return "/placeholder.svg?height=400&width=400"
}

function getDomainFromProvider(provider: string): string | null {
  const providerLower = provider.toLowerCase()

  const domainMap: Record<string, string> = {
    canva: "canva.com",
    hulu: "hulu.com",
    twitch: "twitch.tv",
    discord: "discord.com",
    slack: "slack.com",
    zoom: "zoom.us",
    dropbox: "dropbox.com",
    github: "github.com",
    figma: "figma.com",
    trello: "trello.com",
    asana: "asana.com",
    monday: "monday.com",
    atlassian: "atlassian.com",
    jira: "atlassian.com",
    confluence: "atlassian.com",
    bitbucket: "bitbucket.org",
    gitlab: "gitlab.com",
    mailchimp: "mailchimp.com",
    hubspot: "hubspot.com",
    salesforce: "salesforce.com",
    zendesk: "zendesk.com",
    intercom: "intercom.com",
    freshworks: "freshworks.com",
    shopify: "shopify.com",
    squarespace: "squarespace.com",
    wix: "wix.com",
    wordpress: "wordpress.com",
    webflow: "webflow.com",
    airtable: "airtable.com",
    typeform: "typeform.com",
    calendly: "calendly.com",
    loom: "loom.com",
    miro: "miro.com",
    whimsical: "whimsical.com",
    linear: "linear.app",
    clickup: "clickup.com",
    todoist: "todoist.com",
    evernote: "evernote.com",
    onenote: "microsoft.com",
    bear: "bear.app",
    obsidian: "obsidian.md",
    roam: "roamresearch.com",
    logseq: "logseq.com",
    craft: "craftdocs.com",
    ulysses: "ulysses.app",
    scrivener: "literatureandlatte.com",
    grammarly: "grammarly.com",
    hemingway: "hemingwayapp.com",
    prowritingaid: "prowritingaid.com",
    ginger: "gingersoftware.com",
    languagetool: "languagetool.org",
    reverso: "reverso.net",
    deepl: "deepl.com",
    google: "google.com",
    translate: "translate.google.com",
    duolingo: "duolingo.com",
    babbel: "babbel.com",
    rosettastone: "rosettastone.com",
    busuu: "busuu.com",
    memrise: "memrise.com",
    anki: "ankiweb.net",
    quizlet: "quizlet.com",
    coursera: "coursera.org",
    udemy: "udemy.com",
    skillshare: "skillshare.com",
    masterclass: "masterclass.com",
    pluralsight: "pluralsight.com",
    lynda: "lynda.com",
    linkedin: "linkedin.com",
    udacity: "udacity.com",
    edx: "edx.org",
    khan: "khanacademy.org",
    brilliant: "brilliant.org",
    codecademy: "codecademy.com",
    freecodecamp: "freecodecamp.org",
    treehouse: "teamtreehouse.com",
    datacamp: "datacamp.com",
    kaggle: "kaggle.com",
    coursera: "coursera.org",
    edx: "edx.org",
    futurelearn: "futurelearn.com",
    openlearning: "openlearning.com",
    alison: "alison.com",
    swayam: "swayam.gov.in",
    nptel: "nptel.ac.in",
    mit: "mit.edu",
    stanford: "stanford.edu",
    harvard: "harvard.edu",
    yale: "yale.edu",
    princeton: "princeton.edu",
    columbia: "columbia.edu",
    upenn: "upenn.edu",
    dartmouth: "dartmouth.edu",
    brown: "brown.edu",
    cornell: "cornell.edu",
    berkeley: "berkeley.edu",
    ucla: "ucla.edu",
    usc: "usc.edu",
    nyu: "nyu.edu",
    georgetown: "georgetown.edu",
    northwestern: "northwestern.edu",
    duke: "duke.edu",
    vanderbilt: "vanderbilt.edu",
    rice: "rice.edu",
    emory: "emory.edu",
    carnegie: "cmu.edu",
    johns: "jhu.edu",
    washington: "washington.edu",
    michigan: "umich.edu",
    virginia: "virginia.edu",
    north: "unc.edu",
    wake: "wfu.edu",
    boston: "bu.edu",
    northeastern: "northeastern.edu",
    tufts: "tufts.edu",
    brandeis: "brandeis.edu",
    case: "case.edu",
    rochester: "rochester.edu",
    rensselaer: "rpi.edu",
    lehigh: "lehigh.edu",
    villanova: "villanova.edu",
    fordham: "fordham.edu",
    syracuse: "syracuse.edu",
    pitt: "pitt.edu",
    penn: "psu.edu",
    rutgers: "rutgers.edu",
    maryland: "umd.edu",
    virginia: "vt.edu",
    clemson: "clemson.edu",
    georgia: "gatech.edu",
    florida: "ufl.edu",
    miami: "miami.edu",
    tulane: "tulane.edu",
    texas: "utexas.edu",
    rice: "rice.edu",
    southern: "smu.edu",
    baylor: "baylor.edu",
    oklahoma: "ou.edu",
    kansas: "ku.edu",
    missouri: "missouri.edu",
    iowa: "uiowa.edu",
    wisconsin: "wisc.edu",
    minnesota: "umn.edu",
    illinois: "illinois.edu",
    indiana: "indiana.edu",
    ohio: "osu.edu",
    purdue: "purdue.edu",
    notre: "nd.edu",
    chicago: "uchicago.edu",
    northwestern: "northwestern.edu",
    washington: "wustl.edu",
    colorado: "colorado.edu",
    utah: "utah.edu",
    arizona: "arizona.edu",
    california: "berkeley.edu",
    stanford: "stanford.edu",
    usc: "usc.edu",
    ucla: "ucla.edu",
    ucsd: "ucsd.edu",
    ucsb: "ucsb.edu",
    uci: "uci.edu",
    ucdavis: "ucdavis.edu",
    ucsc: "ucsc.edu",
    ucr: "ucr.edu",
    ucmerced: "ucmerced.edu",
    caltech: "caltech.edu",
    pomona: "pomona.edu",
    claremont: "cmc.edu",
    harvey: "hmc.edu",
    scripps: "scrippscollege.edu",
    pitzer: "pitzer.edu",
    occidental: "oxy.edu",
    loyola: "lmu.edu",
    pepperdine: "pepperdine.edu",
    santa: "scu.edu",
    university: "usfca.edu",
    san: "sandiego.edu",
    point: "pointloma.edu",
    biola: "biola.edu",
    azusa: "apu.edu",
    fuller: "fuller.edu",
    vanguard: "vanguard.edu",
    westmont: "westmont.edu",
    whittier: "whittier.edu",
    redlands: "redlands.edu",
    chapman: "chapman.edu",
    pacific: "pacific.edu",
    mills: "mills.edu",
    dominican: "dominican.edu",
    golden: "ggu.edu",
    academy: "aau.edu",
    art: "artcenter.edu",
    otis: "otis.edu",
    woodbury: "woodbury.edu",
    newschool: "newschool.edu",
    parsons: "newschool.edu",
    fit: "fitnyc.edu",
    pratt: "pratt.edu",
    risd: "risd.edu",
    mica: "mica.edu",
    cca: "cca.edu",
    scad: "scad.edu",
    ait: "ait.edu",
    ringling: "ringling.edu",
    full: "fullsail.edu",
    digipen: "digipen.edu",
    gnomon: "gnomon.edu",
    concept: "conceptdesign.edu",
    laguna: "lcad.edu",
    art: "artcenter.edu",
    brooks: "brooks.edu",
    rocky: "rmcad.edu",
    kansas: "kcai.edu",
    minneapolis: "mcad.edu",
    milwaukee: "miad.edu",
    columbus: "ccad.edu",
    cleveland: "cia.edu",
    cooper: "cooper.edu",
    fashion: "fitnyc.edu",
    school: "sva.edu",
    new: "newschool.edu",
    yale: "yale.edu",
    virginia: "vcuarts.vcu.edu",
    carnegie: "cmu.edu",
    washington: "art.wustl.edu",
    ucla: "ucla.edu",
    usc: "usc.edu",
    stanford: "stanford.edu",
    mit: "mit.edu",
    harvard: "harvard.edu",
    princeton: "princeton.edu",
    columbia: "columbia.edu",
    upenn: "upenn.edu",
    dartmouth: "dartmouth.edu",
    brown: "brown.edu",
    cornell: "cornell.edu",
    berkeley: "berkeley.edu",
    caltech: "caltech.edu",
    chicago: "uchicago.edu",
    northwestern: "northwestern.edu",
    duke: "duke.edu",
    johns: "jhu.edu",
    washington: "wustl.edu",
    georgetown: "georgetown.edu",
    vanderbilt: "vanderbilt.edu",
    rice: "rice.edu",
    notre: "nd.edu",
    emory: "emory.edu",
    carnegie: "cmu.edu",
    virginia: "virginia.edu",
    michigan: "umich.edu",
    north: "unc.edu",
    wake: "wfu.edu",
    tufts: "tufts.edu",
    boston: "bc.edu",
    brandeis: "brandeis.edu",
    rochester: "rochester.edu",
    case: "case.edu",
    nyu: "nyu.edu",
    rensselaer: "rpi.edu",
    lehigh: "lehigh.edu",
    villanova: "villanova.edu",
    northeastern: "northeastern.edu",
    boston: "bu.edu",
    tulane: "tulane.edu",
    georgia: "gatech.edu",
    florida: "ufl.edu",
    texas: "utexas.edu",
    wisconsin: "wisc.edu",
    illinois: "illinois.edu",
    washington: "washington.edu",
    ucla: "ucla.edu",
    usc: "usc.edu",
    ucsd: "ucsd.edu",
    ucsb: "ucsb.edu",
    uci: "uci.edu",
    ucdavis: "ucdavis.edu",
    ucsc: "ucsc.edu",
    ucr: "ucr.edu",
    ucmerced: "ucmerced.edu",
    amazon: "amazon.com",
    prime: "amazon.com",
    twitch: "twitch.tv",
    audible: "audible.com",
    kindle: "amazon.com",
    aws: "aws.amazon.com",
    alexa: "amazon.com",
    echo: "amazon.com",
    fire: "amazon.com",
    whole: "wholefoodsmarket.com",
    zappos: "zappos.com",
    goodreads: "goodreads.com",
    imdb: "imdb.com",
    ring: "ring.com",
    blink: "blinkforhome.com",
    eero: "eero.com",
    pillpack: "pillpack.com",
    souq: "souq.com",
    woot: "woot.com",
    comixology: "comixology.com",
    bookdepository: "bookdepository.com",
    abebooks: "abebooks.com",
    createspace: "createspace.com",
    kdp: "kdp.amazon.com",
    acx: "acx.com",
    merch: "merch.amazon.com",
    mechanical: "mturk.com",
    silk: "silk.co",
    lab126: "lab126.com",
    a9: "a9.com",
    alexa: "alexa.com",
    amazon: "amazon.com",
  }

  for (const [key, domain] of Object.entries(domainMap)) {
    if (providerLower.includes(key)) {
      return domain
    }
  }

  return null
}
