export interface UnsplashUser {
  id: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string | null;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
}

export interface UnsplashCollection {
  id: number;
  title: string;
  description: string | null;
  published_at: string;
  updated_at: string;
  cover_photo: UnsplashImage;
  user: UnsplashUser;
}

export interface UnsplashSponsor {
  approved_on: string;
  status: string;
  sponsor: UnsplashUser;
}

// Це об'єкт, де ключі - це назви топіків, а значення - їхній статус
export interface UnsplashTopicSubmission {
  status: string;
  approved_on?: string;
  //  інші деталі топіка, якщо вони є (наприклад, title, description)
}

export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  likes: number;
  liked_by_user: boolean;
  current_user_collections: UnsplashCollection[];
  sponsorship: UnsplashSponsor | null;
  topic_submissions: {
    [key: string]: UnsplashTopicSubmission;
  };
  asset_type: string;
  user: UnsplashUser;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  description: string | null;
  exif: {
    make: string;
    model: string;
    exposure_time: string;
    aperture: string;
    focal_length: string;
    iso: number;
  };
  location: { city: string | null; country: string | null };
}

export interface UnsplashApiResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}
