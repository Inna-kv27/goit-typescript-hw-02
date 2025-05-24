export interface UnsplashImageUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface UnsplashUser {
  id: string;
  username: string;
  name: string;
}

export interface UnsplashImage {
  id: string;
  slug?: string;
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string | null;
  description: string | null;
  alt_description: string | null;
  urls: UnsplashImageUrls;
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: any | null;
  topic_submissions: any;
  asset_type: string;
  user: UnsplashUser;
}

export interface UnsplashApiResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}
