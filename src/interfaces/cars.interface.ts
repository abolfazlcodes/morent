export interface CarProps {
  id: number;
  name: string;
  pricePerDay: number;
  capacity: number;
  automatic: boolean;
  tankCapacity: number;
  category: string;
  thumbnail: string;
  images: string[];
  reviews: ReviewProps[];
}

export interface ReviewProps {
  userImage: string;
  userName: string;
  userRole: string;
  date: string;
  comment: string;
}
