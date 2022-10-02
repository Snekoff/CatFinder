
export interface Breed {
  "weight"?:
    {
      "imperial"?: string | undefined,
      "metric"?: string | undefined
    } | undefined,
  "id": string,
  "name": string,
  "cfa_url"?: string | undefined,
  "vetstreet_url"?: string | undefined,
  "vcahospitals_url"?: string | undefined,
  "temperament"?: string | undefined,
  "origin"?: string | undefined,
  "country_codes"?: string | undefined,
  "country_code"?: string | undefined,
  "description"?: string | undefined,
  "life_span"?: string | undefined,
  "indoor"?: number | undefined,
  "lap"?: number | undefined,
  "alt_names"?: string | undefined,
  "adaptability"?: number | undefined,
  "affection_level"?: number | undefined,
  "child_friendly"?: number | undefined,
  "dog_friendly"?: number | undefined,
  "energy_level"?: number | undefined,
  "grooming"?: number | undefined,
  "health_issues"?: number | undefined,
  "intelligence"?: number | undefined,
  "shedding_level"?: number | undefined,
  "social_needs"?: number | undefined,
  "stranger_friendly"?: number | undefined,
  "vocalisation"?: number | undefined,
  "experimental"?: number | undefined,
  "hairless"?: number | undefined,
  "natural"?: number | undefined,
  "rare"?: number | undefined,
  "rex"?: number | undefined,
  "suppressed_tail"?: number | undefined,
  "short_legs"?: number | undefined,
  "wikipedia_url"?: string | undefined,
  "hypoallergenic"?: number | undefined,
  "reference_image_id"?: string | undefined,
  "image"?:
    {
      "id"?: string | undefined,
      "width"?: number | undefined,
      "height"?: number | undefined,
      "url"?: string | undefined
    } | undefined
}



