import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { Point } from 'react-easy-crop';

interface EditPhotoContextType {
  crop: Point;
  zoom: number;
  originalImage: string;
  setCrop: Dispatch<SetStateAction<Point>>;
  setZoom: Dispatch<SetStateAction<number>>;
  setOriginalImage: Dispatch<SetStateAction<string>>;
}

const EditPhotoContext = createContext({} as EditPhotoContextType);

export function EditPhotoProvider({ children }: { children: ReactNode }) {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [originalImage, setOriginalImage] = useState('');

  return (
    <EditPhotoContext.Provider
      value={{
        crop,
        setCrop,
        zoom,
        setZoom,
        originalImage,
        setOriginalImage,
      }}
    >
      {children}
    </EditPhotoContext.Provider>
  );
}

export const useEditPhotoContext = () => useContext(EditPhotoContext);
