import { portfolioData } from "@/data/index";
import PortfolioGallery from "@/components/portfoliogallery";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateStaticParams() {
  return portfolioData.map((category) => ({
    category: category.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const portfolioCategory = portfolioData.find((c) => c.id === category);
  
  if (!portfolioCategory) return {};

  return {
    title: `${portfolioCategory.title} | IGMA Portfolio`,
    description: portfolioCategory.description,
  };
}

export default async function PortfolioPage({ params }: Props) {
  const { category } = await params;
  const portfolioCategory = portfolioData.find((c) => c.id === category);

  if (!portfolioCategory) {
    notFound();
  }

  return (
    <PortfolioGallery
      category={portfolioCategory.id}
      images={portfolioCategory.images}
      title={portfolioCategory.title}
    />
  );
}
