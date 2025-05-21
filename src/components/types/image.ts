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
  // Додайте інші поля користувача, якщо вони потрібні
}

export interface UnsplashImage {
  id: string;
  slug?: string; // Optional, якщо не завжди присутнє
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string | null;
  description: string | null;
  alt_description: string | null;
  breadcrumbs: any[]; // Типізуйте, якщо потрібно
  urls: UnsplashImageUrls;
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[]; // Типізуйте, якщо потрібно
  sponsorship: any | null; // Типізуйте, якщо потрібно
  topic_submissions: any; // Типізуйте, якщо потрібно
  asset_type: string;
  user: UnsplashUser;
}

export interface UnsplashApiResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}
