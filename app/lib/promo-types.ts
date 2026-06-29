export type PromoTimeSlot = "morning" | "afternoon" | "evening";

export interface PromoCardData {
  name: string;
  slug: string | null;
  logo: string | null;
  morning: string | null;
  afternoon: string | null;
  evening: string | null;
}
