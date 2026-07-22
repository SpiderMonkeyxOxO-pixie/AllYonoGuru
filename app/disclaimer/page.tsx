import type { Metadata } from "next";
import LegalPageWrapper from "../components/layout/LegalPageWrapper";

export const metadata: Metadata = {
  title: "Disclaimer — AllYonoGuru.com",
  description:
    "AllYonoGuru disclaimer: independent informational directory, not affiliated with SBI or YONO SBI. Third-party apps, affiliate links, no financial or legal advice. 18+.",
  alternates: {
    canonical: "https://allyonoguru.com/disclaimer",
  },
  openGraph: {
    title: "Disclaimer — AllYonoGuru.com",
    description:
      "AllYonoGuru disclaimer: independent informational directory, not affiliated with SBI or YONO SBI. 18+.",
    url: "https://allyonoguru.com/disclaimer",
  },
};

const prose: React.CSSProperties = {
  fontSize: "15px",
  color: "#94a3b8",
  lineHeight: "1.8",
  marginBottom: "20px",
};

const h2Style: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#f1f5f9",
  letterSpacing: "-0.02em",
  marginBottom: "12px",
  marginTop: "40px",
};

const h3Style: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "700",
  color: "#e2e8f0",
  letterSpacing: "-0.01em",
  marginBottom: "10px",
  marginTop: "28px",
};

const listStyle: React.CSSProperties = {
  margin: "0 0 20px",
  paddingLeft: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};

const liStyle: React.CSSProperties = {
  fontSize: "15px",
  color: "#94a3b8",
  lineHeight: "1.7",
};

function List({ items }: { items: string[] }) {
  return (
    <ul style={listStyle}>
      {items.map((item) => (
        <li key={item} style={liStyle}>{item}</li>
      ))}
    </ul>
  );
}

