import React, { ReactNode, createContext, useContext, useState } from "react";

const PhotoContext = createContext<string | null>(null);

export function usePhotoContext() {
  return useContext(PhotoContext);
}

export function PhotoProvider({ children }: { children: ReactNode }) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <PhotoContext.Provider value={selectedPhoto}>
      {children}
    </PhotoContext.Provider>
  );
}
