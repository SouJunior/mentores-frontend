import { Button } from '@/components/button';
import { Modal } from '@/components/modal';
import { ModalHeader } from './ModalHeader';

type ModalTermsProps = React.HTMLAttributes<HTMLDivElement>;

export default function ModalTerms(props: ModalTermsProps) {
  return (
    <Modal.Content className="max-w-200 relative" {...props}>
      <ModalHeader />

      <div className="pt-4 pr-2">
        <div className="flex flex-col max-h-148 h-full overflow-auto px-4 pb-6 font-['Radio_Canada'] [&::-webkit-scrollbar]:w-1.75 [&::-webkit-scrollbar-thumb]:bg-[#666666] [&::-webkit-scrollbar-thumb]:rounded-[1rem] [&::-webkit-scrollbar-track]:bg-transparent">
          <Modal.Title className="max-w-[18rem] text-xl font-medium leading-6 text-[#003986]">
            Termos e condições gerais de uso SouJunior
          </Modal.Title>

          <Modal.Description className="text-[#323232] leading-[1.4rem] text-base my-4 [&_ol]:pl-4 [&_li]:list-decimal [&_ol.list-style-type-none]:pl-0 [&_ol.list-style-type-none_li]:list-none">
            Ao navegar neste site e usar os serviços que são fornecidos pelo
            SouJunior, você afirma que leu, compreendeu e concorda com nossos
            Termos e Condições. Estes Termos e Condições abrangem todos os
            aplicativos, serviços de Internet ou extensões dos sites
            relacionados. Você é livre para recusar a nossos termos e condições
            de uso, entendendo que talvez não possamos fornecer alguns dos
            serviços desejados e caso aceite você poderá ainda, a qualquer
            tempo, retornar ao site, clicar em termos de uso e reler quantas
            vezes desejar.
            <br />
            <br />
            Termos e Condições
            <ol>
              <li>
                Os Termos e Condições do SouJunior regem o uso deste Site e todo
                o seu conteúdo (&quot;Site&quot;). Estes Termos descrevem as
                regras e regulamentos que orientam o uso do SouJunior. Todos os
                materiais, informações, documentos, serviços ou todas as outras
                entidades (coletivamente referidas como &quot;conteúdo&quot;)
                que aparecem no SouJunior serão administrados de acordo com
                estes Termos e Condições.
              </li>
              <li>
                O site é destinado a usuários com 18 (dezoito) anos de idade ou
                mais. Se você tem menos de 18 (dezoito) anos, não poderá usar ou
                registrar-se para usar este site ou seus serviços sem a
                permissão ou consentimento dos pais. Ao concordar com estes
                Termos e Condições, você tem a capacidade legal necessária para
                cumprir e ficar vinculado por estes Termos e Condições.
              </li>
              <li>
                Áreas específicas deste site podem ser restritas ao acesso do
                usuário, e o SouJunior pode estender ainda mais essa restrição a
                todo o site, a qualquer momento e a seu exclusivo critério.
                Qualquer identificação de usuário, chave de segurança ou senha
                que você possa ter neste site são confidenciais e você é
                responsável por manter a confidencialidade dessas informações.
              </li>

              <li>
                Nós nos reservamos o direito de registrar solicitações para que
                você remova todos os links ou qualquer link específico criado
                por você que redirecione para o nosso site, e você aprova a
                remoção imediata desses links para o nosso site, mediante
                solicitação. Podemos alterar os termos e condições desses
                direitos de vinculação a qualquer momento. Ao conectar-se
                continuamente ao nosso site, você concorda em se comprometer e
                seguir os termos desta política de links. Por favor, entre em
                contato conosco se encontrar algum link em nosso site que seja
                ofensivo, e poderemos considerar e analisar solicitações de
                remoção de tais links seja do SouJunior ou conteúdo feito por
                terceiros. Este site pode conter links para sites ou aplicativos
                operados por terceiros. Não controlamos nenhum desses sites ou
                aplicativos de terceiros ou o operador de terceiros. Este Site,
                objeto do presente Termos de Uso não é responsável e não endossa
                quaisquer sites ou aplicativos de terceiros ou sua
                disponibilidade ou conteúdo. SouJunior não se responsabiliza
                pelos anúncios contidos no site. Você concorda em fazê-lo por
                sua própria conta e risco ao adquirir quaisquer bens e / ou
                serviços de terceiros. O anunciante é quem permanece responsável
                por tais bens e/ou serviços, e se você tiver alguma dúvida ou
                reclamação sobre eles, você deve entrar em contato com o
                anunciante &quot;Conteúdo do usuário&quot;. Importante salientar
                que o termo usado &quot;Conteúdo do Usuário&quot; significa
                qualquer áudio, vídeo, texto, imagens ou outro material ou
                conteúdo que você decida exibir neste Site. Com relação ao
                conteúdo do usuário, ao exibi-lo, você concede ao SouJunior uma
                licença não exclusiva, mundial, irrevogável, isenta de royalties
                e sublicenciável para usar, reproduzir, adaptar, publicar,
                traduzir e distribuir em qualquer mídia. O Conteúdo do Usuário
                deve ser seu e não deve infringir os direitos de terceiros.
                SouJunior reserva-se o direito de remover qualquer parte do seu
                conteúdo deste site a qualquer momento, sem aviso prévio.
                SouJunior tem permissão para monitorar suas atividades no site e
                remover qualquer conteúdo do usuário considerado impróprio,
                ofensivo, contrário às leis e regulamentos aplicáveis, ou que
                cause uma violação destes Termos e Condições. Ao acessar este
                Site, informações específicas sobre o Usuário, como endereços de
                protocolo de Internet (IP), navegação no site, software do
                usuário e tempo de navegação, juntamente com outras informações
                semelhantes, serão armazenadas nos servidores do SouJunior. As
                informações sobre suas identidades, como nome, endereço,
                detalhes de contato, informações de faturamento e outras
                informações armazenadas neste site, serão estritamente usadas
                apenas para fins estatísticos e não serão publicadas para acesso
                geral. SouJunior, no entanto, não assume nenhuma
                responsabilidade pela segurança dessas informações. O site é
                fornecido, com todas as responsabilidades e não assume
                compromissos, representações ou garantias expressas ou
                implícitas de qualquer tipo relacionadas a este site ou ao
                conteúdo nele contido. Indenização O usuário concorda em
                indenizar o Site e suas afiliadas em toda a extensão, frente à
                todas as ações, reclamações, responsabilidades, perdas, danos,
                custos, demandas e despesas decorrentes do uso deste Site pelo
                Usuário, incluindo, sem limitação, qualquer reclamação
                relacionada à violação de qualquer uma das disposições destes
                Termos e Condições. Se estiver insatisfeito com algum ou todo o
                conteúdo deste site ou qualquer um ou todos os seus Termos e
                Condições, o usuário pode interromper o uso deste site. Em
                qualquer momento, os usuários podem interromper o uso do Site
                para isso, no site, estão disponíveis as orientações
                necessárias. Caso ainda fique algum dúvida, não hesite em enviar
                um e-mail para .
              </li>

              <li>
                Nós nos reservamos o direito e critério exclusivo de, e sem
                aviso prévio ou responsabilidade, negar o acesso e uso do site
                (incluindo o bloqueio de endereços IP específicos) a qualquer
                usuário por qualquer motivo, incluindo, mas não se limitando à
                violação de qualquer representação, garantia ou acordo nestes
                Termos ou em qualquer lei ou regulamento aplicável.
              </li>
            </ol>
            <br />
            Disposições Gerais
            <ol>
              <li>
                Os Termos e Condições deste site serão regidos e interpretados
                de acordo com as leis do país ou estado em que o Site opera.
                Você, por meio deste, se submete incondicionalmente à jurisdição
                não exclusiva dos tribunais localizados no Brasil para a
                resolução de quaisquer disputas.
              </li>
              <li>
                Este Site reserva-se o direito de revisar estes Termos a
                qualquer momento conforme julgar adequado. Por isso é
                fundamental que os seus usuários estejam atentos à essas
                alterações.
              </li>
              <li>
                O Site reserva-se o direito de ceder, transferir e subcontratar
                seus direitos e/ou obrigações sob este Acordo sem qualquer
                notificação ou consentimento prévio necessário. Os usuários não
                terão permissão para atribuir, transferir ou subcontratar
                qualquer um de seus direitos e/ou obrigações sob estes Termos.
                Além disso, uma pessoa que não seja parte destes Termos e
                Condições não terá o direito de fazer cumprir qualquer
                disposição neles contida.
              </li>

              <li>
                Estes Termos e Condições, incluindo quaisquer avisos legais e
                isenções de responsabilidade neste site, constituem o acordo
                completo entre o Site e você em relação ao uso deste site.
              </li>

              <li>
                Qualquer dúvida, entre em contato por meio do endereço de
                e-mail: [AVALIAR O E-MAIL]
              </li>
            </ol>
          </Modal.Description>

          <Modal.Close asChild>
            <Button
              variant="secondary"
              className="static ml-auto border-[#003986] text-[#003986] hover:border-[#002C66] hover:text-[#002C66]"
            >
              Fechar
            </Button>
          </Modal.Close>
        </div>
      </div>

      <Modal.Close className="top-4 right-4" />
    </Modal.Content>
  );
}
