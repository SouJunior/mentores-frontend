import { ChevronRight as ChevronRightIcon } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { TabsContent } from '@/components/ui/tabs';

export default function AccountManagementTab() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const redirectDeleteAccountTab = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', 'delete-account');
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <TabsContent value="account-management" className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold leading-[1.8rem] pt-1 pb-2">
        Gestão da conta
      </h2>
      <p className="text-[0.875rem] leading-4">
        Você tem duas opções para se ausentar da plataforma: desativar ou
        excluir sua conta.
      </p>
      <div className="flex flex-col gap-2 max-w-[36rem] py-2">
        <p className="text-[#666666] leading-[1.4rem]">
          Desative sua conta e ela será temporariamente suspensa, mantendo seus
          dados e permitindo reativação a qualquer momento.
        </p>
        <p className="text-[#666666] leading-[1.4rem]">
          Ao excluir, ela será deletada permanentemente após 30 dias. Após esse
          prazo, seus dados serão removidos definitivamente.
        </p>
      </div>
      <div className="max-w-[36rem] h-px bg-[#666666]" />
      <div className="flex flex-col gap-4 max-w-[36rem]">
        <button
          disabled
          style={{ cursor: 'not-allowed' }}
          className="py-3 px-6 font-medium text-left border-2 border-[#ACACAC] rounded-lg bg-transparent w-full flex items-center justify-between text-[#323232]"
        >
          Desativar Conta
          <ChevronRightIcon />
        </button>
        <button
          onClick={redirectDeleteAccountTab}
          className="py-3 px-6 font-medium text-left border-2 border-[#ACACAC] rounded-lg bg-transparent w-full flex items-center justify-between text-[#D10324]"
        >
          Excluir Conta
          <ChevronRightIcon />
        </button>
      </div>
    </TabsContent>
  );
}
