import type { Metadata } from "next";
import { CtaBand, Eyebrow, PageHero } from "../../components/ui";
import { IconImage, IconPeople, IconHeart } from "../../components/Icon";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "The Prospect Pathways leadership team, senior management team and wider team — who they are, what they are responsible for, and the experience they bring.",
};

type Person = {
  name: string;
  role: string;
  bio: string[];
  /** Path under /public once the photo arrives, e.g. "/team/waseem.jpg". Shown at 2.6 cm wide × 4 cm tall. */
  portrait?: string;
};

const LEADERSHIP: Person[] = [
  {
    name: "Waseem",
    role: "Managing Director",
    bio: [
      "Waseem has worked within the supported accommodation sector since 2018. Between 2018 and 2026, he provided strategic oversight of a supported accommodation provider, developing valuable experience in organisational leadership and service development.",
      "As Managing Director, Waseem oversees the strategic growth and development of Prospect Pathways. He works alongside the wider Leadership Team to ensure that the organisation grows responsibly while maintaining safe, effective and high-quality services.",
    ],
  },
  {
    name: "Junaid",
    role: "Director of Accommodation and Property Standards",
    bio: [
      "Junaid has worked within the sector since 2015 and has held director-level and senior leadership roles across a range of services. His experience includes supported exempt accommodation, CQC-regulated supported living services and Ofsted-regulated supported accommodation for children and young people.",
      "Junaid has supported services working with people with learning disabilities, autism, dyspraxia and alcohol-related support needs, including individuals subject to Deprivation of Liberty Safeguards (DoLS) authorisations.",
      "He oversees all Prospect Pathways accommodation and property standards. This includes compliance with the Decent Homes Standard, the Housing Health and Safety Rating System, Awaab’s Law and wider property safety requirements. Junaid is committed to ensuring that every property provides a safe, compliant and homely environment and that repairs and maintenance targets are consistently achieved.",
    ],
  },
  {
    name: "Abdul Basit Khan",
    role: "Director of Operations and Support",
    bio: [
      "Abdul has worked within the health, social care and supported accommodation sectors since 2015. He began his career with a national care agency operating across England and Wales before establishing a supported accommodation service in 2015.",
      "Abdul has extensive experience in supported exempt accommodation and CQC-regulated supported living services. His work has primarily focused on supporting people with learning disabilities, autism, dyspraxia, alcohol-related needs and substance misuse needs, including individuals subject to DoLS authorisations.",
      "He has also served as both Registered Manager and Responsible Individual for an Ofsted-regulated supported accommodation service for 16- and 17-year-olds. Abdul holds a Level 5 qualification in Health and Social Care, together with an apprenticeship qualification focused on supporting adults, children and young people.",
      "Abdul provides strategic oversight of the organisation’s day-to-day operations. He works alongside the other directors to ensure that the two central components of the service — safe, compliant and decent homes, and person-centred, outcomes-focused support — work together effectively to meet residents’ needs.",
    ],
  },
];

const SENIOR_MANAGEMENT: Person[] = [
  {
    name: "Tahir",
    role: "Head of Supported Housing",
    bio: [
      "Tahir oversees the delivery of supported exempt accommodation services across Prospect Pathways. He works closely with managers and frontline staff to ensure that residents receive safe accommodation, appropriate support and effective housing management.",
      "He also helps maintain consistency across services, monitors operational performance and ensures that emerging issues are identified and addressed promptly.",
    ],
  },
  {
    name: "Kamal",
    role: "Head of Support Services",
    bio: [
      "Kamal is responsible for the quality and consistency of resident support. This includes overseeing needs assessments, risk assessments, individual support plans, regular reviews and move-on planning.",
      "Kamal holds a law degree and has completed the Legal Practice Course. He moved into the health and social care sector in 2013 and holds a Level 5 QCF qualification in Health and Social Care for Adults, Children and Young People.",
      "He has previously worked as the Registered Manager of a CQC-regulated supported living service for people with learning disabilities and autism. He has also managed a specialised supported housing service.",
      "Kamal ensures that support is person-centred, meaningful and tailored to each resident’s circumstances, strengths, goals and assessed level of need.",
    ],
  },
  {
    name: "Maria",
    role: "Head of Quality, Safeguarding and Compliance",
    bio: [
      "Maria oversees safeguarding, complaints, incidents, audits and service compliance. She supports teams to identify and manage risks, respond appropriately to concerns and maintain clear and accurate records.",
      "Her role also includes monitoring property and service standards, measuring performance against agreed key performance indicators and ensuring that lessons are learned from incidents, complaints, feedback and internal reviews.",
    ],
  },
  {
    name: "Tariq",
    role: "Head of Partnerships and Referrals",
    bio: [
      "Tariq develops and maintains positive relationships with local authorities, registered housing providers, referral agencies and community organisations.",
      "He oversees referral pathways and helps ensure that prospective residents are appropriately assessed before a placement is offered. This enables Prospect Pathways to determine whether the proposed accommodation and support service can safely and effectively meet each person’s identified needs.",
    ],
  },
];

