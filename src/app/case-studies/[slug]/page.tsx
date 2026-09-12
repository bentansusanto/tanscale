import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseStudyDetailPage from "@/components/case-studies/CaseStudyDetailPage";
import { caseStudies } from "@/data/caseStudies";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: "Case Study Not Found — Tanscale" };

  return {
    title: `${cs.clientName} Case Study — ${cs.heroMetric} ${cs.heroMetricSub} | Tanscale`,
    description: cs.executiveQuote,
  };
}

export default async function CaseStudyDetailRoute({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <CaseStudyDetailPage caseStudy={cs} />
      </main>
      <Footer />
    </>
  );
}
