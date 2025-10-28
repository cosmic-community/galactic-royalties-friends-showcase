// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Friend interface matching the Cosmic content model
export interface Friend extends CosmicObject {
  type: 'friends';
  metadata: {
    name: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    bio: string;
    contact_info?: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip?: number;
}

// Type guard for Friend objects
export function isFriend(obj: CosmicObject): obj is Friend {
  return obj.type === 'friends';
}