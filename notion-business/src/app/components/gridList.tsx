import Timeline, { TimelineItemProps } from "./timeline/timeline";

export default function GridList() {
    let certTimelineItems: TimelineItemProps[] = [];
    certTimelineItems.push({
        heading: "Certificate of Sponsorship (CoS)",
        textContent: `
        We assist in assigning the necessary CoS for visa applications under the Skilled Worker and sponsored work routes.`,
    });

    certTimelineItems.push({
        heading: "Objective Structured Clinical Examination (OSCE)",
        textContent: `
        We guide you through the OSCE, a test of competence for nurses, helping you prepare for scenarios you may encounter in practice.`,
    });

    certTimelineItems.push({
        heading: "Computer Based Test (CBT)",
        textContent: `
        We provide guidance and support for the CBT, assessing theoretical and practice-based knowledge.`,
    });

    certTimelineItems.push({
        heading: "IELTS for UK Registered Nurse",
        textContent: `
        We assist with meeting the International English Language Test (IELTS) requirements for non-EU trained nurses.`,
    });

    certTimelineItems.push({
        heading: "Tier 2 Visa – Immigration",
        textContent: `
        We help in finding employment and support the application process for a Tier 2 (General) visa, allowing you to work in the UK.`,
    });

    return (
        // <!-- component -->
        <div className="container mx-auto grid grid-cols3 gap-6">
            <Timeline timelineItems={certTimelineItems} id="certifications"></Timeline>
        </div>
    );
}
