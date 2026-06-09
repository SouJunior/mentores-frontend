import Image from 'next/image';

export function ModalHeader() {
  return (
    <header className="sticky top-0 w-full max-w-200 p-4 bg-white shadow-[0px_3px_15px_0px_rgba(0,0,0,0.1)] rounded-t-lg rounded-b-none">
      <Image
        src={'/logos/sou-junior-black.svg'}
        alt="Logo da SouJunior"
        width={248}
        height={40}
        className="w-62 h-14"
      />
    </header>
  );
}