export default function DisclaimerPage() {
  return (
    <LegalPageWrapper
      title="Disclaimer"
      slug="disclaimer"
      lastUpdated="July 22, 2026"
      showDisclaimer
    >
      {/* Primary disclaimer — exact required text (Rule 2) */}
      <div style={{
        padding: "24px 28px",
        background: "rgba(245,158,11,0.06)",
        border: "1px solid rgba(245,158,11,0.2)",
        borderRadius: "14px",
        marginBottom: "40px",
      }}>
        <p style={{
          fontSize: "16px", fontWeight: "600",
          color: "#f1f5f9", lineHeight: "1.7",
          margin: "0 0 12px",
        }}>
          Allyonoguru is not affiliated with, endorsed by, or connected to SBI,
          YONO by SBI, or any bank.
        </p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <span style={{
            fontSize: "12px", fontWeight: "700", color: "#f59e0b",
            background: "rgba(245,158,11,0.10)",
            border: "1px solid rgba(245,158,11,0.25)",
            borderRadius: "6px", padding: "4px 12px",
          }}>
            18+
          </span>
          <span style={{
            fontSize: "12px", color: "#64748b",
            background: "rgba(100,116,139,0.08)",
            border: "1px solid rgba(100,116,139,0.15)",
            borderRadius: "6px", padding: "4px 12px",
          }}>
            Some apps may be restricted in certain states.
          </span>
        </div>
      </div>

      <p style={prose}>
        This Disclaimer applies to all visitors and users of the AllYonoGuru website,
        including its app directory, game listings, promotional-code pages, guides,
        reviews, articles, images, links and other published materials. AllYonoGuru is
        an independent informational website that publishes general information about
        third-party gaming applications and related digital services.
      </p>
      <p style={prose}>
        By accessing or using this website, you acknowledge that you have read and
        understood this Disclaimer. If you do not agree with any part of it, please
        discontinue using the website.
      </p>

      <h2 style={h2Style}>Informational and Directory Purpose</h2>
      <p style={prose}>
        AllYonoGuru provides informational, educational and editorial content about
        third-party gaming applications that may be available online. Our content may
        include:
      </p>
      <List items={[
        "app descriptions",
        "publicly available platform information",
        "feature summaries",
        "installation and access information",
        "promotional-code details",
        "reward-related claims",
        "safety and verification guidance",
        "comparisons",
        "responsible-use information",
        "general gaming-related articles",
      ]} />
      <p style={prose}>
        The information published on AllYonoGuru is not an instruction or recommendation
        to download an application, register for an account, make a payment, deposit
        money, participate in paid gaming or use a particular platform. Users remain
        responsible for deciding whether a third-party application is suitable for them.
      </p>

      <h2 style={h2Style}>Independent Third-Party Website</h2>
      <p style={prose}>
        AllYonoGuru does not own, develop, operate, manage or control any third-party
        gaming application listed or discussed on this website unless expressly stated
        otherwise. We are not a gaming operator, app developer, payment processor,
        wallet provider or customer-support provider for any third-party platform.
        AllYonoGuru does not control:
      </p>
      <List items={[
        "app development or maintenance",
        "account registration",
        "identity verification",
        "game rules or outcomes",
        "deposits or purchases",
        "withdrawals or refunds",
        "bonuses or rewards",
        "account balances",
        "customer-support decisions",
        "privacy practices",
        "security systems",
        "account suspensions",
        "the continued availability of an application",
      ]} />
      <p style={prose}>
        Every third-party application remains under the ownership, operation and
        responsibility of its respective developer or operator.
      </p>

      <h2 style={h2Style}>No Affiliation With SBI or YONO SBI</h2>
      <p style={prose}>
        AllYonoGuru is not affiliated with, sponsored by, endorsed by, authorised by
        or officially connected to the State Bank of India, SBI or the YONO SBI
        application. The terms &ldquo;Yono&rdquo; and &ldquo;YONO&rdquo; may appear on this website
        because they are used as part of the names of certain independent gaming
        applications available online. Nothing on AllYonoGuru should be interpreted
        as suggesting that SBI or YONO SBI:
      </p>
      <List items={[
        "owns this website",
        "operates any listed gaming application",
        "approves or endorses this website",
        "sponsors the applications discussed here",
        "guarantees any listed platform",
        "is responsible for any content published on AllYonoGuru",
      ]} />
      <p style={prose}>
        SBI, YONO SBI and related names, logos and trademarks remain the property of
        their respective owners.
      </p>

      <h2 style={h2Style}>No Affiliation With Listed Applications</h2>
      <p style={prose}>
        Unless a relationship is expressly disclosed, AllYonoGuru is not affiliated
        with, sponsored by, endorsed by or officially connected to any application,
        developer or gaming platform listed on this website. The inclusion of an app
        name, logo, screenshot, review, promotional code, reward claim or external
        link does not mean that AllYonoGuru:
      </p>
      <List items={[
        "owns or operates the platform",
        "has entered into an official partnership with it",
        "has verified every statement made by its operator",
        "guarantees its security",
        "guarantees its legality",
        "certifies its software",
        "approves its business practices",
        "guarantees its payments",
        "recommends financial participation",
      ]} />
      <p style={prose}>
        Third-party names and materials are used for identification, reporting,
        commentary and informational purposes only.
      </p>

      <h2 style={h2Style}>Affiliate and Referral Disclosure</h2>
      <p style={prose}>
        Some links, buttons, promotional codes or app references on AllYonoGuru may
        be affiliate or referral links. When a visitor follows one of these links or
        completes a qualifying action on a third-party platform, AllYonoGuru may
        receive a referral fee or commission. This will generally not create an
        additional cost for the visitor.
      </p>
      <p style={prose}>
        An affiliate relationship does not mean that AllYonoGuru owns, operates,
        controls or guarantees the relevant platform. Affiliate compensation does not
        remove the user&rsquo;s responsibility to independently verify:
      </p>
      <List items={[
        "the platform operator",
        "the official website",
        "the app's terms",
        "its privacy practices",
        "age and location restrictions",
        "the authenticity of any download",
        "payment conditions",
        "applicable law",
      ]} />
      <p style={prose}>
        Where reasonably practical, a shorter affiliate disclosure may also appear
        near the relevant referral link or button.
      </p>

      <h2 style={h2Style}>Third-Party Applications</h2>
      <p style={prose}>
        Applications mentioned or linked on AllYonoGuru are independently developed,
        owned and operated by third parties. AllYonoGuru does not supervise or
        control:
      </p>
      <List items={[
        "software development",
        "game mechanics",
        "scoring or random outcomes",
        "tournaments or contests",
        "advertisements",
        "in-app purchases",
        "payment processing",
        "withdrawal procedures",
        "promotional campaigns",
        "customer support",
        "data collection",
        "security systems",
        "complaint handling",
        "dispute resolution",
      ]} />
      <p style={prose}>
        Any interaction between a visitor and a third-party application takes place
        directly between the visitor and the relevant operator. AllYonoGuru is not
        responsible for the actions, omissions, representations, promises, policies
        or decisions of any third-party operator.
      </p>

      <h2 style={h2Style}>No App Classification Guarantee</h2>
      <p style={prose}>
        AllYonoGuru may use general descriptions such as arcade game, casual game,
        social game, card game, rummy app, fantasy sports app or skill-based game to
        help readers understand how an application is commonly presented. These
        descriptions are editorial categories only. They do not constitute an
        official, regulatory or legal classification. AllYonoGuru does not guarantee
        that an application is:
      </p>
      <List items={[
        "purely skill-based",
        "free from elements of chance",
        "an officially recognised e-sport",
        "a registered online social game",
        "a lawful gaming platform",
        "licensed",
        "government approved",
        "available legally in every part of India",
      ]} />
      <p style={prose}>
        The actual classification of an app depends on its features, payment model,
        operating method and any determination made by a competent authority.
      </p>

      <h2 style={h2Style}>User Responsibility and Due Diligence</h2>
      <p style={prose}>
        Users are responsible for carrying out their own checks before visiting,
        downloading, installing, registering with or using a third-party
        application. Before using an app, users should verify:
      </p>
      <List items={[
        "the operator's legal identity",
        "the official website or authorised app-store listing",
        "the developer or publisher name",
        "the authenticity of the domain",
        "the Terms and Conditions",
        "the Privacy Policy",
        "the permissions requested by the app",
        "minimum-age requirements",
        "geographic restrictions",
        "customer-support information",
        "payment and withdrawal terms",
        "promotional conditions",
        "regulatory status",
        "applicable Indian law",
      ]} />
      <p style={prose}>
        Users should not rely solely on advertisements, social-media posts,
        influencer content, referral messages, screenshots, testimonials or
        promotional banners.
      </p>

      <h2 style={h2Style}>Accuracy and Currency of Information</h2>
      <p style={prose}>
        AllYonoGuru makes reasonable efforts to publish clear and useful information.
        However, third-party application information may change without notice.
        Changes may affect:
      </p>
      <List items={[
        "app names",
        "ownership or operator details",
        "websites and domains",
        "download links",
        "APK versions",
        "platform features",
        "login procedures",
        "promotional codes",
        "reward amounts",
        "eligibility requirements",
        "payment methods",
        "withdrawal conditions",
        "Terms and Conditions",
        "Privacy Policies",
        "support information",
        "regional availability",
      ]} />
      <p style={prose}>
        We do not guarantee that every page will always remain complete, accurate,
        current, error-free or applicable to every user. Visitors should consider the
        publication or review date of a page and confirm important information
        directly through reliable official sources.
      </p>

      <h2 style={h2Style}>Editorial Verification Labels</h2>
      <p style={prose}>AllYonoGuru may use labels such as:</p>
      <List items={[
        "Verified",
        "Recently Checked",
        "Unverified",
        "Awaiting Verification",
        "Official Source Not Confirmed",
        "Expired",
        "Platform-Specific",
        "No Public Information Available",
      ]} />
      <p style={prose}>
        These labels reflect the status recorded during an editorial review at a
        particular time. A verification label does not guarantee that:
      </p>
      <List items={[
        "the operator has been officially approved",
        "the information will remain current",
        "a platform will remain available",
        "a download will remain unchanged",
        "a promotional code will continue to work",
        "a reward will be credited",
        "an app is legally permitted",
        "every visitor will have the same experience",
      ]} />
      <p style={prose}>
        Users should independently verify current information before relying on a
        platform.
      </p>

      <h2 style={h2Style}>Promotional Codes, Bonuses and Rewards</h2>
      <p style={prose}>
        AllYonoGuru may publish information about promotional codes, welcome offers,
        referral rewards, daily rewards, cashback, vouchers, spins, events or similar
        incentives advertised by third parties. These promotions may be subject to:
      </p>
      <List items={[
        "expiry dates",
        "new-user restrictions",
        "account verification",
        "location requirements",
        "usage limits",
        "payment conditions",
        "minimum-activity requirements",
        "platform-specific rules",
        "withdrawal conditions",
      ]} />
      <p style={prose}>AllYonoGuru does not guarantee that:</p>
      <List items={[
        "a promotional code will work",
        "an offer remains active",
        "a visitor will qualify",
        "a reward will be credited",
        "a bonus can be withdrawn",
        "an advertised amount will be paid",
        "an operator will honour outdated promotional information",
      ]} />
      <p style={prose}>
        Displayed bonus, voucher or reward amounts should not be treated as
        guaranteed cash, income, earnings or funds already belonging to the user.
        Unless expressly stated otherwise, AllYonoGuru does not create, issue,
        activate, redeem, sell, administer or process third-party promotional codes
        or rewards.
      </p>

      <h2 style={h2Style}>No Account or Payment Support</h2>
      <p style={prose}>
        AllYonoGuru does not create, access, manage, recover or modify accounts held
        with third-party applications. We cannot assist with:
      </p>
      <List items={[
        "account registration",
        "passwords or login credentials",
        "one-time passwords",
        "identity verification",
        "account balances",
        "deposits",
        "purchases",
        "withdrawals",
        "refunds",
        "rewards",
        "transaction histories",
        "account suspensions",
        "disputes with an operator",
      ]} />
      <p style={prose}>
        All account, payment and support matters must be addressed directly with the
        relevant application operator through its verified official channels. Users
        should never send passwords, one-time passwords, payment PINs, bank details,
        identity documents or other sensitive information to anyone claiming to
        provide third-party account support through AllYonoGuru.
      </p>

      <h2 style={h2Style}>Downloads and APK Files</h2>
      <p style={prose}>
        Some applications discussed on AllYonoGuru may be distributed as APK files or
        through websites outside recognised app stores. Installing an APK from an
        unknown or unauthorised source may expose a device, account or personal
        information to risks such as malware, altered software, unauthorised
        permissions or data theft. Before downloading or installing an application,
        users should verify:
      </p>
      <List items={[
        "whether the website is authentic",
        "whether the source is authorised by the developer",
        "the publisher or developer identity",
        "the app version",
        "the permissions requested",
        "available security information",
        "the Privacy Policy",
        "whether the installation file may have been modified",
      ]} />
      <p style={prose}>
        AllYonoGuru does not guarantee the authenticity, integrity, safety,
        functionality or security of files supplied by third-party websites. Unless
        expressly stated otherwise, AllYonoGuru does not develop, own, host, scan,
        inspect, certify or distribute third-party APK files. Users download and
        install third-party software at their own discretion and responsibility.
      </p>

      <h2 style={h2Style}>Financial Risk and Monetary Claims</h2>
      <p style={prose}>
        Some third-party applications may contain in-app purchases, paid features,
        entry payments, rewards, prizes or withdrawal-related claims. Any payment or
        financial transaction made through a third-party platform is undertaken at
        the user&rsquo;s own discretion and responsibility. AllYonoGuru does not guarantee:
      </p>
      <List items={[
        "winnings",
        "successful deposits",
        "successful withdrawals",
        "refunds",
        "bonuses",
        "cashback",
        "referral commissions",
        "account balances",
        "prizes",
        "recovery of money paid",
        "any other financial outcome",
      ]} />
      <p style={prose}>
        Marketing claims should not be treated as proof that a user will earn money,
        recover a payment or receive a financial return. Users should not spend money
        required for food, accommodation, healthcare, education, bills, debt
        repayments or other essential needs.
      </p>

      <h2 style={h2Style}>Compliance With Indian Law</h2>
      <p style={prose}>
        Users are responsible for ensuring that their access to or use of any
        third-party gaming application complies with all applicable laws and
        regulations in India and in their State or Union Territory.
      </p>
      <p style={prose}>
        The Promotion and Regulation of Online Gaming Act, 2025 and the Promotion
        and Regulation of Online Gaming Rules, 2026 establish a national framework
        governing online gaming. The framework recognises and provides for certain
        e-sports and online social games while prohibiting online money games and
        specified activities connected with their offering, operation, facilitation,
        promotion, advertising and funding. The legal treatment of a particular
        application depends on its actual features, operating model, payment
        structure and official regulatory status.
      </p>
      <p style={prose}>AllYonoGuru does not classify any third-party application as:</p>
      <List items={[
        "an e-sport",
        "an online social game",
        "an online money game",
        "a registered online game",
        "a lawful platform",
        "a licensed service",
        "a government-approved application",
      ]} />
      <p style={prose}>
        unless that status is supported by reliable official information. Any
        description appearing on AllYonoGuru is an editorial description and not a
        formal legal determination. Nothing published on this website should be
        interpreted as promoting, facilitating or encouraging an online money game
        or any activity prohibited by Indian law. Users seeking advice about the
        legal status of a particular application should consult an appropriately
        qualified legal professional.
      </p>

      <h2 style={h2Style}>State and Regional Restrictions</h2>
      <p style={prose}>
        The availability of an application or website in a particular location does
        not necessarily mean that all of its features are legally permitted there.
        Users are responsible for checking whether an application, game, promotion,
        purchase or paid feature is permitted in their State or Union Territory.
        AllYonoGuru does not guarantee that every application discussed on the
        website is available or legally accessible throughout India. Users should
        not attempt to bypass legal, geographic, age or platform restrictions
        through false information, VPN services, location masking or other
        circumvention methods.
      </p>

      <h2 style={h2Style}>Age Restrictions</h2>
      <p style={prose}>
        AllYonoGuru is intended for individuals aged{" "}
        <strong style={{ color: "#f59e0b" }}>18 years and above</strong>. Third-party
        applications may apply their own age requirements, and certain services may
        require a higher minimum age or additional eligibility conditions. Users
        must comply with the age and eligibility requirements stated by the relevant
        operator and applicable law. Parents and guardians should supervise minors&rsquo;
        internet and device use and take reasonable steps to prevent access to
        age-restricted gaming applications or content.
      </p>

      <h2 style={h2Style}>Responsible Gaming and Digital Well-Being</h2>
      <p style={prose}>
        Gaming should be approached as entertainment and used within reasonable
        personal, financial and time limits. Users should avoid:
      </p>
      <List items={[
        "spending money needed for essential expenses",
        "borrowing money to participate",
        "attempting to recover losses through continued activity",
        "repeatedly making payments after losses",
        "concealing gaming activity or spending",
        "allowing gaming to interfere with work or education",
        "allowing gaming to damage personal relationships",
        "continuing when gaming causes emotional or financial distress",
      ]} />
      <p style={prose}>
        If gaming stops being voluntary, enjoyable or controllable, the user should
        discontinue using the relevant application. Anyone experiencing
        gaming-related harm should consider seeking assistance from an appropriately
        qualified professional or support organisation.
      </p>

      <h2 style={h2Style}>App-Specific Notices</h2>

      <h3 style={h3Style}>Rummy Applications</h3>
      <p style={prose}>
        Information about rummy applications is provided for general informational
        purposes only. Rummy platforms may differ in their game rules, payment
        models, eligibility requirements, promotional systems, regional availability
        and regulatory status. Users should review the operator&rsquo;s official
        documentation and applicable law before accessing a rummy service.
        AllYonoGuru does not guarantee that a particular rummy application is
        registered, approved or legally available in every location.
      </p>

      <h3 style={h3Style}>Teen Patti and Other Card Games</h3>
      <p style={prose}>
        Teen Patti, poker and other card-game applications may be subject to legal,
        regional and eligibility restrictions. Users should independently review the
        operator, game model, payment structure, age requirements, promotional terms
        and regulatory status. A reference to a card-game application does not
        constitute endorsement or encouragement to participate.
      </p>

      <h3 style={h3Style}>Ludo Applications</h3>
      <p style={prose}>
        Ludo applications may operate as free casual games or may contain
        advertisements, in-app purchases, contests, rewards or payment-related
        features. Users should review the official platform information before
        registering or making a payment. AllYonoGuru does not guarantee game
        outcomes, rewards, prizes, withdrawals or promotional benefits connected with
        a Ludo application.
      </p>

      <h3 style={h3Style}>Arcade, Slot-Style and Spin Applications</h3>
      <p style={prose}>
        Arcade, slot-style and spin applications can vary significantly in their
        features and operating models. Some may provide free entertainment, while
        others may include virtual items, advertisements, paid features, promotional
        rewards or chance-based elements. Users should review the platform&rsquo;s
        official rules, payment structure, age restrictions and legal status before
        using it. The appearance of such an app on AllYonoGuru does not mean that the
        app has been verified as lawful, skill-based or suitable for financial
        participation.
      </p>

      <h3 style={h3Style}>Bingo and Club Applications</h3>
      <p style={prose}>
        Bingo, club and similar applications may contain social features,
        advertisements, purchases, rewards, contests or payment-related elements.
        Users should independently evaluate their terms, privacy practices, payment
        conditions and legal availability. AllYonoGuru does not guarantee
        eligibility, results, rewards, payments or withdrawals.
      </p>

      <h3 style={h3Style}>Fantasy Sports Applications</h3>
      <p style={prose}>
        Fantasy sports platforms may be subject to specific legal, geographic and
        eligibility conditions. Users are responsible for determining whether a
        platform and its features are permitted in their location. AllYonoGuru does
        not guarantee contest entry, rankings, results, prizes, payments or
        withdrawals.
      </p>

      <h3 style={h3Style}>Casual and Social Games</h3>
      <p style={prose}>
        Casual and social games may contain advertisements, virtual goods, optional
        purchases, account features, promotional codes or rewards. Users should
        review the app&rsquo;s Terms and Conditions, Privacy Policy and requested
        permissions before using it. Their inclusion on AllYonoGuru is informational
        and does not constitute certification or endorsement.
      </p>

      <h3 style={h3Style}>Other Gaming Applications</h3>
      <p style={prose}>
        Any other gaming application mentioned on AllYonoGuru remains under the
        ownership and responsibility of its respective developer or operator. Users
        should conduct their own checks before downloading, registering, submitting
        personal information or making a payment.
      </p>

      <h2 style={h2Style}>Privacy and Personal Information</h2>
      <p style={prose}>
        AllYonoGuru does not control how third-party applications collect, process,
        store, use or share personal information. Before using an application, users
        should review its Privacy Policy and understand:
      </p>
      <List items={[
        "what information is collected",
        "why it is collected",
        "which device permissions are requested",
        "whether information is shared with third parties",
        "where information may be stored",
        "how long it is retained",
        "how an account can be closed",
        "how deletion can be requested",
        "how privacy complaints are handled",
      ]} />
      <p style={prose}>
        Users should avoid applications that request excessive permissions,
        unnecessary sensitive information or payments without providing clear
        operator and privacy details. Information collected directly by AllYonoGuru
        is governed by our separate Privacy Policy.
      </p>

      <h2 style={h2Style}>External Links</h2>
      <p style={prose}>
        AllYonoGuru may contain links to third-party websites, applications, app
        stores, download pages, social-media profiles, support channels or other
        external resources. We do not control the content, security, functionality,
        availability, accuracy, privacy practices or policies of external websites.
        The presence of an external link does not constitute endorsement, approval,
        verification or guarantee. Users access external resources at their own
        discretion and should review the relevant third party&rsquo;s Terms and
        Conditions and Privacy Policy.
      </p>

      <h2 style={h2Style}>Intellectual Property</h2>
      <p style={prose}>
        Third-party app names, game names, trademarks, logos, screenshots, icons and
        other identifying materials remain the property of their respective owners.
        Their use on AllYonoGuru is intended for identification, reporting,
        reference, review or informational commentary. Such use does not imply
        ownership, sponsorship, partnership, approval or official affiliation.
      </p>
      <p style={prose}>
        A rights holder who believes that protected material has been used
        improperly may contact AllYonoGuru at{" "}
        <a href="mailto:AllYonoGurunewsupport@gmail.com" style={{ color: "#f59e0b", textDecoration: "none" }}>
          AllYonoGurunewsupport@gmail.com
        </a>{" "}
        and provide:
      </p>
      <List items={[
        "identification of the protected material",
        "the page where it appears",
        "evidence of ownership or authority",
        "contact information",
        "a clear explanation of the concern",
      ]} />

      <h2 style={h2Style}>No Legal, Financial or Professional Advice</h2>
      <p style={prose}>
        Nothing published on AllYonoGuru constitutes legal, financial, tax,
        investment, technical, security or other professional advice. Descriptions
        of applications, game categories, promotional offers, platform features,
        safety concerns or regulatory status are general informational observations.
        Users should consult an appropriately qualified professional when advice is
        required for their individual circumstances.
      </p>

      <h2 style={h2Style}>Limitation of Liability</h2>
      <p style={prose}>
        To the fullest extent permitted by applicable law, AllYonoGuru and its
        owners, administrators, writers, editors and contributors will not be liable
        for any direct, indirect, incidental, consequential, special or punitive
        loss arising from:
      </p>
      <List items={[
        "reliance on information published on the website",
        "inaccurate, incomplete or outdated information",
        "use or inability to use a third-party application",
        "an expired or invalid promotional code",
        "an unavailable or refused reward",
        "account registration, suspension, restriction or closure",
        "deposits, purchases, withdrawals, refunds or payment disputes",
        "loss of money, account access or virtual items",
        "misleading claims made by third parties",
        "installation of an APK or other software",
        "malware, viruses, device damage or security incidents",
        "loss, theft or misuse of personal information",
        "interruption, alteration or removal of an external service",
        "disputes between users and third-party operators",
        "decisions made after reading content on this website",
      ]} />
      <p style={prose}>
        Nothing in this Disclaimer is intended to remove, restrict or exclude any
        liability, remedy or consumer right that cannot lawfully be excluded under
        applicable Indian law.
      </p>

      <h2 style={h2Style}>No Warranty</h2>
      <p style={prose}>
        AllYonoGuru and its content are provided on an &ldquo;as available&rdquo; and &ldquo;as
        published&rdquo; basis. We do not warrant that:
      </p>
      <List items={[
        "the website will always be available",
        "every page will be accurate or error-free",
        "external links will remain active",
        "download files will remain unchanged",
        "promotional codes will remain valid",
        "rewards will remain available",
        "third-party applications will function as described",
        "external operators will honour their terms",
        "the website or external services will be free from harmful components",
      ]} />
      <p style={prose}>
        Users remain responsible for maintaining suitable device security, account
        protection, antivirus safeguards and data backups.
      </p>

      <h2 style={h2Style}>Corrections and Removal Requests</h2>
      <p style={prose}>
        AllYonoGuru welcomes reasonable requests to correct inaccurate, incomplete or
        outdated information. Submitting a correction or removal request does not
        automatically require the website to alter or remove content. Requests may
        be evaluated according to available evidence, applicable law,
        intellectual-property rights and legitimate editorial considerations.
        Requests may be sent to{" "}
        <a href="mailto:AllYonoGurunewsupport@gmail.com" style={{ color: "#f59e0b", textDecoration: "none" }}>
          AllYonoGurunewsupport@gmail.com
        </a>.
      </p>

      <h2 style={h2Style}>Changes to This Disclaimer</h2>
      <p style={prose}>
        AllYonoGuru may amend this Disclaimer to reflect changes in the website,
        editorial practices, third-party applications or applicable law. Any revised
        version becomes effective when it is published on this page. Users are
        encouraged to review the &ldquo;Last Updated&rdquo; date periodically.
      </p>

      <h2 style={h2Style}>Governing Law and Jurisdiction</h2>
      <p style={prose}>
        This Disclaimer and the use of AllYonoGuru are governed by the laws of
        India. Subject to any mandatory consumer protections and applicable
        jurisdictional requirements, disputes relating to this website shall be
        subject to the exclusive jurisdiction of the competent courts in Bengaluru,
        Karnataka, India.
      </p>

      <h2 style={h2Style}>Contact Us</h2>
      <p style={prose}>
        Questions, correction requests, legal notices or intellectual-property
        concerns relating to this Disclaimer may be sent to:
      </p>
      <List items={[
        "Website: AllYonoGuru",
        "Website Address: https://allyonoguru.com/",
        "Email: AllYonoGurunewsupport@gmail.com",
      ]} />

      <p style={{ ...prose, marginTop: "32px", fontSize: "13.5px", color: "#64748b" }}>
        By continuing to use AllYonoGuru, you acknowledge that it is an independent
        informational and affiliate directory. All third-party games, applications,
        promotional codes, rewards, downloads and services remain under the
        ownership and responsibility of their respective operators.
      </p>
    </LegalPageWrapper>
  );
}
