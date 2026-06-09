import React, { ComponentProps } from 'react';
import { Search as SearchIcon } from 'lucide-react';

type InputSearchProps = ComponentProps<'input'>;

export default function InputSearch(props: InputSearchProps) {
  return (
    <div className="relative flex items-center justify-between rounded-lg border border-gray-600 max-w-[389px] w-full text-black-200 focus-within:border-blue-800">
      <input
        type="text"
        id="input-search-mentors"
        className="flex-1 border-0 outline-none rounded-lg px-[0.68rem] py-[0.68rem] pr-[2.2rem] text-base leading-[1.4rem] peer"
        {...props}
      />
      <label
        htmlFor="input-search-mentors"
        className={`absolute left-2 leading-[1.4rem] font-normal bg-white transition-all duration-300 pointer-events-none
          peer-focus:translate-y-[-1.5rem] peer-focus:px-1 peer-focus:text-xs
          ${props.value ? '-translate-y-6 px-1 text-xs' : ''}`}
      >
        Pesquise por nome
      </label>
      <SearchIcon className="w-6 h-6 absolute right-2" aria-hidden />
    </div>
  );
}
