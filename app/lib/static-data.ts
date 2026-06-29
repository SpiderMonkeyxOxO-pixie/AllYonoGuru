import type { AppEntry, CategoryEntry, BlogPostEntry } from "./types";

// Fallback static data used when Strapi is unavailable.
// HARD RULE: avoid win/earn/real-money/bonus/jackpot/hack/withdrawal/profit in user-facing copy.
// Taglines must be 100-120 characters.

export const APPS_STATIC: AppEntry[] = [
  // Primary apps
  {
    id: 1,
    slug: "rummy-guru",
    name: "Rummy Guru",
    tagline:
      "13-card Indian Rummy on Android — three table formats, offline practice mode, and a running stats panel to track your play.",
    description:
      "Classic 13-card Rummy comes down to one fundamental task: arrange your hand into valid sets and sequences before the opponent does. A valid declaration requires at least two sequences, one of which must be a pure sequence — consecutive cards of the same suit with no joker involved. The remaining cards can complete the hand via sets (three or more same-rank cards of different suits) or additional sequences. Rummy Guru gives you three table formats to choose from: Points Rummy for fast single-deal rounds, Pool Rummy for endurance play across multiple deals until only one player stays under the point limit, and Deals Rummy for fixed-round play where chip count determines the outcome.\n\nWhat sets the app apart is how it handles the learning curve. A dedicated offline practice mode lets you drill melding patterns, test sequence-building instincts, and get comfortable with the points system before sitting at a live table. An in-app stats panel tracks your drop rate, declaration accuracy, and round-by-round performance — useful for identifying whether you are dropping too early, drawing too many unnecessary cards, or making premature declarations on incomplete hands.",
    downloadUrl: "https://yonorummy042.com/?code=VIP3Z76MJCF&t=1782478473",
    appVersion: "2.1.0",
    packageSize: "38 MB",
    minAndroid: "6.0",
    iconUrl: "/logos/rummy-guru.webp",
    screenshotUrls: [],
    targetKeyword: "rummy guru",
    secondaryKeyword: "rummy guru apk",
    kd: 5,
    searchVolume: 4400,
    primaryDomain: "allyonoguru",
    navOrder: 1,
    publishedAt: "2026-06-01T00:00:00.000Z",
    seo: {
      metaTitle: "Rummy Guru APK — 13-Card Skill Rummy for Android (Free Download)",
      metaDescription:
        "Rummy Guru: Points, Pool & Deals Rummy on Android with offline practice mode and stats tracking. Free APK. 18+ | State restrictions may apply.",
      canonicalURL: "https://allyonoguru.com/rummy-guru",
    },
    faq: [
      {
        question: "How does a valid Rummy declaration work?",
        answer:
          "To declare in 13-card Rummy, your hand must contain at least two sequences — one of which must be a pure sequence (consecutive same-suit cards with no joker). The remaining cards can form sets of three or more same-rank cards or additional sequences. An invalid declaration results in a penalty.",
      },
      {
        question: "What is the difference between Points, Pool, and Deals Rummy?",
        answer:
          "Points Rummy concludes after a single deal — the loser's unmelded cards are counted as points and the winner takes the pot. Pool Rummy runs across multiple deals; players who accumulate points above a set limit (101 or 201) are eliminated. Deals Rummy runs for a predetermined number of deals, and the player with the highest chip count at the end wins.",
      },
      {
        question: "Does the app include an offline practice mode?",
        answer:
          "Yes. The offline mode runs against simulated opponents and is designed for building hand-management instincts — particularly useful for practicing pure sequence identification, joker placement, and deciding when to drop versus continue a round.",
      },
      {
        question: "Why is Rummy classified as a skill-based game under Indian law?",
        answer:
          "Indian courts, including the Supreme Court, have consistently held that Rummy requires substantial skill — specifically memory (tracking discards), probability assessment (estimating which cards remain in the deck), and strategic decision-making in each draw and discard. This legal classification distinguishes it from games of pure chance.",
      },
      {
        question: "What are the device requirements to install Rummy Guru?",
        answer:
          "The app runs on Android 6.0 and above and requires approximately 38 MB of free storage space. It is optimised for both mid-range and older Android devices.",
      },
    ],
    compliance: {
      showDisclaimer: true,
      showAgeGate: true,
      stateRestrictionNote: "Some states may restrict access to this app.",
    },
    links: [],
  },
  {
    id: 2,
    slug: "teen-patti-guru",
    name: "Teen Patti Guru",
    tagline:
      "3-card Indian skill game on Android — Classic, AK47, Muflis, and Joker variants with offline and live table modes.",
    description:
      "Teen Patti is played with three cards and a betting progression, but the decisions that matter happen before and between bets — not just with the cards themselves. Each round you choose whether to play blind (acting without seeing your hand) or to look and play seen. Playing blind costs less per round but removes hand information. Staying blind when opponents are seen and overbetting is a viable tactical position, especially in early rounds when pot sizes are modest. Reading bet patterns, managing pot odds, and timing when to fold rather than continue are the skills that separate consistent play from relying on card distribution alone.\n\nTeen Patti Guru covers four variants that each shift the underlying probability structure. Classic format uses standard hand rankings: Trail (three of a kind) at the top, followed by Pure Sequence (straight flush), Sequence, Color (flush), Pair, and High Card. AK47 designates Aces, Kings, Fours, and Sevens as wild cards — the abundance of wilds significantly increases the frequency of strong hands, which changes how aggressively you should read opponent confidence. Muflis inverts the entire ranking system so the weakest hand by Classic rules becomes the strongest, which forces a complete reset of your evaluation instincts. Joker introduces a randomly selected wild card each round, varying the threshold for competitive hands deal by deal.",
    downloadUrl: "https://youonogamesgift.com/?code=GK1EVT15SS7&t=1782476329",
    appVersion: "1.8.3",
    packageSize: "42 MB",
    minAndroid: "6.0",
    iconUrl: "/logos/teen-patti-guru.webp",
    screenshotUrls: [],
    targetKeyword: "teen patti guru",
    secondaryKeyword: "teen patti guru apk",
    kd: 4,
    searchVolume: 3600,
    primaryDomain: "allyonoguru",
    navOrder: 2,
    publishedAt: "2026-06-01T00:00:00.000Z",
    seo: {
      metaTitle: "Teen Patti Guru APK — Classic & Variant 3-Card Game for Android",
      metaDescription:
        "Teen Patti Guru: Classic, AK47, Muflis & Joker variants on Android. Offline practice and live tables. Free APK. 18+ | State restrictions may apply.",
      canonicalURL: "https://allyonoguru.com/teen-patti-guru",
    },
    faq: [
      {
        question: "What are the Teen Patti hand rankings from strongest to weakest?",
        answer:
          "From strongest to weakest: Trail or Set (three of a kind), Pure Sequence (three consecutive cards of the same suit), Sequence (three consecutive cards of mixed suits), Color or Flush (three same-suit cards, non-consecutive), Pair (two cards of the same rank), and High Card (no matching combination). In Muflis variant, this order is fully reversed.",
      },
      {
        question: "Which Teen Patti variants are included in the app?",
        answer:
          "Teen Patti Guru includes Classic, AK47 (Aces, Kings, Fours, and Sevens act as wild cards), Muflis (hand rankings are inverted), and Joker (a randomly selected card becomes wild each round). Each variant changes which hands are statistically likely, so your reading of opponent confidence needs to adjust accordingly.",
      },
      {
        question: "What is the tactical difference between playing blind and playing seen?",
        answer:
          "A blind player acts without looking at their cards and pays the minimum stake per round. A seen player has viewed their hand and must bet at least twice the current stake. Staying blind reduces your cost per round and can signal strength even on an unknown hand — useful when you observe that seen players are hesitant or reducing their bets.",
      },
      {
        question: "How does Teen Patti differ from Poker?",
        answer:
          "Teen Patti uses three cards versus Poker's five, and there are no community cards or multi-street betting rounds — each hand progresses through a single betting sequence. The blind vs. seen mechanic has no direct Poker equivalent. The pace is faster and the decision space per hand is narrower, making table-reading the dominant skill.",
      },
      {
        question: "Is there a way to practice before joining live tables?",
        answer:
          "Yes. The app includes a solo offline mode with simulated opponents. It is particularly useful for getting comfortable with the hand-ranking order across variants — especially Muflis, where players who have only played Classic format often misjudge hand strength in the first several rounds.",
      },
    ],
    compliance: {
      showDisclaimer: true,
      showAgeGate: true,
      stateRestrictionNote: "Some states may restrict access to this app.",
    },
    links: [],
  },

  // Network apps — individual directory pages
  {
      id: 3,
      slug: "jaiho-rummy",
      name: "Jaiho Rummy",
      tagline: "Jaiho Rummy focuses on offline practice drills that teach you when to drop a hand or push through to declare.",
      description: "Jaiho Rummy approaches the 13-card format from a study-first perspective, with structured offline drills that isolate specific decision points. Each drill puts you in a position where you must choose between dropping early, taking a middle drop, or playing the hand to a finish. The replayable scenarios mean a single tricky position can be revisited dozens of times until the correct read becomes instinctive.\n\nThe interface surfaces probability hints during practice mode, then strips them away once you move to live tables so the muscle memory has to carry you. Card sorting is automatic but reversible, letting players who prefer manual arrangement keep full control. The result is an app that treats card play like a discipline rather than a casual diversion.",
      downloadUrl: "https://jaihorummy.vip/?code=3NPSEJRCPZW&t=1782363623",
      appVersion: "2.1.4",
      packageSize: "38 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/jaiho-rummy.webp",
      screenshotUrls: [],
      targetKeyword: "jaiho rummy",
      secondaryKeyword: "jaiho rummy apk",
      kd: 2,
      searchVolume: 12000,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "rummy",
      seo: {
        metaTitle: "Jaiho Rummy APK - Offline Drill Practice App",
        metaDescription: "Jaiho Rummy uses offline drills to teach drop-or-fight decisions in the 13-card format. Structured practice for serious card players on Android.",
        canonicalURL: "https://allyonoguru.com/jaiho-rummy"
      },
      faq: [
        { question: "Do Jaiho Rummy drills work without an internet connection?", answer: "Yes, the practice drill library is bundled with the install so you can rehearse hands during commutes or in low-signal areas without needing to connect." },
        { question: "Can I disable the auto-sort feature on Jaiho Rummy?", answer: "Auto-sort is on by default but a toggle in the settings menu lets you switch to fully manual card arrangement if you prefer to organise your hand yourself." },
        { question: "Are probability hints shown during live tables?", answer: "Hints appear only inside the practice drill mode. Live tables present a clean board so the reads you trained have to come from memory alone." },
        { question: "How big is the drill library at launch?", answer: "The base install ships with several hundred curated scenarios covering opening drops, middle-game discards and pre-declaration decisions, with new sets pushed in version updates." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 4,
      slug: "yono-rummy",
      name: "Yono Rummy",
      tagline: "Yono Rummy puts emphasis on matchmaking speed and variant breadth, dropping you into a table within seconds of joining.",
      description: "Yono Rummy is built around the assumption that players value getting to the felt quickly. The matchmaking pool spans Points, Pool of multiple lengths, and Deals format simultaneously, with the queue routing you to whichever variant has open seats first. Average queue time on busy evenings sits in the low single-digit seconds for most stakes.\n\nThe variant breadth is what separates this app from single-format alternatives, and switching between formats does not require leaving the lobby or reloading assets. A persistent left-side panel lists your last few formats so you can hop back to a familiar table layout with one tap. Sound design is deliberately understated to keep multi-table sessions from feeling chaotic.",
      downloadUrl: "https://yonorummy042.com/?code=VIP3Z76MJCF&t=1782478473",
      appVersion: "3.0.8",
      packageSize: "52 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/yono-rummy.webp",
      screenshotUrls: [],
      targetKeyword: "yono rummy",
      secondaryKeyword: "yono rummy download",
      kd: 3,
      searchVolume: 22000,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "rummy",
      seo: {
        metaTitle: "Yono Rummy Download - Fast Matchmaking Card App",
        metaDescription: "Yono Rummy delivers fast multi-format matchmaking across Points, Pool and Deals variants. Switch formats without leaving the lobby on Android.",
        canonicalURL: "https://allyonoguru.com/yono-rummy"
      },
      faq: [
        { question: "Which variants share a matchmaking queue in Yono Rummy?", answer: "Points, all Pool lengths and Deals format pull from the same pool of seated players, which is why queue times stay short even at off-peak hours." },
        { question: "Does switching variants reload the table assets?", answer: "No, the lobby keeps shared assets cached in memory so moving from Pool 101 to Points to Deals happens almost instantly without a loading screen." },
        { question: "Can I save my preferred table layout?", answer: "The left-side panel retains your most recent formats automatically. There is no explicit save action because the app simply remembers the last several seats you occupied." },
        { question: "Is multi-tabling supported on phones?", answer: "Multi-tabling is available on tablets and larger phones, with the layout collapsing to a swipeable stack on smaller screens to keep each table readable." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 5,
      slug: "abc-rummy",
      name: "ABC Rummy",
      tagline: "ABC Rummy is designed around a gentle learning curve with rule explanations built directly into the early table experience.",
      description: "ABC Rummy treats first-time card players as the primary audience. The opening tutorial does not rush through terminology, and the first few practice tables include inline tooltips that explain why a particular discard would or would not be sensible. Rule references are accessible from every screen via a persistent question-mark icon, so a beginner never has to back out of a game to look something up.\n\nThe visual hierarchy prioritises clarity over flash, with high-contrast suit colours and meld groupings that update in real time as you rearrange your hand. Pure sequence and impure sequence requirements are flagged with colour-coded badges so newer players can see at a glance which conditions they have already satisfied. This makes the path from beginner to confident player noticeably shorter than in apps that assume prior knowledge.",
      downloadUrl: "https://www.11abcrummy.com/?code=6X44DU7CVLN&t=1782033658",
      appVersion: "1.6.2",
      packageSize: "29 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/abc-rummy.webp",
      screenshotUrls: [],
      targetKeyword: "abc rummy",
      secondaryKeyword: "abc rummy apk",
      kd: 2,
      searchVolume: 8400,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "rummy",
      seo: {
        metaTitle: "ABC Rummy APK - Beginner-Friendly Card Game",
        metaDescription: "ABC Rummy teaches the 13-card format with inline tooltips, colour-coded meld badges and a persistent rule reference. Ideal for new card players.",
        canonicalURL: "https://allyonoguru.com/abc-rummy"
      },
      faq: [
        { question: "Are the inline tooltips in ABC Rummy permanent or only for beginners?", answer: "Tooltips appear automatically for the first several practice sessions and then taper off, but you can re-enable them in settings if you want the prompts back." },
        { question: "What do the colour-coded badges next to my hand mean?", answer: "Green badges indicate a completed pure sequence, amber marks an impure sequence in progress and grey shows sets that still need work to qualify for declaration." },
        { question: "Is there a glossary of card terms inside the app?", answer: "Yes, the question-mark icon opens a searchable glossary covering joker types, sequence rules, drop options and scoring without leaving your current table." },
        { question: "How long is the introductory tutorial?", answer: "The walkthrough takes around six to eight minutes if you read every prompt, or you can skip ahead at any point and rely on the tooltips during your first live tables." },
        { question: "Does ABC Rummy support left-handed card layout?", answer: "Settings include a mirrored layout option that moves the discard pile and action buttons to the opposite side for players who prefer a left-hand-dominant interface." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 6,
      slug: "boss-rummy",
      name: "Boss Rummy",
      tagline: "Boss Rummy runs daily competitive tables on a fixed elimination ladder that resets every twenty-four hours for fresh standings.",
      description: "Boss Rummy structures its competitive play around a daily ladder rather than open-ended tables. When you sit down, you are entered into a bracket that progresses through several elimination rounds across the day, with your standing visible on a leaderboard that refreshes in real time. The format suits players who enjoy the pressure of survival over the loose flow of casual sessions.\n\nEach ladder bracket caps at a fixed number of seats, which keeps the field tight and the late rounds genuinely competitive. The app archives your bracket history so you can review past elimination points and identify which stages of the day you consistently struggle with. A short stats panel on the home screen surfaces your longest survival streak and your best ladder finish.",
      downloadUrl: "https://www.bossrummyr.com/?code=9HFJ28QUSPR&t=1782038197",
      appVersion: "2.3.1",
      packageSize: "44 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/boss-rummy.webp",
      screenshotUrls: [],
      targetKeyword: "boss rummy",
      secondaryKeyword: "boss rummy download",
      kd: 2,
      searchVolume: 6800,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "rummy",
      seo: {
        metaTitle: "Boss Rummy Download - Daily Elimination Ladder",
        metaDescription: "Boss Rummy runs a daily reset elimination ladder with bracket history and live standings. Built for competitive card players on Android.",
        canonicalURL: "https://allyonoguru.com/boss-rummy"
      },
      faq: [
        { question: "What time does the Boss Rummy daily ladder reset?", answer: "The bracket resets at midnight local device time, with the leaderboard archive snapshotted just before reset so the previous day's standings remain viewable." },
        { question: "Can I join the ladder partway through the day?", answer: "Late entry is allowed but you skip directly into whichever bracket round is currently active, which means you forfeit the easier early stages and start under pressure." },
        { question: "How many seats are in a bracket?", answer: "Bracket size depends on player density at the time you join, but the app aims for a tight field that resolves within the day rather than open-ended pools." },
        { question: "Where can I review my past bracket history?", answer: "The profile tab includes a history section listing every ladder you have entered with the elimination round and final position recorded for each one." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 7,
      slug: "game-rummy",
      name: "Game Rummy",
      tagline: "Game Rummy invests in card animation quality with frame-perfect deal motion and tactile meld feedback that feels physical.",
      description: "Game Rummy distinguishes itself through presentation. Each card deal is rendered with a believable arc and a brief settle motion, and meld groupings animate with a subtle lift when a sequence completes. The result is a tabletop feel that many functional card apps skip in favour of static layouts.\n\nThe haptic layer reinforces every important interaction. Picking up from the closed pile triggers a soft tap, while dropping a finished meld into your declared row produces a heavier confirmation pulse. Players who find purely visual interfaces flat tend to gravitate toward this presentation style because it keeps the tactile sense of holding cards intact even on a glass screen.",
      downloadUrl: "https://gamesrummy.club/?code=GAFDVUWWYBV&t=1782039543",
      appVersion: "1.9.5",
      packageSize: "61 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/game-rummy.webp",
      screenshotUrls: [],
      targetKeyword: "game rummy",
      secondaryKeyword: "game rummy apk",
      kd: 2,
      searchVolume: 5400,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "rummy",
      seo: {
        metaTitle: "Game Rummy APK - Animated Card Play for Android",
        metaDescription: "Game Rummy delivers frame-perfect deal animation, meld lift effects and haptic feedback for a tactile card experience on Android phones.",
        canonicalURL: "https://allyonoguru.com/game-rummy"
      },
      faq: [
        { question: "Can the deal animation be sped up in Game Rummy?", answer: "Settings include a fast-deal toggle that cuts animation duration roughly in half for players who prefer pace over visual flourish during long sessions." },
        { question: "Does the haptic feedback drain battery noticeably?", answer: "Haptics use the device's built-in vibration motor in short pulses, with overall battery impact typically below a few percent across a full evening of play." },
        { question: "Are the card faces customisable?", answer: "Several card-back designs are unlockable through the customisation menu, while card face artwork stays consistent to keep value reading unambiguous at any size." },
        { question: "Does the app support 120Hz displays?", answer: "Animation timing scales to whatever refresh rate the device reports, so 90Hz and 120Hz phones get smoother deal arcs than the standard 60Hz baseline." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 8,
      slug: "gogo-rummy",
      name: "Gogo Rummy",
      tagline: "Gogo Rummy exposes the pace differences between Points, Pool and Deals so players can pick a tempo that suits their mood.",
      description: "Gogo Rummy makes a feature of how each variant feels. Points games end in a single hand and reward quick reads, Pool sessions stretch across many hands with cumulative scoring that rewards patience, and Deals locks the table to a fixed number of hands so you know exactly when you are done. The lobby presents each format with an estimated session length so you can pick deliberately.\n\nThe app also tracks your performance by variant separately, letting you see whether you are stronger in short Points hands or long Pool grinds. This kind of self-knowledge is useful because many players assume they are equally skilled across formats when their actual record tells a more nuanced story. Variant filters in the lobby make it easy to stay within your preferred tempo.",
      downloadUrl: "https://www.gospin.bet/?code=V4U6SUHF9FZ&t=1782040515",
      appVersion: "2.0.7",
      packageSize: "36 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/gogo-rummy.webp",
      screenshotUrls: [],
      targetKeyword: "gogo rummy",
      secondaryKeyword: "gogo rummy download",
      kd: 2,
      searchVolume: 4100,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "rummy",
      seo: {
        metaTitle: "Gogo Rummy Download - Multi-Variant Pace App",
        metaDescription: "Gogo Rummy tracks your record across Points, Pool and Deals separately and labels each format with estimated session length on Android.",
        canonicalURL: "https://allyonoguru.com/gogo-rummy"
      },
      faq: [
        { question: "How does Gogo Rummy estimate session length per variant?", answer: "The lobby uses rolling averages from recent tables of the same stakes, so the estimate adjusts as the player pool composition shifts throughout the day." },
        { question: "Can I see my record split by variant?", answer: "The stats page breaks down hands played, declarations and average score separately for Points, each Pool length and Deals format so comparisons are clear." },
        { question: "Is there a way to filter the lobby to one variant only?", answer: "Yes, a top-of-lobby filter row lets you hide formats you are not interested in and the preference persists across sessions until you change it." },
        { question: "What happens if I leave a Pool game early?", answer: "Leaving a Pool game mid-session counts as a maximum-points exit on the current hand, which is reflected in your variant-specific statistics." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 9,
      slug: "hi-rummy",
      name: "Hi Rummy",
      tagline: "Hi Rummy keeps the install footprint small and the runtime light enough to play smoothly on older Android phones from 2018.",
      description: "Hi Rummy is engineered for devices that have been left behind by heavier card apps. The base install sits under twenty megabytes, animations are kept geometric rather than rendered, and the asset pipeline avoids the high-resolution texture sets that push other apps past a hundred megabytes. The result is a card experience that loads in seconds on three-gigabyte-of-RAM devices.\n\nBackground memory usage stays low because the app aggressively unloads table assets when you leave a seat. Players using older or budget Android phones often find that other card apps stutter during animation peaks, while Hi Rummy's pared-back rendering pipeline avoids those drops entirely. The trade-off is a less ornate presentation, which the audience for this app generally considers a fair exchange.",
      downloadUrl: "https://joinhirummy.top/?code=RX33WPMEYAX&t=1782361457",
      appVersion: "1.4.6",
      packageSize: "18 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/hi-rummy.webp",
      screenshotUrls: [],
      targetKeyword: "hi rummy",
      secondaryKeyword: "hi rummy apk",
      kd: 1,
      searchVolume: 3200,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "rummy",
      seo: {
        metaTitle: "Hi Rummy APK - Lightweight Card App for Old Phones",
        metaDescription: "Hi Rummy installs at under 20 MB and runs smoothly on older Android phones with three gigabytes of RAM. Pared-back card play that loads fast.",
        canonicalURL: "https://allyonoguru.com/hi-rummy"
      },
      faq: [
        { question: "What is the minimum RAM Hi Rummy needs to run smoothly?", answer: "Two gigabytes of RAM is enough for stable play, though three gigabytes gives more headroom if you keep other apps running in the background simultaneously." },
        { question: "Does the app work on Android 5 KitKat-era devices?", answer: "Android 5.0 Lollipop is the supported minimum, which covers most phones still in active use from 2015 onwards including many budget models from that era." },
        { question: "Are graphics quality settings adjustable?", answer: "Hi Rummy ships at a single low-overhead graphics tier rather than offering quality settings, because the goal is consistent performance rather than scalable visuals." },
        { question: "How much storage does the app use after a few weeks of play?", answer: "Cache growth is capped at a small amount, so even after extended use the total footprint typically stays under twenty-five megabytes on most devices." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 10,
      slug: "ind-rummy",
      name: "Ind Rummy",
      tagline: "Ind Rummy stays close to traditional Indian rules and supports regional declaration conventions that vary between states.",
      description: "Ind Rummy is built for players who grew up with household-table conventions rather than internationally standardised rule sets. The app supports the small variations that differ regionally, such as whether the printed joker can substitute inside a pure sequence and how the middle-drop scoring is calculated. Each table lists its active rule set before you sit down so there are no surprises during declaration.\n\nThe traditional flavour extends to the layout, which mimics a household card mat with a felt texture and a centre well for the discard pile. Card backs use patterns familiar to anyone who has played in a family gathering. Players who find the polished international card apps too sterile usually appreciate the comfortable familiarity of the presentation here.",
      downloadUrl: "https://indrummyvip30.com/?code=R9ADC3HL1U6&t=1782361952",
      appVersion: "1.8.3",
      packageSize: "33 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/ind-rummy.webp",
      screenshotUrls: [],
      targetKeyword: "ind rummy",
      secondaryKeyword: "ind rummy download",
      kd: 1,
      searchVolume: 3600,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "rummy",
      seo: {
        metaTitle: "Ind Rummy Download - Traditional Indian Card Rules",
        metaDescription: "Ind Rummy supports regional Indian rule variations including printed joker substitution and middle-drop scoring conventions on Android.",
        canonicalURL: "https://allyonoguru.com/ind-rummy"
      },
      faq: [
        { question: "How do I check which regional rule set a table uses?", answer: "The lobby card for each table lists its active rule set including joker substitution policy and drop scoring, visible before you commit to sitting down." },
        { question: "Does Ind Rummy support the household-style printed joker in pure sequences?", answer: "Some tables permit this and some do not, depending on the regional convention selected. The table rule card makes the policy explicit before you join." },
        { question: "Is the felt mat background customisable?", answer: "Several traditional mat textures are available in the appearance settings, including green felt, blue cloth and a wooden table option for variety." },
        { question: "Can I host a private table with custom rules?", answer: "Private tables let you pick from the supported regional rule sets and invite specific players, which is useful for family groups that prefer their own conventions." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 11,
      slug: "inr-rummy",
      name: "INR Rummy",
      tagline: "INR Rummy lets you switch between variants mid-session without rejoining a lobby, keeping your focus on play rather than navigation.",
      description: "INR Rummy treats format-switching as a fluid action rather than a session boundary. From any table you can open a variant picker that previews open seats in adjacent formats, and accepting a switch carries you directly into the new seat without dropping back to a lobby. The state of your previous table is preserved if you want to return after a few hands elsewhere.\n\nThis design suits players who like to mix tempos within a single sitting, perhaps starting with quick Points hands to warm up and shifting into a longer Pool game once they have a read on the room. The session history sidebar shows your last several tables across all formats, making it easy to retrace your steps. Format flexibility is the central design pillar here rather than a feature bolted on later.",
      downloadUrl: "https://inrrummy.club/?code=JMQ6RYF5BT6&t=1782361577",
      appVersion: "2.2.0",
      packageSize: "41 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/inr-rummy.webp",
      screenshotUrls: [],
      targetKeyword: "inr rummy",
      secondaryKeyword: "inr rummy apk",
      kd: 2,
      searchVolume: 4800,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "rummy",
      seo: {
        metaTitle: "INR Rummy APK - Mid-Session Variant Switching",
        metaDescription: "INR Rummy switches between Points, Pool and Deals mid-session without lobby reload and preserves table state for return visits on Android.",
        canonicalURL: "https://allyonoguru.com/inr-rummy"
      },
      faq: [
        { question: "How does INR Rummy preserve table state when I switch variants?", answer: "Your seat at the previous table is held briefly, and the session sidebar shows it as paused so you can return before another player takes the open chair." },
        { question: "Is there a limit to how many tables I can hold paused?", answer: "Most accounts can hold a small number of tables in the paused state at once, which is enough to flip between two or three formats without losing position." },
        { question: "Does switching mid-session affect my variant statistics?", answer: "Stats remain separated by variant regardless of how you arrived at each table, so frequent switching does not muddy your performance breakdown by format." },
        { question: "Can I disable the variant picker if I prefer staying in one format?", answer: "The picker can be collapsed in settings so the switch button stays out of your way, useful if you have settled on a single format for the session." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 12,
      slug: "joy-rummy",
      name: "Joy Rummy",
      tagline: "Joy Rummy designs its tables around social cues with player avatars, ambient chatter sounds and welcoming features for newcomers.",
      description: "Joy Rummy leans into the social side of card play. Each seat displays an avatar with a small expression that reflects table actions, and ambient background sounds suggest a gathering of friends rather than an empty digital felt. The presentation gives a sense of being part of a group, which is missing from many card apps that strip the experience down to mechanics.\n\nNewcomer features include a gentle introduction mode where opponents at lower stakes tables are matched with players of comparable experience, reducing the early-table intimidation that can scare off beginners. Quick chat presets let players exchange friendly greetings without typing, and the absence of free-form chat keeps the atmosphere consistently welcoming. The overall tone is that of a casual evening get-together moved onto a phone screen.",
      downloadUrl: "https://www.joyrummyon.com/?code=J5KYGYLKSDD&t=1782365855",
      appVersion: "1.7.4",
      packageSize: "35 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/joy-rummy.webp",
      screenshotUrls: [],
      targetKeyword: "joy rummy",
      secondaryKeyword: "joy rummy download",
      kd: 1,
      searchVolume: 3900,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "rummy",
      seo: {
        metaTitle: "Joy Rummy Download - Social Card Tables on Android",
        metaDescription: "Joy Rummy designs welcoming social tables with avatar expressions, quick chat presets and gentle newcomer matchmaking on Android phones.",
        canonicalURL: "https://allyonoguru.com/joy-rummy"
      },
      faq: [
        { question: "Are the avatar expressions in Joy Rummy real opponent reactions?", answer: "Expressions are generated from observable table events such as drops and declarations rather than from any direct opponent input, keeping the visuals authentic but automatic." },
        { question: "Can I disable the ambient background sounds?", answer: "Audio settings let you mute the ambient layer separately from card sound effects, useful if you prefer a quiet table during late-night sessions." },
        { question: "How does newcomer matchmaking work at lower stakes?", answer: "The matchmaker tries to pair players whose recent hand history shows similar experience levels, smoothing the curve so new players are not facing seasoned opponents." },
        { question: "Is free-form text chat available?", answer: "Joy Rummy uses preset quick chat phrases only. There is no free-form text input, which is a deliberate choice to keep the social atmosphere consistently positive." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 13,
      slug: "love-rummy",
      name: "Love Rummy",
      tagline: "Love Rummy uses an intuitive discard interface that translates loose touch gestures into precise card movements during fast hands.",
      description: "Love Rummy puts a lot of design effort into the discard motion. Most card apps demand a fairly precise tap on a small target, which causes mis-discards under time pressure. This app accepts a looser flick gesture in the general direction of the discard pile and uses motion vectors to identify which card you intended, dramatically reducing accidental selections.\n\nThe cross-skill accessibility extends to one-handed phone use. The action zones cluster on the lower half of the screen so a thumb can reach every interactive area without stretching, which matters during longer sessions. Players with limited fine motor control or those who simply play while standing on transport tend to notice the difference within a few hands.",
      downloadUrl: "https://www.loverummy7.com/?code=R6KUXVMQEB1&t=1782366602",
      appVersion: "1.5.8",
      packageSize: "31 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/love-rummy.webp",
      screenshotUrls: [],
      targetKeyword: "love rummy",
      secondaryKeyword: "love rummy apk",
      kd: 1,
      searchVolume: 2900,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "rummy",
      seo: {
        metaTitle: "Love Rummy APK - Gesture-Friendly Card Interface",
        metaDescription: "Love Rummy uses loose flick gestures and a thumb-reachable action zone for accurate one-handed discards on Android phones during fast hands.",
        canonicalURL: "https://allyonoguru.com/love-rummy"
      },
      faq: [
        { question: "How does the flick-to-discard gesture in Love Rummy work?", answer: "A short directional swipe from any card toward the discard pile is interpreted by the motion vector engine, which identifies the intended card based on swipe origin." },
        { question: "Can I switch back to tap-to-discard if I prefer it?", answer: "Yes, a control style setting offers traditional tap-to-discard alongside the default flick mode so players can pick whichever method feels more natural." },
        { question: "Does the one-handed layout work on tablets?", answer: "On tablets the action zone scales upward but stays in the lower portion of the screen, which is comfortable for thumb reach when holding the device vertically." },
        { question: "What happens if the gesture is ambiguous between two cards?", answer: "The app pauses briefly and highlights the most likely card with a confirm prompt rather than guessing, which prevents costly mis-discards in tense moments." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 14,
      slug: "ok-rummy",
      name: "OkRummy",
      tagline: "OkRummy tracks your progression with structured skill milestones that give you measurable benchmarks across hundreds of hands.",
      description: "OkRummy treats skill development as something to be measured. Each player has a progression dashboard that tracks specific competencies separately, including pure sequence formation speed, drop decision accuracy and average discard quality. As you accumulate hands, the dashboard shows which competencies are advancing and which are stuck.\n\nMilestones are unlocked at concrete thresholds rather than as time-based achievements, which keeps the system honest about whether your play has actually improved. The progression view exports as a shareable summary if you want to compare notes with a friend who also plays. Most apps treat hand history as a one-way archive, while this one turns it into a feedback loop you can act on.",
      downloadUrl: "https://www.okrummy42.com/?code=H2G24LRWC8L&t=1782450801",
      appVersion: "2.4.1",
      packageSize: "42 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/ok-rummy.webp",
      screenshotUrls: [],
      targetKeyword: "okrummy",
      secondaryKeyword: "okrummy download",
      kd: 2,
      searchVolume: 5100,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "rummy",
      seo: {
        metaTitle: "OkRummy Download - Skill Progression Card App",
        metaDescription: "OkRummy tracks pure sequence speed, drop accuracy and discard quality across hundreds of hands with milestone-based progression on Android.",
        canonicalURL: "https://allyonoguru.com/ok-rummy"
      },
      faq: [
        { question: "Which competencies does OkRummy track separately?", answer: "Pure sequence formation speed, drop decision accuracy, average discard quality and declaration timing each have their own progression line on the dashboard." },
        { question: "How many hands does it take before progression data becomes meaningful?", answer: "The dashboard surfaces trends reliably after roughly fifty to one hundred hands per competency, with confidence indicators that note when a metric is still sparse." },
        { question: "Can I export my progression dashboard?", answer: "Yes, a share button generates an image summary of your competency lines that can be sent to a friend through any messaging app on your phone." },
        { question: "Do milestones require continuous play to maintain?", answer: "Milestones unlock at fixed thresholds and stay unlocked, so a break from the app does not roll back your progression record or revoke any benchmarks reached." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 15,
      slug: "rumble-rummy",
      name: "Rumble Rummy",
      tagline: "Rumble Rummy is built around head-to-head elimination tables where two players face off until one drops out of the bracket.",
      description: "Rumble Rummy strips the social table down to its leanest competitive form: one opponent across the felt, a fixed number of hands, and a clear ladder structure that progresses survivors upward. The format suits players who find six-seat tables too noisy and prefer a sustained read on a single adversary across multiple hands.\n\nBecause the elimination structure rewards depth of focus, the app includes a pre-match warm-up flow that runs you through a few practice hands against an offline simulator before pairing you with a live opponent. Head-to-head history is preserved per opponent so if you face the same player twice you can review how they discarded under pressure last time. The whole experience is closer to a tournament chess club than a casual card lounge.",
      downloadUrl: "https://www.rumblerummy888.net/?code=82M21AWEVEV&t=1782451748",
      appVersion: "1.9.0",
      packageSize: "39 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/rumble-rummy.webp",
      screenshotUrls: [],
      targetKeyword: "rumble rummy",
      secondaryKeyword: "rumble rummy apk",
      kd: 1,
      searchVolume: 2700,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "rummy",
      seo: {
        metaTitle: "Rumble Rummy APK - Head-to-Head Card Battles",
        metaDescription: "Rumble Rummy runs two-player elimination ladders with per-opponent history and a pre-match warm-up flow for sustained focus on Android.",
        canonicalURL: "https://allyonoguru.com/rumble-rummy"
      },
      faq: [
        { question: "How long does a typical Rumble Rummy head-to-head match last?", answer: "Matches run a fixed number of hands rather than a time limit, with most pairings resolving in eight to fifteen minutes depending on hand complexity." },
        { question: "Does the per-opponent history reveal sensitive details?", answer: "History shows only public table actions you witnessed yourself, such as discard tendencies and declaration timing, not anything private to the opponent's account." },
        { question: "Can I rematch a specific player I just faced?", answer: "A rematch button appears on the post-match screen for several minutes, and if both players tap it the matchmaker prioritises the pairing for the next bracket slot." },
        { question: "Is the offline warm-up simulator skippable?", answer: "Yes, you can jump straight to live matchmaking without warming up, though most regular players use the simulator to settle in before pressure hands begin." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 16,
      slug: "rummy-91",
      name: "Rummy 91",
      tagline: "Rummy 91 specialises in the 91-points pool variant where the elevated threshold shapes drop economics and declaration timing.",
      description: "Rummy 91 is built specifically around the 91-points pool variant. The elevated points threshold changes the strategic landscape compared with shorter pools because players have more margin to absorb a bad hand before elimination becomes a real risk. The app's tutorials are written specifically for this margin, covering how early drops become less costly and when pushing through a marginal hand makes sense.\n\nThe lobby features a points-remaining indicator for every seated player so you can see who is close to the elimination line and adjust your read accordingly. Pool veterans typically appreciate the focused environment because the player pool self-selects for people who actually understand 91-format dynamics rather than treating it as just another length. The variant-specific design choices add up to a sharper game than a generic pool lobby provides.",
      downloadUrl: "https://rummy91g.com/?code=UXT3ZZWQHX8&t=1782456098",
      appVersion: "2.0.3",
      packageSize: "37 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/rummy-91.webp",
      screenshotUrls: [],
      targetKeyword: "rummy 91",
      secondaryKeyword: "rummy 91 download",
      kd: 2,
      searchVolume: 4600,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "rummy",
      seo: {
        metaTitle: "Rummy 91 Download - 91-Points Pool Specialist",
        metaDescription: "Rummy 91 focuses on the 91-points pool variant with visible elimination margins and variant-specific drop economics tutorials on Android.",
        canonicalURL: "https://allyonoguru.com/rummy-91"
      },
      faq: [
        { question: "Why does the 91-points threshold change drop strategy?", answer: "A higher threshold means a single middle drop costs proportionally less of your safety margin, which makes drops more affordable than they are in tighter pool formats." },
        { question: "Is the points-remaining indicator always visible?", answer: "Yes, each seated player has their remaining margin shown next to their avatar, updating in real time after every hand so reads stay current throughout the session." },
        { question: "Are tutorials specific to 91 format or general pool advice?", answer: "Tutorials are written specifically for 91-point dynamics rather than reused generic material, covering elimination thresholds and margin management in detail." },
        { question: "Does the app support other pool lengths as well?", answer: "Rummy 91 focuses exclusively on the 91-points variant. Players looking for 101 or 201 length pools will need to use a different specialised app for those formats." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 17,
      slug: "rummy-77",
      name: "Rummy 77",
      tagline: "Rummy 77 explores a 77-card multi-deck format where the deeper shoe creates different probability reads from the standard game.",
      description: "Rummy 77 builds its table around a 77-card extended shoe rather than the standard configuration. The extra cards in circulation shift discard reads significantly, because the probability of any specific value still being live runs higher across more turns than in a tighter deck. The app teaches the resulting strategic differences directly rather than assuming familiarity from standard play.\n\nThe extended-shoe format particularly benefits players who enjoy probability tracking. Discard reads matter more because the larger pool of unseen cards rewards memory and inference more reliably across a longer hand. The tutorial covers a handful of opening reads that work in 77-card play and would be wrong in a smaller deck, which is a useful corrective for players migrating from the standard format.",
      downloadUrl: "https://rummy77r.net/?code=F3VZY2CL5KV&t=1782648996",
      appVersion: "1.6.5",
      packageSize: "33 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/rummy77.webp",
      screenshotUrls: [],
      targetKeyword: "rummy 77",
      secondaryKeyword: "rummy 77 apk",
      kd: 1,
      searchVolume: 3300,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "rummy",
      seo: {
        metaTitle: "Rummy 77 APK - 77-Card Extended Shoe Format",
        metaDescription: "Rummy 77 uses a 77-card extended shoe that rewards probability tracking and discard memory across longer hands on Android phones.",
        canonicalURL: "https://allyonoguru.com/rummy-77"
      },
      faq: [
        { question: "How is a 77-card shoe different from standard play?", answer: "The extended shoe means more unseen cards remain live for longer, which raises the value of memory and probability inference across the course of a hand." },
        { question: "Do standard rummy reads still work in Rummy 77?", answer: "Some opening reads carry over but several become misleading because the probability landscape shifts, which the in-app tutorial covers with side-by-side examples." },
        { question: "Is the 77-card format faster or slower than standard?", answer: "Hands tend to run slightly longer because the deeper shoe gives more turns before useful cards exhaust, so plan for sessions that take a bit more time per hand." },
        { question: "Can beginners start with Rummy 77 or should they learn standard first?", answer: "Beginners can start here, but the tutorial recommends getting comfortable with basic meld formation in standard play first since the probability layer is denser." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 18,
      slug: "rummy-888",
      name: "Rummy 888",
      tagline: "Rummy 888 puts engineering effort into card dealing performance so the table runs at a consistent high frame rate throughout.",
      description: "Rummy 888 prioritises smooth dealing performance. The rendering pipeline is tuned to maintain steady frame timing during the deal sequence even on mid-range hardware, which matters because deal stutter is the most visible performance issue in card apps. The app uses GPU-accelerated card sprites and avoids the layout passes that cause hitches in less optimised competitors.\n\nFrame rate stability extends across the whole table life cycle including the meld animation phase, which is where many apps drop frames as multiple cards reorganise simultaneously. The trade-off is a slightly larger install footprint to accommodate the optimised asset set. For players who notice and dislike visual stutter, the consistency is worth the storage cost.",
      downloadUrl: "https://rummy888vip31.com/?code=TPUK4VF51V9&t=1782456619",
      appVersion: "2.3.7",
      packageSize: "58 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/rummy888.webp",
      screenshotUrls: [],
      targetKeyword: "rummy 888",
      secondaryKeyword: "rummy 888 download",
      kd: 2,
      searchVolume: 5800,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "rummy",
      seo: {
        metaTitle: "Rummy 888 Download - Smooth High-FPS Card App",
        metaDescription: "Rummy 888 maintains steady frame timing during deals and meld animation with GPU-accelerated card sprites on Android mid-range devices.",
        canonicalURL: "https://allyonoguru.com/rummy-888"
      },
      faq: [
        { question: "What frame rate does Rummy 888 target on average hardware?", answer: "The app targets a stable 60 frames per second on mid-range devices and scales upward on phones that report 90Hz or 120Hz display refresh capability." },
        { question: "Why is the install size larger than other card apps?", answer: "The optimised sprite atlases and pre-rendered card animations take more storage in exchange for the smoother runtime performance during deal and meld sequences." },
        { question: "Does the app drop frames on Android Go devices?", answer: "Android Go devices are below the supported tier, since the rendering pipeline assumes hardware that supports modern GPU sprite batching for the consistency target." },
        { question: "Can I record gameplay smoothly with the built-in Android recorder?", answer: "Yes, the consistent frame timing makes screen recordings noticeably cleaner than in apps that hitch during deals, which is useful if you share hands with friends." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 19,
      slug: "rummy-ludo",
      name: "Rummy Ludo",
      tagline: "Rummy Ludo bundles two distinct table games into one install so you can shift between strategic cards and dice-driven board play.",
      description: "Rummy Ludo packages two very different game experiences into a single install. The card side delivers a standard 13-card rummy table with the usual variants, while the board side runs a polished four-token Ludo with house rules toggles for capture chains and safe-square configurations. Switching between them is a single tap from the home screen.\n\nThe combination suits households where different family members prefer different games but want to share a single app rather than installing two. The Ludo side runs offline against AI as well as online with friends, which the card side does not need because rummy practice is handled through its drill mode. The dual nature is the entire pitch and the app does both halves competently.",
      downloadUrl: "https://ludorummy.win/?code=UWPKN64A3KD&t=1782648889",
      appVersion: "1.8.6",
      packageSize: "67 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/rummy-ludo.webp",
      screenshotUrls: [],
      targetKeyword: "rummy ludo",
      secondaryKeyword: "rummy ludo apk",
      kd: 2,
      searchVolume: 7200,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "rummy",
      seo: {
        metaTitle: "Rummy Ludo APK - Two Games in One Android Install",
        metaDescription: "Rummy Ludo bundles a 13-card rummy table and four-token Ludo board in one install with single-tap switching between game modes on Android.",
        canonicalURL: "https://allyonoguru.com/rummy-ludo"
      },
      faq: [
        { question: "Can I play the Ludo side without an internet connection?", answer: "Yes, Ludo runs offline against AI opponents of adjustable difficulty as well as online with friends. The rummy side requires a connection for live tables." },
        { question: "Are accounts shared between the two game modes?", answer: "A single account covers both modes with separate progress tracking for each, so your rummy stats and your Ludo record live side by side under one profile." },
        { question: "Which Ludo house rules are configurable?", answer: "Capture chain rules, safe-square positions and the requirement to land exactly on home are all toggleable in the Ludo room settings before a match begins." },
        { question: "Does the dual install impact performance on older phones?", answer: "Only the active mode loads into memory at any time, so the app's runtime footprint stays similar to a single-game app despite the larger initial install size." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 20,
      slug: "top-rummy",
      name: "Top Rummy",
      tagline: "Top Rummy serves advanced players with deep practice analytics and high-performance tables tuned for long focused sessions.",
      description: "Top Rummy is aimed at players who have outgrown introductory card apps. The practice analytics track far more than basic hand counts, surfacing patterns like your most common discard-then-regret sequences and the table positions where your declaration timing tends to slip. This level of feedback is unusual in mobile card apps and reflects a serious-player audience.\n\nLive tables are tuned for endurance rather than novelty. The interface deliberately understates animations during long sessions to reduce visual fatigue, and an optional dark-mode felt cuts down on screen glare for late-night play. Top Rummy does not try to be welcoming to newcomers in the way some other apps do, which is part of why advanced players tend to settle here.",
      downloadUrl: "https://www.toprummy.cc/?code=M4G2WX7PAUF&t=1782475234",
      appVersion: "3.1.2",
      packageSize: "48 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/top-rummy.webp",
      screenshotUrls: [],
      targetKeyword: "top rummy",
      secondaryKeyword: "top rummy download",
      kd: 3,
      searchVolume: 8900,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "rummy",
      seo: {
        metaTitle: "Top Rummy Download - Advanced Card Analytics App",
        metaDescription: "Top Rummy tracks discard-regret patterns and declaration timing slips with deep analytics and endurance-tuned tables on Android phones.",
        canonicalURL: "https://allyonoguru.com/top-rummy"
      },
      faq: [
        { question: "What does the discard-regret pattern in Top Rummy actually measure?", answer: "It identifies cards you discarded and then drew an opponent's matching meld within a few turns, suggesting the discard read was off relative to the table state." },
        { question: "How dark is the late-night felt mode?", answer: "The dark felt uses a deep grey-green background that reduces overall screen luminance significantly while keeping card suit colours legible during low-light play." },
        { question: "Can I export my advanced analytics for outside analysis?", answer: "A CSV export option in the analytics screen lets you take your hand history to spreadsheet tools if you want to do your own deeper analysis offline." },
        { question: "Is there a beginner mode for friends I introduce to the app?", answer: "Top Rummy does not run a dedicated beginner mode. Friends new to card play are better served starting in apps designed around the introductory experience." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 21,
      slug: "jaiho-arcade",
      name: "Jaiho Arcade",
      tagline: "Jaiho Arcade collects several short-session mini-games under one shell so you can hop between game types in a single sitting.",
      description: "Jaiho Arcade is structured as a launcher for a curated set of short-form mini-games rather than a single deep experience. Each title in the collection runs for a few minutes per round and the central menu makes switching between them frictionless. The variety suits people who like to sample rather than settle into one game for an entire session.\n\nThe mini-games span dice, cards and prediction formats so a session can move from a quick three-card hand into a board roll without ever leaving the launcher. Each mini-game has its own help screen with a brief rule summary, and the shared profile keeps your stats per title visible from the home screen. The collection refreshes periodically with one or two new entries as older ones rotate out.",
      downloadUrl: "https://www.jaihoarcade39.com/?code=74S26KHLRJD&t=1782363337",
      appVersion: "1.7.8",
      packageSize: "54 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/jaiho-arcade.webp",
      screenshotUrls: [],
      targetKeyword: "jaiho arcade",
      secondaryKeyword: "jaiho arcade apk",
      kd: 2,
      searchVolume: 6400,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "teen-patti",
      seo: {
        metaTitle: "Jaiho Arcade APK - Mini-Game Collection for Android",
        metaDescription: "Jaiho Arcade bundles short-session dice, card and prediction mini-games under one launcher with shared profile stats on Android phones.",
        canonicalURL: "https://allyonoguru.com/jaiho-arcade"
      },
      faq: [
        { question: "How many mini-games are bundled in Jaiho Arcade at launch?", answer: "The collection starts with roughly a dozen titles spanning dice, cards and prediction formats, with the active roster refreshing every few updates as new entries arrive." },
        { question: "Do my stats carry across all the mini-games?", answer: "Each mini-game tracks its own stats independently but they all live under your single profile, so you can review per-game performance from one centralised dashboard." },
        { question: "Are any mini-games playable offline?", answer: "A handful of the included titles support offline practice against AI, while others require an online connection because they rely on live table matchmaking with other players." },
        { question: "What happens when a mini-game rotates out of the collection?", answer: "Rotated titles remain accessible to anyone who played them in the previous rotation, but they no longer appear in the main launcher for new players to discover." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 22,
      slug: "jaiho-arcade-plus",
      name: "Jaiho Arcade+",
      tagline: "Jaiho Arcade+ extends the base arcade with expanded multiplayer modes, persistent rooms and richer mini-game variants.",
      description: "Jaiho Arcade+ is the expanded sibling to the standard arcade. The key additions are persistent multiplayer rooms where the same players can rejoin a continuing session over multiple days, and expanded variants of the base mini-games that introduce new mechanics rather than simply re-skinning the originals. The Plus tier is aimed at players who liked the arcade collection but found the rounds too short to build any continuity.\n\nThe room system supports private invites with shareable join codes, which makes it useful for friend groups who want a recurring meeting place. Stats now track per-room performance separately from your global record, so the same player can have very different reputations in different rooms. The expanded variant mechanics typically add a strategic layer rather than just visual polish, which keeps long-time arcade players engaged.",
      downloadUrl: "https://allyonoguru.com/jaiho-arcade-plus#download",
      appVersion: "1.4.1",
      packageSize: "62 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/jaiho-arcade-2.webp",
      screenshotUrls: [],
      targetKeyword: "jaiho arcade+",
      secondaryKeyword: "jaiho arcade+ download",
      kd: 2,
      searchVolume: 3800,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "teen-patti",
      seo: {
        metaTitle: "Jaiho Arcade+ Download - Expanded Multiplayer Tier",
        metaDescription: "Jaiho Arcade Plus adds persistent multiplayer rooms, shareable join codes and expanded mini-game variants beyond the base arcade on Android.",
        canonicalURL: "https://allyonoguru.com/jaiho-arcade-plus"
      },
      faq: [
        { question: "What makes Jaiho Arcade+ different from the base Jaiho Arcade?", answer: "The Plus tier adds persistent rooms that carry state across sessions and expanded variants with new mechanics rather than only the short-round mini-games." },
        { question: "How long do persistent rooms stay active?", answer: "Rooms remain open as long as at least one member rejoins within a rolling thirty-day window, after which inactive rooms archive automatically to free up server capacity." },
        { question: "Are stats from the base arcade carried into Plus?", answer: "Profile stats carry across because both apps use the same account, but per-room stats inside Plus are tracked separately from your base arcade history." },
        { question: "Can I run both Jaiho Arcade and Arcade+ on the same phone?", answer: "Yes, both apps coexist as separate installs and share your account login so you can use whichever entry point suits the kind of session you want." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 23,
      slug: "jaiho-win",
      name: "Jaiho Win",
      tagline: "Jaiho Win combines card tables with board-style mini-games in a hybrid app aimed at players who enjoy switching formats.",
      description: "Jaiho Win sits at the intersection of card play and board games. The card side offers familiar three-card and rummy formats, while the board side includes a snakes-and-ladders inspired race and a token-chase format that plays in roughly five minutes per round. The hybrid design lets a single session move between deeply strategic and lightly tactical formats without changing apps.\n\nThe lobby tags each available game with an icon for its category so you can scan for the format you want quickly. Shared profile features carry across both sides, including a unified friends list and the ability to invite the same friend to either category of game from the same panel. The mix is unusual in this space and appeals to players who find single-category apps repetitive over long sessions.",
      downloadUrl: "https://www.jaihowin11.com/?code=XZDTYJ1RY1Z&t=1782364383",
      appVersion: "1.6.3",
      packageSize: "59 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/jaiho-win.webp",
      screenshotUrls: [],
      targetKeyword: "jaiho win",
      secondaryKeyword: "jaiho win apk",
      kd: 2,
      searchVolume: 5200,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "teen-patti",
      seo: {
        metaTitle: "Jaiho Win APK - Card and Board Hybrid Android App",
        metaDescription: "Jaiho Win combines three-card and rummy tables with snakes-and-ladders and token-chase board games in one hybrid Android app.",
        canonicalURL: "https://allyonoguru.com/jaiho-win"
      },
      faq: [
        { question: "Which games are included in Jaiho Win at launch?", answer: "The starting lineup includes three-card and rummy on the card side, plus a snakes-and-ladders race and a token-chase format on the board side of the app." },
        { question: "Can I invite the same friend to both card and board games?", answer: "Yes, the unified friends panel lets you send an invite to any game in the lineup from a single contact entry without needing to switch sub-menus." },
        { question: "Are the board games turn-based or real-time?", answer: "Both included board games are turn-based with short timers, which keeps a four-player session moving but still gives time to think about each token movement." },
        { question: "How long is a typical board-side round?", answer: "Most board rounds wrap up in four to seven minutes, which fits comfortably between card hands if you are alternating formats during a longer evening session." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 24,
      slug: "jaiho-91",
      name: "Jaiho 91",
      tagline: "Jaiho 91 implements the 91-style three-card variant with mechanics specifically tuned for the extended-stake table flow.",
      description: "Jaiho 91 is built around a specific three-card variant where the table dynamics differ noticeably from standard play. The 91 designation refers to the extended stake structure that lets hands run longer before resolution, giving players more rounds of betting decisions per dealt hand. The app's interface highlights the current stake tier prominently so the decision context stays clear.\n\nBecause hands extend further, reading opponent betting patterns becomes more valuable than in the snappier standard format. The history panel surfaces each opponent's recent bet-progression behaviour so you can spot players who escalate aggressively versus those who feed in gradually. This kind of structured information is what distinguishes a serious 91-format app from a generic three-card lobby.",
      downloadUrl: "https://91jaihoapp.com/?code=C4238P5H5G8&t=1782362450",
      appVersion: "1.5.4",
      packageSize: "41 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/jaiho91.webp",
      screenshotUrls: [],
      targetKeyword: "jaiho 91",
      secondaryKeyword: "jaiho 91 download",
      kd: 1,
      searchVolume: 3400,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "teen-patti",
      seo: {
        metaTitle: "Jaiho 91 Download - 91-Style Three-Card Variant",
        metaDescription: "Jaiho 91 runs the 91-style three-card variant with extended stake tiers and opponent bet-progression history on Android phones.",
        canonicalURL: "https://allyonoguru.com/jaiho-91"
      },
      faq: [
        { question: "How does the 91-style stake structure work?", answer: "Stake tiers extend across additional rounds compared with standard play, giving each hand more betting decision points before the showdown phase resolves the table." },
        { question: "What does the opponent bet-progression history show?", answer: "It shows the pattern of stake increases each opponent has used in their recent hands, helping you read whether they tend to escalate sharply or build gradually over rounds." },
        { question: "Is the 91 variant beginner-friendly?", answer: "Players new to three-card play generally do better starting with standard format first, because the extended decision rounds in 91 amplify the cost of inexperienced bet sizing." },
        { question: "Can stake tiers be customised at private tables?", answer: "Private tables let the host pick from the supported 91-format tier configurations, which is useful for friend groups that prefer a specific pacing for their sessions." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 25,
      slug: "yono-arcade",
      name: "Yono Arcade",
      tagline: "Yono Arcade is built around fast launch and minimal session startup so you can drop into a round within seconds of opening it.",
      description: "Yono Arcade strips away the splash screens and pre-table assets that slow down many similar apps. The launcher opens directly to the most recent mini-game you played, with a one-tap entry into the next available round. Cold-start time is measured in low single-digit seconds even on mid-range hardware.\n\nThe minimal-startup design extends to navigation: switching between mini-games avoids the full unload-and-reload cycle that adds friction in heavier apps. Background processes are kept lean so resuming the app from a notification interruption returns you almost immediately to your prior screen. Players who play in short fragmented sessions during the day get more actual play time per minute than they would with a slower-launching alternative.",
      downloadUrl: "https://yonoofficial2.com/?code=96LUT957MWS&t=1782476174",
      appVersion: "2.0.5",
      packageSize: "32 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/yono-arcade.webp",
      screenshotUrls: [],
      targetKeyword: "yono arcade",
      secondaryKeyword: "yono arcade apk",
      kd: 2,
      searchVolume: 7800,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "teen-patti",
      seo: {
        metaTitle: "Yono Arcade APK - Fast-Launch Mini-Game Android App",
        metaDescription: "Yono Arcade opens directly to your last mini-game with low single-digit cold-start time and no splash screens on Android phones.",
        canonicalURL: "https://allyonoguru.com/yono-arcade"
      },
      faq: [
        { question: "How fast does Yono Arcade actually cold-start?", answer: "On mid-range Android hardware the cold-start typically lands in two to four seconds from icon tap to playable mini-game screen, depending on background memory pressure." },
        { question: "Does opening directly into the last mini-game skip the main menu?", answer: "Yes, by default you land in the previous title's lobby. A back gesture from there takes you to the launcher if you want to pick something different instead." },
        { question: "Are notifications interrupting gameplay?", answer: "The app uses a low-priority foreground state so most system notifications appear as small banners that do not pause the active mini-game session in progress." },
        { question: "What happens if I have not played a mini-game before?", answer: "First-launch users land in the launcher menu instead of a previous game, with a short one-line description next to each mini-game tile to help with the initial pick." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 26,
      slug: "yono-games",
      name: "Yono Games",
      tagline: "Yono Games operates as a broad multi-game platform with a deep library covering cards, board games and prediction formats.",
      description: "Yono Games positions itself as a platform rather than a single title. The library spans card formats including three-card variants and rummy lengths, board games like Ludo and a token-race format, and prediction-style mini-games with short rounds. The breadth means a user can install one app and find most of the casual game styles they want to play.\n\nThe shared infrastructure across the library reduces total storage cost compared with installing separate apps for each format. Cross-game features include a single friends list, unified notifications and consistent control conventions that carry between titles. The platform model suits players who like variety without the overhead of managing several distinct installs on a phone with limited storage.",
      downloadUrl: "https://youonogamesgift.com/?code=GK1EVT15SS7&t=1782476329",
      appVersion: "3.4.0",
      packageSize: "78 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/yono-games.webp",
      screenshotUrls: [],
      targetKeyword: "yono games",
      secondaryKeyword: "yono games download",
      kd: 3,
      searchVolume: 14000,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "teen-patti",
      seo: {
        metaTitle: "Yono Games Download - Multi-Game Platform Android",
        metaDescription: "Yono Games is a multi-game platform covering cards, board games and prediction formats with shared friends and unified notifications on Android.",
        canonicalURL: "https://allyonoguru.com/yono-games"
      },
      faq: [
        { question: "How many distinct titles live inside Yono Games?", answer: "The library spans more than a dozen distinct titles across card, board and prediction categories, with the catalogue expanding gradually through periodic updates." },
        { question: "Is storage usage the same as installing each game separately?", answer: "Shared assets and a common runtime mean the bundled platform uses noticeably less total storage than installing the equivalent set of standalone game apps." },
        { question: "Do friends invitations work across different titles?", answer: "Yes, a single friends list spans the entire platform so you can invite any contact to any title without rebuilding contact lists per game inside the app." },
        { question: "Can I disable titles I do not play to reduce clutter?", answer: "The library view supports hiding titles from your personal home grid, which does not uninstall them but keeps your launcher focused on the games you actually use regularly." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 27,
      slug: "bet-213",
      name: "Bet 213",
      tagline: "Bet 213 centres on a prediction format where the 2-1-3 pattern dictates round structure and decision pacing throughout play.",
      description: "Bet 213 builds its core loop around the 2-1-3 number pattern. Each round walks through three decision phases of differing weight, and the structure is what gives the format its rhythm. Players who like predictable pacing find the consistency easier to read than open-ended prediction games where round length varies unpredictably.\n\nThe app surfaces a small visual indicator showing which of the three phases you are currently in, which sounds simple but matters because the decision weighting shifts noticeably between phases. The history panel logs each round by phase so post-session review can identify whether you tend to misjudge specific phases more than others. Pattern-recognition players gravitate to this app because the structure rewards observation rather than impulse.",
      downloadUrl: "https://www.bet213.cc/?code=2QT8E6SY5R3&t=1782033957",
      appVersion: "1.3.7",
      packageSize: "28 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/bet-213.webp",
      screenshotUrls: [],
      targetKeyword: "bet 213",
      secondaryKeyword: "bet 213 apk",
      kd: 1,
      searchVolume: 2400,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "teen-patti",
      seo: {
        metaTitle: "Bet 213 APK - 2-1-3 Pattern Prediction Game",
        metaDescription: "Bet 213 uses a 2-1-3 phase pattern for predictable round pacing with per-phase history logging on Android prediction-style gameplay.",
        canonicalURL: "https://allyonoguru.com/bet-213"
      },
      faq: [
        { question: "What exactly does the 2-1-3 pattern in Bet 213 refer to?", answer: "It refers to the three sequential decision phases in each round, weighted differently so the first phase asks two units of consideration, the second one and the third three." },
        { question: "Why does pacing consistency matter in this format?", answer: "Consistent pacing means you always know how many decision points remain in the current round, which makes it easier to commit to a strategy without recalibrating each time." },
        { question: "Does the history panel let me filter by phase?", answer: "Yes, the post-round history supports filtering so you can review only first-phase, second-phase or third-phase decisions and identify where your reads tend to slip." },
        { question: "Is there a practice mode to learn the rhythm?", answer: "A practice mode with no stakes lets you run through rounds purely to internalise the 2-1-3 phase rhythm before committing to live tables with other players." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 28,
      slug: "bingo-101",
      name: "Bingo 101",
      tagline: "Bingo 101 brings strategic depth to Bingo through pattern variety and skill elements that affect how you mark cards each round.",
      description: "Bingo 101 takes the familiar Bingo framework and adds a layer of card selection and pattern-targeting decisions that give the format more strategic weight than the traditional version. Before each round you pick which of the available patterns you want to chase, and the cards you hold create different probabilities of completing each pattern.\n\nThe skill element comes from deciding when to switch your target pattern mid-round as numbers are called. Some patterns become unreachable early while others remain viable across many calls, and reading that trajectory correctly is what separates a thoughtful player from one going through the motions. Pattern history is tracked per round so you can see how often each target pattern has hit recently, which informs future card selection.",
      downloadUrl: "https://bingo101.buzz/?code=3WFSBEZLPYL&t=1782037952",
      appVersion: "1.5.2",
      packageSize: "34 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/bingo-101.webp",
      screenshotUrls: [],
      targetKeyword: "bingo 101",
      secondaryKeyword: "bingo 101 download",
      kd: 1,
      searchVolume: 3100,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "teen-patti",
      seo: {
        metaTitle: "Bingo 101 Download - Pattern Strategy Bingo Android",
        metaDescription: "Bingo 101 adds pattern selection and mid-round target switching to traditional Bingo with skill-based card decisions on Android phones.",
        canonicalURL: "https://allyonoguru.com/bingo-101"
      },
      faq: [
        { question: "How is Bingo 101 different from traditional Bingo?", answer: "Players actively pick which patterns to chase and can switch target patterns mid-round, adding a layer of strategic decision-making absent from passive call-and-mark formats." },
        { question: "What patterns are available to chase each round?", answer: "Common patterns include straight lines, four corners, full card and several diagonal and shape configurations, with the active set rotating across different round types in the lobby." },
        { question: "Does pattern history actually influence future rounds?", answer: "History does not affect the random number draw, but it helps players estimate which patterns have been viable lately so they can pick cards with informed expectations." },
        { question: "Is the format friendly to first-time Bingo players?", answer: "Yes, a tutorial round introduces the pattern selection layer gradually so newcomers can play traditional-feeling rounds first before engaging the strategic switching mechanic." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 29,
      slug: "club-inr",
      name: "Club INR",
      tagline: "Club INR runs a club-style lobby with multiple table formats accessible through a single membership interface and shared roster.",
      description: "Club INR is organised around the metaphor of a card club rather than a list of disconnected tables. Members share a single roster, and the lobby surfaces who else is currently active across all the supported formats. The format spans three-card, rummy and a smaller selection of board games, all visible from one shared view.\n\nThe club design encourages repeated play with the same group of people. Recognising regulars at the lobby level builds the sort of soft community that lobby-only models with anonymous strangers tend to lack. A bookmark feature lets you mark specific tables or specific other members as priorities so the lobby surface adapts to who you actually want to play with rather than just what is open.",
      downloadUrl: "https://clubinrvip1.one/?code=WZJMGMZ4U1K&t=1782038302",
      appVersion: "1.8.0",
      packageSize: "46 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/club-inr.webp",
      screenshotUrls: [],
      targetKeyword: "club inr",
      secondaryKeyword: "club inr apk",
      kd: 1,
      searchVolume: 2600,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "teen-patti",
      seo: {
        metaTitle: "Club INR APK - Multi-Format Club Lobby Android",
        metaDescription: "Club INR organises a shared roster across three-card, rummy and board game tables with member bookmarks and active-player visibility on Android.",
        canonicalURL: "https://allyonoguru.com/club-inr"
      },
      faq: [
        { question: "How does the shared roster in Club INR work?", answer: "Every member is visible in the lobby with their current activity status, so you can see who is at a table, who is idle and who recently joined the active session list." },
        { question: "Can I restrict who sees my activity status?", answer: "Privacy settings let you appear offline or visible only to bookmarked contacts, which is useful if you want to play without notifying the broader club of your presence." },
        { question: "What is the bookmark feature for?", answer: "Bookmarks let you mark specific tables or specific other members as priorities so the lobby surfaces them prominently when they are active in the club." },
        { question: "Are all formats visible from the same lobby view?", answer: "Yes, three-card, rummy and the smaller board game selection all surface together in a single unified lobby rather than requiring you to switch between separate sections." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 30,
      slug: "ind-bingo",
      name: "Ind Bingo",
      tagline: "Ind Bingo runs an Indian Bingo variant whose card structure and calling conventions differ from the standard 75 or 90-ball formats.",
      description: "Ind Bingo implements a regional Indian variant rather than transplanting the standard British 90-ball or American 75-ball formats unchanged. The card grid uses a slightly different size and the calling conventions follow the patterns familiar from household and community gatherings rather than international standards. Players who grew up with these conventions find the app immediately familiar.\n\nThe calling voice is recorded in Hindi by default, with calling-language options including several regional alternatives selectable in settings. Card layouts respect the spacing and grouping conventions used in printed Indian Bingo books, which makes the digital experience feel continuous with offline play. Players new to Bingo via the international formats may take a few rounds to adjust, but those familiar with the Indian variant should feel at home immediately.",
      downloadUrl: "https://allyonoguru.com/ind-bingo#download",
      appVersion: "1.4.5",
      packageSize: "30 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/ind-bingo.webp",
      screenshotUrls: [],
      targetKeyword: "ind bingo",
      secondaryKeyword: "ind bingo download",
      kd: 1,
      searchVolume: 2100,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "teen-patti",
      seo: {
        metaTitle: "Ind Bingo Download - Indian Bingo Variant App",
        metaDescription: "Ind Bingo runs the regional Indian Bingo variant with familiar card spacing, household calling conventions and Hindi voice calling on Android.",
        canonicalURL: "https://allyonoguru.com/ind-bingo"
      },
      faq: [
        { question: "How does the Indian Bingo variant differ from international formats?", answer: "Card grid size and calling conventions follow regional household conventions familiar from community gatherings, rather than the British 90-ball or American 75-ball standards." },
        { question: "Which calling languages are supported?", answer: "Hindi is the default calling language with options for several regional alternatives accessible in the audio settings menu without restarting the active table session." },
        { question: "Can I play the international 75-ball or 90-ball formats here?", answer: "No, Ind Bingo focuses exclusively on the regional Indian variant. Players seeking international standard formats will need a different app built for those rule sets." },
        { question: "Are the card layouts familiar to people who played offline Indian Bingo?", answer: "Yes, the digital cards mirror the spacing and grouping of printed Indian Bingo books so the visual transition from offline to digital play feels seamless for regulars." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 31,
      slug: "ind-club",
      name: "Ind Club",
      tagline: "Ind Club focuses on traditional Indian board and card games preserved in digital form with attention to original rule fidelity.",
      description: "Ind Club is built around preservation. The game selection emphasises traditional Indian formats including regional rummy variants and household three-card conventions that international apps often standardise away. Each game ships with a rule reference that documents the variant's regional origin and explains differences from related formats.\n\nThe presentation aesthetic borrows from physical Indian card and board game material, with felt textures, scoring notations and dealer indicators that mirror the offline experience. The app appeals strongly to players who feel that internationally polished card apps strip out the cultural specificity they grew up with. The fidelity-first approach occasionally trades off polish for authenticity, which the intended audience generally prefers.",
      downloadUrl: "https://indclub40.com/?code=W23E2SHD7PY&t=1782361758",
      appVersion: "1.6.1",
      packageSize: "44 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/ind-club.webp",
      screenshotUrls: [],
      targetKeyword: "ind club",
      secondaryKeyword: "ind club apk",
      kd: 1,
      searchVolume: 2900,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "teen-patti",
      seo: {
        metaTitle: "Ind Club APK - Traditional Indian Games on Android",
        metaDescription: "Ind Club preserves regional Indian rummy variants and household three-card conventions with cultural design fidelity on Android phones.",
        canonicalURL: "https://allyonoguru.com/ind-club"
      },
      faq: [
        { question: "Which traditional Indian games does Ind Club include?", answer: "The selection spans regional rummy variants, household three-card conventions and a small set of traditional board games specific to particular Indian regions." },
        { question: "How does the app document each variant's regional origin?", answer: "Each game includes a rule reference page that names the region the variant comes from and explains how it differs from related formats found elsewhere in the country." },
        { question: "Is the presentation closer to physical games than to slick app design?", answer: "Yes, the deliberate aesthetic leans into traditional Indian materials and notation conventions, prioritising cultural fidelity over the polished international card app look." },
        { question: "Can I suggest a regional variant that is missing?", answer: "The app includes a suggestion form in settings, and several recent additions to the catalogue originated from community submissions of regional variants requested by players." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 32,
      slug: "maha-games",
      name: "Maha Games",
      tagline: "Maha Games covers an unusually wide variety of Indian skill games under one platform with deep regional format support.",
      description: "Maha Games positions itself as a comprehensive collection of Indian skill formats. The catalogue spans card games, board games, prediction-style formats and a handful of dexterity-based mini-games, with regional variants represented where they exist. The breadth makes the app useful for players who want to explore the wider landscape of Indian skill formats rather than committing to one specialty.\n\nDiscovery within the catalogue is supported by a category-and-region filter so you can browse, for example, only North Indian card games or only board games of a particular style. The shared profile carries achievement progress across every title, which gives a long-term sense of progression through the collection. Players who treat the platform as a tour through Indian skill gaming traditions get a lot of mileage from a single install.",
      downloadUrl: "https://yono-mahagames.com/?code=J245RQFLS2L&t=1782367067",
      appVersion: "2.1.6",
      packageSize: "74 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/maha-games.webp",
      screenshotUrls: [],
      targetKeyword: "maha games",
      secondaryKeyword: "maha games download",
      kd: 2,
      searchVolume: 5600,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "teen-patti",
      seo: {
        metaTitle: "Maha Games Download - Indian Skill Games Platform",
        metaDescription: "Maha Games offers a wide catalogue of Indian card, board, prediction and dexterity formats with regional filters and shared progression on Android.",
        canonicalURL: "https://allyonoguru.com/maha-games"
      },
      faq: [
        { question: "How broad is the Maha Games catalogue?", answer: "The catalogue covers card, board, prediction and small dexterity formats including regional variants, with the active list growing through periodic content update cycles." },
        { question: "Does the category and region filter work together?", answer: "Yes, you can stack filters to find, for example, only North Indian card games or only board games from a specific region, which makes discovery much more manageable." },
        { question: "Is progression shared across every title in the platform?", answer: "Achievement progress and profile stats span the entire catalogue, so playing many different titles all contribute to your overall long-term progression record in the app." },
        { question: "Are dexterity mini-games competitive or purely solo?", answer: "Most dexterity mini-games offer both solo time-attack modes and asynchronous score comparison with friends, with a few formats supporting live head-to-head sessions as well." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 33,
      slug: "mbm-bet",
      name: "MBM Bet",
      tagline: "MBM Bet is structured around strategic round management where each prediction phase requires distinct planning and pacing decisions.",
      description: "MBM Bet treats prediction-style play as a sequence of discrete planning decisions rather than continuous reaction. Each round breaks into management phases where the player commits to a strategy before predictions resolve, and the decision points are spaced to allow actual thought rather than rapid-fire reflexes. This pacing suits players who prefer chess-like deliberation to action-oriented gameplay.\n\nThe round-management framing extends to a planning panel where you can sketch your intent for upcoming phases before they begin. Stats track how often your committed plans actually hold across the round versus how often you abandon them mid-stream, which is a useful self-awareness metric. The deliberate pacing distinguishes MBM Bet from prediction apps that prioritise speed over strategic structure.",
      downloadUrl: "https://www.mbmbet14.com/?code=UPHMK55JNJ6&t=1782367306",
      appVersion: "1.4.8",
      packageSize: "29 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/mbm-bet.webp",
      screenshotUrls: [],
      targetKeyword: "mbm bet",
      secondaryKeyword: "mbm bet apk",
      kd: 1,
      searchVolume: 1800,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "teen-patti",
      seo: {
        metaTitle: "MBM Bet APK - Strategic Prediction Round Manager",
        metaDescription: "MBM Bet uses round-management phases and a planning panel for deliberate strategic prediction play rather than rapid reaction on Android.",
        canonicalURL: "https://allyonoguru.com/mbm-bet"
      },
      faq: [
        { question: "How is MBM Bet's planning panel used during a round?", answer: "Before each phase resolves, you can sketch your committed intent in the planning panel, which then tracks whether your actual play matched the plan you committed to." },
        { question: "Does the pacing actually allow time for thought?", answer: "Yes, each decision point includes a deliberation window measured in seconds rather than fractions of a second, giving room for actual analysis rather than reflexive choices." },
        { question: "What does the plan-versus-actual stat tell me?", answer: "It surfaces how often your committed plans hold across the round versus how often you abandon them mid-stream, which highlights tendencies you might want to address." },
        { question: "Is the format suitable for very short play sessions?", answer: "The deliberate pacing makes individual rounds run longer than in fast prediction apps, so this app suits sessions where you have at least several minutes uninterrupted." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 34,
      slug: "neta-vip",
      name: "Neta VIP",
      tagline: "Neta VIP offers tiered table access where members unlock progressively more exclusive lobbies as their activity history accumulates.",
      description: "Neta VIP structures access around a membership tier system. New members start in standard lobbies and unlock progressively more exclusive table tiers as their cumulative activity reaches set thresholds. Higher tiers feature smaller player counts and more attentive table moderation, which appeals to players who find busy general lobbies impersonal.\n\nThe tier progression rewards consistent engagement rather than burst play, so a member who plays moderately across many weeks advances comparably to someone playing intensely over a short period. Each tier carries visible recognition in the lobby including avatar borders and tier badges. The structured advancement is the central pitch and players who like having a long-term goal beyond individual hands tend to settle into the app for the progression itself.",
      downloadUrl: "https://www.neta1.vip/?code=DR0D36UVVZX&t=1782371532",
      appVersion: "1.7.2",
      packageSize: "47 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/neta-vip.webp",
      screenshotUrls: [],
      targetKeyword: "neta vip",
      secondaryKeyword: "neta vip download",
      kd: 2,
      searchVolume: 3700,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "teen-patti",
      seo: {
        metaTitle: "Neta VIP Download - Tiered Member Access App",
        metaDescription: "Neta VIP unlocks progressively exclusive table tiers based on activity history with smaller lobbies and recognition badges on Android.",
        canonicalURL: "https://allyonoguru.com/neta-vip"
      },
      faq: [
        { question: "How are Neta VIP tier thresholds calculated?", answer: "Thresholds combine cumulative active sessions, hands played and consistency across recent weeks rather than rewarding burst play, which favours steady members over short-term intensity." },
        { question: "Can a member be demoted from a higher tier?", answer: "Tiers do not roll back due to inactivity, though there is a separate active-status indicator that quietly marks members who have not played recently in higher-tier lobbies." },
        { question: "Are higher tiers actually less crowded?", answer: "Yes, the membership funnel narrows at each tier so higher lobbies host smaller groups, which most members report makes for a more attentive and social table experience overall." },
        { question: "Do tier badges show up at the table itself?", answer: "Tier badges appear next to member avatars at every table, so the recognition is visible to other players during sessions rather than being hidden in profile screens." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 35,
      slug: "yono-vip",
      name: "Yono VIP",
      tagline: "Yono VIP delivers a premium Yono tier with curated game selections, dedicated table moderation and reduced lobby capacity.",
      description: "Yono VIP exists as the premium counterpart to the broader Yono platform. Membership opens access to a curated subset of game formats that the platform team considers their strongest implementations, paired with dedicated table moderation that handles disruptive behaviour faster than the general lobbies. The premium positioning is about quality rather than additional features.\n\nLobby capacity caps mean VIP tables host smaller groups than the general Yono Games lobbies, which most members report makes the social atmosphere noticeably more cohesive. Membership status carries across Yono ecosystem apps, so VIP recognition is visible whether you are in the arcade, the games platform or any other Yono-branded experience. The integration is part of why members who use multiple Yono apps tend to value the VIP tier highly.",
      downloadUrl: "https://yonovipindia.vip/?code=9U8WLAJJSM5&t=1782481304",
      appVersion: "2.0.4",
      packageSize: "51 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/yono-vip.webp",
      screenshotUrls: [],
      targetKeyword: "yono vip",
      secondaryKeyword: "yono vip apk",
      kd: 3,
      searchVolume: 9200,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "teen-patti",
      seo: {
        metaTitle: "Yono VIP APK - Premium Yono Ecosystem Tier",
        metaDescription: "Yono VIP offers curated game selections, dedicated table moderation and reduced lobby capacity across the Yono ecosystem on Android phones.",
        canonicalURL: "https://allyonoguru.com/yono-vip"
      },
      faq: [
        { question: "What makes Yono VIP different from the general Yono Games app?", answer: "VIP focuses on a curated subset of formats with dedicated moderation and capped lobby capacity, prioritising quality of experience over the broader catalogue of the general app." },
        { question: "Does VIP membership carry across other Yono apps?", answer: "Yes, status is recognised across the Yono ecosystem including the arcade and games platform, with VIP badges visible regardless of which Yono entry point you launched from." },
        { question: "Are VIP tables genuinely less crowded?", answer: "Lobby capacity is capped lower than general lobbies, which keeps table groups smaller and most members report a more cohesive social atmosphere at the resulting tables." },
        { question: "How is disruptive behaviour handled in VIP lobbies?", answer: "Dedicated moderation reviews reports more quickly than general lobbies and applies stricter standards, since the premium positioning depends on consistent quality of conduct at tables." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 36,
      slug: "jaiho-spin",
      name: "Jaiho Spin",
      tagline: "Jaiho Spin offers multiple spin mode variations within the Jaiho ecosystem each tuned for a different style of session pacing.",
      description: "Jaiho Spin presents itself as a family of related spin formats rather than a single mechanic repeated across themes. The included modes vary by how many decision points each round contains and how quickly rounds resolve, so a player can pick a mode that suits their available time and attention level. The variety inside one app reduces the need to install multiple spin-format competitors.\n\nThe mode selector is on the home screen and switching between modes does not require unloading the active assets, which keeps the experience fluid. Each mode tracks its own stats and the consolidated profile view shows your performance across the family. Players who like spin-format gameplay but find single-mode apps repetitive get more session variety here than they would elsewhere.",
      downloadUrl: "https://18jaihospingames.com/?code=416GL765W3A&t=1782364119",
      appVersion: "1.6.7",
      packageSize: "36 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/jaiho-spin.webp",
      screenshotUrls: [],
      targetKeyword: "jaiho spin",
      secondaryKeyword: "jaiho spin download",
      kd: 2,
      searchVolume: 5300,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "spin",
      seo: {
        metaTitle: "Jaiho Spin Download - Multi-Mode Spin App Android",
        metaDescription: "Jaiho Spin includes several spin mode variations with different pacing and decision depth all accessible from one home screen on Android phones.",
        canonicalURL: "https://allyonoguru.com/jaiho-spin"
      },
      faq: [
        { question: "How many spin modes are included in Jaiho Spin?", answer: "Several distinct modes ship at launch with different pacing and decision-depth profiles, and the active set may shift slightly across app updates as new variations roll out." },
        { question: "Can I switch modes without losing my session progress?", answer: "Switching modes returns you to the home screen, but your per-mode stats and any in-progress mode-specific state persist so you can resume each mode independently later." },
        { question: "Which mode is best for short play sessions?", answer: "Shorter modes resolve rounds in well under a minute, which suits brief sessions, while longer modes carry more decision points and reward sustained attention across rounds." },
        { question: "Does the app work without an internet connection?", answer: "Some modes support offline practice while others require a live connection for matchmaking. The mode picker labels each option with its connectivity requirement before you select." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 37,
      slug: "spin-101",
      name: "Spin 101",
      tagline: "Spin 101 is an entry-level format for newcomers with clear visual feedback and no prior spin-game knowledge required to start.",
      description: "Spin 101 is designed as the first spin-format app a newcomer should encounter. The interface assumes zero prior knowledge, with onscreen labels explaining what each visual element represents and a one-time tutorial that walks through the basics in plain language. The pacing is deliberately gentle so a new player has time to understand each round before the next one begins.\n\nVisual feedback is unusually clear: when something happens that matters, the relevant UI element pulses briefly to draw attention to it. This kind of guided clarity is what separates a beginner-friendly format from one that assumes you already know what to look at. The app is positioned explicitly as a starting point, and many users who feel comfortable here later graduate to more demanding spin formats with the foundational understanding already in place.",
      downloadUrl: "https://spin101-e.org/?code=Z9BR1AXYMH3&t=1782473000",
      appVersion: "1.3.4",
      packageSize: "26 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/spin-101.webp",
      screenshotUrls: [],
      targetKeyword: "spin 101",
      secondaryKeyword: "spin 101 apk",
      kd: 1,
      searchVolume: 2800,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "spin",
      seo: {
        metaTitle: "Spin 101 APK - Beginner Spin Format Android App",
        metaDescription: "Spin 101 introduces the spin format to newcomers with clear visual feedback, plain-language tutorials and gentle pacing on Android phones.",
        canonicalURL: "https://allyonoguru.com/spin-101"
      },
      faq: [
        { question: "Is Spin 101 actually suitable for someone who has never played a spin format?", answer: "Yes, the entire app is designed around zero prior knowledge, with a step-by-step tutorial and inline UI labels that explain every element on the screen during early rounds." },
        { question: "Can experienced players skip the tutorial?", answer: "The tutorial is skippable from the first prompt, and the labelled UI elements can also be turned off in settings if you prefer a cleaner screen after you have settled in." },
        { question: "What does the pulsing visual feedback indicate?", answer: "When something happens that matters to your understanding of the round, the relevant UI element pulses briefly to draw your attention to it without interrupting gameplay flow." },
        { question: "Where should I go after I outgrow Spin 101?", answer: "Several more demanding spin formats build on the foundational understanding this app provides, including pattern-recognition focused titles that reward more developed analytical skills." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 38,
      slug: "spin-777",
      name: "Spin 777",
      tagline: "Spin 777 builds its core loop around recognising 7-7-7 combination patterns and reading probability across short consecutive rounds.",
      description: "Spin 777 centres on the classic triple-seven combination pattern. The format puts pattern recognition front and centre, with a small probability indicator that shows how often the 777 combination has appeared across recent rounds in the current session. The indicator does not predict the next round but it gives a sense of the local distribution.\n\nThe app suits players who enjoy reading patterns rather than passively watching outcomes. Stats track your recognition response time and accuracy across hundreds of rounds, which most spin-format apps do not bother measuring. Over a few weeks of regular play the patterns in your own response data become as interesting to study as the in-round patterns themselves, which is part of the appeal for analytically minded players.",
      downloadUrl: "https://spin777-t.com/?code=YLWAEF9UZ9W&t=1782473441",
      appVersion: "1.5.9",
      packageSize: "33 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/spin-777.webp",
      screenshotUrls: [],
      targetKeyword: "spin 777",
      secondaryKeyword: "spin 777 download",
      kd: 2,
      searchVolume: 6700,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "spin",
      seo: {
        metaTitle: "Spin 777 Download - Triple-Seven Pattern App Android",
        metaDescription: "Spin 777 tracks 7-7-7 combination recognition with response time stats and a session-local probability indicator on Android spin gameplay.",
        canonicalURL: "https://allyonoguru.com/spin-777"
      },
      faq: [
        { question: "Does the probability indicator in Spin 777 predict the next round?", answer: "No, it reflects only the distribution across recent rounds in the current session and explicitly does not predict the next outcome, which remains fully independent." },
        { question: "What does pattern response time measure?", answer: "It measures how quickly you recognise and respond to the 777 combination when it appears, which is a useful proxy for how internalised the pattern recognition has become for you." },
        { question: "Is the format demanding for new players?", answer: "Spin 777 is moderately demanding because it asks for attention and pattern recognition. Players new to spin formats are usually better served starting with a beginner-oriented title first." },
        { question: "Can I review my long-term response time trend?", answer: "Yes, the stats page graphs response time across hundreds of recent rounds so you can see whether your pattern recognition has been improving steadily over weeks of regular play." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 39,
      slug: "spin-crush",
      name: "Spin Crush",
      tagline: "Spin Crush adds a layer of mid-round decision points where you can intervene and shape outcomes rather than only watching results.",
      description: "Spin Crush takes the spin format and adds a strategy layer that most spin apps avoid. Each round includes intervention points where the player can commit to a decision that shifts the round's trajectory. The decisions are limited but meaningful, which gives the format more skill expression than a purely passive watch-and-react design.\n\nLearning when to intervene is the central skill the app develops. The post-round summary shows what would have happened if you had not intervened, so you can calibrate over time whether your decision was a net positive or whether you were better off staying passive. This kind of explicit counterfactual feedback is rare in spin-format apps and gives players the information they need to improve deliberately rather than just by feel.",
      downloadUrl: "https://allyonoguru.com/spin-crush#download",
      appVersion: "1.4.3",
      packageSize: "38 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/spin-crush.webp",
      screenshotUrls: [],
      targetKeyword: "spin crush",
      secondaryKeyword: "spin crush apk",
      kd: 1,
      searchVolume: 3500,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "spin",
      seo: {
        metaTitle: "Spin Crush APK - Mid-Round Strategy Spin App",
        metaDescription: "Spin Crush adds intervention decisions and counterfactual post-round summaries to give players genuine strategic depth on Android phones.",
        canonicalURL: "https://allyonoguru.com/spin-crush"
      },
      faq: [
        { question: "How do mid-round interventions in Spin Crush actually work?", answer: "At specific points during each round a decision prompt appears that lets you commit to one of a small set of actions, each of which shifts the trajectory of the resolving round." },
        { question: "What does the counterfactual post-round summary show?", answer: "It displays what the round would have looked like if you had not intervened, which lets you compare actual outcomes against the alternative and calibrate your decisions over time." },
        { question: "Is the strategy layer demanding to learn?", answer: "Initial intervention decisions can feel arbitrary but the counterfactual summaries give clear feedback, so most players develop a reliable read on intervention timing within a few sessions." },
        { question: "Can the strategy layer be disabled for a purely passive experience?", answer: "Intervention prompts can be auto-dismissed in settings if you prefer a passive watch-and-react experience, though most players find the strategy layer is the reason to use this app." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 40,
      slug: "spin-gold",
      name: "Spin Gold",
      tagline: "Spin Gold invests heavily in interface polish with custom illustration, refined motion design and a distinctive visual identity.",
      description: "Spin Gold puts presentation at the centre of its identity. The interface uses custom illustrated assets rather than stock spin-format imagery, with hand-tuned motion timing that gives each round a sense of weight and intent. The visual treatment is the most distinguishing characteristic and is what most users mention first when describing the app.\n\nThe polish extends to micro-interactions that other apps overlook. The reset between rounds includes a small transition animation that establishes context for the next round, and the result reveal is paced so the eye has time to process what happened. Players who care about the aesthetic dimension of a mobile app generally find Spin Gold considerably more appealing than functionally similar competitors that treat visuals as an afterthought.",
      downloadUrl: "https://spingoldvipagent.net/?code=S9VFE5T8JDS&t=1782473990",
      appVersion: "1.7.1",
      packageSize: "55 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/spin-gold.webp",
      screenshotUrls: [],
      targetKeyword: "spin gold",
      secondaryKeyword: "spin gold download",
      kd: 2,
      searchVolume: 4900,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "spin",
      seo: {
        metaTitle: "Spin Gold Download - Polished Spin App for Android",
        metaDescription: "Spin Gold uses custom illustration and hand-tuned motion design to deliver a distinctive premium spin-format experience on Android phones.",
        canonicalURL: "https://allyonoguru.com/spin-gold"
      },
      faq: [
        { question: "What makes Spin Gold's interface distinct from other spin apps?", answer: "The app uses custom illustrated assets rather than stock imagery, paired with hand-tuned motion timing that gives rounds a deliberate sense of pace and intentional weight." },
        { question: "Does the polished visual treatment impact performance?", answer: "The asset set is larger than minimalist competitors but motion timing is optimised carefully, so most mid-range Android phones run the app at full frame rate without dropping frames." },
        { question: "Can I speed up the transition animations between rounds?", answer: "A faster transition option in settings cuts the inter-round animation length for players who prefer pace over the deliberately paced default presentation timing." },
        { question: "Is the visual treatment customisable?", answer: "Several theme variations adjust the overall colour palette and accent illustrations, though the underlying motion design and core illustration style stay consistent across all themes." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 41,
      slug: "spin-lucky",
      name: "Spin Lucky",
      tagline: "Spin Lucky is engineered for the widest possible device compatibility with low resource use and reliable performance on entry phones.",
      description: "Spin Lucky targets Android phones at the budget tier explicitly. The app runs on devices with as little as 1.5 gigabytes of RAM and uses a rendering pipeline tuned to avoid the dropped frames that plague heavier spin apps on entry-level hardware. Battery use stays low because the rendering loop pauses entirely between rounds rather than maintaining continuous animation.\n\nThe broad compatibility extends to display sizes from the smallest current phones up to larger devices, with layout adjustments that keep the spin area readable across the range. Users on older or budget phones who have given up on most current Android game apps often find this one runs smoothly where alternatives have stuttered. The lightweight approach is the central design pillar rather than an optional concession.",
      downloadUrl: "https://allyonoguru.com/spin-lucky#download",
      appVersion: "1.4.0",
      packageSize: "22 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/spin-lucky.webp",
      screenshotUrls: [],
      targetKeyword: "spin lucky",
      secondaryKeyword: "spin lucky apk",
      kd: 1,
      searchVolume: 3300,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "spin",
      seo: {
        metaTitle: "Spin Lucky APK - Lightweight Spin App Wide Support",
        metaDescription: "Spin Lucky runs on Android phones with as little as 1.5 GB RAM using a tuned rendering pipeline that avoids frame drops on entry hardware.",
        canonicalURL: "https://allyonoguru.com/spin-lucky"
      },
      faq: [
        { question: "What is the minimum RAM Spin Lucky needs?", answer: "The app runs on devices with 1.5 gigabytes of RAM, which covers most entry-tier Android phones still in active use including a wide range of older budget models." },
        { question: "Does battery use stay low during longer sessions?", answer: "Yes, the rendering loop pauses between rounds rather than maintaining continuous animation, which keeps battery drain noticeably lower than heavier spin apps with constant motion." },
        { question: "How does the layout adapt to small phone screens?", answer: "Layout scaling keeps the spin area readable on the smallest current phones by repositioning secondary UI elements rather than shrinking the central spin display below comfortable readability." },
        { question: "Are there visual quality settings to adjust?", answer: "The app ships at a single lightweight visual tier rather than offering quality options, because the consistency target depends on a fixed rendering profile across all supported devices." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 42,
      slug: "spin-winner",
      name: "Spin Winner",
      tagline: "Spin Winner focuses on competitive spin formats where pattern recognition skill genuinely separates players over long sessions.",
      description: "Spin Winner is built for players who treat spin formats as a skill discipline rather than a passive entertainment. The competitive tables match players based on a skill rating that updates after every session, so opponents tend to be roughly comparable in pattern-recognition ability. This produces matches that are genuinely contested rather than blowouts in either direction.\n\nThe pattern recognition depth comes from the variety of patterns the app surfaces across rounds. Simple patterns appear alongside more layered ones, and the players who consistently identify the layered patterns faster build a measurable edge across hundreds of rounds. Skill rating progression is visible in the profile and updates after each session, which gives serious players a long-term goal to work toward beyond individual outcomes.",
      downloadUrl: "https://spinwinner-y.com/?code=QVT2P3HKTUZ&t=1782474125",
      appVersion: "1.6.4",
      packageSize: "40 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/spin-winner.webp",
      screenshotUrls: [],
      targetKeyword: "spin winner",
      secondaryKeyword: "spin winner download",
      kd: 2,
      searchVolume: 4200,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "spin",
      seo: {
        metaTitle: "Spin Winner Download - Competitive Pattern Spin App",
        metaDescription: "Spin Winner uses skill-rated matchmaking and layered pattern variety to deliver competitive spin sessions for serious players on Android.",
        canonicalURL: "https://allyonoguru.com/spin-winner"
      },
      faq: [
        { question: "How does Spin Winner's skill rating work?", answer: "Each player has a hidden skill rating that updates after every competitive session, with matchmaking using the rating to pair players of roughly comparable pattern-recognition ability." },
        { question: "What kinds of patterns appear across rounds?", answer: "The pattern library includes simple immediate-read patterns alongside more layered ones that require holding multiple observations in mind, with the mix varying within each session." },
        { question: "Can I see my skill rating progression over time?", answer: "Yes, the profile graphs your rating across recent sessions so you can see whether your pattern recognition has been improving, plateauing or temporarily regressing over weeks." },
        { question: "Are casual non-competitive tables available?", answer: "A casual mode runs separately from competitive matchmaking for players who want to enjoy the format without the rating pressure, though most serious players settle into competitive tables." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 43,
      slug: "yes-spin",
      name: "Yes Spin",
      tagline: "Yes Spin is an ultra-lightweight spin app with a tiny install footprint and battery efficiency tuned for extended daily use.",
      description: "Yes Spin is the leanest entry in the spin-format category. The install footprint sits under fifteen megabytes and the runtime uses minimal background resources, which means the app installs quickly even on slow connections and barely affects available storage on tight devices. Battery efficiency is the second pillar, with the app's idle-when-not-active design avoiding the continuous background activity common to heavier alternatives.\n\nThe minimalist approach extends to the interface, which uses geometric primitives rather than illustrated assets. Visual quality is functional rather than ornate, which players who prioritise lightweight efficiency over presentation generally find acceptable. The app fills the niche of being something you can install on any phone, run regularly without noticing battery or storage impact, and uninstall painlessly if you decide it is not for you.",
      downloadUrl: "https://www.yesspinmotion.com/?code=47TMD53C9SA&t=1782475635",
      appVersion: "1.3.6",
      packageSize: "14 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/yes-spin.webp",
      screenshotUrls: [],
      targetKeyword: "yes spin",
      secondaryKeyword: "yes spin apk",
      kd: 1,
      searchVolume: 2200,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "spin",
      seo: {
        metaTitle: "Yes Spin APK - Ultra-Lightweight Spin App Android",
        metaDescription: "Yes Spin installs at under 15 MB and runs with minimal battery and background resource use for extended daily play on Android phones.",
        canonicalURL: "https://allyonoguru.com/yes-spin"
      },
      faq: [
        { question: "How small is the Yes Spin install footprint?", answer: "The base install sits under fifteen megabytes, with cache growth strictly capped so the total storage footprint typically stays under twenty megabytes even after extended use." },
        { question: "Does battery use really stay low across full days?", answer: "The app's idle-when-not-active design avoids background activity, so opening it briefly several times per day has minimal cumulative impact on overall device battery life." },
        { question: "Is the geometric visual style customisable?", answer: "A few colour palette options are available in settings but the underlying geometric primitive style stays consistent, since custom illustration would add the weight the app deliberately avoids." },
        { question: "Will Yes Spin run on entry-level Android Go devices?", answer: "Yes, the lightweight design works comfortably on Android Go devices and other extremely modest hardware that struggles with most current spin-format apps in the same category." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 44,
      slug: "slot-spin",
      name: "Slot Spin",
      tagline: "Slot Spin combines slot-style reel mechanics with traditional spin format gameplay in a hybrid round structure across phases.",
      description: "Slot Spin sits between two formats. Each round opens with a slot-style reel resolution that sets the initial conditions, after which a traditional spin format phase plays out using those conditions. The hybrid structure produces gameplay that varies more between rounds than either format alone would offer.\n\nThe combination rewards players who like to read both reel results and spin patterns. Each phase requires different mental models, and players who lean strongly toward one or the other often find the unfamiliar phase intriguing rather than off-putting. The post-round summary breaks results down by phase so you can see whether the reel or spin half tends to drive your stronger sessions, which is useful self-knowledge for the hybrid format.",
      downloadUrl: "https://www.slotsspinj.com/?code=C1A5F6PQW4M&t=1782470064",
      appVersion: "1.5.3",
      packageSize: "42 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/slot-spin.webp",
      screenshotUrls: [],
      targetKeyword: "slot spin",
      secondaryKeyword: "slot spin download",
      kd: 2,
      searchVolume: 4500,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "spin",
      seo: {
        metaTitle: "Slot Spin Download - Reel and Spin Hybrid Android",
        metaDescription: "Slot Spin combines slot-style reels with traditional spin format phases in a hybrid round structure with per-phase result breakdown on Android.",
        canonicalURL: "https://allyonoguru.com/slot-spin"
      },
      faq: [
        { question: "How do the two phases in Slot Spin actually combine?", answer: "Each round opens with a slot-style reel resolution that sets initial conditions for the round, after which a traditional spin phase plays out using those starting conditions." },
        { question: "Does the per-phase result breakdown help with improvement?", answer: "Yes, breaking results down by phase reveals whether your reel or spin half tends to drive stronger sessions, which is useful self-knowledge for focusing your attention deliberately." },
        { question: "Is the hybrid format good for someone unfamiliar with both?", answer: "Players new to either reel or spin formats can start here, though the tutorial recommends getting comfortable with one of the two phases in a dedicated app first." },
        { question: "Can I play only the reel phase or only the spin phase?", answer: "No, the round structure binds both phases together as the central design pitch. Players who want phase isolation should use dedicated reel or spin format apps separately." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 45,
      slug: "101z",
      name: "101z",
      tagline: "101z runs a 101-style format with structured round mechanics inspired by household 101-point variants and digital pacing.",
      description: "101z takes its name from the 101-point structure that anchors its round mechanics. Each session works toward a 101-point session total, with intermediate checkpoints that mark progress and decision points that shape pacing. The structure gives sessions a clear arc from opening to resolution rather than the open-ended feel of formats without a defined end state.\n\nThe digital adaptation respects the household pacing the 101-style format developed in, with round lengths that allow time for thought rather than forcing rapid decisions. Stats track your performance across the structured arc, surfacing whether you tend to lose ground in the early checkpoints or the late ones. This kind of phase-aware feedback is unusual in the format and gives players concrete information to act on rather than only an overall record.",
      downloadUrl: "https://101zvip2.com/?code=398LS183AB2&t=1782032243",
      appVersion: "1.4.7",
      packageSize: "31 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/101z.webp",
      screenshotUrls: [],
      targetKeyword: "101z",
      secondaryKeyword: "101z apk",
      kd: 1,
      searchVolume: 1900,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "spin",
      seo: {
        metaTitle: "101z APK - 101-Point Structured Format Android",
        metaDescription: "101z runs a 101-point session structure with checkpoint progression and phase-aware performance feedback on Android phones for thoughtful play.",
        canonicalURL: "https://allyonoguru.com/101z"
      },
      faq: [
        { question: "What does the 101-point session structure in 101z actually mean?", answer: "Each session works toward a 101-point session total with intermediate checkpoints, giving the session a clear arc from opening through middle phase to resolution at the end." },
        { question: "How long does a full 101-point session take?", answer: "Most sessions resolve within twenty to thirty minutes depending on round pacing, which is enough structure to feel like a real arc without demanding a full evening of attention." },
        { question: "Does the phase-aware feedback actually help with improvement?", answer: "Yes, knowing whether you lose ground in early or late checkpoints lets you focus practice on the specific phase where your decisions tend to slip, rather than guessing where the issue lies." },
        { question: "Is the format compatible with shorter play sessions?", answer: "Sessions are designed to resolve as a complete arc, but you can pause and resume mid-session so a longer arc can be played across several shorter sittings without losing progress." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 46,
      slug: "share-slots",
      name: "Share Slots",
      tagline: "Share Slots is the flagship Yono slot experience and serves as the reference implementation that other Yono slots are measured against.",
      description: "Share Slots is positioned as the flagship slot in the Yono ecosystem. The implementation is treated as the reference point that other Yono-branded slots in the catalogue are compared against, with the most polish, the most refined audio design and the deepest feature set of any single Yono slot offering. For players choosing where to start within the Yono slot family, this is the natural entry.\n\nThe app integrates tightly with the broader Yono account system, so progression and recognition carry across other Yono ecosystem apps. The reel mechanics use a refined animation pipeline tuned to feel weighty and intentional rather than fast and arcade-like. Players who want the most fully realised version of a Yono slot rather than a stripped-down or specialised variant typically settle on this app as their primary slot experience.",
      downloadUrl: "https://share0022.com/?code=YAZRMEX5W98&t=1782459612",
      appVersion: "2.5.0",
      packageSize: "68 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/share-slots.webp",
      screenshotUrls: [],
      targetKeyword: "share slots",
      secondaryKeyword: "share slots download",
      kd: 3,
      searchVolume: 11000,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "slots",
      seo: {
        metaTitle: "Share Slots Download - Flagship Yono Slot Android",
        metaDescription: "Share Slots is the flagship Yono slot with refined reel mechanics, deep features and tight ecosystem integration across Yono accounts on Android.",
        canonicalURL: "https://allyonoguru.com/share-slots"
      },
      faq: [
        { question: "Why is Share Slots considered the flagship of the Yono slot family?", answer: "It has the most polish, the deepest feature set and the most refined audio and motion design of any single Yono slot, serving as the reference implementation for the family." },
        { question: "Does my Yono account work across other Yono slot apps?", answer: "Yes, account progression and recognition carry across the entire Yono ecosystem, so playing different Yono slot apps all contribute to your single Yono account profile record." },
        { question: "How do the reel mechanics differ from arcade-style slots?", answer: "The animation pipeline is tuned for a weighty deliberate feel rather than fast arcade-like motion, giving each reel resolution a more considered presence on the screen." },
        { question: "Is Share Slots the right starting point in the Yono slot family?", answer: "Yes, players new to the Yono slot ecosystem are usually best served starting here because the app shows the family at its most fully realised before exploring specialised variants." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 47,
      slug: "567-slots",
      name: "567 Slots",
      tagline: "567 Slots runs a five-by-six-by-seven configuration of paylines and reels that produces a different combinatorial space than standard layouts.",
      description: "567 Slots is named for its configuration: five reels across, six visible positions per reel, and seven active paylines through the resulting grid. The configuration produces a combinatorial space distinct from the more common three-by-five layouts and gives a different feel to pattern reading across the visible grid. Players who have outgrown standard three-by-five slots find the larger grid noticeably more interesting to observe.\n\nEach payline is highlighted with a colour-coded overlay during reel resolution so you can quickly see which lines hit and which missed. The seven-line configuration is enough to feel rich without crossing into the unreadable density of slots with many more lines. The information design respects that a player wants to understand what just happened, not just see a final result, which sets the app apart from less explanatory slot interfaces.",
      downloadUrl: "https://join567slots.com/?code=9UX4YQ28P28&t=1782032755",
      appVersion: "1.6.2",
      packageSize: "49 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/567-slots.webp",
      screenshotUrls: [],
      targetKeyword: "567 slots",
      secondaryKeyword: "567 slots apk",
      kd: 2,
      searchVolume: 4400,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "slots",
      seo: {
        metaTitle: "567 Slots APK - Five-Six-Seven Configuration Slot",
        metaDescription: "567 Slots uses a five-reel six-position seven-payline configuration with colour-coded line overlays for clear pattern reading on Android.",
        canonicalURL: "https://allyonoguru.com/567-slots"
      },
      faq: [
        { question: "What does the 567 configuration in 567 Slots refer to?", answer: "Five reels across, six visible positions per reel and seven active paylines through the resulting grid, which produces a combinatorial space distinct from standard three-by-five layouts." },
        { question: "Are the paylines visible during reel resolution?", answer: "Yes, each payline is highlighted with a colour-coded overlay during reel resolution so you can immediately see which lines hit and which missed without having to decode the result." },
        { question: "Is the grid too dense to read quickly?", answer: "Seven paylines is rich enough to feel substantial without crossing into the unreadable density of slots with many more lines, which most players find sits in a comfortable middle ground." },
        { question: "Does the larger grid run slower than standard layouts?", answer: "Reel resolution timing is comparable to standard three-by-five layouts because the grid renders efficiently, so the larger combinatorial space does not translate into slower round pacing." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 48,
      slug: "777-game",
      name: "777 Game",
      tagline: "777 Game presents the classic three-reel 777 pattern with traditional symbol composition and the original format's structural simplicity.",
      description: "777 Game stays close to the origins of the slot format. The reel composition uses traditional symbols including the classic 7, bar and fruit motifs that defined the format's early decades. The three-reel structure gives each round a quick, readable resolution without the visual noise of high-payline modern layouts.\n\nThe app suits players who appreciate the format's original simplicity over the elaborated variants that dominate modern slot apps. The audio design echoes the mechanical feel of physical machines, with reel-stop sounds that have the percussive quality of metal stops rather than the soft synthetic tones favoured by more digital-feeling slots. Players who feel modern slots have lost the original character generally find this app refreshing rather than dated.",
      downloadUrl: "https://www.777game0.com/?code=H53SKREANMZ&t=1782649361",
      appVersion: "1.8.4",
      packageSize: "36 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/777game.webp",
      screenshotUrls: [],
      targetKeyword: "777 game",
      secondaryKeyword: "777 game download",
      kd: 2,
      searchVolume: 7600,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "slots",
      seo: {
        metaTitle: "777 Game Download - Classic Three-Reel Slot Android",
        metaDescription: "777 Game preserves the classic three-reel 777 slot format with traditional symbols and mechanical-feel audio design on Android phones.",
        canonicalURL: "https://allyonoguru.com/777-game"
      },
      faq: [
        { question: "Does 777 Game stay close to the original slot format?", answer: "Yes, the three-reel composition and traditional symbol set including the classic 7, bar and fruit motifs preserve the original format's character rather than elaborating modern variants." },
        { question: "Why does the audio feel mechanical rather than digital?", answer: "Reel-stop sounds are designed with a percussive metal-stop quality echoing physical machines rather than the soft synthetic tones favoured by more modern digital-feeling slot apps." },
        { question: "Is the format too simple for players used to many paylines?", answer: "Players accustomed to high-payline modern slots may initially find the three-reel format spare, but most come to appreciate the quick readable rounds and lack of visual noise." },
        { question: "Can the audio be muted while keeping the visual feel?", answer: "Audio settings let you mute reel-stop sounds independently of other audio, though many players consider the mechanical audio integral to the app's classic format identity." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 49,
      slug: "789-jackpot",
      name: "789 Jackpot",
      tagline: "789 Jackpot uses a 7-8-9 sequential reel mechanic where the rounds progress through a three-stage structure within each session.",
      description: "789 Jackpot builds its mechanic around a 7-8-9 progression. Each round walks through three sequential stages, with reels resolving differently in each stage based on the structural position. The progression gives rounds a sense of arc rather than the single-shot feel of simpler slot formats, and players who like build-up over instant resolution generally find this engaging.\n\nThe stage indicator stays visible at the top of the screen so the current position within the 7-8-9 arc is always clear. Stats track which stage your stronger sessions tend to peak in, which is useful insight that simpler slots do not surface. The progression structure is the defining feature, and the app's identity hinges on it rather than presenting itself as a generic slot with the 789 numbers as decoration.",
      downloadUrl: "https://join789jackpots1.com/?code=VJJGANTLPWB&t=1782033375",
      appVersion: "1.5.6",
      packageSize: "44 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/789-jackpot.webp",
      screenshotUrls: [],
      targetKeyword: "789 jackpot",
      secondaryKeyword: "789 jackpot apk",
      kd: 2,
      searchVolume: 5900,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "slots",
      seo: {
        metaTitle: "789 Jackpot APK - Three-Stage Progression Slot",
        metaDescription: "789 Jackpot uses a 7-8-9 three-stage reel progression with visible stage indicators and per-stage performance stats on Android phones.",
        canonicalURL: "https://allyonoguru.com/789-jackpot"
      },
      faq: [
        { question: "How does the 7-8-9 stage progression in 789 Jackpot work?", answer: "Each round walks through three sequential stages with reels resolving differently in each stage based on the structural position, giving rounds a clear progressive arc." },
        { question: "Where is the current stage shown?", answer: "A stage indicator stays visible at the top of the screen throughout the round, so the current position within the 7-8-9 arc is always clear without needing to check or recall." },
        { question: "Does per-stage performance tracking actually reveal patterns?", answer: "Yes, knowing which stage your stronger sessions tend to peak in highlights tendencies you might not notice from overall results alone, which is useful for understanding your play." },
        { question: "Is the stage structure customisable?", answer: "The stage structure is the defining mechanic of the app and is not customisable, since changing it would essentially reduce the format to a generic slot with the 789 numbers as decoration." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 50,
      slug: "hindi777",
      name: "Hindi 777",
      tagline: "Hindi 777 ships with a complete Hindi-language interface and Indian-specific design choices throughout every screen of the app.",
      description: "Hindi 777 is built around the recognition that many slot apps treat Hindi as an afterthought rather than a primary language. Every screen including the help documentation, settings labels, error messages and audio prompts is written in Hindi from the start, and the translations were drafted by writers familiar with the colloquial conventions of Hindi-speaking players rather than mechanically translated from English source text.\n\nThe Indian-specific design extends beyond language. Symbol choices, colour palettes and the underlying visual style draw from Indian aesthetic conventions rather than transplanting Western slot imagery unchanged. Players who have used international slot apps with awkward partial Hindi support generally find the difference immediately noticeable. The integrated localisation is the central pitch rather than a feature added late in development.",
      downloadUrl: "https://www.hindi777agent5.com/?code=7LF62XGS8GT&t=1782361149",
      appVersion: "1.7.0",
      packageSize: "41 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/hindi777.webp",
      screenshotUrls: [],
      targetKeyword: "hindi 777",
      secondaryKeyword: "hindi 777 download",
      kd: 2,
      searchVolume: 6300,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "slots",
      seo: {
        metaTitle: "Hindi 777 Download - Hindi-First Slot App Android",
        metaDescription: "Hindi 777 delivers a complete Hindi-language interface and Indian-specific design with colloquial translations and cultural visual style on Android.",
        canonicalURL: "https://allyonoguru.com/hindi777"
      },
      faq: [
        { question: "Is the entire Hindi 777 interface really in Hindi?", answer: "Yes, every screen including help documentation, settings labels, error messages and audio prompts is in Hindi from the start, not partially translated from an English source." },
        { question: "Were the Hindi translations done by actual writers?", answer: "Yes, translations were drafted by writers familiar with colloquial conventions of Hindi-speaking players rather than produced through mechanical translation tools applied to English text." },
        { question: "Are the visual design choices Indian-specific?", answer: "Symbol choices, colour palettes and the overall visual style draw from Indian aesthetic conventions rather than transplanting Western slot imagery, giving the app a distinct visual identity." },
        { question: "Can I switch to English if I prefer?", answer: "English is available as an alternative interface language in settings, but the app's primary design audience is Hindi-speaking players and the Hindi presentation is its central distinguishing feature." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 51,
      slug: "ind-slots",
      name: "Ind Slots",
      tagline: "Ind Slots themes its reels around Indian cultural motifs with hand-drawn symbol art and seasonal visual variations tied to festivals.",
      description: "Ind Slots is a slot app built explicitly around Indian cultural visual identity. The reel symbols are hand-drawn rather than stock illustrated, drawing on motifs that range from regional architectural elements to festival iconography. Seasonal visual variations cycle through the year so the app's appearance reflects the major Indian festivals as they arrive in the calendar.\n\nThe cultural specificity extends beyond decoration to the audio design, with reel resolution sounds incorporating subtle musical elements from Indian traditions rather than generic mechanical or electronic tones. Players who feel that internationally produced slot apps strip out cultural context generally find the integrated approach here more satisfying. The app's identity is rooted in the cultural design rather than treating Indian visual elements as a superficial theme.",
      downloadUrl: "https://www.indslotsreferral.com/?code=T2QSBUR7LT4&t=1782362370",
      appVersion: "1.6.8",
      packageSize: "53 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/ind-slots.webp",
      screenshotUrls: [],
      targetKeyword: "ind slots",
      secondaryKeyword: "ind slots apk",
      kd: 2,
      searchVolume: 4700,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "slots",
      seo: {
        metaTitle: "Ind Slots APK - Indian Cultural Themed Slot Android",
        metaDescription: "Ind Slots uses hand-drawn Indian cultural motifs, festival seasonal variations and traditional musical audio elements on Android phones.",
        canonicalURL: "https://allyonoguru.com/ind-slots"
      },
      faq: [
        { question: "Are the symbol illustrations in Ind Slots hand-drawn?", answer: "Yes, reel symbols are hand-drawn rather than stock illustrated, drawing on motifs that range from regional architectural elements to festival iconography across India." },
        { question: "How do the seasonal visual variations work?", answer: "The app's appearance cycles through visual variations tied to major Indian festivals as they arrive in the calendar, so the experience changes subtly across the year." },
        { question: "Does the audio design include traditional musical elements?", answer: "Yes, reel resolution sounds incorporate subtle musical elements from Indian traditions rather than generic mechanical or electronic tones found in internationally produced slot apps." },
        { question: "Can the cultural theming be turned off?", answer: "The cultural design is the central identity of the app and is not separable from the underlying mechanics. Players seeking a culture-neutral slot experience should look at other apps." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 52,
      slug: "jaiho-slot",
      name: "Jaiho Slot",
      tagline: "Jaiho Slot is the Jaiho network's dedicated slot entry with tight ecosystem integration across other Jaiho-branded apps.",
      description: "Jaiho Slot positions itself as the dedicated slot experience within the Jaiho network ecosystem. The app uses the shared Jaiho account so progress and recognition carry across other Jaiho-branded apps including the arcade and the various card-format apps in the network. For users who already play other Jaiho apps, the integration removes the friction of separate accounts.\n\nThe slot mechanics themselves use a standard five-reel structure with paylines configured for clear pattern reading rather than dense complexity. What distinguishes the app within the broader slot category is the network integration rather than mechanical innovation, which is the intended design choice. Players who value being part of a coherent app ecosystem find this app a natural addition to their Jaiho collection.",
      downloadUrl: "https://www.jaihoslots23.com/?code=QJSJQQDZDDM&t=1782363832",
      appVersion: "1.8.7",
      packageSize: "47 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/jaiho-slot.webp",
      screenshotUrls: [],
      targetKeyword: "jaiho slot",
      secondaryKeyword: "jaiho slot download",
      kd: 2,
      searchVolume: 5500,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "slots",
      seo: {
        metaTitle: "Jaiho Slot Download - Jaiho Network Slot Android",
        metaDescription: "Jaiho Slot integrates with the Jaiho network account across arcade and card apps with standard five-reel mechanics on Android phones.",
        canonicalURL: "https://allyonoguru.com/jaiho-slot"
      },
      faq: [
        { question: "Does Jaiho Slot share an account with other Jaiho apps?", answer: "Yes, the app uses the shared Jaiho account so progress and recognition carry across other Jaiho-branded apps including the arcade and the various card-format apps in the network." },
        { question: "How does Jaiho Slot differ from other Jaiho network apps?", answer: "It is the dedicated slot experience within the network, focusing on standard five-reel slot mechanics rather than the card or mini-game formats covered by other Jaiho apps." },
        { question: "Are payline configurations dense or clear?", answer: "Paylines are configured for clear pattern reading rather than dense complexity, which keeps reel resolution legible without sacrificing the variety needed for interesting rounds." },
        { question: "Can I use Jaiho Slot without an account?", answer: "An account is required because the integration with other Jaiho network apps depends on it. Players who want a fully standalone slot experience should look at apps outside the network." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 53,
      slug: "jahio-777",
      name: "Jahio 777",
      tagline: "Jahio 777 implements the 777 reel format with Jahio's distinct visual treatment and audio identity separate from related apps.",
      description: "Jahio 777 takes the familiar 777 reel format and gives it Jahio's distinctive visual treatment. The visual identity uses a warmer colour palette than the brighter slot apps in the same category, and the audio design favours softer tones over the percussive impacts common to the format. The result is a 777 slot that feels noticeably different in atmosphere from competitors despite using comparable underlying mechanics.\n\nThe app's distinguishing character is the surface presentation rather than the underlying mechanics, which the design team treats as a feature rather than a limitation. Players who like the 777 format but find brighter slot apps fatiguing over longer sessions tend to gravitate to this app for its more restrained atmosphere. The differentiation is deliberate and consistent across every screen of the app.",
      downloadUrl: "https://allyonoguru.com/jahio-777#download",
      appVersion: "1.5.5",
      packageSize: "39 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/jahio-777.webp",
      screenshotUrls: [],
      targetKeyword: "jahio 777",
      secondaryKeyword: "jahio 777 apk",
      kd: 1,
      searchVolume: 3100,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "slots",
      seo: {
        metaTitle: "Jahio 777 APK - Distinct 777 Slot Identity Android",
        metaDescription: "Jahio 777 takes the 777 reel format with a warmer palette and softer audio design for a restrained atmosphere on Android phones.",
        canonicalURL: "https://allyonoguru.com/jahio-777"
      },
      faq: [
        { question: "How does Jahio 777 differ visually from other 777 slot apps?", answer: "It uses a warmer colour palette than the brighter slot apps in the same category, paired with softer audio that gives the format a noticeably more restrained overall atmosphere." },
        { question: "Are the underlying mechanics meaningfully different?", answer: "The underlying 777 reel mechanics are comparable to other apps in the format. The differentiation is deliberately at the level of surface presentation rather than mechanical innovation." },
        { question: "Is the softer audio design good for long sessions?", answer: "Yes, players who find brighter slot apps fatiguing over longer sessions generally find the more restrained audio atmosphere here is easier on the ear during extended sittings." },
        { question: "Can I adjust the colour palette if I prefer brighter visuals?", answer: "A few palette variations are available in settings but the warmer baseline tone is the app's central visual identity, so brighter palettes still stay within a restrained overall range." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 54,
      slug: "jaiho-777",
      name: "Jaiho 777",
      tagline: "Jaiho 777 is the flagship Jaiho slot with the full feature set including trigger rounds, animated symbols and progressive pattern tracking.",
      description: "Jaiho 777 is the most fully featured slot in the Jaiho catalogue. The app includes everything the network builds into its slot products: trigger rounds that activate from specific symbol combinations, fully animated symbol art that reacts to reel positions, and a progressive pattern tracking system that records your reel histories across sessions. For users sampling the Jaiho slot family, this is the natural showcase.\n\nThe feature density does mean a slightly larger install footprint than simpler slot apps, but the trade-off suits players who want depth over minimalism. Round triggers are designed to feel earned rather than arbitrary, with visible progress indicators showing how close each potential trigger is to firing. Players who want the full Jaiho slot experience rather than a stripped variant invariably settle here.",
      downloadUrl: "https://jaiho77790.com/?code=RZPNPWJBVJQ&t=1782362904",
      appVersion: "2.4.3",
      packageSize: "71 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/jaiho-777-main.webp",
      screenshotUrls: [],
      targetKeyword: "jaiho 777",
      secondaryKeyword: "jaiho 777 download",
      kd: 3,
      searchVolume: 10500,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "slots",
      seo: {
        metaTitle: "Jaiho 777 Download - Flagship Jaiho Slot Android",
        metaDescription: "Jaiho 777 is the full-featured Jaiho slot with trigger rounds, animated symbols and progressive pattern tracking on Android phones.",
        canonicalURL: "https://allyonoguru.com/jaiho-777"
      },
      faq: [
        { question: "What makes Jaiho 777 the flagship slot in the Jaiho family?", answer: "It includes the full feature set that the Jaiho network builds into its slot products, including trigger rounds, animated symbol art and progressive pattern tracking across sessions." },
        { question: "How are trigger round activations in Jaiho 777 designed?", answer: "They fire from specific symbol combinations and are designed to feel earned rather than arbitrary, with visible progress indicators showing how close each potential trigger is to firing." },
        { question: "Does the feature density slow down the app?", answer: "The install footprint is larger than simpler slot apps but the runtime performance stays comparable, with the rendering pipeline tuned to keep frame rates consistent during animation peaks." },
        { question: "Is this the right Jaiho slot to start with?", answer: "Yes, players sampling the Jaiho slot family are best served starting here because the app shows the family at its most fully featured before exploring specialised or stripped-down variants." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 55,
      slug: "saga-slots",
      name: "Saga Slots",
      tagline: "Saga Slots structures play as a multi-round saga where consecutive rounds connect through a narrative-like progression across the session.",
      description: "Saga Slots departs from the single-round-and-reset structure of most slot apps. Rounds are organised into longer sagas where consecutive rounds connect through a progression that resembles narrative arc more than independent draws. The structure produces a different feel than slots where every round stands alone, giving sessions a sense of continuity and direction.\n\nEach saga has a defined number of rounds and a clear arc from opening through middle phase to resolution, with the visual treatment shifting subtly between phases to reinforce the position within the arc. The history view records completed sagas rather than individual rounds, which suits players who think in terms of session-level outcomes rather than per-round results. The saga structure is the defining feature and the app's identity hinges on it.",
      downloadUrl: "https://www.sagaslots77.com/?code=0QH9UVHARQU&t=1782458248",
      appVersion: "1.4.9",
      packageSize: "50 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/saga-slots.webp",
      screenshotUrls: [],
      targetKeyword: "saga slots",
      secondaryKeyword: "saga slots apk",
      kd: 2,
      searchVolume: 3900,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "slots",
      seo: {
        metaTitle: "Saga Slots APK - Multi-Round Narrative Arc Slot",
        metaDescription: "Saga Slots groups rounds into connected sagas with narrative-style arcs and session-level history tracking on Android slot gameplay.",
        canonicalURL: "https://allyonoguru.com/saga-slots"
      },
      faq: [
        { question: "How does Saga Slots structure rounds into sagas?", answer: "Consecutive rounds connect through a progression resembling a narrative arc, with each saga running a defined number of rounds from opening through middle to resolution phase." },
        { question: "Does the visual treatment really change between phases?", answer: "Yes, the visual treatment shifts subtly between phases to reinforce the position within the arc, giving the saga a sense of progression rather than rounds feeling structurally identical." },
        { question: "Are individual round results visible?", answer: "Individual rounds are visible during play, but the history view records completed sagas rather than individual rounds, which suits players who think in session-level rather than per-round terms." },
        { question: "Can I exit a saga partway through?", answer: "Yes, partial sagas can be paused and resumed later or abandoned entirely, with abandoned sagas marked as incomplete in the history rather than being deleted from the record." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 56,
      slug: "slots-winner",
      name: "Slots Winner",
      tagline: "Slots Winner emphasises competitive pattern play where reading reel configurations across sessions builds measurable player skill.",
      description: "Slots Winner approaches slot play as a competitive discipline. The app tracks how accurately players read pattern configurations across sessions and uses the data to match players of comparable observational skill in social tables where multiple players play parallel reels with shared visibility. The competitive framing makes pattern reading feel meaningful in a way that solo slot apps cannot match.\n\nThe skill rating draws on pattern-recognition accuracy and response time data collected during regular play, and updates after every session so progression stays current. Players who treat slot formats as observation puzzles rather than passive entertainment generally find the competitive structure here engaging. The app is explicit about being for serious players rather than casual sampling, and the audience that finds the framing appealing self-selects accordingly.",
      downloadUrl: "https://slotswinneragents.com/?code=PGVWTWRNB6F&t=1782470385",
      appVersion: "1.7.5",
      packageSize: "46 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/slots-winner.webp",
      screenshotUrls: [],
      targetKeyword: "slots winner",
      secondaryKeyword: "slots winner download",
      kd: 2,
      searchVolume: 5700,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "slots",
      seo: {
        metaTitle: "Slots Winner Download - Competitive Pattern Slot",
        metaDescription: "Slots Winner uses skill-rated pattern recognition matchmaking with shared visibility social tables for serious slot players on Android.",
        canonicalURL: "https://allyonoguru.com/slots-winner"
      },
      faq: [
        { question: "How does competitive matchmaking in Slots Winner work?", answer: "The app tracks pattern-recognition accuracy and response time across sessions, then matches players of comparable observational skill in social tables with shared reel visibility." },
        { question: "What do social tables with shared visibility mean here?", answer: "Multiple players play parallel reels with each other's results visible in real time, which turns the format into a comparison exercise rather than purely individual observation." },
        { question: "Is the skill rating actually meaningful?", answer: "Yes, the rating draws on accuracy and response time data over many sessions, so over time it does separate players who genuinely read patterns well from those who do not." },
        { question: "Is Slots Winner suitable for casual play?", answer: "The competitive framing makes the app explicit about being for serious players rather than casual sampling. Casual users are usually better served by apps designed for solo passive play." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 57,
      slug: "yn-777",
      name: "Yn 777",
      tagline: "Yn 777 brings the Yn brand's distinctive minimalist approach to the 777 reel format with deliberately spare interface design.",
      description: "Yn 777 reflects the Yn brand's broader design philosophy of minimalism. The 777 reel format is presented with deliberately spare interface elements, generous whitespace and a restricted colour palette that contrasts sharply with the visually busy approach of most slot apps in the category. The minimalism is a deliberate aesthetic choice rather than a result of limited development effort.\n\nThe spare presentation rewards attention by making the reel resolution itself the focal point of every round rather than competing with surrounding UI noise. Players who find busy slot apps visually overwhelming generally appreciate the calmer atmosphere here, while players who prefer high-stimulation presentation find the app underwhelming. The audience is self-selecting and the app makes no attempt to bridge both preferences, which is part of its identity.",
      downloadUrl: "https://www.y754.com/?code=4SWBALCES8G&t=1782476034",
      appVersion: "1.5.0",
      packageSize: "32 MB",
      minAndroid: "5.0",
      iconUrl: "/logos/yn-777.webp",
      screenshotUrls: [],
      targetKeyword: "yn 777",
      secondaryKeyword: "yn 777 apk",
      kd: 1,
      searchVolume: 2700,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "slots",
      seo: {
        metaTitle: "Yn 777 APK - Minimalist 777 Slot for Android",
        metaDescription: "Yn 777 presents the 777 reel format with spare interface design, generous whitespace and a restricted palette for calmer slot play on Android.",
        canonicalURL: "https://allyonoguru.com/yn-777"
      },
      faq: [
        { question: "Why is Yn 777's interface so minimalist?", answer: "The Yn brand's broader design philosophy favours minimalism, and the 777 format is presented with spare interface elements and generous whitespace as a deliberate aesthetic choice." },
        { question: "Does the minimalism make reel resolution feel more prominent?", answer: "Yes, the spare presentation makes the reel resolution itself the focal point of every round rather than competing with surrounding UI noise, which most players find calming." },
        { question: "Is the app underwhelming for players who prefer busy visuals?", answer: "Players who prefer high-stimulation presentation generally find Yn 777 underwhelming, and the app makes no attempt to bridge both preferences, which is part of its identity." },
        { question: "Can I add more visual elements if I prefer them?", answer: "No, the minimalism is fundamental to the design and is not configurable. Players seeking visually busier slot presentation are better served by apps designed around that aesthetic." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 58,
      slug: "yono-777",
      name: "Yono 777",
      tagline: "Yono 777 offers a classic Yono slot experience with reliable mechanics and a feature set that has remained stable across many updates.",
      description: "Yono 777 is the long-established 777 slot in the Yono ecosystem. The mechanics have remained stable across many update cycles, which is unusual in a category where apps often change feature sets aggressively between releases. The stability is intentional and is one of the things long-term users value about the app, since they can return after a break and find the experience essentially unchanged.\n\nThe reliability extends to performance characteristics that have been tuned over many versions rather than rebuilt with each update. Players who want a slot they can rely on rather than one constantly chasing trends generally settle here for the long term. The app integrates with the broader Yono account system so progression is recognised across other Yono apps, but the core experience itself remains the consistent classic that has defined it for years.",
      downloadUrl: "https://yonomain777.one/?code=ZMRZ6SUQQZ2&t=1782213370",
      appVersion: "3.2.1",
      packageSize: "56 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/yono-777.webp",
      screenshotUrls: [],
      targetKeyword: "yono 777",
      secondaryKeyword: "yono 777 download",
      kd: 3,
      searchVolume: 13500,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "slots",
      seo: {
        metaTitle: "Yono 777 Download - Classic Yono Slot Android",
        metaDescription: "Yono 777 offers a stable classic Yono slot experience with reliable mechanics, tuned performance and ecosystem account integration on Android.",
        canonicalURL: "https://allyonoguru.com/yono-777"
      },
      faq: [
        { question: "Why have Yono 777 mechanics stayed so stable across updates?", answer: "Stability is intentional because long-term users value being able to return after a break and find the experience essentially unchanged rather than discovering a redesigned app." },
        { question: "Does Yono 777 integrate with my broader Yono account?", answer: "Yes, the app uses the shared Yono account so progression and recognition carry across other Yono ecosystem apps including the games platform and other Yono-branded slot apps." },
        { question: "Are updates frequent or rare?", answer: "Updates ship regularly but tend to focus on performance refinement and behind-the-scenes improvements rather than redesigning the core mechanics or feature set users already rely on." },
        { question: "Is Yono 777 a good starting point in the Yono slot family?", answer: "It is a solid starting point for players who value reliability over novelty, while users seeking the latest features or experimental mechanics may prefer newer entries in the family." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    },
    {
      id: 59,
      slug: "yono-slots",
      name: "Yono Slots",
      tagline: "Yono Slots is the dedicated slot platform within the Yono ecosystem with comprehensive coverage of reel formats under one install.",
      description: "Yono Slots positions itself as the comprehensive slot platform in the Yono ecosystem. Rather than focusing on a single reel format, the app bundles a catalogue of slot variants including classic three-reel, expanded five-reel and several configuration-specific formats under one install. The breadth means a user can explore the wider slot space without installing multiple separate apps.\n\nDiscovery within the catalogue uses a category filter so you can find the format you want without scrolling through everything. The shared profile carries progression across every slot in the catalogue, and the Yono ecosystem integration means account recognition extends beyond just this app. Players who want broad slot coverage with the convenience of a single install generally find this app a sensible primary slot home on their device.",
      downloadUrl: "https://www.uonoslot.icu/?code=59YBLQ1756L&t=1782478570",
      appVersion: "2.6.4",
      packageSize: "82 MB",
      minAndroid: "6.0",
      iconUrl: "/logos/yono-slots.webp",
      screenshotUrls: [],
      targetKeyword: "yono slots",
      secondaryKeyword: "yono slots apk",
      kd: 3,
      searchVolume: 16000,
      primaryDomain: "allyonoguru",
      navOrder: 99,
      publishedAt: "2026-06-01T00:00:00.000Z",
      networkCategory: "slots",
      seo: {
        metaTitle: "Yono Slots APK - Dedicated Slot Platform Android",
        metaDescription: "Yono Slots bundles classic three-reel, five-reel and configuration-specific slot formats in one platform with shared progression on Android.",
        canonicalURL: "https://allyonoguru.com/yono-slots"
      },
      faq: [
        { question: "How many slot formats are bundled in Yono Slots?", answer: "The catalogue spans classic three-reel, expanded five-reel and several configuration-specific formats, with the active selection expanding gradually through periodic platform update cycles." },
        { question: "Does Yono Slots replace dedicated single-format Yono apps?", answer: "It covers the broad space but specialised single-format Yono apps go deeper into individual formats, so the choice depends on whether you prefer breadth or focused depth." },
        { question: "Is progression shared across every slot in the catalogue?", answer: "Yes, the shared profile carries progression across every slot in the catalogue, and Yono ecosystem integration extends account recognition beyond just this app to other Yono experiences." },
        { question: "How do I find a specific slot format in the catalogue?", answer: "A category filter in the lobby lets you narrow the visible slots by format type, which is the practical way to navigate a catalogue this broad without scrolling through every option." }
      ],
      compliance: {
        showDisclaimer: true,
        showAgeGate: true,
        stateRestrictionNote: "Some states may restrict access to this app."
      },
      links: []
    }
];

export const CATEGORIES_STATIC: CategoryEntry[] = [
  {
    id: 1,
    slug: "yono-game-spin",
    name: "Yono Game Spin",
    description:
      "A curated directory of spin-style skill game apps available in the Yono game network. This listing is updated as new verified apps are added.",
    targetKeyword: "yono game spin",
    secondaryKeyword: "yono spin game apk",
    kd: 3,
    searchVolume: 8200,
    primaryDomain: "allyonoguru",
    navOrder: 1,
    publishedAt: null,
    apps: [],
    seo: {
      metaTitle: "Yono Game Spin — Skill-Based Spin Game Apps Directory",
      metaDescription:
        "Discover spin-style skill game apps in the Yono network. Independent directory. 18+ | Some states may restrict access.",
      canonicalURL: "https://allyonoguru.com/yono-game-spin",
    },
    faq: [
      {
        question: "What are Yono Game Spin apps?",
        answer:
          "Yono Game Spin apps are Android games in the Yono network that feature spin-style gameplay mechanics built on skill and strategy.",
      },
    ],
    compliance: {
      showDisclaimer: true,
      showAgeGate: true,
      stateRestrictionNote: "Some states may restrict access to these apps.",
    },
  },
  {
    id: 2,
    slug: "share-slots-yono",
    name: "Share Slots Yono",
    description:
      "An independent directory of slot-style skill game apps in the Yono ecosystem. Listed apps are reviewed independently. This page is updated as more apps are verified.",
    targetKeyword: "share slots yono",
    secondaryKeyword: "yono slots apk",
    kd: 0,
    searchVolume: 6600,
    primaryDomain: "allyonoguru",
    navOrder: 2,
    publishedAt: null,
    apps: [],
    seo: {
      metaTitle: "Share Slots Yono — Slot-Style Skill Game Apps Directory",
      metaDescription:
        "Independent directory of slot-style skill game apps in the Yono network. 18+ | Some states may restrict access.",
      canonicalURL: "https://allyonoguru.com/share-slots-yono",
    },
    faq: [
      {
        question: "What is Share Slots Yono?",
        answer:
          "Share Slots Yono is an independent directory page listing slot-style skill game apps available in the Yono game network.",
      },
    ],
    compliance: {
      showDisclaimer: true,
      showAgeGate: true,
      stateRestrictionNote: "Some states may restrict access to these apps.",
    },
  },
];

export type NetworkApp = {
  name: string;
  logo: string;
  category: "rummy" | "teen-patti" | "spin" | "slots";
  description: string;
  downloadUrl: string;
};

export const NETWORK_APPS: NetworkApp[] = [
  // ── Rummy (18) ─────────────────────────────────────────────────────────────
  { name: "Jaiho Rummy",   logo: "/logos/jaiho-rummy.webp",    category: "rummy",      description: "Classic 13-card Rummy with multiple table formats and offline practice mode for Android.",        downloadUrl: "https://jaihorummy.vip/?code=3NPSEJRCPZW&t=1782363623" },
  { name: "Yono Rummy",    logo: "/logos/yono-rummy.webp",     category: "rummy",      description: "Skill-based Rummy on Android with fast matchmaking, multiple variants, and clean gameplay.",        downloadUrl: "https://yonorummy042.com/?code=VIP3Z76MJCF&t=1782478473" },
  { name: "ABC Rummy",     logo: "/logos/abc-rummy.webp",      category: "rummy",      description: "Beginner-friendly Rummy app for Android supporting all popular Indian Rummy formats.",              downloadUrl: "https://www.11abcrummy.com/?code=6X44DU7CVLN&t=1782033658" },
  { name: "Boss Rummy",    logo: "/logos/boss-rummy.webp",     category: "rummy",      description: "Competitive 13-card Rummy tables for Android with daily practice and multi-format support.",        downloadUrl: "https://www.bossrummyr.com/?code=9HFJ28QUSPR&t=1782038197" },
  { name: "Game Rummy",    logo: "/logos/game-rummy.webp",     category: "rummy",      description: "Classic Indian Rummy with smooth animations and multi-table support on Android.",                   downloadUrl: "https://gamesrummy.club/?code=GAFDVUWWYBV&t=1782039543" },
  { name: "Gogo Rummy",    logo: "/logos/gogo-rummy.webp",     category: "rummy",      description: "Fast-paced Rummy with Points, Pool, and Deals variants on Android.",                               downloadUrl: "https://www.gospin.bet/?code=V4U6SUHF9FZ&t=1782040515" },
  { name: "Hi Rummy",      logo: "/logos/hi-rummy.webp",       category: "rummy",      description: "Lightweight Rummy app for Android with clean card graphics and quick game setup.",                  downloadUrl: "https://joinhirummy.top/?code=RX33WPMEYAX&t=1782361457" },
  { name: "Ind Rummy",     logo: "/logos/ind-rummy.webp",      category: "rummy",      description: "Classic Indian 13-card Rummy skill gameplay with reliable Android performance.",                    downloadUrl: "https://indrummyvip30.com/?code=R9ADC3HL1U6&t=1782361952" },
  { name: "INR Rummy",     logo: "/logos/inr-rummy.webp",      category: "rummy",      description: "Multiple Indian Rummy table formats on Android with smooth card handling.",                         downloadUrl: "https://inrrummy.club/?code=JMQ6RYF5BT6&t=1782361577" },
  { name: "Joy Rummy",     logo: "/logos/joy-rummy.webp",      category: "rummy",      description: "Enjoyable Rummy experience on Android with beginner and advanced table options.",                   downloadUrl: "https://www.joyrummyon.com/?code=J5KYGYLKSDD&t=1782365855" },
  { name: "Love Rummy",    logo: "/logos/love-rummy.webp",     category: "rummy",      description: "Smooth Rummy gameplay with a welcoming interface for all skill levels on Android.",                 downloadUrl: "https://www.loverummy7.com/?code=R6KUXVMQEB1&t=1782366602" },
  { name: "OkRummy",       logo: "/logos/ok-rummy.webp",       category: "rummy",      description: "Skill-based card game app offering multiple Rummy formats for Android users.",                      downloadUrl: "https://www.okrummy42.com/?code=H2G24LRWC8L&t=1782450801" },
  { name: "Rumble Rummy",  logo: "/logos/rumble-rummy.webp",   category: "rummy",      description: "Competitive Rummy tables on Android with tournament-style play options.",                           downloadUrl: "https://www.rumblerummy888.net/?code=82M21AWEVEV&t=1782451748" },
  { name: "Rummy 91",      logo: "/logos/rummy-91.webp",       category: "rummy",      description: "91-style skill-based Rummy on Android with fast rounds and clean interface.",                       downloadUrl: "https://rummy91g.com/?code=UXT3ZZWQHX8&t=1782456098" },
  { name: "Rummy 77",      logo: "/logos/rummy77.webp",        category: "rummy",      description: "Popular 77-card variant of skill-based Rummy on Android devices.",                                  downloadUrl: "https://rummy77r.net/?code=F3VZY2CL5KV&t=1782648996" },
  { name: "Rummy 888",     logo: "/logos/rummy888.webp",       category: "rummy",      description: "Smooth 13-card Rummy gameplay across multiple table formats on Android.",                           downloadUrl: "https://rummy888vip31.com/?code=TPUK4VF51V9&t=1782456619" },
  { name: "Rummy Ludo",    logo: "/logos/rummy-ludo.webp",     category: "rummy",      description: "Classic Rummy and Ludo skill games combined in a single Android app.",                             downloadUrl: "https://ludorummy.win/?code=UWPKN64A3KD&t=1782648889" },
  { name: "Top Rummy",     logo: "/logos/top-rummy.webp",      category: "rummy",      description: "Premium Indian Rummy with high-performance tables and offline practice mode.",                      downloadUrl: "https://www.toprummy.cc/?code=M4G2WX7PAUF&t=1782475234" },
  // ── Teen Patti / Arcade (15) ───────────────────────────────────────────────
  { name: "Jaiho Arcade",  logo: "/logos/jaiho-arcade.webp",   category: "teen-patti", description: "Multiple skill-based mini-games in one app for Android users.",                                     downloadUrl: "https://www.jaihoarcade39.com/?code=74S26KHLRJD&t=1782363337" },
  { name: "Jaiho Arcade+", logo: "/logos/jaiho-arcade-2.webp", category: "teen-patti", description: "Expanded Jaiho Arcade with more skill game modes and improved Android performance.",                downloadUrl: "#download" },
  { name: "Jaiho Win",     logo: "/logos/jaiho-win.webp",      category: "teen-patti", description: "Skill-based card and board games optimised for Android phones and tablets.",                        downloadUrl: "https://www.jaihowin11.com/?code=XZDTYJ1RY1Z&t=1782364383" },
  { name: "Jaiho 91",      logo: "/logos/jaiho91.webp",        category: "teen-patti", description: "Popular Indian skill card games with a 91-style gameplay focus for Android.",                       downloadUrl: "https://91jaihoapp.com/?code=C4238P5H5G8&t=1782362450" },
  { name: "Yono Arcade",   logo: "/logos/yono-arcade.webp",    category: "teen-patti", description: "Skill-based mini-games for Android with a clean, fast-loading interface.",                          downloadUrl: "https://yonoofficial2.com/?code=96LUT957MWS&t=1782476174" },
  { name: "Yono Games",    logo: "/logos/yono-games.webp",     category: "teen-patti", description: "Multi-game platform featuring skill-based Android card and board games.",                            downloadUrl: "https://youonogamesgift.com/?code=GK1EVT15SS7&t=1782476329" },
  { name: "Bet 213",       logo: "/logos/bet-213.webp",        category: "teen-patti", description: "Skill-based prediction and strategy game app for Android with multiple rounds.",                    downloadUrl: "https://www.bet213.cc/?code=2QT8E6SY5R3&t=1782033957" },
  { name: "Bingo 101",     logo: "/logos/bingo-101.webp",      category: "teen-patti", description: "Classic skill-based Bingo for Android with fast rounds and simple controls.",                       downloadUrl: "https://bingo101.buzz/?code=3WFSBEZLPYL&t=1782037952" },
  { name: "Club INR",      logo: "/logos/club-inr.webp",       category: "teen-patti", description: "Skill-based card game platform for Android with multiple game formats.",                            downloadUrl: "https://clubinrvip1.one/?code=WZJMGMZ4U1K&t=1782038302" },
  { name: "Ind Bingo",     logo: "/logos/ind-bingo.webp",      category: "teen-patti", description: "Indian-style Bingo skill gameplay with quick rounds on Android.",                                   downloadUrl: "#download" },
  { name: "Ind Club",      logo: "/logos/ind-club.webp",       category: "teen-patti", description: "Multi-game Android app featuring Indian card and board skill games.",                               downloadUrl: "https://indclub40.com/?code=W23E2SHD7PY&t=1782361758" },
  { name: "Maha Games",    logo: "/logos/maha-games.webp",     category: "teen-patti", description: "Variety of Indian skill-based games on Android in one platform.",                                   downloadUrl: "https://yono-mahagames.com/?code=J245RQFLS2L&t=1782367067" },
  { name: "MBM Bet",       logo: "/logos/mbm-bet.webp",        category: "teen-patti", description: "Skill-based prediction and strategy game app for Android.",                                         downloadUrl: "https://www.mbmbet14.com/?code=UPHMK55JNJ6&t=1782367306" },
  { name: "Neta VIP",      logo: "/logos/neta-vip.webp",       category: "teen-patti", description: "Skill-based card and strategy games with a VIP experience on Android.",                             downloadUrl: "https://www.neta1.vip/?code=DR0D36UVVZX&t=1782371532" },
  { name: "Yono VIP",      logo: "/logos/yono-vip.webp",       category: "teen-patti", description: "Premium skill game platform for Android featuring exclusive game modes.",                           downloadUrl: "https://yonovipindia.vip/?code=9U8WLAJJSM5&t=1782481304" },
  // ── Spin (10) ──────────────────────────────────────────────────────────────
  { name: "Jaiho Spin",    logo: "/logos/jaiho-spin.webp",     category: "spin",        description: "Skill-based spinning games with fast Android gameplay and multiple game modes.",                    downloadUrl: "https://18jaihospingames.com/?code=416GL765W3A&t=1782364119" },
  { name: "Spin 101",      logo: "/logos/spin-101.webp",       category: "spin",        description: "Skill-based spin game mechanics on Android with simple controls and smooth performance.",           downloadUrl: "https://spin101-e.org/?code=Z9BR1AXYMH3&t=1782473000" },
  { name: "Spin 777",      logo: "/logos/spin-777.webp",       category: "spin",        description: "777-style skill-based spin gameplay on Android with multiple pattern formats.",                     downloadUrl: "https://spin777-t.com/?code=YLWAEF9UZ9W&t=1782473441" },
  { name: "Spin Crush",    logo: "/logos/spin-crush.webp",     category: "spin",        description: "Fast-paced skill game on Android featuring spin mechanics and strategy elements.",                  downloadUrl: "#download" },
  { name: "Spin Gold",     logo: "/logos/spin-gold.webp",      category: "spin",        description: "Skill-based spinning gameplay on Android with a clean, high-performance interface.",               downloadUrl: "https://spingoldvipagent.net/?code=S9VFE5T8JDS&t=1782473990" },
  { name: "Spin Lucky",    logo: "/logos/spin-lucky.webp",     category: "spin",        description: "Skill-based spin game formats optimised for all Android devices.",                                  downloadUrl: "#download" },
  { name: "Spin Winner",   logo: "/logos/spin-winner.webp",    category: "spin",        description: "Skill-based spinning and strategy gameplay for Android users.",                                     downloadUrl: "https://spinwinner-y.com/?code=QVT2P3HKTUZ&t=1782474125" },
  { name: "Yes Spin",      logo: "/logos/yes-spin.webp",       category: "spin",        description: "Lightweight skill spin game app for Android with intuitive controls.",                             downloadUrl: "https://www.yesspinmotion.com/?code=47TMD53C9SA&t=1782475635" },
  { name: "Slot Spin",     logo: "/logos/slot-spin.webp",      category: "spin",        description: "Skill-based slot-spin mechanics for Android with smooth animations.",                              downloadUrl: "https://www.slotsspinj.com/?code=C1A5F6PQW4M&t=1782470064" },
  { name: "101z",          logo: "/logos/101z.webp",           category: "spin",        description: "101-style skill-based Android game with fast rounds and multiple formats.",                        downloadUrl: "https://101zvip2.com/?code=398LS183AB2&t=1782032243" },
  // ── Slots (14) ─────────────────────────────────────────────────────────────
  { name: "Share Slots",   logo: "/logos/share-slots.webp",    category: "slots",       description: "Flagship slot-style skill game in the Yono network, available on Android.",                        downloadUrl: "https://share0022.com/?code=YAZRMEX5W98&t=1782459612" },
  { name: "567 Slots",     logo: "/logos/567-slots.webp",      category: "slots",       description: "Skill-based slot gameplay on Android with multiple line configurations.",                           downloadUrl: "https://join567slots.com/?code=9UX4YQ28P28&t=1782032755" },
  { name: "777 Game",      logo: "/logos/777game.webp",        category: "slots",       description: "Classic 777-style skill gameplay on Android with clean graphics.",                                 downloadUrl: "https://www.777game0.com/?code=H53SKREANMZ&t=1782649361" },
  { name: "789 Jackpot",   logo: "/logos/789-jackpot.webp",    category: "slots",       description: "789-pattern skill game mechanics on Android with multiple round formats.",                         downloadUrl: "https://join789jackpots1.com/?code=VJJGANTLPWB&t=1782033375" },
  { name: "Hindi 777",     logo: "/logos/hindi777.webp",       category: "slots",       description: "777-style skill games designed for the Indian Android market.",                                    downloadUrl: "https://www.hindi777agent5.com/?code=7LF62XGS8GT&t=1782361149" },
  { name: "Ind Slots",     logo: "/logos/ind-slots.webp",      category: "slots",       description: "Skill-based slot game for Android featuring Indian-themed graphics.",                              downloadUrl: "https://www.indslotsreferral.com/?code=T2QSBUR7LT4&t=1782362370" },
  { name: "Jaiho Slot",    logo: "/logos/jaiho-slot.webp",     category: "slots",       description: "Smooth skill-based slot gameplay on Android from the Jaiho game network.",                        downloadUrl: "https://www.jaihoslots23.com/?code=QJSJQQDZDDM&t=1782363832" },
  { name: "Jahio 777",     logo: "/logos/jahio-777.webp",      category: "slots",       description: "777-style skill slot gameplay for Android with multiple pattern options.",                         downloadUrl: "#download" },
  { name: "Jaiho 777",     logo: "/logos/jaiho-777-main.webp", category: "slots",       description: "Flagship skill game in the Jaiho network featuring 777-style Android gameplay.",                  downloadUrl: "https://jaiho77790.com/?code=RZPNPWJBVJQ&t=1782362904" },
  { name: "Saga Slots",    logo: "/logos/saga-slots.webp",     category: "slots",       description: "Skill-based slot gameplay on Android with multiple game formats.",                                 downloadUrl: "https://www.sagaslots77.com/?code=0QH9UVHARQU&t=1782458248" },
  { name: "Slots Winner",  logo: "/logos/slots-winner.webp",   category: "slots",       description: "Skill-based slot game app for Android with multiple format options.",                             downloadUrl: "https://slotswinneragents.com/?code=PGVWTWRNB6F&t=1782470385" },
  { name: "Yn 777",        logo: "/logos/yn-777.webp",         category: "slots",       description: "777-style skill gameplay for Android with smooth slot mechanics.",                                 downloadUrl: "https://www.y754.com/?code=4SWBALCES8G&t=1782476034" },
  { name: "Yono 777",      logo: "/logos/yono-777.webp",       category: "slots",       description: "Classic Yono 777-style skill game experience on Android.",                                        downloadUrl: "https://yonomain777.one/?code=ZMRZ6SUQQZ2&t=1782213370" },
  { name: "Yono Slots",    logo: "/logos/yono-slots.webp",     category: "slots",       description: "Dedicated slot-style skill game platform in the Yono network for Android.",                       downloadUrl: "https://www.uonoslot.icu/?code=59YBLQ1756L&t=1782478570" },
];

export const DISCLAIMER_TEXT =
  "Allyonoguru is not affiliated with, endorsed by, or connected to SBI, YONO by SBI, or any bank.";

export const AGE_NOTE = "18+";
export const STATE_NOTE = "Some apps may be restricted in certain states.";

// Fallback static data used when Strapi is unavailable.
export const BLOG_POSTS_STATIC: BlogPostEntry[] = [
  {
    id: 1,
    slug: "how-to-play-rummy-rules-and-basic-strategy",
    title: "How to Play Rummy: Rules and Basic Strategy",
    excerpt:
      "A beginner's guide to 13-card Indian Rummy — the basic rules, how sets and sequences work, and a few starting strategies for new players.",
    author: "AllYonoGuru Team",
    tag: "Guides",
    publishedAt: "2026-01-12T00:00:00.000Z",
    content:
      "Indian Rummy is one of the most widely played card games on Android, and most apps in the Yono network use the standard 13-card format. Each player is dealt 13 cards, and the goal is to arrange them into valid sets and sequences before anyone else does.\n\nA sequence is three or more consecutive cards of the same suit. A set is three or four cards of the same rank from different suits. To finish a hand, most variants require at least one pure sequence — a run with no joker substituted in.\n\nNew players often start by sorting their hand by suit, which makes it easier to spot near-complete sequences. Holding onto high-value cards for too long is a common beginner mistake, since they add to your score if an opponent finishes first.\n\nRummy is recognised by Indian courts as a game of skill rather than chance, because the outcome depends on memory, sequencing, and decision-making rather than random luck. As with any skill game, practice over time is what improves results — there is no shortcut.\n\nThis guide is for informational purposes only. Always check the rules screen inside the specific app you're using, since minor variations exist between Rummy Guru and other apps in the network.",
    seo: {
      metaTitle: "How to Play Rummy: Rules and Basic Strategy | AllYonoGuru",
      metaDescription:
        "Learn the basic rules of 13-card Indian Rummy, how sequences and sets work, and simple strategy tips for new players. Independent guide by AllYonoGuru.",
    },
  },
  {
    id: 2,
    slug: "teen-patti-variants-explained",
    title: "Teen Patti Variants Explained",
    excerpt:
      "Teen Patti has several popular table variants. Here's a quick overview of the most common ones found in Android Teen Patti apps.",
    author: "AllYonoGuru Team",
    tag: "Guides",
    publishedAt: "2026-02-03T00:00:00.000Z",
    content:
      "Teen Patti, sometimes called Indian Poker, is a three-card game with several table variants available across Android apps. Knowing the differences helps you understand what you're playing before you join a table.\n\nClassic Teen Patti uses a standard 52-card deck with no jokers, and hand rankings run from a high card up to a trail (three of a kind), which is the strongest hand. Joker Teen Patti introduces a wild card that can substitute for any card, which changes hand probabilities significantly.\n\nMuflis, or \"Lowball\" Teen Patti, flips the usual ranking so the lowest hand wins instead of the highest — a variant that catches new players off guard if they don't check the table rules first. AK47 designates specific cards (Ace, King, 4, and 7) as wild, adding another layer of strategy.\n\nMost apps display the active variant clearly on the table screen before you sit down. Reading the table rules each time is good practice, since the same app may offer multiple variants in different rooms.\n\nThis article is general information only and does not cover every variant available in every app. Skill, observation, and bankroll discipline matter more than memorising rules alone.",
    seo: {
      metaTitle: "Teen Patti Variants Explained | AllYonoGuru",
      metaDescription:
        "An overview of common Teen Patti variants — Classic, Joker, Muflis, and AK47 — found across Android Teen Patti apps. Independent guide by AllYonoGuru.",
    },
  },
  {
    id: 3,
    slug: "is-rummy-a-game-of-skill-what-indian-courts-say",
    title: "Is Rummy a Game of Skill? What Indian Courts Say",
    excerpt:
      "Indian courts have repeatedly examined whether Rummy is a game of skill or chance. Here's a summary of the legal position and why it matters.",
    author: "AllYonoGuru Team",
    tag: "Legal",
    publishedAt: "2026-03-18T00:00:00.000Z",
    content:
      "The legal status of card games in India often comes down to one question: is the game based on skill or chance? Courts have addressed this question for Rummy specifically on multiple occasions.\n\nIn a landmark 1968 ruling, the Supreme Court of India held that Rummy requires considerable skill in memorising cards, tracking discards, and building sequences, distinguishing it from games of pure chance. This precedent has been cited in subsequent cases, including rulings related to online formats of the game.\n\nBecause Rummy is treated as a skill-based game, it is generally permitted to be played for recreational purposes in most Indian states, subject to each state's own gaming laws. However, a handful of states have specific restrictions, and the legal position can change.\n\nThis distinction matters for app directories like AllYonoGuru, which is why every listing carries a disclaimer and an age restriction notice. We are not a legal authority, and this article does not constitute legal advice.\n\nIf you're unsure whether an app or game format is permitted where you live, check your state's current regulations directly rather than relying on general guides like this one.",
    seo: {
      metaTitle: "Is Rummy a Game of Skill? What Indian Courts Say | AllYonoGuru",
      metaDescription:
        "A summary of how Indian courts have classified Rummy as a game of skill, and what that means for players. Independent editorial, not legal advice.",
    },
  },
  {
    id: 4,
    slug: "android-game-app-safety-what-to-check-before-you-download",
    title: "Android Game App Safety: What to Check Before You Download",
    excerpt:
      "A short checklist for evaluating any Android game app before installing it — permissions, source, and basic due diligence.",
    author: "AllYonoGuru Team",
    tag: "Safety",
    publishedAt: "2026-04-22T00:00:00.000Z",
    content:
      "Installing apps from outside the Play Store, often called sideloading, is common for game apps in the Yono network. It's worth taking a few precautions before installing any APK, regardless of where it comes from.\n\nFirst, check the permissions an app requests during installation. A card game app generally doesn't need access to your contacts or SMS messages — if it asks for permissions unrelated to its function, that's worth questioning.\n\nSecond, only download from the official link provided by the app's own listing or developer, rather than a third-party mirror. AllYonoGuru links directly to each app's primary download source for this reason.\n\nThird, keep your device's Play Protect or equivalent security scanning enabled even when sideloading, since it can still flag known malicious patterns in an APK file.\n\nFinally, remember that all apps listed on AllYonoGuru are intended for users aged 18 and above, and some apps may be restricted in certain states. This article is general safety guidance and not a substitute for your own judgment.",
    seo: {
      metaTitle: "Android Game App Safety: What to Check Before You Download | AllYonoGuru",
      metaDescription:
        "A short safety checklist for evaluating Android game apps before installation — permissions, official sources, and basic precautions.",
    },
  },
];