function Profile({ person }: { person: Person }) {
  return (
    <article className="profile">
      <div className="profile__head">
        <div className="profile__portrait">
          {person.portrait ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={person.portrait} alt={`${person.name}, ${person.role}`} />
          ) : (
            <div className="profile__placeholder" aria-hidden="true">
              <IconImage size={22} color="#6ba7af" />
            </div>
          )}
        </div>
        <div className="stack gap-8" style={{ gap: "4px" }}>
          <h3 className="h4">{person.name}</h3>
          <p className="profile__role">{person.role}</p>
        </div>
      </div>
      <div className="stack gap-14">
        {person.bio.map((para, i) => (
          <p key={i} className="body">
            {para}
          </p>
        ))}
      </div>
    </article>
  );
}

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about-us" }]}
        title="Our Team"
        intro="Working Together to Create Positive Pathways"
      />

      <section className="section">
        <div className="container stack gap-24" style={{ maxWidth: "980px" }}>
          <p className="lead">
            Prospect Pathways was established in 2025 to provide safe, suitable accommodation and
            person-centred support to citizens across England. We specialise in supported exempt
            accommodation for people who are homeless, at risk of homelessness, fleeing domestic
            abuse, seeking support to maintain a drug- and alcohol-free lifestyle, or experiencing
            other challenges that affect their ability to live independently.
          </p>
          <p className="body">
            We champion equality, diversity and inclusion. Our workforce brings together people with
            a wide range of skills, experience and perspectives. This diversity strengthens our
            organisation and enables us to maintain a capable, effective and high-performing team.
          </p>
          <p className="body">
            Our team has extensive experience in supported housing, housing management,
            safeguarding, regulatory compliance and holistic, outcomes-focused support. We work
            collaboratively with residents, registered providers, local authorities, health and
            social care professionals, commissioners and community organisations.
          </p>
          <p className="body">
            Every member of our team shares the same purpose: to provide a secure home, meaningful
            support and a clear pathway towards greater stability and independence.
          </p>
        </div>
      </section>

      <section className="section section--ground">
        <div className="container stack gap-48">
          <div className="grid grid--split-narrow">
            <div className="stack gap-20">
              <Eyebrow>Leadership</Eyebrow>
              <h2 className="h2">Our Leadership Team</h2>
            </div>
            <div className="stack gap-16">
              <p className="body">
                Our Leadership Team sets the strategic direction of Prospect Pathways and ensures
                that the organisation remains focused on delivering safe, lawful and high-quality
                services.
              </p>
              <p className="body">
                The team is responsible for the organisation’s governance, financial sustainability,
                compliance and long-term development. They provide leadership across the organisation
                while ensuring that residents’ safety, dignity, wellbeing and individual outcomes
                remain central to every decision.
              </p>
            </div>
          </div>
          <div className="profiles">
            {LEADERSHIP.map((p) => (
              <Profile key={p.name} person={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack gap-48">
          <div className="grid grid--split-narrow">
            <div className="stack gap-20">
              <Eyebrow>Senior management</Eyebrow>
              <h2 className="h2">Our Senior Management Team</h2>
            </div>
            <div className="stack gap-16">
              <p className="body">
                Our Senior Management Team turns the organisation’s strategy into effective
                day-to-day services. The team oversees accommodation, support delivery,
                safeguarding, compliance, referrals, partnerships and staff performance.
              </p>
              <p className="body">
                Senior managers work closely with frontline teams to monitor service quality,
                respond to concerns and ensure that residents receive consistent, person-centred
                support. They are also responsible for staff supervision, training, service reviews
                and continuous improvement.
              </p>
            </div>
          </div>
          <div className="profiles">
            {SENIOR_MANAGEMENT.map((p) => (
              <Profile key={p.name} person={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ground">
        <div className="container stack gap-40">
          <div className="grid grid--split-narrow">
            <div className="stack gap-20">
              <Eyebrow>Wider team</Eyebrow>
              <h2 className="h2">Our Wider Team</h2>
            </div>
            <p className="body">
              Our wider team delivers the practical services that residents rely on every day. Each
              role has distinct responsibilities, but all members of the team work together to
              provide safe accommodation, responsive housing management and meaningful support.
            </p>
          </div>
          <div className="grid grid--2">
            <article className="card">
              <div className="icon-chip">
                <IconPeople />
              </div>
              <h3 className="h3">Team Leaders</h3>
              <p className="body">
                Our Team Leaders coordinate day-to-day service delivery and support frontline staff
                in carrying out their responsibilities. They review records, monitor resident
                engagement, respond to emerging concerns and help ensure that planned support is
                delivered consistently.
              </p>
              <p className="body">
                Team Leaders also provide guidance to staff, support effective communication and
                escalate safeguarding, welfare or operational concerns when required.
              </p>
            </article>
            <article className="card">
              <div className="icon-chip">
                <IconHeart />
              </div>
              <h3 className="h3">Support Workers</h3>
              <p className="body">
                Our Support Workers work directly with residents to understand and assess their
                individual needs, promote their safety and wellbeing, and deliver person-centred
                support.
              </p>
              <p className="body">
                They help residents work towards agreed goals, develop independent living skills,
                maintain their accommodation, access healthcare and community services, manage
                appointments and prepare for future move-on opportunities. They also complete
                regular welfare checks, record support accurately and report any safeguarding or
                risk-related concerns.
              </p>
              <p className="body">
                Above all, our Support Workers build professional and respectful relationships with
                residents, enabling them to feel heard, valued and supported throughout their time
                with Prospect Pathways.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to join the team?"
        body="We hire support workers, team leaders and housing staff across Birmingham and the West Midlands."
        ctaLabel="See current vacancies"
        ctaHref="/careers"
        secondary={{ label: "About Us", href: "/about-us" }}
      />
    </>
  );
}
