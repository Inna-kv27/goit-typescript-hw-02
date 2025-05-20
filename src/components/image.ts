export interface Image {
  id: string;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
  // Додайте будь-які інші поля, які ви використовуєте
  likes: number;
  views: number;
  comments: number;
  downloads: number;
}

export interface ApiResponse {
  hits: Image[];
  total: number;
  totalHits: number;
}
