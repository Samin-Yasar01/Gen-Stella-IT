/**
 * Services Data
 * 
 * Company services and products
 * TODO: Add detailed service descriptions, features, and pricing
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features: string[];
  ctaText?: string;
  ctaHref?: string;
}

export const services: Service[] = [
  // {
  //   id: "1",
  //   title: "Service Name",
  //   description: "Service description",
  //   icon: "icon-name",
  //   features: ["Feature 1", "Feature 2", "Feature 3"],
  //   ctaText: "Learn More",
  //   ctaHref: "/services/service-name",
  // },
];
