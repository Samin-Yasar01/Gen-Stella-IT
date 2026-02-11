/**
 * Testimonials Data
 * 
 * Client testimonials and reviews
 * TODO: Add client quotes, ratings, and company names
 */

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  image?: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [
  // {
  //   id: "1",
  //   quote: "Amazing service and great results!",
  //   author: "Client Name",
  //   title: "CEO",
  //   company: "Company Name",
  //   image: "/images/testimonials/client.jpg",
  //   rating: 5,
  // },
];
