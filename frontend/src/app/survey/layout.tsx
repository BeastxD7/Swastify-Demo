import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Healthcare Records Survey | Swastify",
  description:
    "Share your experiences with healthcare records access. Your feedback helps us improve healthcare systems and patient experiences.",
  keywords: "healthcare survey, medical records, patient experience, healthcare feedback, medical data access",
  openGraph: {
    title: "Healthcare Records Survey | Swastify",
    description:
      "Share your experiences with healthcare records access. Your feedback helps us improve healthcare systems.",
    url: "https://swastify.life/survey",
    siteName: "Swastify",
    images: [
      {
        url: "https://swastify.life/images/survey-og-image.png",
        width: 1200,
        height: 630,
        alt: "Swastify Healthcare Survey",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Records Survey | Swastify",
    description:
      "Share your experiences with healthcare records access. Your feedback helps us improve healthcare systems.",
    images: ["https://swastify.life/images/survey-og-image.png"],
    creator: "@getswastify",
    site: "@getswastify",
  },
  alternates: {
    canonical: "https://swastify.life/survey",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  authors: [{ name: "Swastify Team" }],
  category: "HealthTech",
}

export default function SurveyLayout({ children }: { children: ReactNode }) {
  return children
}
