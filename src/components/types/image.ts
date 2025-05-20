// src/types/image.ts
export interface Image {
  id: string;
  webformatURL: string; // URL для маленького зображення
  largeImageURL: string; // URL для великого зображення
  tags: string; // Теги, які можна використовувати як alt текст
  likes: number;
  views: number;
  comments: number;
  downloads: number;
  // Додайте будь-які інші поля, які ви використовуєте з Pixabay API
  // наприклад, user, userImageURL, previewURL тощо
}

// Інтерфейс для повної відповіді від Pixabay API
export interface ApiResponse {
  hits: Image[];
  total: number;
  totalHits: number;
}
