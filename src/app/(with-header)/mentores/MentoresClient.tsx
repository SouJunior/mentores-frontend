'use client';

import InputSearch from '@/features/mentors/components/input-search';
import { MentorsGrid } from '@/features/mentors/components/mentors-grid';
import SelectFilter from '@/shared/components/select-filter';
import { genders, specialties } from '@/shared/constants/static-info';
import { Footer } from '@/shared/layout/footer';
import { IMentors } from '@/shared/types/IUseMentorsService';
import { ICalendlyUserInfo } from '@/shared/types/IUseUserCalendlyInfoService';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface MentoresClientProps {
  mentors: IMentors[];
  calendlyInfo: ICalendlyUserInfo[];
}

export default function MentoresClient({
  mentors,
  calendlyInfo,
}: MentoresClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [genderFilter, setGenderFilter] = useState<string[]>([]);
  const [specialtyFilter, setSpecialtyFilter] = useState<string[]>([]);
  const [queryMentor, setQueryMentor] = useState('');

  const mentorsFiltered = mentors?.filter((mentor: IMentors) => {
    const nameFilter = queryMentor.toLowerCase();

    const hasSelectedSpecialty =
      specialtyFilter.length === 0 ||
      specialtyFilter.some(selectedSpecialty =>
        mentor.specialties.includes(selectedSpecialty)
      );

    const hasSelectedGenders =
      genderFilter.length === 0 ||
      genderFilter
        .map(gender => gender.toLowerCase())
        .includes(mentor.gender.toLowerCase());

    return (
      hasSelectedGenders &&
      hasSelectedSpecialty &&
      (!queryMentor || mentor.fullName.toLowerCase().includes(nameFilter)) &&
      mentor.registerComplete === true
    );
  });

  function handleClearFilters() {
    setSpecialtyFilter([]);
    setGenderFilter([]);
  }

  useEffect(() => {
    if (queryMentor) {
      router.replace(`/mentores?q=${encodeURIComponent(queryMentor)}`);
    }
  }, [queryMentor, router]);

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) {
      setQueryMentor(q);
    }
  }, [searchParams]);

  return (
    <>
      <div id="__next" className="bg-[#F1F3F5] flex flex-col gap-2.5">
        <main>
          <div className="flex h-[100px] flex-col py-6 px-8 max-w-7xl mx-auto">
            <section className="flex items-center gap-2">
              <Link
                href="/"
                className="text-[#666666] font-normal text-sm leading-[1.05rem] hover:underline"
              >
                Início
              </Link>
              <div aria-hidden className="w-2 h-2 bg-[#666666] rounded-full" />
              <span className="text-sm text-[#003986] leading-[1.05rem]">
                Encontre seu mentor
              </span>
            </section>
            <span className="text-[32px] font-semibold text-[#003986] flex flex-col mt-6">
              Conheça nossos mentores
              <span className="text-base text-[#666666] font-normal">
                Mentorias individuais e personalizadas à um toque de você
              </span>
            </span>
          </div>

          <div className="w-full bg-white py-8 mt-[50px]">
            <div className="flex justify-between px-8 max-w-7xl w-full mx-auto">
              <InputSearch
                value={queryMentor ?? ''}
                onChange={e => setQueryMentor(e.target.value)}
              />
              <div className="flex gap-2.5">
                <SelectFilter
                  options={specialties}
                  selectName="Especialidades"
                  onChange={option => setSpecialtyFilter(option)}
                  selectedOptions={specialtyFilter}
                />
                <SelectFilter
                  options={genders}
                  selectName="Gênero"
                  onChange={option => setGenderFilter(option)}
                  selectedOptions={genderFilter}
                />
              </div>
            </div>
          </div>

          {(specialtyFilter.length > 0 || genderFilter.length > 0) && (
            <div className="flex gap-3 w-full flex-wrap pt-[1.6rem] px-8 pb-0 max-w-7xl mx-auto">
              {specialtyFilter.map(selectedSpecialty => (
                <span
                  key={selectedSpecialty}
                  className="bg-white text-sm text-[#323232] px-4 py-2 rounded-[2.5rem] text-center"
                >
                  {selectedSpecialty}
                </span>
              ))}
              {genderFilter.map(selectedGender => (
                <span
                  key={selectedGender}
                  className="bg-white text-sm text-[#323232] px-4 py-2 rounded-[2.5rem] text-center"
                >
                  {selectedGender}
                </span>
              ))}
              <div aria-hidden className="w-0.5 h-8 bg-[#cbcbcb]" />
              <button
                type="button"
                onClick={handleClearFilters}
                className="[all:unset] cursor-pointer rounded-lg text-base text-[#003986] hover:text-[#002C66] transition-colors duration-300"
              >
                Remover filtros
              </button>
            </div>
          )}

          <MentorsGrid
            loading={false}
            mentors={mentorsFiltered ?? []}
            mentorCalendlyInfo={calendlyInfo}
          />
        </main>
      </div>
      <Footer />
    </>
  );
}
