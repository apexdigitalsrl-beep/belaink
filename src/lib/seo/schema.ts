import { business } from "@/content/business";
import { aggregateRating } from "@/content/reviews";

/**
 * JSON-LD schema.org para SEO local + AI overviews (research §5, arch §7).
 * @type Restaurant — el más específico para que Google entienda el negocio.
 */
export function restaurantSchema() {
  const { address, site } = business;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: business.legalName,
    description: business.shortPitch,
    url: site.url,
    image: `${site.url}/img/hero.jpg`,
    servesCuisine: business.cuisine,
    priceRange: business.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "15:00",
        closes: "21:00",
      },
    ],
    sameAs: [business.contact.instagram],
  };

  if (address.geo.lat && address.geo.lng) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: address.geo.lat,
      longitude: address.geo.lng,
    };
  }

  // Sólo publicar rating cuando haya reseñas reales (count > 0).
  if (aggregateRating.count > 0) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.value,
      reviewCount: aggregateRating.count,
    };
  }

  return schema;
}
